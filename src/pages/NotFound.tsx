
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound
