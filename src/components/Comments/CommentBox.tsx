'use client';
import { Comments } from './CommentFeatures';
import { PostComment } from './CommentFeatures';
import { useState } from 'react';
import CommentBoxWrapper from './CommentBoxWrapper';

export const CommentBox = ({ wayPointId }: { wayPointId: number }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (

      <CommentBoxWrapper>
        <Comments wayPointId={wayPointId} key={refreshTrigger} />
        <PostComment
          wayPointId={wayPointId}
          onCommentPosted={() => setRefreshTrigger((prev) => prev + 1)}
        />
      </CommentBoxWrapper>

  );
};
