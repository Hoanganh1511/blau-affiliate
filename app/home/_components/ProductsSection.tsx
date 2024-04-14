"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useDebounceValue } from "usehooks-ts";
const ALL_PRODUCTS = [
  {
    productName:
      "Set áo croptop ren Midnight kiss cup ngực + chân váy bí quyến rũ mắt nâu",
    productId: "",
    productImage: "/images/vay/vay-1.jpg",
  },
  {
    productName:
      "Đầm trễ vai cúp ngực LOVE HUNTER đính hoa  + chân váy bí quyến rũ mắt nâu",
    productId: "",
    productImage: "/images/vay/vay-2.png",
  },
  {
    productName: "Set áo thun croptop và chân váy ngắn",
    productId: "",
    productImage: "/images/set/set-1.jpg",
  },
  {
    productName: "Set áo mix cổ sơ mi và chân váy xếp ly Jessi",
    productId: "",
    productImage: "/images/set/set-2.jpg",
  },
  {
    productName: "SERA - Set áo Gile và chân váy xếp ly Anna",
    productId: "",
    productImage: "/images/set/set-3.jpg",
  },
  {
    productName: "Set áo nơ và chân váy",
    productId: "",
    productImage: "/images/set/set-4.jpg",
  },
  {
    productName: "Remmus - Duri Top | Áo ống cúp ngực ren đính nơ",
    productId: "",
    productImage: "/images/ao/ao-1.avif",
  },
  {
    productName: "Áo thun baby tee đính nơ",
    productId: "",
    productImage: "/images/ao/ao-2.avif",
  },
  {
    productName: "Double Line Trousers - Quần suông ống rộng",
    productId: "",
    productImage: "/images/quan/quan-1.png",
  },
  {
    productName: "Quần Thun Ống Rộng Nữ Lai Gập Bụng Trending",
    productId: "",
    productImage: "/images/quan/quan-1.png",
  },

  // {
  //   categoryName: "Áo",
  //   categoryId: 2,
  //   products: [
  //     {
  //       productName: "Remmus - Duri Top | Áo ống cúp ngực ren đính nơ",
  //       productId: "",
  //       productImage: "/images/ao/ao-1.avif",
  //     },
  //     {
  //       productName: "Áo thun baby tee đính nơ",
  //       productId: "",
  //       productImage: "/images/ao/ao-2.avif",
  //     },
  //   ],
  // },
  // {
  //   categoryName: "Quần",
  //   categoryId: 3,
  //   products: [
  //     {
  //       productName: "Double Line Trousers - Quần suông ống rộng",
  //       productId: "",
  //       productImage: "/images/quan/quan-1.png",
  //     },
  //     {
  //       productName: "Quần Thun Ống Rộng Nữ Lai Gập Bụng Trending",
  //       productId: "",
  //       productImage: "/images/quan/quan-1.jpg",
  //     },
  //   ],
  // },
  // {
  //   categoryName: "Set Trang phục & Jumpsuit",
  //   categoryId: 4,
  //   products: [
  //     {
  //       productName: "Set áo thun croptop và chân váy ngắn",
  //       productId: "",
  //       productImage: "/images/set/set-1.jpg",
  //     },
  //     {
  //       productName: "Set áo mix cổ sơ mi và chân váy xếp ly Jessi",
  //       productId: "",
  //       productImage: "/images/set/set-2.jpg",
  //     },
  //     {
  //       productName: "SERA - Set áo Gile và chân váy xếp ly Anna",
  //       productId: "",
  //       productImage: "/images/set/set-3.jpg",
  //     },
  //     {
  //       productName: "Set áo nơ và chân váy",
  //       productId: "",
  //       productImage: "/images/set/set-4.jpg",
  //     },
  //   ],
  // },
];
const ProductsSection = () => {
  const [data, setData] = useState(ALL_PRODUCTS || []);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [debouncedValue, setValue] = useDebounceValue(search, 300);
  useEffect(() => {
    const getSearchData = () => {
      setLoading(true);

      setTimeout(() => {
        const data = ALL_PRODUCTS.filter((product) =>
          product.productName.includes(debouncedValue)
        );
        setData(data && data.length > 0 ? data : []);
        setLoading(false);
      }, 500);
    };

    // Work fetch data with debouncedValue
    if (debouncedValue || debouncedValue === "") {
      getSearchData();
    }
  }, [debouncedValue]);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleOnInputFocus = () => {};
  const handleOnKeyDown = () => {};
  return (
    <div className="px-[16px] py-[12px] bg-white/95 rounded-md">
      <div>
        <h1 className="text-[22px] uppercase font-semibold text-black/80">
          Đồ tui mặc và review đây nha:
        </h1>
        <div className="mt-[10px] flex">
          <div className="relative w-full rounded-sm overflow-hidden">
            <input
              type="search"
              placeholder="Tìm sản phẩm theo tên..."
              className="w-full h-[30px] pl-[32px] py-[20px] bg-[#EADBC8]/40 placeholder:text-[14px] placeholder:text-black/70 text-[13px]
              focus:border-none focus:outline-[#DAC0A3]
              "
              onChange={onChange}
              onFocus={handleOnInputFocus}
              onKeyDown={handleOnKeyDown}
            />
            <CiSearch className="absolute top-1/2 left-[8px] -translate-y-1/2 text-[18px]" />
          </div>
        </div>
        <div className="mt-[20px] flex flex-wrap gap-[16px]">
          {loading ? (
            <div className="w-full flex items-center justify-center py-[10px]">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#DAC0A3]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : data.length > 0 ? (
            data.map((product, idx) => {
              return (
                <div key={idx} className="w-[48%]">
                  <div className="w-full h-[200px] relative">
                    <Image
                      src={product.productImage}
                      alt=""
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="mt-[8px] text-[13px] line-clamp-2">
                    {product.productName}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-center w-full">
              Không có sản phẩm nào trùng khớp.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
