"use client";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CommentDisplay(props, handleDelete) {
  const [comments, setComments] = useState([]);

  useEffect(
    function () {
      async function getComments() {
        const response = await fetch(
          `https://folio-app-smoky.vercel.app/api/comments/${props.artworkId}`
        );
        const data = await response.json();
        setComments(data);
      }

      getComments();

      const pollComments = setInterval(getComments, 10000);

      return function () {
        clearInterval(pollComments);
      };
    },
    [props.artworkId]
  );

  return (
    <div className="w-full flex flex-col items-center ">
      <ScrollArea className="w-2/3 h-25 rounded-md p-4 bg-folio-slate ">
        <div>
          {comments.map((comment) => {
            return (
              <div
                key={comment.commentid}
                className="border border-white m-1 p-1"
              >
                <p>{comment.comment}</p>
                <div className="flex flex-row">
                  <p className="italic">
                    {comment.artistname} on{" "}
                    {new Date(comment.created_at).toLocaleDateString("en-GB")}
                  </p>
                  <form action={handleDelete}>
                    <input
                      type="hidden"
                      value={comment.commentid}
                      name="commentId"
                    />
                    <button type="submit" className="mx-8 button">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
