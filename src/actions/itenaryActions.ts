import { itenaryType } from '@/components/trip-planning/TripContext';
import prisma from '@/db/client';

const postItenary = async (
  userId: number,
  title: string,
  waypoints: itenaryType[]
) => {

  const wayPointsProcessed = [];
  
  for (let i = 0; i < waypoints.length; i++) {
    const {
      title: wpTitle,
      description: wpDescription,
      pickedDate: wpDate,
      discreteCost: wpCost,
    } = waypoints[i];
    const processedObj = { wpTitle, wpDescription, wpDate, wpCost };
    wayPointsProcessed.push(processedObj);
  }
  //   try {
  //     await prisma.itenary.create({
  //       data: {
  //         userId,
  //         title,
  //         waypoints: {
  //           create: wayPointsProcessed,
  //         },
  //       },
  //     });
  //   } catch (err) {
  //     return null;
  //   }
};

const getItenaryAction = async (itenaryId: number) => {
  try {
    const itenaryDetails = await prisma.itenary.findUnique({
      where: {
        id: itenaryId,
      },
      select: {
        title: true,
        userId: true,
        user: {
          select: {
            name: true,
          },
        },
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
    console.log(itenaryDetails);
    if (itenaryDetails) return itenaryDetails;
  } catch (err) {
    return null;
  }

  return null;
};

const getItenariesForUser = async (userId: number) => {
  try {
    const itenaries = await prisma.itenary.findMany({
      where: {
        userId: userId,
      },
      select: {
        title: true,
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

    console.log(itenaries);
    if (itenaries) return itenaries;
  } catch (err) {
    return null;
  }

  return null;
};
