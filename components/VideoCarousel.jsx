import React from 'react'
import { hightlightsSlides } from '@/constants/constants'

const VideoCarousel = () => {
  return (
    <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list, index) => (
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='video-carousel_container'>
                       <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>

                       </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default VideoCarousel