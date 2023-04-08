import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/query";
import Loader from "../shared/Loader";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, Typography } from "@mui/material";

const Comments = ({ slug }) => {
  const { data, loading } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  return loading ? (
    <Loader />
  ) : (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid xs={12} m={2}>
        <Typography component={"p"} variant="h6" color="blue" > نظرات</Typography>
        {
            data.comments.map(comment=>(
                <Grid xs={12} key={comment.id} mt={2} p={2} border="1px silver solid" borderRadius={2} >
                    <Box component={"div"} display="flex" alignItems={"center"} mb={3}>
                        <Avatar >{comment.name[0]}</Avatar>
                        <Typography component={"span"} variant="p" mr={2}>{comment.name}</Typography>
                    </Box>
                    <Typography component={"p"} variant={"body1"}>{comment.text}</Typography>
                </Grid>
            ))
        }
      </Grid>
    </Grid>
  );
};

export default Comments;
