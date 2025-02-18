'use client';

// components/ReportTable.jsx
import Breadcrumbs from '@/components/Breadcrumbs';
import { dataApprovalKendaraan } from '@/constants/dataApprovalKendaraan';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ReportTable = () => {
	return (
		<>
			<Breadcrumbs />
			<div className="mx-auto mt-5 p-6 bg-white rounded-lg border-2 border-gray-200 text-black">
				<h1 className="text-2xl font-semibold">Approval Pemesanan</h1>
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
								Tanggal <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Karyawan Request{' '}
								<FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Karyawan Approved{' '}
								<FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Bagian <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Tujuan <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2">
								Waktu <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
							<th className="py-4 px-2 rounded-r-md">
								Approval <FaChevronDown className="w-3 h-3 inline ml-2" />
							</th>
						</tr>
					</thead>
					<tbody>
						{dataApprovalKendaraan.map((approval, index) => (
							<tr
								key={index}
								className="bg-white border border-gray-300 text-sm text-left"
							>
								<td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">
									{index + 1}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.date}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.employeeName}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.supervisor}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.department}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.destination}
								</td>
								<td className="py-5 px-2 border-y-2 border-lightbluebig">
									{approval.time}
								</td>
								<td className="py-5 px-2 rounded-r-md border-y-2 border-r-2 border-lightbluebig">
									<span
										className={
											approval.approved === 'Approve'
												? 'bg-darkgreenbig rounded-xl py-1 px-7 text-white text-xs'
												: approval.approved === 'Pending'
												? 'bg-gray-500 rounded-xl py-1 px-7 text-white text-xs'
												: approval.approved === 'Disapprove'
												? 'bg-red-500 rounded-xl py-1 px-7 text-white text-xs'
												: ''
										}
									>
										{approval.approved}
									</span>
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
