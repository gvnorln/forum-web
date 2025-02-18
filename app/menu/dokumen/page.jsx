'use client';
import React, { Fragment, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import 'flowbite/dist/flowbite.min.css';

const Profil = () => {
  const [activeTab, setActiveTab] = useState('Keuangan');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Semua Bagian':
        return (
          <div className="rounded-lg w-96" id="profile-content" role="tabpanel" aria-labelledby="profile-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: '1000px' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold whitespace-nowrap ml-2">Semua Bagian</h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            </div>
          </div>
        );
      case 'SDM':
        return (
          <div className="rounded-lg w-96" id="dashboard-content" role="tabpanel" aria-labelledby="dashboard-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: '400px' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold" style={{ marginLeft: '-25px' }}>
                  SDM
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            </div>
          </div>
        );
      case 'Umum':
        return (
          <div className="rounded-lg w-96" id="settings-content" role="tabpanel" aria-labelledby="settings-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: 'auto' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold">Umum</h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            </div>
          </div>
        );
      case 'Hukum':
        return (
          <div className="rounded-lg w-96" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: '750px' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold ml-2">Hukum</h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            </div>
          </div>
        );

      case 'SIMO':
        return (
          <div className="rounded-lg w-96" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: 'auto' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold ml-4" style={{ marginLeft: '-20px' }}>
                  SIMO
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            </div>
          </div>
        );
      case 'Keuangan':
        return (
          <div className="rounded-lg w-96" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: '1050px' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold ml-2">Dokumen</h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px', marginBottom: '30px' }} />

              <div className="justify-between bg-white border-2" style={{ width: '980px', height: '166px', borderRadius: '10px', paddingTop: '50px' }}>
                <div className="flex p-2" style={{ width: '800px', height: '138px', gap: '50px' }}>
                  <img src="/images/modulMenu/profil/dokumen/file-pdf.png" style={{ width: '100px', height: '100px', marginTop: '-30px', marginLeft: '10px' }} alt="" />
                  <p className="whitespce-nowrap" style={{ fontSize: '16px', lineHeight: '32px', fontWeight: '600', fontFamily: 'Inter', letterSpacing: '-1.9%', marginTop: '-40px' }}>
                    Materi Training Experential Brand Activations - Hari ke 2
                  </p>
                  <div className="flex" style={{ marginLeft: '-485px', marginTop: '0px' }}>
                    <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-195px', marginTop: '30px' }}>
                    <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Endah Hastuti Purwaningsih</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-245px', marginTop: '60px' }}>
                    <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Keuangan</p>
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
                    Materi Training Experential Brand Activations - Hari ke 2
                  </p>
                  <div className="flex" style={{ marginLeft: '-485px', marginTop: '0px' }}>
                    <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-195px', marginTop: '30px' }}>
                    <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Endah Hastuti Purwaningsih</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-245px', marginTop: '60px' }}>
                    <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Keuangan</p>
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
                    Materi Training Experential Brand Activations - Hari ke 2
                  </p>
                  <div className="flex" style={{ marginLeft: '-485px', marginTop: '0px' }}>
                    <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-195px', marginTop: '30px' }}>
                    <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Endah Hastuti Purwaningsih</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-245px', marginTop: '60px' }}>
                    <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Keuangan</p>
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
                    Materi Training Experential Brand Activations - Hari ke 2
                  </p>
                  <div className="flex" style={{ marginLeft: '-485px', marginTop: '0px' }}>
                    <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-195px', marginTop: '30px' }}>
                    <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Endah Hastuti Purwaningsih</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-245px', marginTop: '60px' }}>
                    <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Keuangan</p>
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
                    Materi Training Experential Brand Activations - Hari ke 2
                  </p>
                  <div className="flex" style={{ marginLeft: '-485px', marginTop: '0px' }}>
                    <img src="/images/modulMenu/profil/dokumen/calender-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>22 September 2017</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-195px', marginTop: '30px' }}>
                    <img src="/images/modulMenu/profil/dokumen/account-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Endah Hastuti Purwaningsih</p>
                  </div>
                  <div className="flex" style={{ marginLeft: '-245px', marginTop: '60px' }}>
                    <img src="/images/modulMenu/profil/dokumen/keuangan-icon.png" style={{ width: '20px', height: '20px' }} alt="" />
                    <p style={{ fontSize: '12px', lineHeight: '32px', fontWeight: '400', fontFamily: 'inter', letterSpacing: '-1.9%', color: '#747474', marginLeft: '15px', marginTop: '-5px' }}>Keuangan</p>
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
          </div>
        );
      case 'Akunting':
        return (
          <div className="rounded-lg w-96" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: '870px' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold ml-2">Akunting</h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            </div>
          </div>
        );
      case 'IT/MIS':
        return (
          <div className="rounded-lg w-96" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ width: '1040px', height: '870px' }}>
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="text-2xl font-bold">IT/IMS</h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
        <Breadcrumbs />
        <div className="flex">
          <div className="w-full ml-4">
            <div className="mb-4 w-full border-b border-gray-200 dark:border-gray-700">
              <ul className="flex justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                {['Semua Bagian', 'SDM', 'Umum', 'Hukum', 'SIMO', 'Keuangan', 'Akunting', 'IT/MIS'].map((tab) => (
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
  );
};

export default Profil;
