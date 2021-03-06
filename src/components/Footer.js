import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Jazz-hash">
        Muhammad Jazzel Mehmood - jazzelmehmood4@gmail.com -
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Covid-19 Analysis
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          As covid-19 is spread all around the world. This analysis will guide you how much this virus is effecting our world.
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
