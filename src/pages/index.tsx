import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Head>
        <title>Home | Desafio Next.js Imersão</title>
      </Head>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Home
      </Typography>
    </Box>
  );
};

export default Home;
