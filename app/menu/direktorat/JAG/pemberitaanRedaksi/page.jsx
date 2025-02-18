'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import React, { Fragment } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const PemberitaanRedaksi = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="mx-auto mt-5 p-6 bg-white rounded-lg border-2 border-gray-200 text-black">
        <h1 className="text-2xl font-semibold">Direktorat Pemberitaan/Redaksi</h1>
        <hr className="w-full border-gray-300 my-7" />
        <div className="flex justify-between">
          <div className="flex items-center">
            <select className="form-select w-13 p-2 border border-gray-300 rounded-md">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <p className="text-xs text-gray-400 ml-2">records per page</p>
          </div>
          <input type="text" placeholder="Search" className="form-input p-2 border border-gray-300 rounded-md" />
        </div>
        <table className="border border-none border-separate border-spacing-y-7 w-full" style={{}}>
          <thead className="bg-lightbluebig">
            <tr className="text-sm text-left">
              <th className="py-4 px-2 rounded-l-md w-72">
                Nama <FaChevronDown className="w-3 h-3 inline ml-2" />
              </th>
              <th className="py-4 ">
                Jabatan <FaChevronDown className="w-3 h-3 inline ml-2" />
              </th>
              <th className="py-4 px-2 ">
                Bidang <FaChevronDown className="w-3 h-3 inline ml-2" />
              </th>
              <th className="py-4 px-2">
                Bagian <FaChevronDown className="w-3 h-3 inline ml-2" />
              </th>
              <th className="py-4 px-2">
                Seksi <FaChevronDown className="w-3 h-3 inline ml-2" />
              </th>
              <th className="py-4 px-2">
                Subseksi <FaChevronDown className="w-3 h-3 inline ml-2" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Direksi</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Pemimpin Redaksi</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Wakil Pemimpin Redaksi</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Redaktur Pelaksana</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Redaktur Pelaksana</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Redaktur Pelaksana</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Redaktur Pelaksana</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
            <tr className="bg-white border border-gray-300 text-sm text-left">
              <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
              <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Redaktur Pelaksana</td>
              <td className="py-5 px-2 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 border-y-2 border-lightbluebig">N/A</td>
              <td className="py-5 px-4 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PemberitaanRedaksi;
