import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css'
import Home from './components/home';
import Cart from './components/cart';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {store} from './redux/app/store'
import { Auth0Provider } from '@auth0/auth0-react';


const router=  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-71wu8savgiikubxi.us.auth0.com"
    clientId="CZeqkg86jUsz7d0oaz6E91HGkD5o6na6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<Provider store={store}>
<RouterProvider router={router}/>
</Provider>,
</Auth0Provider>
)
