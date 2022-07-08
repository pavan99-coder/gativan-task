import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Glogo from "../assets/Glogo.png";
import logo from "../assets/logo.png";
import bike from "../assets/bike.png";
import GreenTik from "../assets/GreenTik.png";

const JobCardPreview = () => {
  const JobCard = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
  };
  const JobCardBill = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    margin: "1rem 0",
  };
  const CardInfo = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  const periodic = [
    "Air Filter Clean",
    "Oil Filter Clean",
    "Carborator Clean",
    "Engine Oil Change",
    "Check Bearing",
    "Check Wheel Bearing",
    "Rear And Front Break",
    "Chain Alignment",
    "Check Air Control",
    "Barty Charge",
    "Check Spark Plug",
    "Bike Wash"
  ];
  return (
    <>
      <Box
        style={{backgroundColor: "#122164", minHeight: "100vh", paddingBottom: '2.6rem' }}
      >
        <div style={JobCard}>
          <Typography
            style={{ fontWeight: "bold", color: "white", fontSize: "1.5rem" }}
          >
            Job Card
          </Typography>
          <img src={Glogo} width={130} alt="LOGO" height={50} />
        </div>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: "1rem",
            margin: "0 2rem",
          }}
        >
          <div style={{ CardInfo }}>
            <span>
              <Typography style={{ fontWeight: "bold" ,fontsize:"0.8rem" }}>
                MR.Sahil Jain
              </Typography>
              <Typography style={{fontsize:"0.5rem" }}>Hero Karizma</Typography>
              <Typography style={{fontsize:"0.5rem" }}> MH 12KM 9696</Typography>
            </span>
            <span>
              <Typography style={{ fontWeight: "bold" }}>
                Customer Contact
              </Typography>
              <Typography  style={{fontsize:"0.5rem" }}> +91 9866543910</Typography>
            </span>
            <span>
              <Typography style={{ fontWeight: "bold" }}>
                Customer Address
              </Typography>
              <Typography  style={{fontsize:"0.5rem" }}>Tanishq kharadi</Typography>
            </span>
          </div>
          <div>
            <img src={bike} alt="" width={200} height={150} />
          </div>
        </Box>

        <div style={JobCardBill}>
          <Typography
            style={{ fontWeight: "bold", color: "white", fontSize: "1.5rem" }}
          >
            Jobs
          </Typography>
          <img src={logo} width={50} alt="LOGO" height={40} />
        </div>

        <Box
          style={{
            backgroundColor: "white",
            padding: "1rem",
            margin: "0 2rem",
          }}
        >
          <Typography
            style={{ fontWeight: "bold" }}
          >
            Periodic Maintenance
            <hr />
          </Typography>

          <Box>
            <ul type="I" style={{ listStyle: '1', margin: "0px", padding: "0px" }}>
              {periodic.map((item, index) => {
                return (
                  <Box>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "0.5rem 0px",
                      }}
                    >
                   <Box style={{
                        display: "flex",
                        alignItems: "center",
                      }}>
                   <Typography style={{fontSize: '20px', marginRight: '1rem'}}>{index + 1}</Typography>
                      <Typography>{item}</Typography>
                   </Box>
                      <img src={GreenTik} width={20} alt="GreenTik" />
                    </li>
                  </Box>
                );
              })}
            </ul>
            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Typography style={{fontSize: '1.4rem'}}>Sub Total</Typography>
              <Typography style={{fontSize: '1.4rem'}}>&#8377; 101</Typography>
            </Box>
            <hr />
            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Typography style={{fontSize: '1.4rem'}}>Total</Typography>
              <Typography style={{fontSize: '1.4rem'}}>&#8377; 1001</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobCardPreview;
