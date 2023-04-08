import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/query";
import Loader from "../shared/Loader";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Container, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import sanitize from "sanitize-html";
import Commentform from "../comment/Commentform";
import Comments from "../comment/Comments";

const Blogpage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_BLOG_INFO, {
    variables: {
      slug,
    },
  });
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg">
          <Grid Container>
            <Grid
              xs={12}
              mt={9}
              display="flex"
              justifyContent={"space-between"}
            >
              <Typography component={"h2"} variant={"h4"} color="blueviolet">
                {data.post.title}
              </Typography>
              <ArrowBackRounded
                onClick={() => navigate(-1)}
                sx={{ cursor: "pointer" }}
              />
            </Grid>
            <Grid xs={12} mt={6}>
              <Box
                component={"img"}
                src={data.post.coverpic.url}
                alt={data.post.slug}
                width="100%"
                height={"80vh"}
                borderRadius={6}
              />
            </Grid>
            <Grid xs={12} mt={7} display="flex" alignItems="center">
              <Avatar
                src={data.post.createdBy.picture}
                sx={{ width: "80px", height: "80px", marginLeft: 2 }}
              />
              <Typography component={"p"} variant="h5">
                {data.post.createdBy.name}
              </Typography>
            </Grid>
            <Grid xs={12} mt={5}>
              <Box
                component={"div"}
                dangerouslySetInnerHTML={{
                  __html: sanitize(data.post.content.html),
                }}
              ></Box>
            </Grid>
            <Grid xs={12}>
              <Comments slug={slug} />
            </Grid>
            <Grid xs={12}>
              <Commentform slug={slug} />
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Blogpage;
