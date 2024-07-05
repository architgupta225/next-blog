import React from 'react'
import { Pagination } from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async () => {
  const data = await getData()
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