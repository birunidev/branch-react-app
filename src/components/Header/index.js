import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useAuth from "../../hooks/useAuth";
import NavItem from "./NavItem";

export default function Header({ activePage }) {
  const [auth] = useAuth();

  return (
    <header className="header">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Typography variant="h1" className="logo">
              LOGO.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <nav>
              <ul className="nav-items">
                <NavItem
                  className={activePage === "Home" && "active"}
                  to="/"
                  type="link"
                  label="Home"
                />
                <NavItem
                  className={activePage === "Branch" && "active"}
                  to="/branch"
                  type="link"
                  label="Branch"
                />
                {!auth ? (
                  <NavItem to="/login" type="button" label="Login" />
                ) : (
                  <NavItem to="/logout" type="button" label="Logout" />
                )}
              </ul>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
