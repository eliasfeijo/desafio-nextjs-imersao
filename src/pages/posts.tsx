import {
  Box,
  Pagination,
  Paper,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";

const POSTS_PER_PAGE = 10;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  data: Post[];
}

const Posts: NextPage<PostsProps, {}> = ({ data }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const renderPosts = () => {
    if (!data || data.length === 0) {
      return (
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Nenhum post encontrado
        </Typography>
      );
    }
    return [...data]
      .reverse()
      .slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
      .map((post) => {
        let { body } = post;
        if (body.length > 100) {
          body = body.substring(0, 100) + "...";
        }
        return (
          <Grid key={post.id} xs={12} md={6}>
            <Paper
              sx={{
                p: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                {post.title}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                {body}
              </Typography>
            </Paper>
          </Grid>
        );
      });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Head>
        <title>Posts | Desafio Next.js Imersão</title>
      </Head>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Posts
      </Typography>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {renderPosts()}
      </Grid>
      <Pagination
        count={POSTS_PER_PAGE}
        page={page}
        onChange={handlePageChange}
        sx={{ my: 5, float: "right" }}
      />
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  const { data } = res;

  return { props: { data } };
}

export default Posts;
