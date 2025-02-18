"use client";

import MainMenu from "./mainMenu";
import RightBarMenu from "../Rightbar/Event";

const DashboardMenu = ({ className = "" }) => {
  return (
    <div
      className={`bg-light-background overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[84px] box-border leading-[normal] tracking-[normal] mq825:gap-[25px] ${className}`}
    >
      <main className="flex flex-row items-start justify-end py-5 box-border">
        <section className="flex flex-row items-start justify-start ">
          <MainMenu />
          <RightBarMenu />
        </section>
      </main>
    </div>
  );
};

export default DashboardMenu;
