'use client';
import Breadcrumbs from '@/components/Breadcrumbs';
// components/VehicleBookingForm.
import React from 'react';

const FormPesanKendaraan = () => {
	return (
		<>
			<Breadcrumbs />
			<div className="mx-auto mt-5 p-6 bg-white text-black border border-gray-200 rounded-lg shadow-md">
				<h1 className="text-xl font-bold mb-5">Form Pesan Kendaraan</h1>
				<hr className="border-1 border-black mb-8" />
				<form>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Tanggal Awal
							</label>
							<input
								type="text"
								readOnly
								value="23 September 2022"
								className="mt-1 block w-full rounded-md text-gray-400 bg-gray-200 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Tanggal Akhir
							</label>
							<input
								type="text"
								readOnly
								value="23 September 2022"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Merk Kendaraan
							</label>
							<input
								type="text"
								readOnly
								value="Suzuki APV"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Plat Nomor & Transmisi
							</label>
							<input
								type="text"
								readOnly
								value="B 1255 PVB & Manual"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Sesi
							</label>
							<input
								type="text"
								readOnly
								value="Pagi"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Waktu Pemakaian
							</label>
							<input
								type="text"
								readOnly
								value="08:00 - 12:00"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Nama Karyawan
							</label>
							<input
								type="text"
								readOnly
								value="John Doe"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Approval Atasan
							</label>
							<input
								type="text"
								readOnly
								value="Budi Doremi"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Bagian
							</label>
							<input
								type="text"
								readOnly
								value="Bagian Management Information System"
								className="mt-1 block w-full rounded-md bg-gray-200 text-gray-400 border-gray-300 shadow-sm sm:text-sm"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Tujuan & Keperluan <span className="text-red-700">*</span>
							</label>
							<textarea
								rows={5}
								className="mt-1 block w-full rounded-md bg-white-100 text-gray-400 border-blue-300 shadow-sm sm:text-sm"
								placeholder="Keterangan Tambahan"
							></textarea>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Pengemudi <span className="text-red-700">*</span>
							</label>
							<select className="mt-1 block w-full rounded-md bg-white text-gray-400 border-blue-300 shadow-sm sm:text-sm">
								<option>Tanpa Pengemudi</option>
								<option>Dengan Pengemudi</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Keterangan Tambahan <span className="text-red-700">*</span>
							</label>
							<textarea
								rows={5}
								className="mt-1 w-full rounded-md bg-white-100 text-gray-400 border-blue-300 shadow-sm sm:text-sm"
								placeholder="Keterangan Tambahan"
							></textarea>
						</div>
					</div>
					<hr className="border-1 border-black w-full mt-10" />
					<div className="mt-6 flex justify-between gap-4">
						<button
							type="button"
							className="py-2 px-4 border-2 text-orangebig border-orangebig rounded-md shadow-sm hover:bg-gray-600"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="py-2 px-4 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormPesanKendaraan;
