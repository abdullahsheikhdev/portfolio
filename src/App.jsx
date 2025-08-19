import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MailRouter from "./routes/MailRouter";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MailRouter />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="skills" element={<Home />} />
        <Route path="education" element={<Home />} />
        <Route path="experience" element={<Home />} />
        <Route path="projects" element={<Home />} />
        <Route path="contact" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
