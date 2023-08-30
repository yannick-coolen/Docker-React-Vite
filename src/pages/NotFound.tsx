// Component
import Container from "../component/Container";

import classes from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <Container textPosition="middle">
      <h1 className={classes.underline}>Page not found &#128577;</h1>
      <Container borderlineStyle="none">
        <div>
          <p>
            The page you are looking for might have been removed, <br /> had its
            name changed, or is temporarily unavailable.
          </p>
          <br />
          <p>
            Please check the URL for any mistakes or click the button below to
            return to the homepage.
          </p>
        </div>
      </Container>
      <div style={{ margin: "1rem" }}>
        <a href="/" className={classes["navigator-link"]}>
          Homepage
        </a>
      </div>
    </Container>
  );
}
