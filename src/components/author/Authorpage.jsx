import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/query";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Container, Typography } from "@mui/material";
import sanitize from "sanitize-html";
import Blogcard from "../shared/Blogcard";
import Loader from "../shared/Loader";
const Authorpage = () => {
  const { slug } = useParams();
  const { data, loading } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });
  if (loading) return <Loader />;
  const { author : {name , field , description , avatar , posts} } = data;
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth={"lg"}>
          <Grid container mt={10}>
            <Grid
              xs={12}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Avatar
                src={avatar.url}
                sx={{ width: 250, height: 250 }}
              />
              <Typography component={"h3"} variant={"h5"} mt={4}>
                {name}
              </Typography>
              <Typography
                component={"p"}
                variant={"h5"}
                mt={2}
                color="GrayText"
              >
                {field}
              </Typography>
            </Grid>
            <Grid xs={12} mt={5}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize(description.html),
                }}
              ></div>
            </Grid>
            <Grid xs={12} mt={6}>
              <Typography component={"h3"} variant={"h5"}>
                مقالات {name}
              </Typography>
              <Grid container spacing={2} mt={2}>
                {posts.map((post) => (
                  <Grid xs={12} sm={6} md={4} key={post.id}>
                    <Blogcard post={post} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Authorpage;
