import Container from '../components/Container';
import { Grid } from '../components/Grid';
import Avatar from '../components/UI/Avatar';

export default function Home() {
  return (
    <Container>
      <Grid>
        <Avatar />
      </Grid>
      <Grid>
        <Grid.Element bordered background>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil
          corrupti maxime nostrum assumenda nemo doloremque harum temporibus
          totam, sint et voluptas odit, alias beatae quisquam veniam magni,
          culpa quas?
        </Grid.Element>
      </Grid>
      <Grid width='small'>
        <Grid.Element bordered background>
          test
        </Grid.Element>
        <Grid.Element bordered background>
          test
        </Grid.Element>
      </Grid>
    </Container>
  );
}
