"use client";

import React, { useState, useEffect } from "react";
import NavBar from "@/components/Header/NavBar";
import Hero from "@/components/Home/Hero";
import AboutMe from "@/components/About/AboutMe";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import { IoArrowUpCircle } from "react-icons/io5";
import Footer from "@/components/Footer/Footer";
import WorkExperience from "@/components/WorkExperience/WorkExperience";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Skills />
        <Projects />
        <Footer />
      </main>

      {scrollPosition > 800 ? (
        <a href="#home" className="cursor-pointer">
          <IoArrowUpCircle className="fixed z-50 bottom-5 right-5 text-4xl text-darkPurple hover:scale-125 ease-linear delay-100 transition-all" />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
