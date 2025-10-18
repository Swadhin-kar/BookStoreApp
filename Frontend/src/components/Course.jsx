import React, { useEffect } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'

const Course = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
    fetch('/list.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
  }, [])

  console.log(data)
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

        <div className='mt-28 text-center justify-center</div>'>
          <h1 className='text-2xl md:text-4xl'>We are delighted to have you<span className='text-pink-500'> Here! :)</span></h1>

          <p className='mt-4 max-w-3xl mx-auto'>Welcome to our Bookstore! Discover a curated selection of books and courses designed to inspire, educate, and entertain. Whether you're looking for the latest bestsellers, timeless classics, or skill-building courses, we have something for every reader and learner. Dive into new genres, expand your knowledge, and connect with a community passionate about reading and personal growth.</p>

          <Link to = '/'>
          <button className='bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md mt-4'>Back</button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2'>
          {
            data.map((item) => (
              <div key={item.id} className='flex justify-center'>
                <div className='w-full max-w-xs'>
                  <Cards item={item} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
