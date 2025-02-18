const CardPosting = ({ className = "", avatars, michelleDewi }) => {
  return (
    <div
      className={`bg-white color-black self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-big-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[13px] gap-[21.8px] max-w-full shrink-0 text-left text-sm text-gray1 font-inter border-[0.5px] border-solid border-big-blue ${className}`}
    >
      <div className="self-stretch h-[222px] relative rounded-lg bg-big-white box-border hidden border-[0.5px] border-solid border-big-blue" />
      <div className="self-stretch rounded-t-lg rounded-b-none bg-big-white box-border flex flex-row items-end justify-between pt-2.5 pb-2 pr-5 pl-[22px] max-w-full gap-[20px] z-[1] border-b-[0.5px] border-solid border-big-blue">
        <div className="h-[60px] w-[640px] relative rounded-t-lg rounded-b-none bg-big-white box-border hidden max-w-full border-b-[0.5px] border-solid border-big-blue" />
        <div className="w-[412px] flex flex-row items-start justify-start gap-[20px] max-w-[calc(100%_-_44px)] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-8 h-8 relative rounded-xl object-cover z-[2]"
              alt={`${michelleDewi}'s avatar`}
              src={avatars}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[234px] max-w-full">
            <b className="self-stretch relative tracking-[-0.02em] leading-[150%] font-bold z-[2]">
              {michelleDewi}
            </b>
            <div className="flex flex-row items-start justify-start gap-[4px] text-xs text-dimgray">
              <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[45px] z-[2]">
                Position
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[7px] z-[2]">
                •
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[92px] z-[2]">
                Direktorat Name
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/images/dasboardImages/bithreedots.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[22px] box-border max-w-full text-base">
        <div className="flex-1 relative tracking-[-0.01em] leading-[150%] font-medium inline-block max-w-full z-[1]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[21px] box-border max-w-full text-light-black">
        <div className="flex-1 flex flex-col items-end justify-start gap-[10.5px] max-w-full">
          <div className="self-stretch h-px relative box-border opacity-[0.5] z-[1] border-t-[1px] border-solid border-gray" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[26px] box-border max-w-full">
            <div className="w-[360.5px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0 gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/images/dasboardImages/antdesignlikeoutlined.svg"
                  />
                </div>
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[27px] z-[1]">
                  Like
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/images/dasboardImages/faregularcommentdots.svg"
                  />
                </div>
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[64px] z-[1]">
                  Comment
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/images/dasboardImages/bxsharealt.svg"
                  />
                </div>
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[38px] z-[1]">
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPosting;
