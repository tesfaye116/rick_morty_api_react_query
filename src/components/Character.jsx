import React from "react";

export default function Character({ character }) {
  return (
    <>
      <div className="p-5 bg-gray-800 w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 ">
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <img
            className="rounded-full w-52 h-52 mx-auto"
            src={character.image}
            alt={character.name}
          />
        </div>

        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1 px-6 py-6 text-white">
          <div className="font-bold text-xl mb-2">{character.name}</div>
          <p className="text-gray-100 text-base mb-2 ">
            {character.species} -{" "}
            {character.status === "Alive" ? (
              <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            ) : character.status === "Dead" ? (
              <span className="inline-block h-2 w-2 rounded-full bg-red-500"></span>
            ) : (
              <span className="inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
            )}{" "}
            {character.status}
          </p>
          <p className="text-gray-100 text-base mb-2">
            <span className="font-bold text-gray-500">Origin:</span>{" "}
            {character.origin.name}
          </p>
          <p className="text-gray-100 text-base mb-2 ">
            <span className="font-bold text-gray-400 ">
              Last known location:
            </span>{" "}
            {character.location.name}
          </p>
        </div>
      </div>
    </>
  );
}
