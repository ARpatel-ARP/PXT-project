import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/ui/ThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import { Login } from './pages/Login';
import { AuthenticatedUser } from './components/ProtectedRoute';
import MainLayout from './components/MainLayout';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"login",
        element:(
          <AuthenticatedUser>
            <Login/>
          </AuthenticatedUser>
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
