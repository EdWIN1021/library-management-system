"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { openRegister, openLogin } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/types";
import Search from "./Search";

function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data: session } = useSession();
  const user = session?.user as User;

  const imageUrl = useMemo(() => {
    return user?.image || "/images/placeholder.jpg";
  }, [user]);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <span className="tracking-[0.3rem] font-extrabold text-xl mr-5 text-[white] cursor-pointer">
          Library
        </span>

        <Search />

        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar
                alt="..."
                src={
                  user?.provider === "library"
                    ? user.image
                      ? `https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2F${user?.image}?alt=media&token=12c1b750-d60c-4123-82ce-c4f76baf5764`
                      : "/images/placeholder.jpg"
                    : imageUrl
                }
              />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {session?.user ? (
              <div>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link href={"/account"}>Account</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link href={"/borrow"}>My shelf</Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorElUser(null);
                    signOut().then(() => router.push("/"));
                  }}
                >
                  <Typography>logout</Typography>
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem
                  onClick={() => {
                    setAnchorElUser(null);
                    dispatch(openLogin());
                  }}
                >
                  Login
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorElUser(null);
                    dispatch(openRegister());
                  }}
                >
                  <Typography textAlign="center">Signup</Typography>
                </MenuItem>
              </div>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
