import React from 'react'
import { TopMovie } from './TopMovie'
import { AiFillFolder } from 'react-icons/ai'

export const TopRated = () => {
  return (
    <div className="mx-12">
    <div className="pt-5 flex gap-2">
      <p className="pt-1 text-white md:text-xl">
        <AiFillFolder />
      </p>
      <h1 className="font-bold text-white md:text-xl">Top Rated</h1>
    </div>
    <div className="">
      <TopMovie />
    </div>
  </div>
  )
}
