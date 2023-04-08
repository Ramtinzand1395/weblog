import { Box } from "@mui/material";
import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <Box
      width={100}
      height={100}
      display={"flex"}
      justifyContent={"center"}
      padding={20}
    >
      <Triangle
        height="100"
        width="100"
        color="red"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </Box>
  );
};

export default Loader;
