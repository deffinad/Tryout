import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sultan",
        element: <h1>Sulthan</h1>,
    },
]);