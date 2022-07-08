import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaSearchDollar } from "react-icons/fa";
import { BiBarChartSquare, BiNotepad } from "react-icons/bi";
import { MdGarage } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";

const Drawer = () => {
  const icons = [
    <MdDashboard size={25} color="white" />,
    <BsGraphUp size={25} color="white" />,
    <FaSearchDollar size={25} color="white" />,
    <BiBarChartSquare size={25} color="white" />,
    <BiNotepad size={25} color="white" />,
    <MdGarage size={25} color="white" />,
    <GiNotebook size={25} color="white" />,
  ];
  const iconCSS = {
    margin: " 1rem 0",
  };
  const logoCSS = {
    margin: "1rem 0 0 0",
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70px",
          backgroundColor: "#122164",
          height: "100vh",
        }}
      >
        <img src={logo} alt="" width={40} height={40} style={logoCSS} />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2rem",
          }}
        >
          {icons.map((icons, index) => {
            return (
              <span key={index} style={iconCSS}>
                {icons}
              </span>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Drawer;
