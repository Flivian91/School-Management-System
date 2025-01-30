"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedText() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Welcome to Kimuri High School 📚",
        "Excellence in Education 🎓",
        "Shaping the Future of Students 🏆",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <div className="text-center text-3xl font-bold text-blue-600 mt-6">
      <span ref={typedRef}></span>
    </div>
  );
}
