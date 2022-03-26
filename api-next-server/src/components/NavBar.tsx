import * as React from "react";

// mui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  alpha,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar
        variant="dense"
        sx={theme => ({
          maxWidth: theme.breakpoints.values.md,
          margin: "0 auto",
          width: "100%",
        })}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Template
        </Typography>

        <Box
          sx={theme => ({
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
              marginLeft: theme.spacing(1),
              width: "auto",
            },
          })}
        >
          <Box
            sx={theme => ({
              padding: theme.spacing(0, 2),
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <SearchIcon />
          </Box>
          <InputBase
            sx={theme => ({
              color: "inherit",
              "& .MuiInputBase-input": {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create("width"),
                width: "100%",
                [theme.breakpoints.up("sm")]: {
                  width: "12ch",
                  "&:focus": {
                    width: "20ch",
                  },
                },
              },
            })}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
