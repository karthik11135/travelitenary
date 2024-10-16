import React from 'react'
import {Londrina_Sketch} from 'next/font/google'

const lodrina = Londrina_Sketch({
  weight: "400",
  subsets: ['latin']
})

const NotFound = () => {
  return (
    <div className={`${lodrina.className} my-20 text-teritiary text-5xl font-light text-center`}>Hi, You should not be here. Something went on your side</div>
  )
}

export default NotFound