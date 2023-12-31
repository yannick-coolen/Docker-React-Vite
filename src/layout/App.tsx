import { Outlet } from 'react-router-dom';

// Components
import Nav from '../components/Nav';

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <article>
          <div style={{ marginTop: '2rem' }}>
            <Outlet />
          </div>
        </article>
      </main>
    </>
  );
}
