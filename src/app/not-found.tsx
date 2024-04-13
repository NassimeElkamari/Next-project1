import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1 className='text-5xl'>Not found</h1>
        <p>Sorry , the page you are looking for does not exist.</p>
        <Link href="/" className='text-red-700'>Go to Home Page</Link>
    </div>
  )
}

export default NotFound
