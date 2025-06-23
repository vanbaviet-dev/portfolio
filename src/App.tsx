import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
function App() {
  const Layout = () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col font-sans ">
          <div className="w-full">
            <NavBar />
          </div>
          <>
            <Outlet />
          </>
          <Toaster />
          <div className="fixed bottom-4 right-4">
            <ModeToggle />
          </div>
        </div>
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
