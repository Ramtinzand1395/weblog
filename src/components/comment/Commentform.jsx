import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutation";
import { toast } from "react-toastify";

const Commentform = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });
  const canSave = [name, email, text].every(Boolean);
  const sendhandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warning("فیلد ها را به درستی پر کنید.");
    }
    if (data || !loading) {
      toast.success("نظر شما ارسال شد و منتظر تایید میباشد.");
    }
  };
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.5) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
        mb: 5,
      }}
    >
      <Grid xs={12} m={2}>
        <Typography component={"p"} variant={"h6"} color="blue">
          فرم ارسال کامنت
        </Typography>
        <Grid xs={12} mt={2}>
          <TextField
            label="نام کار بری"
            variant={"outlined"}
            sx={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid xs={12} mt={2}>
          <TextField
            label=" ایمیل "
            variant={"outlined"}
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid xs={12} mt={2}>
          <TextField
            label=" متن کامنت "
            variant={"outlined"}
            sx={{ width: "100%" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={4}
          />
        </Grid>
        <Grid xs={12} mt={2}>
          {loading ? (
            <Button variant="contained" disabled={true}>
              در حال ارسال
            </Button>
          ) : (
            <Button
              variant="contained"
              type="submit"
              onClick={sendhandler}
              disabled={!canSave}
            >
              ارسال نظر
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Commentform;
