"use client";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CommentDisplay(props) {
  const [comments, setComments] = useState([]);

  useEffect(
    function () {
      async function getComments() {
        const response = await fetch(
          `http://localhost:3000/api/comments/${props.artworkId}`
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
      <ScrollArea className="w-2/3 h-20 rounded-md p-4 bg-folio-slate ">
        <div>
          {comments.map((comment) => {
            return <p key={comment.id}>{comment.comment}</p>;
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
