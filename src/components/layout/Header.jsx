import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              component={"h1"}
              fontFamily={"vazir"}
              variant="h5"
              flex={1}
            >
              <Link to={"/"} style={{textDecoration:"none" , color:"white"}}>
              پروژه وبلاگ
              </Link>
            </Typography>
            <AcUnitIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
