const Hero = () => {
  return (
     <div className="max-w-screen-6xl bg-cover bg-top text-center text-gray-100" style={{backgroundImage: 'url("/images/hero1.jpg")', height: '400px'}}>
        <h1 className="text-3xl md:text-6xl text-bold pt-32">Your Go-to News Source</h1>
        <p className="text-xl md:text-2xl pt-6">Real time Updates</p>
        <button className="bg-yellow-600 px-6 py-2 mt-6 text-xs md:text-sm rounded-md">Subscribe Now</button>
     </div>
  )
}

export default Hero