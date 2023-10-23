import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Albums } from './pages/Albums'
import { AlbumType } from './types/AlbumType'

function App() {
  const api = 'https://jsonplaceholder.typicode.com'

  

  // console.log(albums)
  return (
    <div className=''>
      <Header />

      <Albums />

      <Footer />
    </div>
  )
}

export default App

// API: 
// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/albums/1
// https://jsonplaceholder.typicode.com/albums/1/photos
// https://jsonplaceholder.typicode.com/photos/1