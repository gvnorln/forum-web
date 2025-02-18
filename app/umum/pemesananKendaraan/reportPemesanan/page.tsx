'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import { dataReportKendaraan } from '@/constants/dataReportKendaraan';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ReportTable = () => {
	return (
		<>
			<Breadcrumbs />
			<div className="mx-auto mt-5 p-6 bg-white rounded-lg border-2 border-gray-200 text-black">
				<h1 className="text-2xl font-semibold">Report Pemesanan</h1>
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
								<div className="flex items-center justify-between">
									<span className="truncate">No</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
							<th className="py-4 px-2">
								<div className="flex items-center justify-between">
									<span className="truncate">Tanggal</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
							<th className="py-4 px-2">
								<div className="flex items-center justify-between">
									<span className="truncate">Nama Karyawan</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
							<th className="py-4 px-2">
								<div className="flex items-center justify-between">
									<span className="truncate">Bagian</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
							<th className="py-4 px-2">
								<div className="flex items-center justify-between">
									<span className="truncate">Tujuan</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
							<th className="py-4 px-2">
								<div className="flex items-center justify-between">
									<span className="truncate">Waktu</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
							<th className="py-4 px-2">
								<div className="flex items-center justify-between">
									<span className="truncate">Approval Atasan</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
							<th className="py-4 px-2 rounded-r-md">
								<div className="flex items-center justify-between">
									<span className="truncate">Info Kendaraan</span>
									<FaChevronDown className="w-3 h-3 inline ml-2" />
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{dataReportKendaraan.map((report, index) => (
							<tr
								key={index}
								className="bg-white border border-gray-300 text-sm text-left"
							>
								<td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">
									{index + 1}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{report.date}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{report.employeeName}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{report.department}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{report.destination}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{report.time}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{report.supervisor}
								</td>
								<td className="py-5 px-2 rounded-r-md border-y-2 border-r-2 border-lightbluebig">
									{report.vehicleInfo}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ReportTable;
