"use client";

import { useState } from "react";

interface BlueButtonProps {
  label?: string;
}

export default function BlueButton({ label = "Click Me!" }: BlueButtonProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked((prev) => !prev)}
      className="
        px-8 py-3
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
        text-white text-lg font-semibold
        rounded-xl shadow-md hover:shadow-lg
        transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-blue-300
      "
    >
      {clicked ? "Hello back!" : label}
    </button>
  );
}
