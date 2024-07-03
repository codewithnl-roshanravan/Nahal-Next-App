import { useEffect, useRef, useState } from "react";

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

const NavMenu = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement | null>(null);
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
  const products = [
    {
      name: "Veggie Burger",
      price: "AED 14.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipigy.",
      image: "/1p.jpg",
    },
    {
      name: "Pizza",
      price: "AED 34.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipigy.",
      image: "/2p.jpg",
    },
    {
      name: "Classic Burger ",
      price: "AED 20.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipigy.",
      image: "/3p.jpg",
    },
    {
      name: "Chicken Burger",
      price: "AED 18.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipigy.",
      image: "/4p.jpg",
    },
    {
      name: "Fish Burger Combo",
      price: "AED 22.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipigy.",
      image: "/6p.jpg",
    },
  ];
  return (
    <div>
      <nav
        ref={menuRef}
        className="fixed top-0 left-0 right-0 z-10 flex overflow-x-auto whitespace-nowrap gap-5 bg-gray-100 p-4"
      >
        {sections.map((section, index) => (
          <a
            key={index}
            href={`#${section}`}
            className={`inline-block px-4 py-2 transition-colors ${
              activeSection === section
                ? "text-red-600 font-bold"
                : "text-black"
            }`}
          >
            {section}
          </a>
        ))}
      </nav>
      <div className="pt-20 p-4">
        {sections.map((section, index) => (
          <div
            key={index}
            id={section}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="mb-8"
          >
            <h2 className="text-2xl mb-4">{section}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 p-4 rounded-lg shadow-lg hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-xl font-bold">{product.price}</p>
                  <button className="mt-2 px-4 py-2 bg-red-400 hover:bg-white hover:text-red-400 text-white rounded-xl">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavMenu;
