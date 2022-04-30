import Image from "next/image";
import React from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}

const Thumbnails = ({ movie }: Props) => {
  return (
    <div className=" relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 ">
      <Image
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Thumbnails;
