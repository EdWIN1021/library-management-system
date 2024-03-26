"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className="flex-1">
      <div className="relative max-w-[300px]">
        <input
          className="py-2 px-3 rounded text-black w-full"
          value={search}
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <IconButton
          className="absolute right-0"
          onClick={() => {
            router.push(`category/${search.toLowerCase()}`);
            setSearch("");
          }}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Search;
