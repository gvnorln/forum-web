"use client"
import Link from "next/link";
import LogoContainer from "./logo-container";
import PropTypes from "prop-types";
import Breadcrumbs from "@/components/Breadcrumbs";

const Root = ({ className = "" }) => {
  return (
    <>
    <Breadcrumbs />
      <div
        className={`w-[1000px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white max-w-full overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[18px] leading-[normal] tracking-[normal] ${className}`}
      >
        <header className="self-stretch flex flex-row items-start justify-between pt-[15px] px-5 pb-[13px] top-[0] z-[99] sticky gap-[20px] text-left text-[20px] text-gray font-inter border-b-[1px] border-solid border-darkgray-200">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-bold font-inherit inline-block min-w-[101px] whitespace-nowrap">
              Pengajuan
            </h2>
          </div>
          <Link href="/keuangan/pengajuanPembayaran/create">
            <button className="cursor-pointer [border:none] py-[7px] px-[18px] bg-culture-success rounded-3xs flex flex-row items-start justify-start whitespace-nowrap  bg-orangebig rounded-lg">
              <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-semibold font-inter text-white text-center">
                Add Pengajuan Pembayaran
              </div>
            </button>
          </Link>
        </header>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-left text-sm text-black font-inter">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20.4px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="w-[63px] rounded-3xs box-border flex flex-row items-start justify-start py-2 px-[11px] gap-[11px] border-[1px] border-solid border-darkgray-200">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[16px]">
                    10
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                    <img
                      className="w-3 h-3 relative overflow-hidden shrink-0"
                      alt=""
                      src="/pengajuanPembayaran/akariconschevrondown.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 text-darkgray-200">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[111px]">
                    records per page
                  </div>
                </div>
              </div>
              <div className="w-[190px] rounded-3xs box-border flex flex-row items-start justify-start py-1.5 px-3 border-[1px] border-solid border-darkgray-200">
                <input
                  className="w-[52px] [border:none] [outline:none] font-medium font-inter text-[16px] bg-[transparent] h-6 relative tracking-[-0.02em] leading-[150%] text-darkgray-200 text-left inline-block p-0"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-lavender overflow-hidden flex flex-row items-start justify-start py-4 px-2.5 gap-[25px] text-xs mq950:flex-wrap">
              <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0 gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[16px]">
                  No
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[52px] pl-0 gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[56px]">
                  Nomor PP
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-0 gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[63px]">
                  Tanggal PP
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[109px]">
                  Dibayarkan Kepada
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[61px] pl-0 gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[65px]">
                  Keterangan
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[46px]">
                  Total PP
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-6 pl-0 gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[51px]">
                  Pembuat
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[38px]">
                  Fungsi
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/pengajuanPembayaran/bxchevrondown.svg"
                  />
                </div>
              </div>
            </div>
            <LogoContainer prop="1" />
            <LogoContainer prop="2" />
            <LogoContainer prop="3" />
            <LogoContainer prop="4" />
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start relative gap-[26px] max-w-full">
            <LogoContainer prop="5" />
            <footer className="w-[930px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/pengajuanPembayaran/dashiconsarrowleft.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[585px] max-w-full mq700:min-w-full">
                <div className="self-stretch h-4 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-10xs bg-gainsboro w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] rounded-10xs bg-darkgray-100 w-[844.6px] h-4 z-[1]" />
                </div>
              </div>
            </footer>
            <img
              className="w-5 h-5 absolute !m-[0] right-[0px] bottom-[0px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/pengajuanPembayaran/dashiconsarrowright.svg"
            />
          </div>
        </section>
      </div>
    </>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
