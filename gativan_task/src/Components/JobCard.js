import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";


// const useStyles = makeStyles({
//   packageWrapper: {
//     display: 'flex',
//   }
// });

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const JobCard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const classes = useStyles();
  return (
    <>
      <Box sx={{ typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Job Card" value="1" />
              <Tab label="Invoice" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography style={{ fontWeight: "bold" }}>Bike Package</Typography>

            <Box style={{display:'flex', alignItems:'center', margin: '5px 0px'}}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 400 }}
              sm={{ width: 300 }}

              renderInput={(params) => <TextField {...params} label="Basic periodic Maintenence" />}
            />
            <Button variant="contained" style={{width: '120px', height: '53px', margin: '0px 10px', fontSize: '1.1rem'}} startIcon={<GrFormAdd size={30} />}>
              Add
            </Button>
            <MdDelete size={40} style={{color: 'red', cursor: 'pointer'}}/>
            </Box>
            <Box style={{display:'flex', alignItems:'center',  margin: '5px 0px'}}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 400 }}
              sm={{ width: 300 }}

              renderInput={(params) => <TextField {...params} label="Germ Clean" />}
            />
            <Button variant="contained" style={{width: '120px', height: '53px', margin: '0px 10px', fontSize: '1.1rem'}} startIcon={<GrFormAdd size={30} />}>
              Add
            </Button>
            <MdDelete size={40} style={{color: 'red', cursor: 'pointer'}}/>
            </Box>

          </TabPanel>
          <TabPanel value="2"></TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default JobCard;
