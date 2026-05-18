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
<section className="px-7 py-6 bg-[#EEF2F7]">

  {/* Title Row */}
  <div className="flex items-center gap-4 mb-5">

    <h2 className="text-[20px] font-semibold text-[#253B63] whitespace-nowrap">
      Trending Phones
    </h2>

    <div className="w-full h-[1px] bg-gray-400"></div>

  </div>

  {/* Cards */}
  <div className="grid grid-cols-4 gap-4 max-w-[1180px] mx-auto">

    {/* Card 1 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[260px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/iphone.png"
          alt="iPhone"
          className="h-[120px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        iPhone 17 Pro Max
      </h3>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[260px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/samsung.png"
          alt="Samsung"
          className="h-[130px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        Samsung S23 Ultra
      </h3>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[260px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/pixel.png"
          alt="Pixel"
          className="h-[120px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        Google Pixel 7
      </h3>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[260px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/huawei.png"
          alt="Huawei"
          className="h-[130px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        Huawei Nova 7
      </h3>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>

  </div>


</section>
{/* Top Rated Phones Section */}
<section className="px-7 py-6 bg-[#EEF2F7]">

  {/* Title Row */}
  <div className="flex items-center gap-4 mb-5">

    <h2 className="text-[20px] font-semibold text-[#253B63] whitespace-nowrap">
      Top Rated Phones
    </h2>

    <div className="w-full h-[1px] bg-gray-400"></div>

  </div>

  {/* Cards */}
  <div className="grid grid-cols-4 gap-4 max-w-[1180px] mx-auto">

    {/* Card 1 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[280px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/iphone.png"
          alt="iPhone"
          className="h-[120px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        iPhone 16 Pro Max
      </h3>

      {/* Stars */}
      <div className="flex items-center text-yellow-400 text-[24px] tracking-[2px] mt-1">
        ★★★★★
      </div>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[280px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/iphone.png"
          alt="iPhone"
          className="h-[120px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        iPhone 16 Pro Max
      </h3>

      {/* Stars */}
      <div className="flex items-center text-yellow-400 text-[24px] tracking-[2px] mt-1">
        ★★★★★
      </div>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[280px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/iphone.png"
          alt="iPhone"
          className="h-[120px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        iPhone 16 Pro Max
      </h3>

      {/* Stars */}
      <div className="flex items-center text-yellow-400 text-[24px] tracking-[2px] mt-1">
        ★★★★★
      </div>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>


    {/* Card 4 */}
   <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center h-[280px] w-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">

      <div className="h-[150px] flex items-center justify-center">
        <img
          src="/iphone.png"
          alt="iPhone"
          className="h-[120px] object-contain"
        />
      </div>

      <h3 className="text-[20px] font-medium text-center mt-2">
        iPhone 16 Pro Max
      </h3>

      {/* Stars */}
      <div className="flex items-center text-yellow-400 text-[24px] tracking-[2px] mt-1">
        ★★★★★
      </div>

      <button className="mt-3 bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[14px] px-7 py-1.5 rounded-md duration-200">
        Shop Now
      </button>

    </div>


  </div>

</section>
{/* Shop By Category Section */}
<section className="px-7 py-6 bg-[#EEF2F7]">

  {/* Title Row */}
  <div className="flex items-center justify-center gap-4 mb-6">

    <div className="w-full h-[1px] bg-gray-400"></div>

    <h2 className="text-[20px] font-semibold text-[#253B63] whitespace-nowrap">
      Shop by Category
    </h2>

    <div className="w-full h-[1px] bg-gray-400"></div>

  </div>

  {/* Category Cards */}
  <div className="flex items-center justify-center gap-6">

    {/* Phones */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 w-[180px] h-[190px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-pointer">

      <img
        src="/phonescategory.png"
        alt="Phones"
        className="h-[100px] object-contain"
      />

      <h3 className="text-[20px] font-medium mt-4 text-[#253B63]">
        Phones
      </h3>

    </div>

    {/* Tablets */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 w-[180px] h-[190px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-pointer">

      <img
        src="/tablet.png"
        alt="Tablets"
        className="h-[100px] object-contain"
      />

      <h3 className="text-[20px] font-medium mt-4 text-[#253B63]">
        Tablets
      </h3>

    </div>

    {/* Accessories */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 w-[180px] h-[190px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-pointer">

      <img
        src="/headphone.png"
        alt="Accessories"
        className="h-[100px] object-contain"
      />

      <h3 className="text-[20px] font-medium mt-4 text-[#253B63]">
        Accesories
      </h3>

    </div>

  </div>

</section>
{/* Why Choose Us Section */}
<section className="px-7 py-10 bg-[#EEF2F7]">

  {/* Title */}
  <div className="flex items-center gap-4 mb-8">

    <h2 className="text-[20px] font-semibold text-[#253B63] whitespace-nowrap">
      Why Choose Us
    </h2>

    <div className="w-full h-[1px] bg-gray-400"></div>

  </div>

  {/* Features */}
  <div className="grid grid-cols-3 gap-6 max-w-[1180px] mx-auto">

    {/* Feature 1 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300  hover:shadow-xl">

      <div className="w-[70px] h-[70px] rounded-full bg-blue-100 flex items-center justify-center mb-4">

        <span className="text-[32px]">🚚</span>

      </div>

      <h3 className="text-[22px] font-semibold text-[#253B63]">
        Fast Delivery
      </h3>

      <p className="text-[15px] text-gray-500 mt-3 leading-7">
        Get your products delivered quickly and safely to your doorstep.
      </p>

    </div>

    {/* Feature 2 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300  hover:shadow-xl">

      <div className="w-[70px] h-[70px] rounded-full bg-blue-100 flex items-center justify-center mb-4">

        <span className="text-[32px]">💳</span>

      </div>

      <h3 className="text-[22px] font-semibold text-[#253B63]">
        Secure Payments
      </h3>

      <p className="text-[15px] text-gray-500 mt-3 leading-7">
        Multiple secure payment methods with trusted transaction systems.
      </p>

    </div>

    {/* Feature 3 */}
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300  hover:shadow-xl">

      <div className="w-[70px] h-[70px] rounded-full bg-blue-100 flex items-center justify-center mb-4">

        <span className="text-[32px]">⭐</span>

      </div>

      <h3 className="text-[22px] font-semibold text-[#253B63]">
        Top Quality
      </h3>

      <p className="text-[15px] text-gray-500 mt-3 leading-7">
        We provide only genuine and high-quality mobile devices and accessories.
      </p>

    </div>

  </div>

</section>
{/* Special Offer Banner Section */}
<section className="px-7 py-8 bg-[#EEF2F7]">

  <div className="max-w-[1180px] mx-auto bg-gradient-to-r from-[#253B63] to-[#3D94CE] rounded-2xl px-12 py-10 flex items-center justify-between overflow-hidden">

    {/* Left Content */}
    <div className="text-white max-w-[500px]">

      <p className="text-[18px] font-medium text-orange-300 mb-2">
        Limited Time Offer
      </p>

      <h2 className="text-[48px] font-bold leading-tight">
        Up To 40% OFF
      </h2>

      <p className="text-[18px] mt-4 text-gray-200 leading-8">
        Discover premium smartphones and accessories with amazing discounts.
      </p>

      <button className="mt-7 bg-white text-[#253B63] hover:bg-gray-200 text-[16px] font-semibold px-8 py-3 rounded-lg duration-300">
        Shop Now
      </button>

    </div>

    {/* Right Image */}
    <div className="relative">

      <img
        src="/offerphone.png"
        alt="Offer Phone"
        className="h-[320px] object-contain drop-shadow-2xl"
      />

    </div>

  </div>

</section>


    </div>
  );
}

export default Home;