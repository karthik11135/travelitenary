"use client"

import React from 'react'
import { motion } from 'framer-motion'

const NavbarMotionWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div
    initial={{ width: 0, scale: 0 }}
    animate={{ width: '50%', scale: 1 }}
    transition={{
      duration: 0.2,
      type: 'spring',
      stiffness: 75,
    }}
    className=" border-secondary bg-primary rounded-full px-2 py-1.5 my-4 flex w-3/6 mx-auto"
  >
    {children}
  </motion.div>
  )
}

export default NavbarMotionWrapper