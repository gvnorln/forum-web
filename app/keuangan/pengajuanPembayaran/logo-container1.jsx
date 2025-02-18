import PropTypes from "prop-types";

const LogoContainer = ({ className = "", prop }) => {
  return (
    <div
      className={`self-stretch rounded box-border overflow-hidden flex flex-row items-start justify-start py-[11px] px-2.5 relative gap-[20px] max-w-full text-left text-xs text-black font-inter border-[1px] border-solid border-light-blue mq950:flex-wrap ${className}`}
    >
      <div className="w-[46px] flex flex-col items-start justify-start pt-[18px] pb-0 pr-5 pl-0 box-border">
        <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[8px]">
          {prop}
        </div>
      </div>
      <div className="w-[133px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
        <div className="self-stretch relative tracking-[-0.02em] leading-[150%]">
          PP/MANAGEMENT INFORMATION SYSTEM/11/2022/3
        </div>
      </div>
      <div className="w-[105px] flex flex-col items-start justify-start pt-[18px] pb-0 pr-[5px] pl-0 box-border">
        <div className="self-stretch relative tracking-[-0.02em] leading-[150%]">
          25/11/2022
        </div>
      </div>
      <div className="w-[134px] flex flex-col items-start justify-start pt-[9px] pb-0 pr-5 pl-0 box-border">
        <div className="relative tracking-[-0.02em] leading-[150%]">
          <p className="m-0">{`Mandiri Kartu `}</p>
          <p className="m-0">Kredit Corporate</p>
        </div>
      </div>
      <div className="!m-[0] absolute top-[calc(50%_-_15px)] right-[0px] rounded-3xs bg-culture-service-excellence flex flex-row items-center justify-end p-1.5">
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
          alt=""
          src="/pengajuanPembayaran/materialsymbolsprint.svg"
        />
      </div>
      <div className="w-[362px] flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
        <div className="flex-1 relative tracking-[-0.02em] leading-[150%] inline-block min-w-[96px]">
          Pembayaran Google Cloud Platform dan APIs bulan November 2022
        </div>
        <div className="flex flex-col items-start justify-start pt-[18px] pb-0 pr-[7px] pl-0">
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[60px]">
            2.754.197
          </div>
        </div>
        <div className="w-[100px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
          <div className="self-stretch relative tracking-[-0.02em] leading-[150%]">
            FULL NAME
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
        <div className="rounded-3xs bg-culture-balance flex flex-row items-center justify-end p-1.5">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            alt=""
            src="/pengajuanPembayaran/evaedit2fill.svg"
          />
        </div>
      </div>
    </div>
  );
};

LogoContainer.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
};

export default LogoContainer;
