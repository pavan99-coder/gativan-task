import React from 'react'
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { MdOutlineNotificationsNone,MdKeyboardArrowDown } from 'react-icons/md';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const Header = () => {
const headerProfile={
    display:"flex",
    alignItems:"center",
}

const profileName={
    fontSize:"1rem",
    fontWeight:"bold",
    display:"flex",
    alignItems:"center"
}


    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    const breadcrumbs = [
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
         orders Details
        </Link>,
        <Typography key="3" color="text.primary">
         Job Card
        </Typography>,
      ];
  return (
    <>
    <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:" 2px 3px 9px 0px #c5b9b9 ",height:"60px",padding:"0 1rem"}}>
    <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>

<div style={headerProfile}>
    <MdOutlineNotificationsNone size={25}/>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{width:"30px",height:"30px", margin:"0 0.5rem"}} />
    <span style={profileName}>dr motion <MdKeyboardArrowDown/></span>
</div>
    </Box>

    </>
  )
}

export default Header