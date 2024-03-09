"use client";
import React from "react";

export default function RadioBtns() {
  const [hasAgreed, setHasAgreed] = React.useState(false);

  return (
    <div className="flex items-center justify-center">
      <form>
        <fieldset>
          <legend>Do you agree?</legend>
        </fieldset>
      </form>
    </div>
  );
}
