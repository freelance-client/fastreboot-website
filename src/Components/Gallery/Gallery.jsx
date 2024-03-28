import React from 'react'
import banner1 from '../../assets/Img/FastrebootImg/banner1.jpg'
import banner2 from '../../assets/Img/FastrebootImg/banner2.jpg'
import banner3 from '../../assets/Img/FastrebootImg/banner3.jpg'
import banner4 from '../../assets/Img/FastrebootImg/banner4.jpg'

const Gallery = () => {
  return (
    <div className='container mx-auto w-full bg-greeen-600 py-10 px-2'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 items-center justify-items-center'>
      <div>
        <h1 className='text-gray-600  font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-center'>    
            Stay updated with our <br/> latest <span className=' text-green-500'> events.</span>
        </h1> 
        <p className='font-semibold text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl mb-5 text-center px-5'>access to invaluable resources, and joining us on our journey towards collective healing and growth. Don't miss out on the chance to participate in these transformative moments </p>
            </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={banner1}
      alt=""
    />
  </div>
  <div>
    <img    
      className="h-auto max-w-full rounded-lg"
      src={banner2}
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={banner3}
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={banner4}
      alt=""
    />
  </div>
  
</div>

        
      </div>
    </div>
  )
}

export default Gallery
