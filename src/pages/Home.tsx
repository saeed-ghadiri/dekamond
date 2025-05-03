// src/pages/Home.tsx
import React from 'react'
import homeImage from '../assets/images/home.jpg'

const Home = () => {
  return (
    <div
      className="relative h-[calc(100vh-64px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Overlay (optional, for better text contrast) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content centered on the image */}
      <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
          <p className="text-lg md:text-xl">
            Discover amazing products and experiences with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
