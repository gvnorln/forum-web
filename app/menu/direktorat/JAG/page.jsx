'use client';

import React, { Fragment } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

const Jag = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="mx-auto flex pt-4 justify-between">
        <a href="/menu/direktorat/JAG/pemberitaanRedaksi">
          <div
            className="flex p-3 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
            style={{ height: '100px', width: '320px', borderRadius: '10px', padding: '14px' }}
          >
            <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>Pemberitaan/Redaksi</p>
            <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
          </div>
        </a>

        <div
          className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '100px', width: '320px', borderRadius: '10px', padding: '14px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>Produksi & Pengembangan Produk</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>

        <div
          className="flex items-center p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '100px', width: '320px', borderRadius: '10px', padding: '14px' }}
        >
          <p style={{ fontSize: '14px', fontFamily: 'Inter', lineHeight: '32px', fontWeight: '500' }}>Pemasaran & Penjualan</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px' }} alt="" />
        </div>
      </div>

      <div className="flex mx-auto pt-5 justify-between">
        <div
          className="flex p-3 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ height: '100px', width: '320px', borderRadius: '10px', padding: '14px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>Keuangan, Administrasi & Pengembangan</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>

        <div
          className="flex p-3 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '100px', width: '320px', borderRadius: '10px', padding: '14px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>Kompartemen Special Digital Produk BisnisIndonesia.id</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>

        <div
          className="flex items-center p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '100px', width: '320px', borderRadius: '10px', padding: '14px' }}
        >
          <p style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', lineHeight: '32px', fontWeight: '500', marginRight: '10px' }}>Kompartemen Bursa, Premium Content & Multimedia</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px' }} alt="" />
        </div>
      </div>
    </>
  );
};

export default Jag;
