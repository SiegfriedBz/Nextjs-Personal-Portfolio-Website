"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full mt-8 max-[401px]:mb-16 max-md:mb-20 max-xl:mb-24 xl:mb-32 h-full flex flex-col justify-center items-center">
      <h2 className="max-md:px-2 md:px-16 py-2 max-[401px]:text-2xl max-sm:text-4xl max-lg:text-5xl max-xl:text-6xl text-7xl font-normal text-center tracking-widest">
        <span>Something went wrong</span>{" "}
        <span className="whitespace-nowrap">:(</span>
      </h2>

      <button
        className="min-h-[44px] w-[220px] px-4 mb-6 mt-4 md:mt-8 rounded bg-dexter-green-OG text-black uppercase opacity-100"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <span className="font-bold text-sm tracking-wide">Try again</span>
      </button>
    </div>
  );
}
