import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

const Posts: NextPage = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Head>
        <title>Posts | Desafio Next.js Imersão</title>
      </Head>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Posts
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Post 1</p>
        <p>Post 2</p>
        <p>Post 3</p>
      </Box>
    </Box>
  );
};

export default Posts;
