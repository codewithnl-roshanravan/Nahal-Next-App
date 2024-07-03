import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24 shadow-[0_3px_10px_rgba(0,0,0,0.1)]">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-red-400 text-2xl tracking-wide">Nahal Rn</div>
          </Link>
          <p>7385 Lian ST, Iran</p>
          <span className="font-semibold">nl.roshanravan@gmail.com</span>
          <span className="font-semibold">+98 930 822 ...</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="" className="hover:text-red-500">
                About Us
              </Link>
              <Link href="" className="hover:text-red-500">
                Careers
              </Link>
              <Link href="" className="hover:text-red-500">
                Affiliates
              </Link>
              <Link href="" className="hover:text-red-500">
                Blog
              </Link>
              <Link href="" className="hover:text-red-500">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="" className="hover:text-red-500">
                New Arrivals
              </Link>
              <Link href="" className="hover:text-red-500">
                Daily Dishes
              </Link>
              <Link href="" className="hover:text-red-500">
                Appetizers
              </Link>
              <Link href="" className="hover:text-red-500">
                Trending
              </Link>
              <Link href="" className="hover:text-red-500">
                All Appetizers
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="" className="hover:text-nahal">
                Customer Service
              </Link>
              <Link href="" className="hover:text-red-500">
                My Account
              </Link>
              <Link href="" className="hover:text-red-500">
                Find a Store
              </Link>
              <Link href="" className="hover:text-red-500">
                Legal & Privacy
              </Link>
              <Link href="" className="hover:text-red-500">
                Gift Card
              </Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-md text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
          <div className="flex">
            <input type="text" placeholder="Email..." className="p-4 w-3/4" />
            <button className="w-1/4 bg-red-400 text-white rounded-se-md rounded-ee-md">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">@ 2024 Nahal Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">England | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
