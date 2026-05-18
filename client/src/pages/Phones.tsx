function Phones() {
  return (
    <div className="min-h-screen bg-[#EEF2F7] px-7 py-8">

      <div className="flex gap-5">

        {/* FILTER SIDEBAR */}
        <div className="w-[290px] bg-white border border-gray-200 rounded-md p-5 h-fit shadow-sm">

          {/* Filter Header */}
          <div className="flex items-center justify-between border-b pb-3">

            <h2 className="text-[18px] font-semibold text-[#253B63]">
              Filters
            </h2>

            <span className="text-gray-500 text-[18px] cursor-pointer">
              ˅
            </span>

          </div>

          {/* Brand */}
          <div className="mt-5 border-b pb-5">

            <h3 className="text-[16px] font-semibold mb-4 text-[#253B63]">
              Brand
            </h3>

            <div className="space-y-2 text-[15px] text-gray-600">

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked className="accent-[#3D94CE]" />
                Samsung
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Apple
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Google
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                OnePlus
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Xiaomi
              </label>

            </div>

          </div>

          {/* Price Range */}
          <div className="mt-5 border-b pb-5">

            <h3 className="text-[16px] font-semibold mb-4 text-[#253B63]">
              Price Range
            </h3>

            <div className="flex items-center justify-between">

              <div className="border border-gray-300 rounded px-4 py-1 text-[14px]">
                $200
              </div>

              <div className="w-[60px] h-[1px] bg-gray-400"></div>

              <div className="border border-gray-300 rounded px-4 py-1 text-[14px]">
                $1000
              </div>

            </div>

            {/* Fake Slider */}
            <div className="relative mt-6">

              <div className="h-[4px] bg-gray-300 rounded-full"></div>

              <div className="absolute top-0 left-[10%] w-[80%] h-[4px] bg-[#5D8EF7] rounded-full"></div>

              <div className="absolute top-[-4px] left-[8%] w-[12px] h-[12px] bg-white border-2 border-[#5D8EF7] rounded-full"></div>

              <div className="absolute top-[-4px] right-[8%] w-[12px] h-[12px] bg-white border-2 border-[#5D8EF7] rounded-full"></div>

            </div>

          </div>

          {/* Storage */}
          <div className="mt-5">

            <h3 className="text-[16px] font-semibold mb-4 text-[#253B63]">
              Storage
            </h3>

            <div className="space-y-2 text-[15px] text-gray-600">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                8 GB
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                16 GB
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                32 GB
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                64 GB
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                128 GB
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                256 GB
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                512 GB
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                1 TB
              </label>

            </div>

          </div>

        </div>

        {/* PRODUCTS AREA */}
        <div className="flex-1">

          {/* Header */}
          <div className="flex items-center justify-between mb-5">

            <h2 className="text-[24px] font-semibold text-[#253B63]">
              Mobile Phones
            </h2>

            <p className="text-[14px] text-gray-500">
              Showing 1-12 of 120 Products
            </p>

          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4">

            {/* CARD 1 */}
            <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-[190px]">

              <div className="w-[150px] h-[140px] flex items-center justify-center shrink-0">

                <img
                  src="/iphone.png"
                  alt="Phone"
                  className="max-h-[120px] max-w-[120px] object-contain"
                />

              </div>

              <div className="flex flex-col justify-center">

                <h3 className="text-[24px] font-medium text-[#253B63] leading-tight">
                  Nova Pro X5
                </h3>

                <p className="text-[28px] font-semibold text-[#253B63] mt-1">
                  $899.00
                </p>

                <div className="text-yellow-400 text-[20px] mt-1">
                  ★★★★★
                </div>

                <div className="flex gap-2 mt-3">

                  <button className="bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[13px] px-6 py-1 rounded duration-200">
                    View
                  </button>

                  <button className="bg-[var(--orange-color)] hover:bg-orange-600 text-white text-[13px] px-5 py-1 rounded duration-200">
                    Compare
                  </button>

                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-[190px]">

              <div className="w-[150px] h-[140px] flex items-center justify-center shrink-0">

                <img
                  src="/iphoneblack.png"
                  alt="Phone"
                  className="max-h-[120px] max-w-[120px] object-contain"
                />

              </div>

              <div className="flex flex-col justify-center">

                <h3 className="text-[24px] font-medium text-[#253B63] leading-tight">
                  iPhone 16 Pro Max
                </h3>

                <p className="text-[28px] font-semibold text-[#253B63] mt-1">
                  $579.00
                </p>

                <div className="text-yellow-400 text-[20px] mt-1">
                  ★★★★★
                </div>

                <div className="flex gap-2 mt-3">

                  <button className="bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[13px] px-6 py-1 rounded duration-200">
                    View
                  </button>

                  <button className="bg-[var(--orange-color)] hover:bg-orange-600 text-white text-[13px] px-5 py-1 rounded duration-200">
                    Compare
                  </button>

                </div>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-[190px]">

              <div className="w-[150px] h-[140px] flex items-center justify-center shrink-0">

                <img
                  src="/samsung.png"
                  alt="Phone"
                  className="max-h-[120px] max-w-[120px] object-contain"
                />

              </div>

              <div className="flex flex-col justify-center">

                <h3 className="text-[24px] font-medium text-[#253B63] leading-tight">
                  Samsung G S23 Ultra
                </h3>

                <p className="text-[28px] font-semibold text-[#253B63] mt-1">
                  $699.00
                </p>

                <div className="text-yellow-400 text-[20px] mt-1">
                  ★★★★★
                </div>

                <div className="flex gap-2 mt-3">

                  <button className="bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[13px] px-6 py-1 rounded duration-200">
                    View
                  </button>

                  <button className="bg-[var(--orange-color)] hover:bg-orange-600 text-white text-[13px] px-5 py-1 rounded duration-200">
                    Compare
                  </button>

                </div>

              </div>

            </div>

            {/* CARD 4 */}
            <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-[190px]">

              <div className="w-[150px] h-[140px] flex items-center justify-center shrink-0">

                <img
                  src="/iphone15.png"
                  alt="Phone"
                  className="max-h-[120px] max-w-[120px] object-contain"
                />

              </div>

              <div className="flex flex-col justify-center">

                <h3 className="text-[24px] font-medium text-[#253B63] leading-tight">
                  iPhone 15
                </h3>

                <p className="text-[28px] font-semibold text-[#253B63] mt-1">
                  $499.00
                </p>

                <div className="text-yellow-400 text-[20px] mt-1">
                  ★★★★★
                </div>

                <div className="flex gap-2 mt-3">

                  <button className="bg-[var(--button-blue)] hover:bg-blue-700 text-white text-[13px] px-6 py-1 rounded duration-200">
                    View
                  </button>

                  <button className="bg-[var(--orange-color)] hover:bg-orange-600 text-white text-[13px] px-5 py-1 rounded duration-200">
                    Compare
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Phones;