"use client";

import React, { useEffect, useState } from "react";


const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const scroll = window.scrollY;
        console.log(scroll, isVisible);
        const shouldBeVisible = scroll <= 40;
        setIsVisible(shouldBeVisible);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
          <div className="">
          <div>
              {isVisible && (
              <div className="">
              </div>
              )}
          </div>
      </div>
  );
}

export default Header;
