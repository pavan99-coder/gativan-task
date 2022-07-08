import "./App.css";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import JobCard from "./Components/JobCard";
import { Grid } from "@mui/material";
import JobCardPreview from "./Components/JobCardPreview";
function App() {
  const dashbaord = {};
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ position: "fixed", width: '10%' }}>
          <Drawer />
        </div>
        <div style={{ width: '100%', marginLeft: '75px'}}>
          <Header />
          {/* <div style={{ display: "flex" }}>
            <JobCard />
            <JobCardPreview />
          </div> */}

          <Grid container spacing={5}  style={{width: '100%', display: "flex" }}>
            <Grid sm={12} md={6} style={{margin: '0px auto'}} item><JobCard /></Grid>
            <Grid sm={12} md={6} item><JobCardPreview /></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default App;
