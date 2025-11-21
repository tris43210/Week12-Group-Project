"use client";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CommentDisplay({ artworkId }) {
  const [comments, setComments] = useState([]);

  // Fetch comments
  async function getComments() {
    const response = await fetch(`/api/comments/${artworkId}`);
    const data = await response.json();
    setComments(data);
  }

  // Delete a comment
  async function deleteComment(commentId) {
    try {
      const response = await fetch(`/api/comments/delete/${commentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Refresh comments after delete
        await getComments();
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // Wrap in async function
    async function fetchData() {
      await getComments();
    }

    fetchData();
    const pollComments = setInterval(fetchData, 10000);

    return () => {
      clearInterval(pollComments);
    };
  }, [artworkId]);

  return (
    <div className="w-full flex flex-col items-center ">
      <ScrollArea className="w-2/3 h-32 rounded-md p-4 bg-folio-slate ">
        <div>
          {comments.map((comment) => {
            return (
              <div
                key={comment.commentid}
                className="border border-white m-1 p-1"
              >
                <p>{comment.comment}</p>
                <p className="italic">
                  {comment.artistname}
                  {comment.created_at &&
                    ` on ${new Date(comment.created_at).toLocaleDateString(
                      "en-GB"
                    )}`}
                </p>
                <button
                  onClick={() => deleteComment(comment.commentid)}
                  className="mx-8 button"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
