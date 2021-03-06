import Image from "next/image";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movies";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  const [coverImg, setCoverImg] = useState<string | undefined>("");

  const [movie, setMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setRandomMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`https://image.tmdb.org/t/p/original${
            randomMovie?.backdrop_path || randomMovie?.poster_path
          }`}
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {randomMovie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerBtn bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          className="bannerBtn bg-[gray]/70"
          onClick={() => {
            setMovie(randomMovie);
            setShowModal(true);
          }}
        >
          More Info <InformationCircleIcon className="w-5 h-5 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;