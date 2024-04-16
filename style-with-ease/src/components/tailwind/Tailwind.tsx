import { useState } from "react";
import ShoppingCard from "./ShoppingCard";

export default function Tailwind() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <div className="flex gap-3 justify-center">
        <button className="px-2 py-1 rounded-md border border-red-500">
          Normal
        </button>
        <button
          className="px-2 py-1 rounded-md bg-red-500 text-white"
          onClick={() => setShowCard(!showCard)}
        >
          Show shopping cart
        </button>
      </div>
      {showCard && <ShoppingCard />}
    </>
  );
}
