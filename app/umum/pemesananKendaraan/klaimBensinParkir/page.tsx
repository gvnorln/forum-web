'use client';

// components/ReportTable.jsx
import Breadcrumbs from '@/components/Breadcrumbs';
import { dataKlaimBensinParkir } from '@/constants/dataKlaimBensinParkir';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

const KlaimBensinParkir = () => {
	return (
		<>
			<Breadcrumbs />
			<div className="mx-auto mt-5 p-6 bg-white rounded-lg border-2 border-gray-200 text-black">
				<h1 className="text-2xl font-semibold">Klaim Bensin & Parkir</h1>
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
					<input
						type="text"
						placeholder="Search"
						className="form-input p-2 border border-gray-300 rounded-md"
					/>
				</div>
				<table className="border border-none border-separate border-spacing-y-7 w-full">
					<thead className="bg-lightbluebig">
						<tr className="text-sm text-left">
							<th className="py-4 px-2 rounded-l-md">
								No <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Nama Karyawan <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Bagian <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Tanggal Pemesanan{' '}
								<FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Total Nominal <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Action <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
						</tr>
					</thead>
					<tbody>
						{dataKlaimBensinParkir.map((approval, index) => (
							<tr
								key={index}
								className="bg-white border border-gray-300 text-sm text-left"
							>
								<td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">
									{index + 1}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.employeeName}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.department}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.date}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.totalamount}
								</td>
								<td className="py-5 px-2 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">
									<IoEye className="bg-lightyellowbig rounded-xl text-white py-2 px-2 w-9 h-9" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default KlaimBensinParkir;
