

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProductList from "./ProductList";


const sections = [
  "Salads & Appetizers",
  "Daily Dishes",
  "Kababs",
  "Sharing Platters",
  "Rivas Specials",
  "Sandwiches",
  "Pizza",
  "Extras",
  "Dessert",
  "Juice and Soft Drink",
  "Appetizers",
  "Platters",
  "Shaverma",
  "Potato",
];


const Nav = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const sectionRefs = useRef([]);
  const menuRef = useRef(null);
  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          const activeIndex = sections.indexOf(entry.target.id);
          const menuItem = menuRef.current?.children[activeIndex];
          if (menuItem) {
            menuItem.scrollIntoView({ behavior: "smooth", inline: "center" });
          }
        }
      });
    }, options);
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  return (
    <div>
      <nav
        ref={menuRef}
        className="fixed top-0 left-0 right-0 flex overflow-x-auto scrollBar-hide px-4 lg:px-16 xl:px-32 2xl:px-64 whitespace-nowrap bg-gray-100 gap-4 md:gap-8 shadow-[0_3px_10px_rgba(0,0,0,0.1)] z-50"
      >
        {sections.map((section, index) => (
          <Link
            key={index}
            href={`#${section}`}
            className={`inline-block px-4 py-3 transition-colors ${
              activeSection === section
                ? "text-red-400 font-bold"
                : "text-black"
            }`}
          >
            {section}
          </Link>
        ))}
      </nav>

      <div className="pt-2 p-4">
        {sections.map((section, index) => (
          <div
            key={index}
            id={section}
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <div className="mt-24 p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 ">
            <h2 className="text-2xl p-4 mt-4">{section}</h2> 
            <ProductList />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Nav;
