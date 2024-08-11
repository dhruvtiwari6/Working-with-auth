import { createBrowserRouter , createRoutesFromElements, Route , RouterProvider } from "react-router-dom"
import LoginPage from "./pages/loginPage"
import MainPage from "./pages/mainPage"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<LoginPage/>}>
      <Route path = 'main' element = {<MainPage/>}/>
      </Route>
    )
  )

  return (
    <>
         <RouterProvider router= {router}/>
    </>
  )
}

export default App
