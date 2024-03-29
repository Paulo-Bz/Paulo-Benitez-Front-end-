
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import DefaultLayout from './layouts/defaultLayout.jsx'
import { rutas } from './routes.jsx';

const App = () => {

    return (
        <AuthProvider>
            <DefaultLayout>
                <RouterProvider router={rutas} />
            </DefaultLayout>
        </AuthProvider>
    )
}

export default App;