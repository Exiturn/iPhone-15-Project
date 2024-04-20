import dynamic from 'next/dynamic';

const Home = () => {
  const Navbar = dynamic(() => import('@/components/Navbar'))
  const Hero = dynamic(() => import('@/components/Hero'), {ssr: false})
  const Highlights = dynamic(() => import('@/components/Highlights', {ssr: false}))
  const Model = dynamic(() => import('@/components/Model'), {ssr: false})
  const Features = dynamic(() => import('@/components/Features'))
  const Gaming = dynamic(() => import('@/components/Gaming'))
  const Camera = dynamic(() => import('@/components/Camera'))

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Gaming />
      <Camera />
    </main>
  );
}

export default Home;
