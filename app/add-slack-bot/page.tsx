"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Authorization = () => {
    const code = useSearchParams().get('code')
     
  return (
    <div>
        {code}
    </div>
  )
}

export default Authorization
