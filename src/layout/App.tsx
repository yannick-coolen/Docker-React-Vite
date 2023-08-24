import Nav from "../component/Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
