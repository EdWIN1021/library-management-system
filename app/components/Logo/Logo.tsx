import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <Typography
      variant="h4"
      noWrap
      component="a"
      style={{ textAlign: "center", marginBlockStart: "20px" }}
      sx={{
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      Library
    </Typography>
  );
};

export default Logo;
