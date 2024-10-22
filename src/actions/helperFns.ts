// import { itenaryType } from '@/components/trip-planning/TripContext';
import { itenaryType } from '@/types/types';

export const preProcessAttributes = (waypoints: itenaryType[]) => {
  const wayPointsProcessed = [];
  for (let i = 0; i < waypoints.length; i++) {
    const {
      title: wpTitle,
      description: wpDescription,
      pickedDate: wpDate,
      discreteCost: wpCost,
    } = waypoints[i];
    const dated = wpDate.startDate ? wpDate.startDate.toLocaleString() : '';
    const processedObj = { wpTitle, wpDescription, wpDate: dated, wpCost };
    wayPointsProcessed.push(processedObj);
  }
  return wayPointsProcessed;
};
