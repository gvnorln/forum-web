"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  FormHelperText,
  FormControl,
} from "@mui/material";
import HeaderCell from "./header-cell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

const OperasionalPage = () => {
  const [dropdownContainerAnchorEl, setDropdownContainerAnchorEl] =
    useState(null);
  const dropdownContainerOpen = Boolean(dropdownContainerAnchorEl);
  const handleDropdownContainerClick = (event) => {
    setDropdownContainerAnchorEl(event.currentTarget);
  };
  const handleDropdownContainerClose = () => {
    setDropdownContainerAnchorEl(null);
  };
  return (
    <>
      <Breadcrumbs />
      <div className="w-full relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] z-0 rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[16px] leading-[normal] tracking-[normal]">
        <header className="self-stretch flex flex-row items-start justify-between pt-[15px] px-5 pb-[13px] top-[0] z-[99] sticky gap-[20px] text-left text-[20px] text-gray font-inter border-b-[1px] border-solid border-darkgray">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-bold font-inherit inline-block min-w-[115px]">
              Operasional
            </h3>
          </div>
          <div>
            <Link href="/keuangan/operasional/formBiayaOperasional">
              <Button
                className="h-[35px] w-[132px] relative z-[0] cursor-pointer"
                disableElevation
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#f77800",
                  borderRadius: "10px",
                  "&:hover": { background: "#f77800" },
                  width: 132,
                  height: 35,
                }}
              >
                Add Form OPP
              </Button>
            </Link>
          </div>
        </header>
        <section className=" self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-left text-xs text-black font-inter">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20.3px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-[14px] text-darkgray mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="w-[63px]">
                  <Button
                    id="button-undefined"
                    aria-controls="menu-undefined"
                    aria-haspopup="true"
                    aria-expanded={dropdownContainerOpen ? "true" : undefined}
                    onClick={handleDropdownContainerClick}
                    color="primary"
                    sx={{
                      width: "63",
                      height: "100%",
                      borderRadius: "10px",
                      border: "1px solid #afb1b6",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    10
                    <img
                      width="16px"
                      height="16px"
                      src="/keuangan/operasional/dropdown.png"
                      style={{ marginLeft: "8px" }}
                    />
                  </Button>
                  <Menu
                    anchorEl={dropdownContainerAnchorEl}
                    open={dropdownContainerOpen}
                    onClose={handleDropdownContainerClose}
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[111px]">
                    records per page
                  </div>
                </div>
              </div>
              <TextField
                placeholder="Search"
                sx={{
                  "& fieldset": { borderColor: "#afb1b6" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    borderRadius: "10px",
                  },
                  "& .MuiInputBase-input": { color: "#afb1b6" },
                  width: "190px",
                }}
                style={{
                  outline: "none",
                  border: "none",
                  textDecoration: "none",
                }}
              />
            </div>
            <div
              className="self-stretch rounded-3xs bg-lavender overflow-hidden flex flex-row flex-wrap items-start justify-start py-4 px-2.5 gap-[30px]"
              style={{ backgroundColor: "#D5EAF9", borderRadius: "10px" }}
            >
              <FormControl
                className="h-[18px] w-9 font-inter self-stretch font-bold text-xs text-black"
                style={{ fontWeight: "bold" }}
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "36px",
                  height: "18px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 14,
                    fontWeight: "Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/keuangan/operasional/dropdown.png"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>No</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="flex flex-row items-start justify-start py-0 pr-[70px] pl-0 gap-[4px]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[53px]">
                  <FormControl
                    className="h-[18px] w-12 font-inter font-semibold text-xs text-black"
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "53px",
                      height: "18px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "18px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "18px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "18px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "18px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "Bold",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary" />
                    <Select
                      color="primary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/keuangan/operasional/dropdown.png"
                          style={{}}
                        />
                      )}
                    >
                      <MenuItem>Nama</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <FormControl
                className="h-[18px] w-[95px] font-inter font-semibold text-xs text-black"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "95px",
                  height: "18px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 14,
                    fontWeight: "Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/keuangan/operasional/dropdown.png"
                      style={{ marginRight: "30px" }}
                    />
                  )}
                >
                  <MenuItem>Tanggal</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-8 pl-0 box-border gap-[30px] min-w-[174px]">
                <FormControl
                  className="h-[18px] flex-1 font-inter font-semibold text-xs text-black w-auto"
                  variant="standard"
                  sx={{
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "46.26865671641791%",
                    height: "18px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "18px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "18px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "18px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "18px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 14,
                      fontWeight: "Bold",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/keuangan/operasional/dropdown.png"
                        style={{}}
                      />
                    )}
                  >
                    <MenuItem>Jumlah Kunjungan</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <FormControl
                  className="h-[18px] w-[94px] font-inter font-semibold text-xs text-black"
                  variant="standard"
                  sx={{
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "104px",
                    height: "18px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "18px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "18px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "18px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "18px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 14,
                      fontWeight: "Bold",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/keuangan/operasional/dropdown.png"
                        style={{}}
                      />
                    )}
                  >
                    <MenuItem>Jumlah Biaya</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <FormControl
                className="h-[18px] w-[88px] font-inter font-semibold text-xs text-black mr-6"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "88px",
                  height: "18px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 14,
                    fontWeight: "Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/keuangan/operasional/dropdown.png"
                      style={{ marginRight: "20px" }}
                    />
                  )}
                >
                  <MenuItem>Atasan 1</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="h-[18px] w-[90px] font-inter font-semibold text-xs text-black"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "90px",
                  height: "18px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 14,
                    fontWeight: "Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/keuangan/operasional/dropdown.png"
                      style={{ marginRight: "20px" }}
                    />
                  )}
                >
                  <MenuItem>Atasan 2</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="h-[18px] w-[57px] font-inter font-semibold text-xs text-black"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "57px",
                  height: "18px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 14,
                    fontWeight: "Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/keuangan/operasional/dropdown.png"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Action</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="self-stretch rounded overflow-hidden flex flex-row items-start justify-start py-[15px] px-2.5 gap-[20px] border-[1px] border-solid border-light-blue mq925:flex-wrap">
              <div className="w-[199px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-[33px] pl-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[8px]">
                    1
                  </div>
                  <div className="w-[100px] relative tracking-[-0.02em] leading-[150%] inline-block shrink-0">
                    FULL NAME
                  </div>
                </div>
              </div>
              <div className="w-[259px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                <div className="flex flex-row items-start justify-start gap-[25px]">
                  <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[100px]">
                    1 Desember 2022
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[27px] mx-8">
                    1 kali
                  </div>
                </div>
              </div>
              <div className="w-[124px] flex flex-col items-start justify-start pt-2.5 pb-0  pl-2 box-border">
                <div className="w-[94px] relative tracking-[-0.02em] leading-[150%] inline-block whitespace-nowrap">
                  Rp. 1.000.000
                </div>
              </div>
              <div className="w-[218px] flex flex-col items-start justify-start pt-2.5 ml-7 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[18px]">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[150%]">
                    FULL NAME ATASAN 1
                  </div>
                  <div
                    className="flex-1 relative tracking-[-0.02em] leading-[150%]"
                    style={{ marginLeft: "20px" }}
                  >
                    FULL NAME ATASAN 2
                  </div>
                </div>
              </div>
              <div
                className="rounded-3xs bg-culture-innovation flex flex-row items-center justify-end p-1.5 cursor-pointer"
                style={{ marginLeft: "13px" }}
              >
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/keuangan/operasional/views.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OperasionalPage;
