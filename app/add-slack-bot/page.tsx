"use client"
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const Authorization = () => {
    const code = useSearchParams().get('code')
     
  return (
    <div>
        <Suspense>
            Your code: {code}
        </Suspense>
    </div>
  )
}

export default Authorization
