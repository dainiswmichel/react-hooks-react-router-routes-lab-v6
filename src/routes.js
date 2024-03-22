// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'found';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Home from './pages/Home';
import Movie from './pages/Movie';

const BrowserRouter = createBrowserRouter({
 routes: [
    {
      path: '/',
      Component: Home,
    },
    {
      path: '/actors',
      Component: Actors,
    },
    {
      path: '/directors',
      Component: Directors,
    },
    {
      path: '/movie/:id',
      Component: Movie,
    },
 ],
});

ReactDOM.render(
 <BrowserRouter>
    <RouterProvider>
      {/* Application components go here */}
    </RouterProvider>
 </BrowserRouter>,
 document.getElementById('root')
);