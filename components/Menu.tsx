"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer" 
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-pink-50  text-gray-600 left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/" className="hover:text-red-400">Salads & Appetizers</Link>
          <Link href="/" className="hover:text-red-400">Daily Dishes</Link>
          <Link href="/" className="hover:text-red-400">Kababs</Link>
          <Link href="/" className="hover:text-red-400">Sharing Platters</Link>
          <Link href="/" className="hover:text-red-400">Rivas Specials</Link>
          <Link href="/" className="hover:text-red-400">Sandwiches</Link>
          <Link href="/" className="hover:text-red-400">Pizza</Link>
          <Link href="/" className="hover:text-red-400">Extras</Link>
          <Link href="/" className="hover:text-red-400">Dessert</Link>
          <Link href="/" className="hover:text-red-400">Juice and Soft Drink</Link>
          <Link href="/" className="hover:text-red-400">Appetizers</Link>

        </div>
      )}
    </div>
  );
};

export default Menu;
