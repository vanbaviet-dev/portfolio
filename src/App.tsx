import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Korean from "./pages/doc/Korean";
import Vocabulary from "./pages/doc/Vocabulary";
function App() {
  const Layout = () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col font-sans min-h-dvh justify-between">
          <div className="w-full">
            <NavBar />
          </div>
          <div className="h-full">
            <Outlet />
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <div className="fixed bottom-4 right-4">
          <ModeToggle />
        </div>
        <Toaster />
      </ThemeProvider>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/kr",
          element: <Korean />,
        },
        {
          path: "/kr/:class/vocab",
          element: <Vocabulary />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
