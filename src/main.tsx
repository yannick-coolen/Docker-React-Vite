import ReactDOM from 'react-dom/client';
import './main.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
