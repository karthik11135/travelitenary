export type formMessage = {
  message: string;
  ok: boolean | null;
};

export interface DateType {
  startDate: null | Date;
  endDate: null | Date;
}

export interface itenaryType {
  title: string;
  description: string;
  pickedDate: DateType;
  discreteCost: number;
}

export interface ItenaryDetailType {
  itenaryArr: itenaryType[];
  setItenaryArr:
    | React.Dispatch<React.SetStateAction<itenaryType[]>>
    | (() => void);
}

export type PostItenaryActionType = {
  id: number | null
  ok: boolean
}

export interface EachWaypointType {
  wpTitle: string;
  wpDescription: string;
  wpDate: string;
  wpCost: number;
}

export interface EachItenaryType {
  title: string;
  id: number;
  userId: number;
  waypoints: {
    wpTitle: string;
    wpDescription: string;
    wpDate: string;
    wpCost: number;
  }[];
}

export interface EachItenaryPreviewType {
  title: string;
  date: string;
  id: number;
  wpTitle: string;
  wpDes: string;
}