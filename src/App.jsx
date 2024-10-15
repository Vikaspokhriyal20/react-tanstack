import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Fetchhold from './pages/Fetchhold';
import Fetching from './pages/Fetching';
import AppLayout from './components/layout/AppLayout'
import Movie from './pages/Movie';
import Infinite from './pages/Infinite';

const App = () => {

  // const myArray = ['deep', 1, 2, 3, 4, 'mandeep', 'rahul'];
  // myArray.unshift('hello');
  // console.log(myArray);

  // const userList = ['vikas', 'rohit', 'mandeep', 'sahil', 'arjun', 'pankaj'];
  // const changeList = userList.slice(1, 6);
  // console.log(changeList);



  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
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
        {
          path: '/movie',
          element: <Movie />
        },
        {
          path: '/infinite',
          element: <Infinite />
        },
      ],
    },
  ]);



  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
