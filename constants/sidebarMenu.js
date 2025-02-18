import path from 'path';

const SidebarData = [
	{
		id: 1,
		label: 'Home',
		icon: '/images/dasboardImages/homeIcon.svg',
		path: '/',
	},
	{
		id: 2,
		label: 'Username',
		icon: '/images/avatars/avatar.jpg',
		path: '/username',
	},
	{
		id: 3,
		label: 'Menu',
		icon: '/images/dasboardImages/menuIcon.svg',
		path: '/menu',
		submenu: [
			{
				id: 3,
				label: 'Profil',
				icon: '/images/dasboardImages/profil.png',
				path: '/menu/profile',
			},
			{
				id: 4,
				label: 'Direktorat',
				icon: '/images/dasboardImages/direktorat.png',
				path: '/menu/direktorat',
			},
			{
				id: 5,
				label: 'Dokumen',
				icon: '/images/dasboardImages/dokumen.png',
				path: '/menu/dokumen',
			},
			{
				id: 6,
				label: 'Galeri',
				icon: '/images/dasboardImages/galeri.png',
				path: '/menu/galeri',
			},
			{
				id: 7,
				label: 'Event',
				icon: '/images/dasboardImages/event.png',
				path: '/menu/event',
			},
			{
				id: 8,
				label: 'Peraturan Perusahaan',
				icon: '/images/dasboardImages/peraturanperusahaan.png',
				path: '/menu/peraturanPerusahaan',
			},
			{
				id: 9,
				label: 'ESS',
				icon: '/images/dasboardImages/ess.png',
				path: '/menu/ess',
			},
		],
	},
	{
		id: 4,
		label: 'SDM',
		icon: '/images/dasboardImages/sdmIcon.svg',
		path: '/sdm',
		submenu: [
			{
				id: 10,
				label: 'Penilaian',
				icon: '/images/dasboardImages/penilaian.png',
				path: '/sdm/penilaian',
				submenu: [
					{
						id: 1,
						label: 'Penilaian Atasan',
						path: '/sdm/penilaian/penilaianAtasan',
					},
					{
						id: 2,
						label: 'Penilaian Karyawan',
						path: '/sdm/penilaian/penilaianKaryawan',
					},
				],
			},
			{
				id: 11,
				label: 'Permintaan Karyawan',
				icon: '/images/dasboardImages/permintaankaryawan.png',
				path: '/sdm/permintaanKaryawan',
			},
		],
	},
	{
		id: 5,
		label: 'Umum',
		icon: '/images/dasboardImages/umumIcon.svg',
		path: '/umum',
		submenu: [
			{
				id: 1,
				label: 'Pemesanan Ruang',
				icon: '/images/iconparkeveryuser.svg',
				path: '/umum/pemesanan-ruang',
				submenu: [
					{
						id: 1,
						label: 'Tutorial Pemesanan Ruang',
						path: '/umum/pemesanan-ruang/pesan',
					},
					{
						id: 2,
						label: 'Reservasi Ruang Rapat',
						path: '/umum/pemesananRuang',
					},
					// {
					// 	id: 3,
					// 	label: 'Report Pemesanan',
					// 	path: '/umum/pemesanan-ruang/report',
					// },
					// {
					// 	id: 4,
					// 	label: 'Klaim Kursi & Meja',
					// 	path: '/umum/pemesanan-ruang/klaim',
					// },
				],
			},
			{
				id: 2,
				label: 'Pemesanan Kendaraan',
				icon: '/images/iconparkcar.svg',
				path: '/umum/pemesananKendaraan',
				submenu: [
					{
						id: 5,
						label: 'Pesan Kendaraan',
						path: '/umum/pemesananKendaraan/pesanKendaraan',
					},
					{
						id: 6,
						label: 'Approval Pemesanan',
						path: '/umum/pemesananKendaraan/approvalPemesanan',
					},
					{
						id: 7,
						label: 'Report Pemesanan',
						path: '/umum/pemesananKendaraan/reportPemesanan',
					},
					{
						id: 8,
						label: 'Klaim Bensin & Parkir',
						path: '/umum/pemesananKendaraan/klaimBensinParkir',
					},
				],
			},
		],
	},
	{
		id: 6,
		label: 'Hukum',
		icon: '/images/dasboardImages/hukumIcon.svg',
		path: '/hukum',
		submenu: [
			{
				id: 12,
				label: 'SPKS',
				icon: '/images/dasboardImages/spks.png',
				path: '/hukum/spks',
			},
			{
				id: 13,
				label: 'NK',
				icon: '/images/dasboardImages/nk.png',
				path: '/hukum/nk',
			},
		],
	},
	{
		id: 7,
		label: 'SIMO',
		icon: '/images/dasboardImages/simoIcon.svg',
		path: '/simo',
		submenu: [
			{
				id: 14,
				label: 'Pref Management',
				icon: '/images/dasboardImages/prefmanagement.png',
				path: '/simo/prefManagement',
			},
		],
	},
	{
		id: 8,
		label: 'Keuangan',
		icon: '/images/dasboardImages/keuanganIcon.svg',
		path: '/keuangan',
		submenu: [
			{
				id: 15,
				label: 'Operasional',
				icon: '/images/dasboardImages/operasional.png',
				path: '/keuangan/operasional',
			},
			{
				id: 16,
				label: 'Pengajuan Pembayaran',
				icon: '/images/dasboardImages/pengajuanpembayaran.png',
				path: '/keuangan/pengajuanPembayaran',
				submenu: [
					{
						id: 9,
                        label: 'Pengajuan',
                        path: '/keuangan/pengajuanPembayaran',
					},
					{
						id: 10,
                        label: 'Status Pengajuan',
                        path: '/keuangan/pengajuanPembayaran/dataPengajuanPembayaran',
					},
					{
						id: 11,
                        label: 'Approval Pengajuan',
                        path: '/keuangan/pengajuanPembayaran/dataPengajuanPembayaran',
					},
					{
						id: 12,
                        label: 'LPUM',
                        path: '/keuangan/pengajuanPembayaran/statusPengajuan',
					},
					{
						id: 13,
                        label: 'Report Anggaran',
                        path: '/keuangan/pengajuanPembayaran/reportAnggaran',
					},
				]
			},
		],
	},
	{
		id: 9,
		label: 'Akunting',
		icon: '/images/dasboardImages/akuntingIcon.svg',
		path: '/akunting',
		submenu: [
			{
				id: 17,
				label: 'Voucher',
				icon: '/images/dasboardImages/voucher.png',
				path: '/akunting/voucher',
			},
		],
	},
];

export default SidebarData;
