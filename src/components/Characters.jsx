import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import * as Unicons from "@iconscout/react-unicons";
import Character from "./Character";

const Characters = () => {
  const [page, setPage] = React.useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const page = queryKey[1];
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      return res.data;
    } catch (err) {
      throw new Error(err);
    }
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true,
  });

  return (
    <>
      {status === "loading" && (
        <div className="flex justify-center items-center h-screen mb-44">
          <Unicons.UilSync
            size="90"
            className="text-6xl text-gray-100 animate-spin"
          />
        </div>
      )}
      {status === "error" && (
        <div className="flex justify-center items-center h-screen">
          <span className="text-6xl text-gray-800">Error fetching data</span>
        </div>
      )}

      <div className="flex justify-center items-center mb-24">
        <button
          className="bg-blue-900 text-white p-2 rounded-full mr-2"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          <div className="flex justify-center items-center">
            <Unicons.UilAngleLeft size="50" className="text-2xl" />
          </div>
        </button>
        <span className="text-gray-100 text-2xl font-bold">{page}</span>
        <button
          className="disabled:bg-gray-100 bg-blue-900 text-white p-2 rounded-full ml-2"
          onClick={() => setPage((old) => (!data.info.next ? old : old + 1))}
          disabled={!data?.info?.next}
        >
          <div className="flex justify-center items-center">
            <Unicons.UilAngleRight size="50" className="text-2xl" />
          </div>
        </button>
      </div>

      {status === "success" && (
        <div className=" w-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-2 gap-0 ">
          {data.results.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center mb-24">
        <button
          className="bg-blue-900 text-white p-2 rounded-full mr-2"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          <div className="flex justify-center items-center">
            <Unicons.UilAngleLeft size="50" className="text-2xl" />
          </div>
        </button>
        <span className="text-gray-100 text-2xl font-bold">{page}</span>
        <button
          className="disabled:bg-gray-100 bg-blue-900 text-white p-2 rounded-full ml-2"
          onClick={() => setPage((old) => (!data.info.next ? old : old + 1))}
          disabled={!data?.info?.next}
        >
          <div className="flex justify-center items-center">
            <Unicons.UilAngleRight size="50" className="text-2xl" />
          </div>
        </button>
      </div>
    </>
  );
};

export default Characters;
