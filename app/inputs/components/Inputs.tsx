"use client";
import React from "react";

export default function Inputs() {
  const [name, setName] = React.useState("");

  return (
    <div>
      <form
        className="mb-4 rounded-lg border border-slate-500 bg-slate-400 p-8 font-bold text-slate-700"
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLInputElement;
          setName(target.value);
        }}
      >
        <label htmlFor="name-field">
          <span className="pr-2">Name:</span>
          <input
            className="w-64 rounded-md border border-slate-600 p-2"
            id="name-field"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </form>

      <div className="flex flex-col items-center text-slate-800">
        <p>
          <strong>Current value:</strong>
        </p>
        <p>{name || "(empty)"}</p>
      </div>
    </div>
  );
}
