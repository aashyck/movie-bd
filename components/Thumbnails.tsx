import { PlayIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}

const Thumbnails = ({ movie }: Props) => {
  console.log(movie);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <div className=" relative h-[280px] min-w-[200px] cursor-pointer overflow-hidden transition duration-200 ease-out">
        <Image
          src={`${baseUrl}${movie?.poster_path || movie?.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ easeOut: [0.12, 0.23, 0.5, 1], duration: 0.3 }}
        className="absolute bottom-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-xl p-5  hover:backdrop-blur-sm "
      >
        <div className="mx-auto mb-2 text-center">
          <PlayIcon className="h-16 w-16" />
        </div>
        <h3 className="mb-2 text-xl font-bold">
          {movie?.title || movie?.original_name}
        </h3>
        <progress
          className="progress progress-white w-full"
          value={Math.round(movie?.vote_average * 10)}
          max="100"
        ></progress>
      </motion.div>
    </motion.div>
  );
};

export default Thumbnails;
