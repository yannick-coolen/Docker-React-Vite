import Container from "../component/Container";

import classes from './NotFound.module.scss'

export default function NotFound() {
  return (
    <Container textPosition="middle">
      <h1 className={classes.underline}>Page not found</h1>
      <p>The page you are looking for might have been removed, <br/> had its name changed, or is temporarily unavailable.</p>
      <br />
      <p>Please check the URL for any mistakes or return to the <a href="/">homepage</a>.</p>
    </Container>
  );
}
