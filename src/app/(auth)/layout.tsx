import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout