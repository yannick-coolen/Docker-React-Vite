import "./App.css";
import Nav from "./component/Nav";
import Container from "./component/Container";

export default function App() {


  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Container size="default-size">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil
          corrupti maxime nostrum assumenda nemo doloremque harum temporibus
          totam, sint et voluptas odit, alias beatae quisquam veniam magni,
          culpa quas?
        </Container>
      </main>
    </>
  );
}

