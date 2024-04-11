"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Model = () => {
useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 100 })
}, [])

  return (
    <section className='py-20 w-full h-full overflow-hidden'>
        <div className='sm:px-10 px-5'>
            <h1 id='heading' className='section-heading tracking-tighter'>
                Take a closer look.
            </h1>
        </div>
    </section>
  )
}

export default Model