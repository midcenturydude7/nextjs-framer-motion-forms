"use client";
import React from "react";

const VALID_LANGUAGES = [
  "Javascript",
  "Typescript",
  "Python",
  "Ruby",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",
  "Dart",
  "R",
  "PHP",
  "Perl",
  "Haskell",
];

export default function Checkboxes() {
  const [language, setLanguage] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="w-[25%] rounded-lg border border-slate-300 bg-slate-200 p-12 text-slate-700"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset className="flex flex-col gap-0 rounded-lg border border-slate-300 p-3">
          <legend>Select language:</legend>

          {VALID_LANGUAGES.map((option) => (
            <div key={option}>
              <input
                className="mr-2"
                type="radio"
                name="current-language"
                id={option}
                value={option}
                checked={option === language}
                onChange={(e) => setLanguage(e.target.value)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>
      </form>
      <div className="mt-4 flex flex-col items-center justify-center">
        <div>
          <p className="text-slate-700">
            <strong>Current language: </strong>
          </p>
        </div>
        <div>
          <p className="text-slate-500">{language || "(empty)"}</p>
        </div>
      </div>
    </div>
  );
}
