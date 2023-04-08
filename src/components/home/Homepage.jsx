import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Blogs from "../blog/Blogs";
import Authors from "../author/Authors";
import { Container, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
          <Grid xs={12} md={3} mt={3}>
            <Typography component={"h3"} variant={"h5"} >
                نویسندگان
            </Typography>
            <Authors />
          </Grid>
          <Grid xs={12} md={9} mt={3}>
          <Typography component={"h3"} variant={"h5"}>
                مقالات
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;
