import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const UserPosting = ({ className = "" }) => {
  return (
    <div
      className={`bg-white self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-big-white flex flex-col items-end justify-start py-[23px] px-[30px] box-border gap-[20px] max-w-full text-left text-base text-big-black font-inter ${className}`}
    >
      <div className="w-[640px] h-[130px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-big-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq825:flex-wrap">
        <img
          className="h-10 w-10 relative rounded-xl object-cover min-h-[40px] z-[1]"
          alt=""
          src="/images/dasboardImages/rectangle-17-2@2x.png"
        />
        <TextField
          className="[border:none] bg-[transparent] h-10 flex-1 font-inter text-base text-darkgray min-w-[300px] max-w-full z-[1]"
          placeholder="What’s on your mind?"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#afb1b6" },
            "& .MuiInputBase-root": { height: "40px", borderRadius: "20px" },
            "& .MuiInputBase-input": { color: "#afb1b6" },
          }}
        />
      </div>
      <div className="w-[520px] flex flex-row items-start justify-between py-0 pr-[21px] pl-[11px] box-border gap-[20px] max-w-full z-[1] mq825:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/images/dasboardImages/bicardimage.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[44px]">
            Photo
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/images/dasboardImages/entypovideo.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[43px]">
            Video
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0 gap-[10px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/images/dasboardImages/icbaselineevent.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[42px]">
            Event
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/images/dasboardImages/antdesignfiletextfilled.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[26px]">
            File
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserPosting;
