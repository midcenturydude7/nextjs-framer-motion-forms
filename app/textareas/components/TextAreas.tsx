"use client";
import React from "react";

export default function TextAreas() {
  const [comment, setComment] = React.useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <form
        className="flex flex-col items-center justify-center gap-2 rounded-lg border border-slate-500 bg-slate-400 p-12 text-slate-700"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="comment-field">Say something cool:</label>
        <textarea
          id="comment-field"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="h-[200px] max-h-[200px] min-h-[200px] w-[400px] min-w-[300px] max-w-[400px] shrink-0 grow-0 basis-0 resize-none overflow-y-auto overflow-x-hidden rounded-lg border border-slate-600 bg-slate-100 p-3 text-slate-500 transition-all duration-500 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-500"
        />
      </form>

      <div className="flex flex-col items-center text-slate-800">
        <p>
          <strong>Current value:</strong>
        </p>
        <p>{comment || "(empty)"}</p>
      </div>
    </div>
  );
}
