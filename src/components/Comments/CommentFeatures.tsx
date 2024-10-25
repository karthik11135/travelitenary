'use client';
import { getAllCommentsForWaypointAction } from '@/actions/commentActions';
import { postCommentAction } from '@/actions/commentActions';
import React, { useEffect, useState } from 'react';
import { EachComment, formMessage } from '@/types/types';
import { useSession } from 'next-auth/react';
import { useFormState, useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';

export const Comments = ({ wayPointId }: { wayPointId: number }) => {
  const [comments, setComments] = useState<EachComment[] | null>(null);
  const [loading, setLoading] = useState(false);
  const fetchComments = async () => {
    const commentsRes = await getAllCommentsForWaypointAction(wayPointId);
    if (commentsRes) setComments(commentsRes);
  };

  useEffect(() => {
    setLoading(true);
    fetchComments();
    setLoading(false);
    return () => {};
  }, [fetchComments]);

  return (
    <div className="h-5/6 overflow-scroll">
      {loading && <p>Loading</p>}
      {comments?.length ? (
        comments.map((comment, ind) => {
          return (
            <div
              key={ind}
              className="border-b px-2 py-1.5 text-supreme border-slate-700"
            >
              <h3 className="font-bold text-black text-sm">{comment.user.name}</h3>
              <p className="text-xs">{comment.commentText}</p>
            </div>
          );
        })
      ) : (
        <p className="w-fit mt-4 mx-auto font-extralight text-black text-2xl">
          No comments
        </p>
      )}
    </div>
  );
};

const initialState: formMessage = {
  message: '',
  ok: null,
};

export const PostComment = ({
  wayPointId,
  onCommentPosted,
}: {
  wayPointId: number;
  onCommentPosted: () => void;
}) => {
  const { data: session } = useSession();

  const [comment, setComment] = useState('');

  const handleFormAction = async (prevState: formMessage, formData: FormData) => {
    if (!session) {
      redirect('/login');
    }
    const result = await postCommentAction(prevState, formData);
    if (result.ok) {
      onCommentPosted();
      setComment('');
    }
    return result;
  };

  const [, formAction] = useFormState(handleFormAction, initialState);

  return (
    <div className="px-2 border-t border-supreme h-1/6">
      <form action={formAction} className="flex  h-full py-2.5 w-full gap-3">
        <div className=" w-full h-full ">
          <input
            value={comment}
            name={'commentText'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setComment(e.target.value)
            }
            placeholder="Post a comment"
            className="rounded-full h-full shadow-lg text-supreme bg-teritiary focus:outline-none px-2 py-0.5 text-lg w-full"
          />
          <input
            name="userId"
            readOnly
            value={session?.user.userId}
            className="hidden"
          />
          <input
            name="wayPointId"
            readOnly
            value={wayPointId}
            className="hidden"
          />
        </div>
        <div className="flex ms-auto items-center ms">
          <PostCommentButton />
        </div>
      </form>
    </div>
  );
};

const PostCommentButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending ? true : false}
      className="col-span-2 disabled:text-slate-600 shadow-lg disabled:cursor-not-allowed h-full bg-teritiary cursor-pointer  font-bold flex items-center rounded-full px-2.5 text-xs"
    >
      Send
    </button>
  );
};
