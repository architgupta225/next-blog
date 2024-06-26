import React from 'react'
import { Pagination } from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

const CardList = () => {
  return (
    <div className='flex-[5]'>
      <h1 className='mb-12 text-3xl font-bold'>
        Recent Posts
      </h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}

export default CardList