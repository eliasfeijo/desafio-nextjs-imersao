import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import Link from "../components/Link";
import { ActionTypes, AppContext } from "../contexts/AppContext";

const Home: NextPage = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_CURRENT_PAGE,
      page: "home",
    });
  }, [dispatch]);

  return (
    <Box sx={{ mt: 3 }}>
      <Head>
        <title>Home | Desafio Next.js Imersão</title>
      </Head>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Home
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
        <Link href="/posts">Posts</Link>
      </Box>
    </Box>
  );
};

export default Home;
