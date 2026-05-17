import heroImage from "../assets/phone.png";


function Home() {
  return (
    <div className="bg-[var(--background-color)] min-h-screen">

      
      <section className="bg-gradient-to-r from-[var(--nav-color)] to-[var(--gradient-end)] min-h-[500px] px-16 flex items-center justify-between">

        
        <div className="max-w-xl text-white">

          <h1 className="text-6xl font-bold leading-tight mb-5">
            Find Your <br /><span className="text-[var(--logo-text)]">Perfect</span> Phone
          </h1>
<div className="w-100 h-1 bg-white rounded-full my-5"></div>
          <p className="text-xl text-gray-200 mb-8">
            Take our smart quiz and discover the best mobile device for your needs.
          </p>

          <button className="bg-[var(--yellow-color)] hover:bg-[var(--orange-color)] duration-200 px-8 py-3 rounded-md text-lg">
           <span className="text-[var(--black-color)]">Start Quiz</span>
          </button>

        </div>

        {/* Right Side */}
        <div>
          <img
            src={heroImage}
            alt="Phones"
            className="w-[500px] object-contain"
          />
        </div>

      </section>

      {/* Trending Phones Section */}
{/* Trending Phones Section */}
<section className="px-10 py-10 bg-[var(--background-color)]">

  {/* Title */}
  <h2 className="text-4xl font-bold mb-8">
    Trending Phones
  </h2>

  {/* Cards Grid */}
  <div className="grid grid-cols-4 gap-6">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between h-[420px] hover:shadow-xl duration-300">

      <div className="flex justify-center items-center h-[240px]">
        <img
          src="/iphone.png"
          alt="iPhone"
          className="h-[180px] object-contain"
        />
      </div>

      <div>
        <h3 className="text-[32px] font-semibold mb-4">
          iPhone 16 Pro Max
        </h3>
<div className="flex justify-center">
        <button className="bg-[var(--button-blue)] hover:bg-blue-700 duration-200 text-white px-6 py-3 rounded-lg text-lg">
          Shop Now
        </button>
        </div>
      </div>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between h-[420px] hover:shadow-xl duration-300">

      <div className="flex justify-center items-center h-[240px]">
        <img
          src="/samsung.png"
          alt="Samsung"
          className="h-[200px] object-contain"
        />
      </div>

      <div>
        <h3 className="text-[32px] font-semibold mb-4">
          Samsung S25 Ultra
        </h3>
<div className="flex justify-center">
        <button className="bg-[var(--button-blue)] hover:bg-blue-700 duration-200 text-white px-6 py-3 rounded-lg text-lg">
          Shop Now
        </button>
        </div>
      </div>

    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between h-[420px] hover:shadow-xl duration-300">

      <div className="flex justify-center items-center h-[240px]">
        <img
          src="/pixel.png"
          alt="Pixel"
          className="h-[180px] object-contain"
        />
      </div>

      <div>
        <h3 className="text-[32px] font-semibold mb-4">
          Google Pixel 9
        </h3>
<div className="flex justify-center">
        <button className="bg-[var(--button-blue)] hover:bg-blue-700 duration-200 text-white px-6 py-3 rounded-lg text-lg">
          Shop Now
        </button>
        </div>
      </div>

    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between h-[420px] hover:shadow-xl duration-300">

      <div className="flex justify-center items-center h-[240px]">
        <img
          src="/iphone.png"
          alt="Huawei"
          className="h-[180px] object-contain"
        />
      </div>

      <div>
        <h3 className="text-[32px] font-semibold mb-4">
          Huawei Nova
        </h3>
<div className="flex justify-center">
        <button className="bg-[var(--button-blue)] hover:bg-blue-700 duration-200 text-white px-6 py-3 rounded-lg text-lg">
          Shop Now
        </button>
        </div>
      </div>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;