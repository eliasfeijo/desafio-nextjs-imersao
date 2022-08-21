import { Box, Divider, Typography } from "@mui/material";
import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { Comment, Post } from "../../model";

interface PostProps {
  data?: { post: Post; comments: Comment[] };
}

const Post: NextPage<PostProps, {}> = ({ data }) => {
  if (!data) {
    return (
      <Box sx={{ mt: 3 }}>
        <Head>
          <title>Post não encontrado | Desafio Next.js Imersão</title>
        </Head>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Post não encontrado
        </Typography>
      </Box>
    );
  }

  const { post, comments } = data;

  const renderPostBody = () => {
    return post.body.split("\n").map((line, index) => {
      return (
        <Typography key={index} variant="body1" component="p" sx={{ mt: 2 }}>
          {line}
        </Typography>
      );
    });
  };

  const renderComments = () => {
    return comments.map((comment) => {
      return (
        <Box key={comment.id} sx={{ mt: 2 }}>
          <Typography variant="h5">
            {comment.email} - {comment.name}
          </Typography>
          <Typography variant="body1" component="p">
            {comment.body}
          </Typography>
        </Box>
      );
    });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Head>
        <title>{post.title} | Desafio Next.js Imersão</title>
      </Head>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        {post.title}
      </Typography>
      <Box sx={{ mt: 3 }}>{renderPostBody()}</Box>
      <Divider sx={{ my: 3 }} />
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Comentários
      </Typography>
      <Box sx={{ mt: 3 }}>{renderComments()}</Box>
    </Box>
  );
};

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  try {
    const responsePost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );
    const post = responsePost.data;

    try {
      const responseComments = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params?.id}/comments`
      );
      const comments = responseComments.data;
      return { props: { data: { post, comments } } };
    } catch (e) {
      return { props: { data: { post, comments: [] } } };
    }
  } catch (e) {
    return { props: { data: null } };
  }
}

export default Post;
