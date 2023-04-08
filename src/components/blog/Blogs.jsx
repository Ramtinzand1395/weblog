import React from "react";
import { useQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2";
import { GET_BLOGS_INFO } from "../../graphql/query";
import Blogcard from "../shared/Blogcard";
import Loader from "../shared/Loader";
const Blogs = () => {
  const { data, loading, error } = useQuery(GET_BLOGS_INFO);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {data.posts.map((post) => (
            <Grid xs={12} sm={6} md={4} key={post.id}>
              <Blogcard post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Blogs;
