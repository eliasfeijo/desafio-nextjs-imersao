import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Head>
        <title>Home | Desafio Next.js Imersão</title>
      </Head>
      <Container component="main">
        <Typography variant="h1">Desafio Next.js Imersão</Typography>
      </Container>
    </Box>
  );
};

export default Home;
