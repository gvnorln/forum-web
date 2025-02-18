'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import React, { Fragment, useState } from 'react';

const Iklan = () => {
  const [activeTab, setActiveTab] = useState('SOP PT. JAG');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Perjanjian Kerja Bersama':
        return (
          <div>
            <h3 className="py-5" style={{ fontFamily: 'inter', fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
              Perjanjian Kerja Bersama
            </h3>
          </div>
        );
      case 'IT Policy':
        return (
          <div className="p-3" style={{ marginLeft: '-15px' }}>
            <h3 className="mb-10" style={{ fontFamily: 'inter', fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
              IT Policy
            </h3>

            <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="whitespace-nowrap" style={{ fontWeight: '700', fontSize: '16px', lineHeight: '24px', letterSpacing: '-1.9%', color: '#065A98' }}>
                  Pasal 1 : Ketentuan Umum
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
              <p className="pt-3" style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', letterSpacing: '-1.9%', color: 'black', textAlign: 'justify' }}>
                <ol style={{ paddingLeft: '20px' }}>
                  <li className="list-decimal">
                    Setiap karywan yang diterima perusahaan baik karyawan tetap, karyawan perjanjian kerja waktu tertentu (PKWT), outsourcing, paruh waktu, kontraktor, konsultan, dan karyawan lainnya diberikan fasilitas sarana kerja
                    (peralatan perusahaan) untuk menyelesaikan tugas yang dibebankan secara lebih efektif sehingga menunjang produktivitas perusahaan.
                  </li>
                  <li className="list-decimal">
                    Karyawan harus bertanggung jawab untuk menjaga dan memelihara sarana kerja tersebut di atas, dan bertanggung jawab sepenuhnya atas segala kehilangan atau kerusakan berdasarkan ketentuan dalam Surat Keputusan ini.
                  </li>
                  <li className="list-decimal">Peralatan perusahaan harus digunakan oleh karyawan yang berhak saja dan tidak boleh digunakan bersama dengan orang lain, terkecuali karena tuntutan pekerjaan.</li>
                  <li className="list-decimal">
                    Jika dalam suatu hal peralatan perusahaan yang diserahkan kepada karyawan tidak digunakan lagi karena sesuatu dan lain hal, maka perusahaan berhak untuk menarik kembali peralatan tersebut secepatnya.
                  </li>
                  <li className="list-decimal">Menindak lanjuti ayat-ayat di atas, maka perusahaan mengatur kebijakan pemakaian perangkat terkait dengan teknologi.</li>
                </ol>
              </p>
            </div>

            <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="whitespace-nowrap" style={{ fontWeight: '700', fontSize: '16px', lineHeight: '24px', letterSpacing: '-1.9%', color: '#065A98' }}>
                  Pasal 2 : Tujuan
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
              <p className="pt-3" style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', letterSpacing: '-1.9%', color: 'black', textAlign: 'justify' }}>
                Tujuan dari kebijakan ini adalah untuk mengatur penggunaan perangkat Teknologi Informasi termasuk fasilitas dan layanan yang diatur oleh Divisi Teknologi Informasi PT JAG.
              </p>
            </div>

            <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="whitespace-nowrap" style={{ fontWeight: '700', fontSize: '16px', lineHeight: '24px', letterSpacing: '-1.9%', color: '#065A98' }}>
                  Pasal 3 : Lingkup
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
              <p className="pt-3" style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', letterSpacing: '-1.9%', color: 'black', textAlign: 'justify' }}>
                Kebijakan yang diatur dalam Surat Keputusan ini adalah sebagai berikut :
                <br />
                <strong>Peralatan milik perusahaan:</strong>
                <ul className="list-disc" style={{ paddingLeft: '20px', margin: '10px 0' }}>
                  <li>Komputer PC ITs, laptops dan peralatan pendukung lain atau semacamnya</li>
                  <li>Printers, document centers dan peralatan multimedia</li>
                  <li>LCD projectors atau peralatan presentasi lainnya</li>
                  <li>PDA dan peralatannya termasuk blackberry, Pocket PC, Tablet PC, Smartphone dan Palm Pilot</li>
                  <li>Voice dan peralatan data telecommunication</li>
                  <li>Software licenses dan aplikasi</li>
                </ul>
                <strong>Layanan:</strong>
                <ul className="list-disc" style={{ paddingLeft: '20px', margin: '10px 0' }}>
                  <li>Electronic Mail Internal : email resmi dari perusahaan (......@bisnis.com)</li>
                  <li>Akses Sistem Komputer/Aplikasi</li>
                  <li>Akses internal melalui jaringan perusahaan</li>
                  <li>Mengakses jaringan perusahaan secara remote dengan izin khusus Direksi yang membidangi</li>
                  <li>Bantuan teknik, perawatan, dan solusi terkait Teknologi Informasi</li>
                </ul>
              </p>
            </div>

            <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="whitespace-nowrap" style={{ fontWeight: '700', fontSize: '16px', lineHeight: '24px', letterSpacing: '-1.9%', color: '#065A98' }}>
                  Pasal 4 : Tanggung Jawab
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
              <p className="pt-3" style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', letterSpacing: '-1.9%', color: 'black', textAlign: 'justify' }}>
                <ol style={{ paddingLeft: '20px' }}>
                  <li className="list-decimal">
                    Setiap permintaan terkait hardware & software, harus diajukan melalui Bagian Umum. Divisi Teknologi Informasi memberikan rekomendasi atas semua permintaan untuk hardware & software standar/tambahan, yang akan menentukan
                    standar hardware & software terbaik sesuai kebutuhan perusahaan.
                  </li>
                  <li className="list-decimal">
                    Semua bentuk komunikasi dengan vendor yang berhubungan dengan Teknologi Informasi Hardware (PC, SERVER, UPS, PABX, dll), Software dan Services harus disampaikan melalui Divisi Teknologi Informasi.
                  </li>
                  <li className="list-decimal">Para pengguna bertanggung jawab untuk menjaga dan menggunakan peralatan dan fasilitasnya berdasarkan kebijakan yang tertuang dalam Surat Keputusan ini.</li>
                  <li className="list-decimal">Merupakan tanggung jawab dari Divisi Teknologi Informasi untuk melakukan sosialisasi dan koordinasi agar kebijakan ini berjalan dengan konsisten.</li>
                </ol>
              </p>
            </div>

            <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="whitespace-nowrap" style={{ fontWeight: '700', fontSize: '16px', lineHeight: '24px', letterSpacing: '-1.9%', color: '#065A98' }}>
                  Pasal 5 : Sarana Kerja
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
              <p className="pt-3" style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', letterSpacing: '-1.9%', color: 'black', textAlign: 'justify' }}>
                <ol style={{ paddingLeft: '20px' }}>
                  <li className="list-decimal">
                    Peralatan dan fasilitas yang disediakan untuk pengguna, bertujuan untuk membantu pekerjaan karyawan agar menjadi lebih efektif dan meningkatkan produktivitas perusahaan. Peralatan dan fasilitas ini tidak disediakan
                    sebagai keuntungan pribadi dan tidak berdasarkan hirarki posisi dalam sebuah organisasi.
                  </li>
                  <li className="list-decimal">
                    Peralatan perusahaan harus digunakan oleh pengguna yang berhak saja dan tidak boleh digunakan bersama dengan orang lain, terkecuali karena tuntutan pekerjaan. Jika dalam suatu hal peralatan ini tidak digunakan oleh
                    pengguna, perusahaan memiliki hak untuk menarik kembali peralatan tersebut secepatnya.
                  </li>
                  <li className="list-decimal">
                    Pengguna harus bertanggungjawab untuk menjaga peralatan perusahaan yang mereka gunakan. Pengguna bertanggungjawab sepenuhnya atas segala kehilangan atau kerusakan berdasarkan peraturan yang tertulis dalam Surat Keputusan
                    ini.
                  </li>
                </ol>
              </p>
            </div>
          </div>
        );
      case 'SOP PT. JAG':
        return (
          <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
            <div className="justify-start" style={{ width: '100px' }}>
              <h3 className="text-2xl font-bold" style={{ marginLeft: '10px' }}>
                Iklan
              </h3>
            </div>
            <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px', marginBottom: '30px' }} />

            <div className="justify-between bg-white border-2" style={{ width: '980px', height: '166px', borderRadius: '10px', paddingTop: '50px' }}>
              <div className="flex p-2" style={{ width: '800px', height: '138px', gap: '50px' }}>
                <img src="/images/modulMenu/profil/dokumen/file-pdf.png" style={{ width: '100px', height: '100px', marginTop: '-30px', marginLeft: '10px' }} alt="" />
                <p className="whitespce-nowrap" style={{ fontSize: '16px', lineHeight: '32px', fontWeight: '600', fontFamily: 'Inter', letterSpacing: '-1.9%', marginTop: '-40px' }}>
                  00. Cover & Daftar Isi - Promosi
                </p>
                <div className="flex" style={{ marginLeft: '-290px', marginTop: '0px' }}>
                  <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                </div>
                <div className="flex" style={{ marginLeft: '-197px', marginTop: '30px' }}>
                  <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Tim Internal Audit</p>
                </div>
                <div className="flex" style={{ marginLeft: '-185px', marginTop: '60px' }}>
                  <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '18px', marginTop: '-5px' }}>Internal Audit</p>
                </div>
              </div>
              <div className="flex" style={{ marginLeft: '820px', marginTop: '-130px' }}>
                <button className="rounded-md bg-orangebig text-white shadow-sm hover:bg-orange-600 flex items-center justify-center" style={{ padding: '7px 18px', borderRadius: '10px', width: '137px', height: '38px' }}>
                  <img src="/images/modulMenu/profil/dokumen/download-icon.png" alt="Download" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  Download
                </button>
              </div>
            </div>

            <div className="justify-between bg-white border-2 mt-5" style={{ width: '980px', height: '166px', borderRadius: '10px', paddingTop: '50px' }}>
              <div className="flex p-2" style={{ width: '800px', height: '138px', gap: '50px' }}>
                <img src="/images/modulMenu/profil/dokumen/file-pdf.png" style={{ width: '100px', height: '100px', marginTop: '-30px', marginLeft: '10px' }} alt="" />
                <p className="whitespce-nowrap" style={{ fontSize: '16px', lineHeight: '32px', fontWeight: '600', fontFamily: 'Inter', letterSpacing: '-1.9%', marginTop: '-40px' }}>
                  01. Kerjasama Promosi (Media dan Non Media) 0918
                </p>
                <div className="flex" style={{ marginLeft: '-450px', marginTop: '0px' }}>
                  <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                </div>
                <div className="flex" style={{ marginLeft: '-196px', marginTop: '30px' }}>
                  <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Tim Internal Audit</p>
                </div>
                <div className="flex" style={{ marginLeft: '-185px', marginTop: '60px' }}>
                  <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '17px', marginTop: '-5px' }}>Internal Audit</p>
                </div>
              </div>
              <div className="flex" style={{ marginLeft: '820px', marginTop: '-130px' }}>
                <button className="rounded-md bg-orangebig text-white shadow-sm hover:bg-orange-600 flex items-center justify-center" style={{ padding: '7px 18px', borderRadius: '10px', width: '137px', height: '38px' }}>
                  <img src="/images/modulMenu/profil/dokumen/download-icon.png" alt="Download" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  Download
                </button>
              </div>
            </div>

            <div className="justify-between bg-white border-2 mt-5" style={{ width: '980px', height: '166px', borderRadius: '10px', paddingTop: '50px' }}>
              <div className="flex p-2" style={{ width: '800px', height: '138px', gap: '50px' }}>
                <img src="/images/modulMenu/profil/dokumen/file-pdf.png" style={{ width: '100px', height: '100px', marginTop: '-30px', marginLeft: '10px' }} alt="" />
                <p className="whitespce-nowrap" style={{ fontSize: '16px', lineHeight: '32px', fontWeight: '600', fontFamily: 'Inter', letterSpacing: '-1.9%', marginTop: '-40px' }}>
                  02. Kerjasama Event (Eksternal) 0918
                </p>
                <div className="flex" style={{ marginLeft: '-340px', marginTop: '0px' }}>
                  <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                </div>
                <div className="flex" style={{ marginLeft: '-196px', marginTop: '30px' }}>
                  <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Tim Internal Audit</p>
                </div>
                <div className="flex" style={{ marginLeft: '-185px', marginTop: '60px' }}>
                  <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '17px', marginTop: '-5px' }}>Internal Audit</p>
                </div>
              </div>
              <div className="flex" style={{ marginLeft: '820px', marginTop: '-130px' }}>
                <button className="rounded-md bg-orangebig text-white shadow-sm hover:bg-orange-600 flex items-center justify-center" style={{ padding: '7px 18px', borderRadius: '10px', width: '137px', height: '38px' }}>
                  <img src="/images/modulMenu/profil/dokumen/download-icon.png" alt="Download" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  Download
                </button>
              </div>
            </div>

            <div className="justify-between bg-white border-2 mt-5" style={{ width: '980px', height: '166px', borderRadius: '10px', paddingTop: '50px' }}>
              <div className="flex p-2" style={{ width: '800px', height: '138px', gap: '50px' }}>
                <img src="/images/modulMenu/profil/dokumen/file-pdf.png" style={{ width: '100px', height: '100px', marginTop: '-30px', marginLeft: '10px' }} alt="" />
                <p className="whitespce-nowrap" style={{ fontSize: '16px', lineHeight: '32px', fontWeight: '600', fontFamily: 'Inter', letterSpacing: '-1.9%', marginTop: '-40px' }}>
                  03. Permintaan barang promosi 0918
                </p>
                <div className="flex" style={{ marginLeft: '-335px', marginTop: '0px' }}>
                  <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                </div>
                <div className="flex" style={{ marginLeft: '-196px', marginTop: '30px' }}>
                  <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Tim Internal Audit</p>
                </div>
                <div className="flex" style={{ marginLeft: '-185px', marginTop: '60px' }}>
                  <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '17px', marginTop: '-5px' }}>Internal Audit</p>
                </div>
              </div>
              <div className="flex" style={{ marginLeft: '820px', marginTop: '-130px' }}>
                <button className="rounded-md bg-orangebig text-white shadow-sm hover:bg-orange-600 flex items-center justify-center" style={{ padding: '7px 18px', borderRadius: '10px', width: '137px', height: '38px' }}>
                  <img src="/images/modulMenu/profil/dokumen/download-icon.png" alt="Download" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  Download
                </button>
              </div>
            </div>

            <div className="justify-between bg-white border-2 mt-5" style={{ width: '980px', height: '166px', borderRadius: '10px', paddingTop: '50px' }}>
              <div className="flex p-2" style={{ width: '800px', height: '138px', gap: '50px' }}>
                <img src="/images/modulMenu/profil/dokumen/file-pdf.png" style={{ width: '100px', height: '100px', marginTop: '-30px', marginLeft: '10px' }} alt="" />
                <p className="whitespce-nowrap" style={{ fontSize: '16px', lineHeight: '32px', fontWeight: '600', fontFamily: 'Inter', letterSpacing: '-1.9%', marginTop: '-40px' }}>
                  Dokumen Promosi
                </p>
                <div className="flex" style={{ marginLeft: '-190px', marginTop: '0px' }}>
                  <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                </div>
                <div className="flex" style={{ marginLeft: '-196px', marginTop: '30px' }}>
                  <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Tim Internal Audit</p>
                </div>
                <div className="flex" style={{ marginLeft: '-185px', marginTop: '60px' }}>
                  <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                  <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '17px', marginTop: '-5px' }}>Internal Audit</p>
                </div>
              </div>
              <div className="flex" style={{ marginLeft: '820px', marginTop: '-130px' }}>
                <button className="rounded-md bg-orangebig text-white shadow-sm hover:bg-orange-600 flex items-center justify-center" style={{ padding: '7px 18px', borderRadius: '10px', width: '137px', height: '38px' }}>
                  <img src="/images/modulMenu/profil/dokumen/download-icon.png" alt="Download" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  Download
                </button>
              </div>
            </div>
          </div>
        );
      case 'SOP PT. BIGK':
        return <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg"></div>;

      case 'SOP PT. NIS':
        return <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg"></div>;
      case 'SOP PT. BIK':
        return <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg"></div>;
    }
  };

  return (
    <>
      <>
        <Breadcrumbs />
        <div className="flex">
          <div className="w-full ml-4">
            <div className="mb-4 w-full border-b border-gray-200 dark:border-gray-700">
              <ul className="flex justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                {['Perjanjian Kerja Bersama', 'IT Policy', 'SOP PT. JAG', 'SOP PT. BIGK', 'SOP PT. NIS', 'SOP PT. BIK'].map((tab) => (
                  <li key={tab} className="flex-grow" role="presentation">
                    <button
                      className={`w-full p-4 border-b-4 ${activeTab === tab ? 'border-blue-500' : 'border-transparent'} focus:outline-none`}
                      id={`${tab}-tab`}
                      data-tabs-target={`#${tab}-content`}
                      type="button"
                      role="tab"
                      aria-controls={`${tab}-content`}
                      aria-selected={activeTab === tab ? 'true' : 'false'}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div id="default-tab-content">{renderTabContent()}</div>
          </div>
        </div>
      </>
    </>
  );
};

export default Iklan;
