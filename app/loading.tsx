"use client";
import CircularProgress from "@mui/material/CircularProgress";

const loading = () => {
  return (
    <div
      className="loding"
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "transform(-50%,-50%)",
        }}
      />
    </div>
  );
};

export default loading;
