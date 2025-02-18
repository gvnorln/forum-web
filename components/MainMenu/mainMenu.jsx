// components/MainMenu/mainMenu.jsx
import HeaderIcon from "./headerIcon";
import NotifMe from "./notif-me";
import UserPosting from "./userPosting";
import CardPosting from "./cardPosting";

const MainMenu = ({ className = "" }) => {
  return (
    <div
      className={`bg-slate-600 w-[640px] flex flex-col items-start justify-start gap-[19px] max-w-full text-left text-xs text-dark font-inter ${className}`}
      style={{ marginRight: "80px" }}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
        <HeaderIcon />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[25px]">
        {/* Navigation Header */}
        <div className="flex flex-row items-start justify-start gap-[10px]" style={{}}>
          <div
            className="h-2.5 w-[30px] relative rounded-8xs"
            style={{ backgroundColor: "#065A98", borderRadius: "8px"}}
          />
          <div
            className="h-2.5 w-2.5 relative rounded-8xs box-border"
            style={{ border: "1px solid #065A98", backgroundColor: "#065A98",borderRadius: "8px" }}
          />
          <div
            className="h-2.5 w-2.5 relative rounded-8xs box-border"
            style={{ border: "1px solid #065A98", backgroundColor: "#065A98", borderRadius: "8px" }}
          />
          <div
            className="h-2.5 w-2.5 relative rounded-8xs box-border"
            style={{ border: "1px solid #065A98", backgroundColor: "#065A98", borderRadius: "8px" }}
          />
          <div
            className="h-2.5 w-2.5 relative rounded-8xs box-border"
            style={{ border: "1px solid #065A98", backgroundColor: "#065A98", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
        <NotifMe />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base text-big-black">
        <UserPosting />
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-sm text-gray1">
        <CardPosting
          avatars="/images/dasboardImages/rectangle-17-3@2x.png"
          michelleDewi="Michelle Dewi"
        />
        <CardPosting
          avatars="/images/dasboardImages/rectangle-17-4@2x.png"
          michelleDewi="John Doe"
        />
        <CardPosting
          avatars="/images/dasboardImages/rectangle-17-4@2x.png"
          michelleDewi="Budi Doremi"
        />
      </div>
    </div>
  );
};

export default MainMenu;
