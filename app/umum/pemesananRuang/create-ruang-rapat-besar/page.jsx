"use client";

import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormReservasiRuang = () => {
  const [today, setToday] = useState("");
  const [formData, setFormData] = useState({
    tanggalAwal: "",
    tanggalAkhir: "",
    lantai: "5 Ruang Rapat Besar",
    namaKegiatan: "",
    pic: "",
    waktuAwal: "",
    waktuAkhir: "",
    fasilitasRuangan: [],
    layoutRuangan: "",
    keteranganTambahan: "",
  });

  const [startTime, setStartTime] = React.useState(""); 
  const [endTime, setEndTime] = React.useState(""); 
  const [timeOptions, setTimeOptions] = React.useState([]);

  React.useEffect(() => {
    const options = [];
    for (let i = 0; i <= 23; i++) {
      for (let j = 0; j < 60; j += 15) {
        const hour = i.toString().padStart(2, "0");
        const minute = j.toString().padStart(2, "0");
        options.push(`${hour}:${minute}`);
      }
    }
    setTimeOptions(options);
  }, []);

  const handleStartTimeChange = (event) => {
    const selectedStartTime = event.target.value;
    if (selectedStartTime >= endTime) {
      alert("Start time cannot be greater than or equal to end time");
    } else {
      setStartTime(selectedStartTime);
      setFormData((prevFormData) => ({
        ...prevFormData,
        waktuAwal: selectedStartTime,
      }));
    }
  };

  const handleEndTimeChange = (event) => {
    const selectedEndTime = event.target.value;
    if (selectedEndTime <= startTime) {
      alert("End time cannot be less than or equal to start time");
    } else {
      setEndTime(selectedEndTime);
      setFormData((prevFormData) => ({
        ...prevFormData,
        waktuAkhir: selectedEndTime,
      }));
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setToday(formattedDate);
    setFormData({
      ...formData,
      tanggalAwal: formattedDate,
      tanggalAkhir: formattedDate,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("Input Change:", name, value); // Log input changes
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData({
      ...formData,
      fasilitasRuangan: checked
        ? [...formData.fasilitasRuangan, id]
        : formData.fasilitasRuangan.filter((item) => item !== id),
    });
    console.log("Checkbox Change:", id, checked); // Log checkbox changes
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, layoutRuangan: e.target.value });
    console.log("Radio Change:", e.target.value); // Log radio changes
  };

  const formatDateForApi = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    const monthMap = {
      Januari: "01",
      Februari: "02",
      Maret: "03",
      April: "04",
      Mei: "05",
      Juni: "06",
      Juli: "07",
      Agustus: "08",
      September: "09",
      Oktober: "10",
      November: "11",
      Desember: "12",
    };
    return `${year}-${monthMap[month]}-${day.padStart(2, "0")}`;
  };

  // Send Data To Server Via API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      tanggalAwal: formatDateForApi(formData.tanggalAwal),
      tanggalAkhir: formatDateForApi(formData.tanggalAkhir),
      waktuAwal: formData.waktuAwal,
      waktuAkhir: formData.waktuAkhir,
    };

    console.log("Formatted Data:", formattedData);

    try {
      const token = sessionStorage.getItem("token");
      console.log("Stored token:", token); // Logging token for debugging

      if (!token) {
        throw new Error("Token tidak ditemukan di sessionStorage.");
      }

      const response = await fetch("/api/reservasiRuangRapat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(formattedData),
      });

      console.log("Request headers:", {
        "Content-Type": "application/json",
        "x-auth-token": token,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data); // Log response data
        alert("Reservation created successfully!");
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error("Error Response:", errorData); // Log error response
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error); // Log error
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Breadcrumbs />
      <form onSubmit={handleSubmit}>
        <div
          className="w-full relative h-[1153px] text-left text-sm text-dark font-inter"
          style={{ zIndex: "3" }}
        >
          <div className="bg-white absolute left-[0px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-light w-[1000px] h-[1115px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] bg-light box-border w-[1000px] flex flex-row items-center justify-start py-[15px] px-5 text-[20px] text-big-black border-b-[1px] border-solid border-darkgray">
              <b className="relative tracking-[-0.02em] leading-[150%]">
                Form Reservasi Ruang Rapat Besar
              </b>
            </div>
            <div className="absolute top-[90px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                Tanggal Awal
                <span className="text-big-black">{}</span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%]">
                <input
                  type="text"
                  className="text-base p-2 w-[430px] h-10 rounded"
                  style={{ backgroundColor: "#D9D9D9" }}
                  readOnly
                  value={formData.tanggalAwal}
                />
                {""}
              </div>
            </div>
            <div className="absolute top-[90px] left-[550px] overflow-hidden flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                Tanggal Akhir
                <span className="text-big-black">{}</span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%]">
                <input
                  type="text"
                  className="text-base p-2 w-[430px] h-10 rounded"
                  style={{ backgroundColor: "#D9D9D9" }}
                  readOnly
                  value={formData.tanggalAkhir}
                />
                {""}
              </div>
            </div>
            <div className="absolute top-[191px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                Lantai (Tipe)
                <span className="text-big-black">{}</span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%]">
                <input
                  type="text"
                  className="text-base p-2 w-[430px] h-10 rounded"
                  style={{ backgroundColor: "#D9D9D9" }}
                  placeholder="5 Ruang Rapat Besar"
                  readOnly
                  value={formData.lantai}
                />
                {""}
              </div>
            </div>
            <div className="absolute top-[312px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <span>Nama Kegiatan</span>
                <span className="text-big-black">{}</span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="w-[430px] relative tracking-[-0.01em] leading-[150%] inline-block shrink-0">
                <input
                  type="text"
                  className="text-base p-2 w-[430px] h-10 border-[2px] border-indigo-400 rounded"
                  placeholder="Nama Kegiatan"
                  name="namaKegiatan"
                  value={formData.namaKegiatan}
                  onChange={handleInputChange}
                />
                {""}
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/images/dasboardImages/bxchevrondown.svg"
              />
            </div>
            <div className="absolute top-[312px] left-[550px] overflow-hidden flex flex-col items-start justify-start gap-[10px] text-big-black">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <span>PIC </span>
                <span className="text-big-black">{}</span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="w-[430px] relative tracking-[-0.01em] leading-[150%] inline-block shrink-0">
                <input
                  type="text"
                  className="text-base p-2 w-[430px] h-10 border-[2px] border-indigo-400 rounded"
                  placeholder="PIC"
                  name="pic"
                  value={formData.pic}
                  onChange={handleInputChange}
                />
                {""}
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/images/dasboardImages/bxchevrondown.svg"
              />
            </div>
            <div className="absolute top-[1056px] left-[0px] box-border w-[1000px] flex flex-row items-center justify-between py-3 px-5 text-center text-culture-success border-[1px] border-solid border-gray-200">
              <div
                className="cursor-pointer rounded-lg bg-light flex flex-row items-center justify-start py-2 px-4 border border-solid border-culture-success"
                style={{ borderColor: "#F77800", color: "#F77800" }}
              >
                <Link href="/umum/pemesananRuang">
                  <div className="font-semibold">Cancel</div>
                </Link>
              </div>

              <button
                type="submit"
                className="rounded-lg bg-light flex flex-row items-center justify-start py-2 px-4 border border-solid border-culture-success"
                style={{ backgroundColor: "#F77800", color: "white" }}
              >
                <div className="font-semibold">Submit</div>
              </button>
            </div>
            <div className="absolute top-[413px] left-[20px] flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                {/* <span>{Waktu Awal }</span>
              <span className="text-red">*</span> */}
              </div>

              {/* Form Input Waktu Awal Dan Waktu Akhir */}
              <div style={{ display: "flex", width: "430px", gap: "75px" }}>
                <FormControl
                  sx={{ minWidth: "430px", m: 1, right: "7px" }}
                  size="small"
                >
                  <InputLabel id="start-time-label">Waktu Awal</InputLabel>
                  <Select
                    labelId="start-time-label"
                    id="start-time"
                    value={startTime}
                    label="Waktu Awal"
                    onChange={handleStartTimeChange}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 300,
                          width: 250,
                          marginTop: "8px", // Adjust this value to position the menu below the label
                        },
                      },
                    }}
                  >
                    {timeOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: "435px", m: 1 }} size="small">
                  <InputLabel id="end-time-label">Waktu Akhir</InputLabel>
                  <Select
                    labelId="end-time-label"
                    id="end-time"
                    value={endTime}
                    label="Waktu Akhir"
                    onChange={handleEndTimeChange}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 300,
                          width: 250,
                          marginTop: "8px", // Adjust this value to position the menu below the label
                        },
                      },
                    }}
                  >
                    {timeOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div
              className="absolute top-[514px] left-[20px] flex flex-col items-start justify-start gap-[20px] text-base text-dark"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium text-dark">
                <span>Fasilitas Ruangan </span>
                <span className="text-red">*</span>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="checkbox"
                  id="kapasitas"
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="kapasitas"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Kapasitas 20 Orang
                </label>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="checkbox"
                  id="laptopProyektor"
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="laptopProyektor"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Laptop + Proyektor
                </label>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="checkbox"
                  id="smartTV"
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="smartTV"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Smart TV
                </label>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="checkbox"
                  id="ac"
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="ac"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  AC
                </label>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="checkbox"
                  id="wmp"
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="wmp"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Wireless Mic + Speaker
                </label>
              </div>
            </div>
            <div className="absolute top-[514px] left-[550px] flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <span>{`Layout Ruangan `}</span>
                <span className="text-red">*</span>
              </div>
            </div>
            <div
              className="absolute top-[555px] left-[550px] flex flex-col items-start justify-start gap-[20px] text-base text-black"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="radio"
                  id="letterU"
                  name="roomLayout"
                  value="Letter U"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="letterU"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Letter U
                </label>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="radio"
                  id="seminar"
                  name="roomLayout"
                  value="Seminar"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="seminar"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Seminar
                </label>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="radio"
                  id="tanpaMejaKursi"
                  name="roomLayout"
                  value="Tanpa Meja / Kursi"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="tanpaMejaKursi"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Tanpa Meja / Kursi
                </label>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="radio"
                  id="custom"
                  name="roomLayout"
                  value="Custom"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="custom"
                  className="relative tracking-[-0.01em] leading-[150%] font-medium"
                >
                  Custom
                </label>
              </div>
            </div>
            <div className="absolute top-[555px] left-[750px] w-[205px] h-[200px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-light w-[205px] h-[200px]" />
              <img
                className="absolute top-[7px] left-[55px] w-[95px] h-[186px] object-cover"
                alt=""
                src="/images/pemesananRuang/layout-ruangan.png"
              />
            </div>
            <div className="absolute top-[785px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[10px] text-big-black">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                Keterangan Tambahan
              </div>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-[430px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Keterangan Tambahan"
                name="keteranganTambahan"
                value={formData.keteranganTambahan}
                onChange={handleInputChange}
              ></textarea>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/images/dasboardImages/bxchevrondown.svg"
              />
            </div>
            <i className="absolute top-[946px] left-[20px] text-[13px] tracking-[-0.01em] leading-[150%] text-dimgray">
              <p className="m-0">{`*Terkait pemakaian ruangan di waktu sebelumnya, dibutuhkan waktu `}</p>
              <p className="m-0">
                15 Menit persiapan setelah waktu awal pemesanan. Harap
                dimaklumi.
              </p>
              <p className="m-0">Terima Kasih.</p>
            </i>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormReservasiRuang;
