// src/pages/Product.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Clothing', slug: 'clothing' },
  { name: 'Books', slug: 'books' },
  { name: 'Home & Kitchen', slug: 'home-kitchen' },
  { name: 'Toys', slug: 'toys' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Beauty', slug: 'beauty' },
  { name: 'Automotive', slug: 'automotive' },
  { name: 'Garden', slug: 'garden' },
  { name: 'Music', slug: 'music' },
]

const Product = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/product/${category.slug}`}
            className="block" // Make the entire card clickable
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 text-center border border-gray-200">
              <div className="text-xl font-semibold mb-2">{category.name}</div>
              <p className="text-gray-500 text-sm">
                Explore our {category.name.toLowerCase()} selection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Product
