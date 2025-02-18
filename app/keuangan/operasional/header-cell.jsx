import PropTypes from "prop-types";

const HeaderCell = ({ className = "", prop, bieyeFill }) => {
  return (
    <div
      className={`self-stretch rounded overflow-hidden flex flex-row items-start justify-start py-[23px] px-2.5 gap-[50px] text-left text-xs text-black font-inter border-[1px] border-solid border-light-blue mq450:gap-[25px] mq925:flex-wrap ${className}`}
    >
      <div className="w-[169px] flex flex-col items-start justify-start pt-1.5 pb-0 pr-[3px] pl-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[8px]">
            {prop}
          </div>
          <div className="w-[100px] relative tracking-[-0.02em] leading-[150%] inline-block shrink-0">
            FULL NAME
          </div>
        </div>
      </div>
      <div className="w-[229px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <div className="flex flex-row items-start justify-start gap-[25px]">
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[100px]">
            1 Desember 2022
          </div>
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[27px]">
            1 kali
          </div>
        </div>
      </div>
      <div className="w-[94px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <div className="self-stretch relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
          Rp. 1.000.000
        </div>
      </div>
      <div className="w-[268px] flex flex-row items-start justify-start gap-[19px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div className="self-stretch relative tracking-[-0.02em] leading-[150%]">
            FULL NAME
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div className="self-stretch relative tracking-[-0.02em] leading-[150%]">
            FULL NAME
          </div>
        </div>
        <div className="rounded-3xs bg-culture-innovation flex flex-row items-center justify-end p-1.5">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            alt=""
            src={bieyeFill}
          />
        </div>
      </div>
    </div>
  );
};


export default HeaderCell;