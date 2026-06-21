import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/ui/ThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import { Login } from './pages/Login';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Mainlayout/>,
    children:[
      {
        path:"login",
        element:(
          <AuthenticatedUser/>
        )
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <RouterProvider router={appRouter} />
      </main>
    </ThemeProvider>
  );
}

export default App
