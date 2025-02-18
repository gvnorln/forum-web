// components/VehicleCard.js
import Link from "next/link";
import React from "react";

//
const VehicleCard = ({ vehicle }) => {
  return (
    <div className="mx-auto mt-8 p-6 bg-white border-2 text-black border-gray-200 rounded-lg">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">{vehicle.name}</h2>
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-48 h-40 rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-2">
          {vehicle.plate} &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{" "}
          {vehicle.transmission}
        </p>
        <div className="flex items-center space-x-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-greenbig"></span>
          <span className="text-sm">Available</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="inline-block w-3 h-3 rounded-sm bg-lightredbig"></span>
          <span className="text-sm">Not Available</span>
        </div>
      </div>
      <hr className="border-1 border-gray-300 my-8" />
      <div className="flex items-center ml-7">
        <div className="pr-12">
          <p className="text-sm font-semibold my-3">Tanggal</p>
          <p className="text-sm text-gray-600">{vehicle.date}</p>
        </div>
        <div className="border-l h-24 border-gray-300 pl-10">
          <p className="text-sm font-semibold">Waktu</p>
          <Link href="/umum/pemesananKendaraan/pesanKendaraan/createPesanKendaraan">
            <div className="flex space-x-5 mt-4">
              <span
                className={`py-1 px-3 text-sm rounded-md text-black ${
                  vehicle.morning
                    ? "border-2 border-greenbig"
                    : "bg-lightredbig"
                }`}
              >
                Pagi 08:00 - 12:00
              </span>
              <span
                className={`py-1 px-3 text-sm rounded-md text-black ${
                  vehicle.afternoon
                    ? "border-2 border-greenbig"
                    : "bg-lightredbig"
                }`}
              >
                Siang 13:00 - 17:00
              </span>
              <span
                className={`py-1 px-3 text-sm rounded-md text-black ${
                  vehicle.fullday
                    ? "border-2 border-greenbig"
                    : "bg-lightredbig"
                }`}
              >
                Full Day 08:00 - 17:00
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
