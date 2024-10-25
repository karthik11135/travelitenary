"use client"

import React from 'react'
import { motion } from 'framer-motion'

const NavbarMotionWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div
    initial={{ scale: 0 }}
    animate={{scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 100,
    }}
    className=" border-secondary bg-primary rounded-full px-2 py-1.5 my-4 flex w-3/6 mx-auto"
  >
    {children}
  </motion.div>
  )
}

export default NavbarMotionWrapper