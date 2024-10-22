'use server';
import { itenaryType } from '@/types/types';
import prisma from '@/db/client';
import { preProcessAttributes } from './helperFns';
import { PostItenaryActionType } from '@/types/types';

export const postItenary = async (
  userId: number,
  title: string,
  waypoints: itenaryType[]
): Promise<PostItenaryActionType> => {
  const wayPointsProcessed = preProcessAttributes(waypoints);

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
    return null;
  }
  return null;
};
