// components/MainMenu/headerIcon.jsx
const HeaderIcon = ({ className = "" }) => {
    return (
      <img
        className={`h-[180px] flex-1 relative max-w-full overflow-hidden object-cover ${className}`}
        loading="lazy"
        alt=""
        src="/images/dasboardImages/header.png"
      />
    );
  };
  
  export default HeaderIcon;
  