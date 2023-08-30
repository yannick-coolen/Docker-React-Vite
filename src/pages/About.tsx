import Container from "../component/Container";
import { Body, Head, Table } from "../component/Table";

export default function About() {
  return (
    <Container>
      <Table bordered whitespace={1}>
        <Table.Head>
          <Head.Cell bordered>Hello</Head.Cell>
        </Table.Head>
        <Table.Body>
          <Body.Cell>Name</Body.Cell>
          <Body.Cell>Yan Nick</Body.Cell>
        </Table.Body>
      </Table>
    </Container>
  );
}
