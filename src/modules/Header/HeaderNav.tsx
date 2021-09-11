import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonGroup, Button } from '@material-ui/core';
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      display: "flex",
      alignItems: "center",
    },
    navBarItem: {
      padding: "10px 20px",
      color: "black",
      fontWeight: 500,

      "&:hover": {
        padding: "10px 19px",
        fontWeight: "bold",
        transition: "all 0.2s",
        fontSize: "16px",
        borderLeft: "1px solid black",
        borderRight: "1px solid black"
      }
    }
  }),
);

export default function Header() {
  const classes = useStyles();
  const [navBar, setNavBar] = React.useState([
    { title: "Home", link: "/" },
    { title: "About", link: "/about"},
    { title: "Advise", link: "/advise"}
  ]);

  return (
    <ul className={classes.navBar}>
      {navBar.map(el => (
        <li key={el.title}>
          <Link href={el.link}>
            <a className={classes.navBarItem}>{el.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}