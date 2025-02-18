"use client";

import { useState, useMemo, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const ContactAddress = ({
  className = "",
  alamat,
  workDetailsPlaceholder,
  propMinWidth,
  additionalStyles = {},
  value,
  onChange,
}) => {
  const alamatStyle = useMemo(
    () => ({
      minWidth: propMinWidth,
      ...additionalStyles,
    }),
    [propMinWidth, additionalStyles]
  );

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[10px] text-left text-sm text-dark font-inter ${className}`}
    >
      <div
        className="relative tracking-[-0.01em] leading-[150%] font-medium inline-block min-w-[57px]"
        style={alamatStyle}
      >
        <span>{alamat}</span>
        <span className="text-black"> </span>
        <span className="text-red">*</span>
      </div>
      <textarea
        className="bg-[transparent] h-[110px] w-auto [outline:none] self-stretch rounded box-border flex flex-row items-start justify-start py-2 px-2.5 font-inter text-base text-darkgray border-[1px] border-solid border-light-blue"
        placeholder={workDetailsPlaceholder}
        rows={6}
        cols={22}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

ContactAddress.propTypes = {
  className: PropTypes.string,
  alamat: PropTypes.string,
  workDetailsPlaceholder: PropTypes.string,
  propMinWidth: PropTypes.any,
  additionalStyles: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const FormBiayaOperasional = ({ className = "" }) => {
  const [visitMonthDateTimePickerValue, setVisitMonthDateTimePickerValue] = useState("");
  const [formData, setFormData] = useState({
    tanggalKunjungan: "",
    alamat: "",
    aktivitas: "",
    agency: "",
    noTelepon: "",
    hasil: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tanggalKunjungan: visitMonthDateTimePickerValue,
    }));
  }, [visitMonthDateTimePickerValue]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Updated ${name}: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form data:", formData);

    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan.");
      }

      const response = await fetch("/api/biaya-operasional", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Form submitted successfully!");
        console.log("Response data:", data);
        window.location.reload();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
        console.log("Error response data:", errorData);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.log("Error:", error);
    }
  };
  return (
    <div
      className={`w-full shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-white overflow-hidden flex flex-col items-start justify-start gap-[30px] leading-[normal] tracking-[normal] ${className}`}
    >
      <div className="bg-light box-border w-[1000px] flex flex-row items-center justify-start py-[15px] px-5 text-[20px] text-big-black border-b-[1px] border-solid border-darkgray">
        <b className="relative tracking-[-0.02em] leading-[150%]">Create Form Biaya Operasional</b>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-left text-sm text-dark font-inter">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[100px] max-w-full mq700:gap-[25px] mq975:gap-[50px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[279px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[24px] font-medium inline-block min-w-[126px]">
                Tanggal Kunjungan
              </div>
              <div className="self-stretch h-10">
                <input
                  type="date"
                  value={visitMonthDateTimePickerValue}
                  onChange={(e) => setVisitMonthDateTimePickerValue(e.target.value)}
                  className="w-full h-full border border-solid border-black rounded-[4px] px-2 py-1"
                  name="tanggalKunjungan"
                  style={{
                    backgroundColor: "#d9d9d9",
                    color: "rgba(0, 0, 0, 0.3)",
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: "400",
                  }}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium inline-block min-w-[68px]">
                <span>Alamat </span>
                <span className="text-red">*</span>
              </div>
              <textarea
                className="bg-[transparent] h-[110px] w-auto [outline:none] self-stretch rounded box-border flex flex-row items-start justify-start py-2 px-2.5 font-inter text-base text-darkgray border-[1px] border-solid border-light-blue"
                placeholder="Alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                rows={6}
                cols={22}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium inline-block min-w-[68px]">
                <span>Aktivitas </span>
                <span className="text-red">*</span>
              </div>
              <textarea
                className="bg-[transparent] h-[110px] w-auto [outline:none] self-stretch rounded box-border flex flex-row items-start justify-start py-2 px-2.5 font-inter text-base text-darkgray border-[1px] border-solid border-light-blue"
                placeholder="Deskripsi Aktivitas"
                name="aktivitas"
                value={formData.aktivitas}
                onChange={handleInputChange}
                rows={6}
                cols={22}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[279px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <span>Biro Iklan / Agency / Instansi</span>
                <span className="text-base text-black">
                  <span> </span>
                  <span className="text-red">*</span>
                </span>
              </div>
              <TextField
                className="bg-[transparent] self-stretch h-10 font-inter text-base text-darkgray"
                placeholder="Nama"
                name="agency"
                value={formData.agency}
                onChange={handleInputChange}
                variant="outlined"
                sx={{
                  "& fieldset": {
                    borderColor: "#a9dbff",
                    borderWidth: "1px",
                  },
                  "& .MuiInputBase-root": {
                    height: "48px",
                    borderRadius: "4px",
                  },
                  "& .MuiInputBase-input": {
                    color: "#afb1b6",
                    padding: "10px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#a9dbff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a9dbff",
                    },
                    "&.Mui-focused": {
                      outline: "none",
                    },
                  },
                }}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <span>No Telepon</span>
                <span className="text-base text-black">
                  <span> </span>
                  <span className="text-red">*</span>
                </span>
              </div>
              <TextField
                className="bg-[transparent] self-stretch h-10 font-inter text-base text-darkgray"
                placeholder="Nama"
                name="noTelepon"
                value={formData.noTelepon}
                onChange={handleInputChange}
                variant="outlined"
                sx={{
                  "& fieldset": {
                    borderColor: "#a9dbff",
                    borderWidth: "1px",
                  },
                  "& .MuiInputBase-root": {
                    height: "48px",
                    borderRadius: "4px",
                  },
                  "& .MuiInputBase-input": {
                    color: "#afb1b6",
                    padding: "10px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#a9dbff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a9dbff",
                    },
                    "&.Mui-focused": {
                      outline: "none",
                    },
                  },
                }}
              />
            </div>
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[10px]"
              style={{ marginTop: "65px" }}
            >
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium inline-block min-w-[68px]">
                <span>Hasil </span>
                <span className="text-red">*</span>
              </div>
              <textarea
                className="bg-[transparent] h-[110px] w-auto [outline:none] self-stretch rounded box-border flex flex-row items-start justify-start py-2 px-2.5 font-inter text-base text-darkgray border-[1px] border-solid border-light-blue"
                placeholder="Deskripsi Hasil"
                name="hasil"
                value={formData.hasil}
                onChange={handleInputChange}
                rows={6}
                cols={22}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch flex flex-row items-start justify-between pt-2.5 px-5 pb-3 gap-[20px] border-t-[1px] border-solid border-darkgray mq450:flex-wrap">
        <Button
          className="h-[35px] w-[83px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#f77800",
            fontSize: "14",
            background: "#fff",
            border: "#f77800 solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#fff" },
            width: 83,
            height: 35,
          }}
        >
          Cancel
        </Button>
        <Button
          className="h-[35px] w-[84px]"
          disableElevation
          variant="contained"
          onClick={handleSubmit}
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#f77800",
            borderRadius: "10px",
            "&:hover": { background: "#f77800" },
            width: 84,
            height: 35,
          }}
        >
          Submit
        </Button>
      </footer>
    </div>
  );
};

export default FormBiayaOperasional;
