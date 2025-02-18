'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import React, { Fragment } from 'react';

const Direktorat = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="mx-auto flex pt-4 justify-between">
        <a href="/menu/direktorat/JAG">
          <div className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200" style={{ height: '60px', width: '320px', borderRadius: '10px' }}>
            <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Jurnalindo Aksara Grafika</p>
            <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
          </div>
        </a>

        <div
          className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '60px', width: '320px', borderRadius: '10px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Bisnis Indonesia Konsultan</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>
        <div
          className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '60px', width: '320px', borderRadius: '10px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Bisnis Indonesia Sibertama</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>
      </div>

      {/* Column 2 */}
      <div className="mx-auto flex pt-4 justify-between">
        <a href="/menu/direktorat/JAG">
          <div className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200" style={{ height: '60px', width: '320px', borderRadius: '10px' }}>
            <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Bisnis Indonesia Gagaskreasitama</p>
            <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
          </div>
        </a>

        <div
          className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '60px', width: '320px', borderRadius: '10px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Navigator Informasi Sibertama</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>
        <div
          className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '60px', width: '320px', borderRadius: '10px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Aksara Grafika Pratama</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>
      </div>

      {/* Column 3 */}
      <div className="mx-auto flex pt-4 justify-between">
        <a href="/menu/direktorat/JAG">
          <div className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200" style={{ height: '60px', width: '320px', borderRadius: '10px' }}>
            <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Aksara Solopos</p>
            <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
          </div>
        </a>

        <div
          className="flex p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
          style={{ marginLeft: '-15px', height: '60px', width: '320px', borderRadius: '10px' }}
        >
          <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Aksara Dinamika Jogja</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" />
        </div>
        <div
          className="flex p-3 bg-transparent "
          style={{ marginLeft: '-15px', height: '60px', width: '320px', borderRadius: '10px' }}
        >
          {/* <p style={{ fontSize: '14px', font: 'inter', lineHeight: '32px', fontWeight: '500' }}>PT Bisnis Indonesia Sibertama</p>
          <img src="/images/modulMenu/profil/arrow-circle-right.png" style={{ marginLeft: 'auto', width: '23px', height: '23px', left: '2px', border: '1px', marginTop: '5px' }} alt="" /> */}
        </div>
      </div>

     
    </>
  );
};
export default Direktorat;
