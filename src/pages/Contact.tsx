import Container from "../components/Container";
import { Form } from "../components/Form";
import { Grid } from "../components/Grid";

export default function Contact() {
  return (
    <Container>
      <Grid>
        <Grid.Element>
          <Grid width="small">
            <Form>
              <Grid>
                <Form.Header content={"hello"} textUnderline />
                <Form.Input id={"firstname"} content={"Firstname"} />
                <Form.Input id={"lastname"} content={"Lastname"} />
                <Form.TextArea id={"text"} content={"text"}/>
              </Grid>
            </Form>
          </Grid>
        </Grid.Element>
      </Grid>
    </Container>
  );
}
