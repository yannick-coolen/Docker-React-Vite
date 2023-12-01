import Container from '../components/UI/Container';
import { Form } from '../components/UI/Form';
import { Grid } from '../components/UI/Grid';

import classes from './Contact.module.scss';

export default function Contact() {
  const submit = (event: Event) => {
    event.preventDefault();
  }

  return (
    <Container>
      <Grid>
        <Grid.Element>
          <Grid width='small'>
            <Form onSubmit={submit}>
              <Grid>
                <Form.Header content={'hello'} textUnderline />
                <Form.Input id={'firstname'} content={'Firstname'} />
                <Form.Input id={'lastname'} content={'Lastname'} />
                <Form.TextArea
                  id={'text'}
                  content={'Enter message'}
                  className={classes.textarea}
                />
                <button type='submit'>submit</button>
              </Grid>
            </Form>
          </Grid>
        </Grid.Element>
      </Grid>
    </Container>
  );
}
