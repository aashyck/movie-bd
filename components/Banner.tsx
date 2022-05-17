import { DotsCircleHorizontalIcon, PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-screen w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold uppercase text-shadow md:text-4xl lg:text-7xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
          {movie?.overview}
        </p>
        <div className="flex space-x-4">
          <button className="btn flex items-center justify-center gap-x-2 rounded-md px-4 py-3">
            <PlayIcon className="h-6 w-6" />
            <span>Play</span>
          </button>
          <button className="btn hover:bg--slate-300 flex items-center justify-center gap-x-2 rounded-md bg-slate-100/90 px-4 py-3 text-indigo-900 hover:text-indigo-100">
            <DotsCircleHorizontalIcon className="h-6 w-6" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
