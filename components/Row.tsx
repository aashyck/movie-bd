import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnails from "./Thumbnails";

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0.5 md:space-y-2">
      <div className="w--full flex flex-row justify-between">
        <h2 className="w-56 cursor-pointer font-semibold transition duration-200 md:text-2xl">
          {title}
        </h2>

        <div className="flex flex-row">
          <ChevronLeftIcon
            className=" h-6 w-6 cursor-pointer"
            onClick={() => handleClick("left")}
          />
          <ChevronRightIcon
            className=" h-6 w-6 cursor-pointer"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
      <div
        ref={rowRef}
        className="flex cursor-grab items-center space-x-0.5 overflow-x-scroll  scrollbar-hide md:space-x-4 md:p-2"
      >
        {movies.map((movie) => (
          <>
            <Thumbnails key={movie.id} movie={movie} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Row;
