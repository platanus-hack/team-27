"use client";

import LoadingBar from "@/components/LoadingBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const maxProgress = 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < maxProgress ? prevProgress + 1 : prevProgress
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [maxProgress]);

  return (
    <div>
      <h1 className="text-[#878787]">Hola</h1>
      <div className="p-4">
        <LoadingBar progress={progress} maxProgress={maxProgress} />
      </div>
    </div>
  );
}
