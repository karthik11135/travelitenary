'use server';
import { EachWaypointType, itenaryType } from '@/types/types';
import prisma from '@/db/client';
import { preProcessAttributes } from './helperFns';
import { PostItenaryActionType } from '@/types/types';

export const postItenary = async (
  userId: number,
  title: string,
  waypoints: itenaryType[]
): Promise<PostItenaryActionType> => {
  const wayPointsProcessed = preProcessAttributes(waypoints);
  console.log(waypoints[0])
  try {
    const itenary = await prisma.itenary.create({
      data: {
        title: title,
        userId: userId,
        waypoints: {
          create: wayPointsProcessed,
        },
      },
    });
    return { id: itenary.id, ok: true };
  } catch (err) {
    console.log(err);
    return { id: null, ok: false };
  }
};

export const getItenaryAction = async (itenaryId: number) => {
  try {
    const itenaryDetails = await prisma.itenary.findUnique({
      where: {
        id: itenaryId,
      },
      select: {
        title: true,
        id: true,
        userId: true,
        waypoints: {
          select: {
            id: true,
            wpTitle: true,
            wpDescription: true,
            wpDate: true,
            wpCost: true,
          },
        },
      },
    });

    if (itenaryDetails) return itenaryDetails;
  } catch (err) {
    console.log(err)
    return null;
  }

  return null;
};

export const getItenariesForUser = async (userId: number) => {
  console.log('reached the action');
  try {
    const itenaries = await prisma.itenary.findMany({
      where: {
        userId: userId,
      },
      select: {
        title: true,
        id: true,
        waypoints: {
          take: 1,
        },
      },
    });

    console.log(itenaries, 'inside');
    if (itenaries) return itenaries;
  } catch (err) {
    console.log(err)
    return null;
  }
  return null;
};

export const editItenaryAction = async (
  itenaryId: number,
  title: string,
  wps: EachWaypointType[]
) => {
  try {
    const transaction = await prisma.$transaction(async (tx) => {
      const updateItenary = await tx.itenary.update({
        where: {
          id: itenaryId,
        },
        data: {
          title: title,
        },
      });

      const newWps = wps.filter((wp) => wp.id === -1);
      const updatedWps = wps.filter((wp) => wp.id !== -1);

      for (let i = 0; i < updatedWps.length; i++) {
        const updatedWpId = updatedWps[i].id;
        await tx.waypoints.update({
          where: {
            id: updatedWpId,
          },
          data: {
            wpTitle: updatedWps[i].wpTitle,
            wpDescription: updatedWps[i].wpDescription,
            wpDate: updatedWps[i].wpDate,
            wpCost: updatedWps[i].wpCost,
          },
        });
      }

      for (let i = 0; i < newWps.length; i++) {
        await tx.waypoints.create({
          data: {
            itenaryId: itenaryId,
            wpCost: newWps[i].wpCost,
            wpTitle: newWps[i].wpTitle,
            wpDescription: newWps[i].wpDescription,
            wpDate: newWps[i].wpDate,
          },
        });
      }

      return updateItenary;
    });
    if (transaction) return { ok: true };
  } catch (err) {
    console.log(err);
    return { ok: false };
  }
};
