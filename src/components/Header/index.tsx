import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { useRouter } from "next/router";

const HEADER_TITLE = "Blog";

const Header = () => {
  const router = useRouter();

  return (
    <Box>
      <Container
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pt: 5,
          }}
        >
          {router.pathname !== "/" && (
            <IconButton
              size="large"
              sx={{ mr: 2 }}
              onClick={() => router.back()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography
            variant="h1"
            sx={{ textAlign: "center", color: "primary.main" }}
          >
            {HEADER_TITLE}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
      </Container>
      <AppBar position="static" sx={{ display: { xs: "block", md: "none" } }}>
        <Toolbar>
          {router.pathname !== "/" && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={() => router.back()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {HEADER_TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;