import dynamic from 'next/dynamic';

const Home = () => {
  const Navbar = dynamic(() => import('@/components/Navbar'))
  const Hero = dynamic(() => import('@/components/Hero'), {ssr: false})
  const Highlights = dynamic(() => import('@/components/Highlights'))

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default Home;
