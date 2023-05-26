"use client";
import Image from "next/image";

const Search = () => {
  return (
    <div
      style={{
        width: "1200px",
        height: "500px",
        position: "relative",
        objectFit: "contain",
        marginBottom: "40px",
      }}
    >
      <Image src="/images/bg-search1.jpg" alt="..." fill priority />
    </div>
  );
};

export default Search;
