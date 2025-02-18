// pages/pesanKendaraan.js
'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import VehicleCard from '@/components/umum/pesanKendaraan/KendaraanCard';
import vehicles from '@/constants/dataKendaraan';
import React from 'react';

const PesanKendaraan = () => {
	return (
		<>
			<Breadcrumbs />
			<div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
				<h1 className="text-2xl font-semibold">Pemesanan Kendaraan</h1>

				<hr className="w-full border-gray-300 mt-4 mb-8" />

				<form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{/* Date selection fields */}
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Tanggal Awal
						</label>
						<select className="mt-1 block w-full rounded-md bg-white text-black border-gray-300 shadow-sm sm:text-sm">
							<option>08:00</option>
							<option>09:00</option>
							<option>10:00</option>
							<option>11:00</option>
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Tanggal Akhir
						</label>
						<select className="mt-1 block w-full rounded-md bg-white text-black border-gray-300 shadow-sm sm:text-sm">
							<option>09:00</option>
							<option>10:00</option>
							<option>11:00</option>
							<option>12:00</option>
						</select>
					</div>
					{/* HR line */}
					<div className="sm:col-span-2">
						<hr className="w-full border-gray-300 mt-3" />
					</div>
					{/* Search button */}
					<div className="sm:col-span-2 flex justify-end">
						<button
							type="submit"
							className="py-2 px-4 bg-orangebig text-white rounded-md shadow-sm hover:bg-orange-600"
						>
							Search
						</button>
					</div>
				</form>
			</div>

			{vehicles.map((vehicle, index) => (
				<VehicleCard key={index} vehicle={vehicle} />
			))}
		</>
	);
};

export default PesanKendaraan;
