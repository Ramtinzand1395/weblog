import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box bgcolor={"gray"} height={"70px"} textAlign="center" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Typography  variant="body1">طراحی شده توسط ramtin.zand</Typography>
        <Typography component={"a"} variant="a" color={"blue"}>
          email  :  ramtinzand6@gmail.com
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
