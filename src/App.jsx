import React from 'react'
import './App.css'
import Header from './components/Header'
import data from './data.js'
import Listing from './components/Listings.jsx'
function App() {
const listings=data.map(listing=><Listing 
{...listing}
/>)
  return (
<div className='w-1/2 mx-auto'>
<Header />
{listings}
</div>
  )
}

export default App
