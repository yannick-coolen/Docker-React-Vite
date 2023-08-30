import { Outlet } from "react-router-dom";

// Components
import Nav from "../component/Nav";
import Container from "../component/Container";

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Container size="full-size" borderlineStyle="none">
          <section>
            <div style={{ marginTop: "2rem" }}>
              <Outlet />
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
