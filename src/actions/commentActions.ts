'use server';
import prisma from '@/db/client';
import { formMessage } from '@/types/types';

export const getAllCommentsForWaypointAction = async (waypointId: number) => {
  try {
    const comments = await prisma.comments.findMany({
      where: {
        waypointId: waypointId,
      },
      select: {
        id: true,
        commentText: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!comments) return null;

    return comments;
  } catch (err) {
    return null;
  }
};

export const postCommentAction = async (prevState: formMessage, formData: FormData) => {
  try {
    const postComment = await prisma.comments.create({
      data: {
        userId: Number(formData.get('userId')),
        waypointId: Number(formData.get('wayPointId')),
        commentText: formData.get('commentText') as string,
      },
    });

    if(postComment)  return {message: "Posted", ok: true}
    
    return {message: "Some error occurred", ok: false}
  } catch (err) {
    return {message: "Some error occurred", ok: false}
  }
};
