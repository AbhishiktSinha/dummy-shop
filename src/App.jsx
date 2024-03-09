import { Suspense, lazy, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'material-symbols'

export default function App() {
  
  const HomePage = lazy( ()=>import('../src/features/HomePage/index'));
  const CartPage = lazy( ()=>import('../src/features/CartPage/index'))
  const WishlistPage = lazy( ()=> import('../src/features/WishlistPage/index'))

  return (
    <div id="main">

        <Routes>
          
          <Route path="" element={<Suspense><HomePage/></Suspense>}/>
          <Route path="/home" element={<Suspense><HomePage/></Suspense>}/>
          <Route path="/cart" element={<Suspense><CartPage/></Suspense>}/>
          <Route path='/wishlist' element={<Suspense><WishlistPage/></Suspense>} />

        </Routes>

    </div>
  )
}

