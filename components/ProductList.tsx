import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (

    <div className="bg-gray-100 rounded-xl mb-5 gap-8 flex flex-wrap justify-start sm:justify-start">
      <Link
        href="/"
        className="w-full flex flex-col gap-8 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/1p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/2p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$499</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 text-white ring-red-400 bg-red-400  w-max py-2 px-4 text-xs hover:bg-white hover:text-red-400">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-8 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/4p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/3p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$499</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 text-white ring-red-400 bg-red-400  w-max py-2 px-4 text-xs hover:bg-white hover:text-red-400">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-8 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/5p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/6p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$499</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 text-white ring-red-400 bg-red-400  w-max py-2 px-4 text-xs hover:bg-white hover:text-red-400">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-8 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/2p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/1p.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$499</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 text-white ring-red-400 bg-red-400  w-max py-2 px-4 text-xs hover:bg-white hover:text-red-400">
          Add to Cart
        </button>
      </Link> 
      
     <Link href="/" className="grid md:grid-cols-2 md:gap-8 rounded-xl p-10">
      
      <div className="md:col-span-1">
        <Image src="/1p.jpg" alt="" className="rounded-xl" width={10} height={10} layout="responsive"/>
      </div>
       <div>
       <div className="text-lg mt-40 ">
        <h1 className="text-lg mb-20 font-semibold">History</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat officiis fuga soluta eius reiciendis debitis qui sit deserunt? Ab iusto rerum quasi totam laudantium eaque perspiciatis, numquam laboriosam repudiandae eligendi ipsam minima porro dignissimos quos, consequuntur libero atque fuga delectus aspernatur obcaecati saepe voluptate! Unde dolorum consectetur reprehenderit quas minima!</p>
        
       </div>
       </div>
       <div className="p-5">
        <div className="mb-2 flex justify-between">
         <div>For more information:</div> 
        </div>
        <div className="mb-2 flex justify-between">
          
        </div>
        <button className="rounded-2xl ring-1 text-white ring-red-400 bg-red-400  w-max py-2 px-6 text-xs hover:bg-white hover:text-red-400">
          about
        </button>
       </div>
     </Link>
    </div>
  );
};

export default ProductList;

