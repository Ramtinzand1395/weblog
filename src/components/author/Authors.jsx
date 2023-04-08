import { useQuery } from "@apollo/client";
import { Avatar, Divider, Typography } from "@mui/material";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/query";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

const Authors = () => {
  const { data, loading } = useQuery(GET_AUTHORS_INFO);
  if (loading) {
    return <Loader />;
  }
  const { authors } = data;
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
        >
          {authors.map((author, index) => (
            <div key={author.id}>
              <Grid  xs={12} padding={2} >
                <Link to={`/authors/${author.slug}`} style={{textDecoration:"none"}}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
                    <Typography
                      component={"p"}
                      variant="body1"
                      color={"GrayText"}
                    >
                      {author.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {index !== authors.length - 1 && (
                <Grid xs={12}>
                  <Divider variant="middle" />
                </Grid>
              )}
            </div>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Authors;
