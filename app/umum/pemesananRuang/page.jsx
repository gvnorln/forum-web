"use client";

import { Button } from "@mui/material";
import DateLabels from "./reservasi-ruang-rapat/data-labels";
import RoomDateSelectorBig from "./reservasi-ruang-rapat/room-date-selector-big";
import RoomDateSelectorSmall from "./reservasi-ruang-rapat/room-date-selector-small";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const PemesananRuangRapat = ({ className = "" }) => {
  return (
    <>
      <Breadcrumbs />
      <div
        className={`w-full flex flex-col items-start justify-start gap-[30px] leading-[normal] tracking-[normal] ${className}`}
      >
        <section className="bg-white self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-xs text-darkgray-200 font-inter">
          <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-light overflow-hidden flex flex-col items-start justify-start gap-[30px] max-w-full text-center text-sm text-culture-success">
            <header className="self-stretch flex flex-row items-start justify-start pt-[15px] px-5 pb-[13px] text-left text-[20px] text-gray font-inter border-b-[1px] border-solid border-darkgray-100">
              <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                Pemesanan Ruang Rapat
              </h2>
            </header>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
                <DateLabels />
              </div>
            </div>
            <div className=" cursor-pointer bg-white self-stretch flex flex-row items-start justify-end pt-2.5 px-5 pb-3 gap-[10px] border-t-[1px] border-solid border-darkgray-100">
              <div className="rounded-3xs bg-light hidden flex-row items-center justify-start py-[5px] px-[17px] border-[1px] border-solid border-culture-success">
                <div className="relative tracking-[-0.01em] leading-[150%] font-semibold">
                  Cancel
                </div>
              </div>
              <Button
                className="h-[35px] w-[83px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#f77800",
                  borderRadius: "10px",
                  "&:hover": { background: "#f77800" },
                  width: 83,
                  height: 35,
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-white self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-light overflow-hidden flex flex-col items-start justify-start pt-[30px] px-0 pb-[33px] box-border gap-[26px] max-w-full text-center text-lg text-big-black font-inter mq700:pt-5 mq700:pb-[21px] mq700:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-semibold font-inherit">
                Lantai 5 (Ruang Rapat Besar)
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-xs text-dimgray">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <img
                  className="w-[366px] relative max-h-full object-cover max-w-full"
                  loading="lazy"
                  alt=""
                  src="/images/pemesananRuang/ruangRapatBesar.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                <div className="w-[410px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[150%] inline-block min-w-[71px]">
                    Kapasitas 20 Orang
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-darkgray-200 text-center inline-block min-w-[7px] mq450:w-full mq450:h-[7px]">
                    •
                  </div>
                  <div className="flex-1 relative tracking-[-0.01em] leading-[150%] inline-block min-w-[71px]">
                    Laptop + Proyektor
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-darkgray-200 text-center inline-block min-w-[7px] mq450:w-full mq450:h-[7px]">
                    •
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[98px]">
                    Flipchart + Spidol
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                <div className="flex flex-row items-start justify-start gap-[32px]">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 bg-greenbig w-4 h-4"></div>
                    <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[50px]">
                      Available
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 bg-red-400 w-4 h-4"></div>
                    <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[73px]">
                      Not Available
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro" />
            </div>
          </div>
          <RoomDateSelectorBig />
        </section>
        <section className="bg-white self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-light overflow-hidden flex flex-col items-start justify-start pt-[30px] px-0 pb-[33px] box-border gap-[20px] max-w-full text-left text-xs text-dimgray font-inter mq700:pt-5 mq700:pb-[21px] mq700:box-border">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[360px] flex flex-col items-end justify-start gap-[20px] max-w-full">
              <div className="flex flex-row items-start justify-end pt-0 px-[60px] pb-2.5 text-center text-lg text-big-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-semibold font-inherit">
                  Lantai 5 (Ruang Rapat Kecil)
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[20px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px] box-border max-w-full">
                  <img
                    className="h-[162px] flex-1 relative max-w-full overflow-hidden object-cover"
                    loading="lazy"
                    alt=""
                    src="/images/pemesananRuang/ruangRapatKecil.png"
                  />
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] w-[400px]">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[140%] inline-block min-w-[50px]">
                    Kapasitas 10 Orang
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-darkgray-200 text-center inline-block min-w-[7px] mq450:w-full mq450:h-[7px]">
                    •
                  </div>
                  <div
                    className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[86px]"
                    style={{ marginRight: "15px" }}
                  >
                    Televisi 32 inch
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-darkgray-200 text-center inline-block min-w-[7px] mq450:w-full mq450:h-[7px]">
                    •
                  </div>
                  <div className="flex-1 relative tracking-[-0.01em] leading-[150%] inline-block">
                    Glassboard + Spidol
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                <div className="flex flex-row items-start justify-start gap-[32px]">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0  bg-greenbig w-4 h-4"></div>
                    <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[50px]">
                      Available
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 bg-red-400 w-4 h-4"></div>
                    <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[73px]">
                      Not Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[7px] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
            <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gainsboro" />
          </div>
          <RoomDateSelectorSmall />
        </section>
      </div>
    </>
  );
};

export default PemesananRuangRapat;
