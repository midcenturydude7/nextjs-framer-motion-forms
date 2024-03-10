"use client";
import React from "react";

export default function RadioBtns() {
  const [hasAgreed, setHasAgreed] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="w-[25%] rounded-lg border border-slate-300 bg-slate-200 p-12 text-slate-700"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset className="flex gap-0 border border-slate-300 p-3">
          <legend>Do you agree?</legend>
          <div>
            <div>
              <input
                className="mr-2"
                type="radio"
                name="agreed-to-terms"
                id="agree-yes"
                value="yes"
                checked={hasAgreed === "yes"}
                onChange={(e) => {
                  setHasAgreed(e.target.value);
                }}
              />
              <label htmlFor="agree-yes">Yes</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                name="agreed-to-terms"
                id="agree-no"
                value="no"
                checked={hasAgreed === "no"}
                onChange={(e) => {
                  setHasAgreed(e.target.value);
                }}
              />
              <label htmlFor="agree-no">No</label>
            </div>
          </div>
        </fieldset>
      </form>

      <div className="mt-4 flex flex-col items-center justify-center">
        <p className="text-slate-700">
          <strong>Has agreed: </strong>
        </p>
        <p className="text-slate-500">{hasAgreed || "Waiting for response:"}</p>
      </div>
    </div>
  );
}
