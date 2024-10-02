import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Fetchhold from './pages/Fetchhold';
import Fetching from './pages/Fetching';
import AppLayout from './components/layout/AppLayout'

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fetchhold',
          element: <Fetchhold />
        },
        {
          path: '/fetching',
          element: <Fetching />
        },
      ],
    },
  ]);



  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
