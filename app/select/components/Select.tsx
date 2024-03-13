"use client";
import React from "react";

export default function Select() {
  const [age, setAge] = React.useState("");

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mb-4 flex flex-col items-center rounded-lg border border-slate-500 bg-slate-400 p-8 font-bold text-slate-700"
      >
        <label className="mb-2">How old are you?</label>

        <select
          className="w-64 rounded-md border border-slate-600 bg-slate-100 p-2 text-slate-500 transition-all duration-500 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-500"
          id="age-select"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          {OPTION_VALUES.map((opt) => (
            <option key={opt.optionValue} value={opt.optionValue}>
              {opt.ageRange}
            </option>
          ))}
        </select>
      </form>

      <div className="flex flex-col items-center text-slate-800">
        <p>
          <strong>Selected Age:</strong>
        </p>
        <p className="text-slate-600">{age || "(empty)"}</p>
      </div>
    </div>
  );
}

const OPTION_VALUES = [
  {
    optionValue: "0-18",
    ageRange: "18 and under",
  },
  {
    optionValue: "19-39",
    ageRange: "19 to 39",
  },
  {
    optionValue: "40-64",
    ageRange: "40 to 64",
  },
  {
    optionValue: "65-",
    ageRange: "65 and over",
  },
];
