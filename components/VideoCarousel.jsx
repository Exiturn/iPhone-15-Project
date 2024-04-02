import React from 'react'
import { hightlightsSlides } from '@/constants/constants'

const VideoCarousel = () => {
  return (
    <>
        <div className='flex items-center pb-32 sm:px-10'>
            {hightlightsSlides.map((list, index) => (
                <div key={list.id} id='slider' className='sm:pr-20'>
                    <div className='video-carousel_container'>
                       <div className='w-full h-full flex-center sm:rounded-3xl overflow-hidden bg-black'>
                            <video id='video' muted loop preload='auto' playsInline={true}>
                                <source src={list.videoSrc} type='video/mp4'/>
                            </video>
                       </div>

                       <div className='absolute top-10 left-[10%] sm:left-10 z-10'>
                            {list.textLists.map((text) => (
                                <p key={text} className='md:text-2xl text-lg font-medium tracking-tight'>
                                    {text}
                                </p>
                            ))}
                       </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default VideoCarousel