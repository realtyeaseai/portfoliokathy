import { cn } from "@/lib/utils";
import React from "react";
// import { InputTab, TextWithTooltip } from "../landingPage/HeroSection";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex w-full items-center justify-center bg-white dark:bg-black -z-10">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 max-w-[1920px] px-4 sm:px-6 lg:px-12 pt-24 md:pt-32 flex flex-col items-center text-center cursor-crosshair">
      </div> */}
    </div>
  );
}
