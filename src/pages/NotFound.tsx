// Component
import Container from "../components/Container";
import { Grid } from "../components/Grid";

import classes from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <Container textPosition="middle">
      <Grid>
        <Grid.Element bordered background>
          <h2 className={classes.underline}>Page not found &#128577;</h2>
          <br />
          <div>
            <p>
              The page you are looking for might have been removed, <br /> had
              its name changed, or is temporarily unavailable.
            </p>
            <br />
            <p>
              Please check the URL for any mistakes or click the button below to
              return to the homepage.
            </p>
          </div>
          <br />
          <div style={{ margin: "1rem" }}>
            <a href="/" className={classes["navigator-link"]}>
              Homepage
            </a>
          </div>
        </Grid.Element>
      </Grid>
    </Container>
  );
}
