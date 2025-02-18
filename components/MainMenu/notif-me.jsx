
const NotifMe = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded bg-lightskyblue flex flex-row items-start justify-between py-[5px] pr-3 pl-4 box-border max-w-full gap-[20px] text-left text-xs text-dark font-inter ${className}`}
      style={{backgroundColor: "#8DCFFF"}}
    >
      <div className="h-10 w-[640px] relative rounded bg-lightskyblue hidden max-w-full" />
      <div className="w-[328px] flex flex-row items-start justify-start gap-[10px] max-w-[calc(100%_-_36px)] mq450:flex-wrap">
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1]"
          alt=""
          src="/images/dasboardImages/ggloadbardoc.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[142px]">
          <div className="relative tracking-[-0.02em] leading-[150%] z-[1]">
            <span className="font-semibold">{`Request cuti `}</span>
            <span>masih dalam tahap review.</span>
          </div>
        </div>
        <div className="w-[60px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-center text-3xs text-gray1">
          <div className="self-stretch h-6 relative" style={{backgroundColor: "yellow"}}>
            <div className="absolute top-[0px] left-[0px] rounded-10xs bg-culture-innovation w-full h-full z-[1]" />
            <b className="absolute top-[3px] left-[3px] tracking-[-0.01em] leading-[18px] font-semibold flex items-center justify-center w-[54px] h-[18px] z-[2]">
              Pending
            </b>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <img
          className="w-4 h-4 relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/images/dasboardImages/carbonclose.svg"
        />
      </div>
    </div>
  );
};

export default NotifMe;
