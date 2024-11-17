import { useSearchParams } from 'next/navigation'
import React from 'react'

const Authorization = () => {
    const code = useSearchParams().get('code')
     
  return (
    <div>
        {code}
    </div>
  )
}

export default Authorization
