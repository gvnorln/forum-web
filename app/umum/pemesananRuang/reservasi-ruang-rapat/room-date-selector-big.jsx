import React, { useState } from "react";
import Link from "next/link";

const RoomDateSelectorBig = ({
  className = "",
  activeBorderColor = "#47FF47",
  inactiveBorderColor = "#FF8585",
}) => {
  const [selectedSlot, setSelectedSlot] = useState(""); // State to hold the selected time slot

  const unavailableTimeSlots = ["12:00 - 13:00", "13:00 - 14:00"]; // Unavailable time slots

  const isAvailable = (slot) => {
    return !unavailableTimeSlots.includes(slot); // Check if the slot is available
  };

  function generateDate() {
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
  }

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div
      className={`cursor-pointer w-[965px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-xs text-big-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[39.5px] max-w-full mq450:gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[37px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <b className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[45px]">
              Tanggal
            </b>
            <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[105px]">
              {generateDate()}
            </div>
          </div>
        </div>
        <div className="h-[121px] w-px relative box-border border-r-[1px] border-solid border-gainsboro mq700:w-full mq700:h-px" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[455px] max-w-full mq700:min-w-full">
          <b className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[37px]">
            Waktu
          </b>
          <div className="self-stretch flex flex-col items-start justify-center gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-[20px] mq700:flex-wrap">
              {timeSlots.map((slot, index) => (
                <Link href="/umum/pemesananRuang/create-ruang-rapat-besar" key={index} passHref>
                  <div
                    className={`flex-1 rounded box-border flex flex-row items-center justify-center py-[3px] px-2.5 min-w-[65px] whitespace-nowrap border-[1px] border-solid ${
                      isAvailable(slot) ? "border-lime" : "border-red-400"
                    } ${!isAvailable(slot) ? "bg-red-400" : ""}`}
                    style={{
                      cursor: isAvailable(slot) ? "pointer" : "not-allowed",
                      borderColor: isAvailable(slot)
                        ? activeBorderColor
                        : inactiveBorderColor,
                    }}
                    onClick={() => isAvailable(slot) && handleSlotSelect(slot)}
                  >
                    <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[77px]">
                      {slot}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-[340px] flex flex-row items-center justify-start gap-[20px] max-w-full mq450:flex-wrap">
              {additionalTimeSlots.map((slot, index) => (
                <Link href="/umum/pemesananRuang/create-ruang-rapat-besar" key={index} passHref>
                  <div
                    className={`flex-1 rounded box-border flex flex-row items-center justify-center py-[3px] px-3 min-w-[73px] whitespace-nowrap border-[1px] border-solid ${
                      isAvailable(slot) ? "border-lime" : "border-red-400"
                    } ${!isAvailable(slot) ? "bg-red-400" : ""}`}
                    style={{
                      cursor: isAvailable(slot) ? "pointer" : "not-allowed",
                      borderColor: isAvailable(slot)
                        ? activeBorderColor
                        : inactiveBorderColor,
                    }}
                    onClick={() => isAvailable(slot) && handleSlotSelect(slot)}
                  >
                    <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[73px]">
                      {slot}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const timeSlots = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
];

const additionalTimeSlots = ["14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"];

export default RoomDateSelectorBig;
