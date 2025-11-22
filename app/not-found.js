import Link from 'next/link'
import React from 'react'

export default function not_found() {
  return (
    <div className='flex justify-center items-center w-full h-full pt-20'>
      <h1>404 Not Found</h1>
      <Link href="/">Go Back to Home</Link>
    </div>
  )
}
