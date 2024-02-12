import EjemploPage from "./EjemploPage"
import MemoriaPage from "./MemoriaPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MemoriaPage />
    },
    {
        path: "/ejemplo",
        element: <EjemploPage />
    }
])

const App = () => {
    return <div>
        <RouterProvider router={router} />
    </div>
}

export default App