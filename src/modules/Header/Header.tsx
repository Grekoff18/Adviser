import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@material-ui/core';
import HeaderNav from "./HeaderNav";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "white"
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    menuButton: {
      marginRight: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold",
      marginRight: theme.spacing(2)
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Container className={classes.headerContainer}>
            <Typography variant="h4" className={classes.title} color="primary">
              Adviser
            </Typography>
            <HeaderNav></HeaderNav>
            <Button color="inherit">Login</Button> 
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}