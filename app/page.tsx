"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProfileSection } from "./components/leftSection/ProfileSection";
import ProfileDetails from "./components/leftSection/ProfileDetails";
import Languages from "./components/leftSection/Languages";
import Skills from "./components/leftSection/Skills";
import ExtraSkills from "./components/leftSection/ExtraSkills";
import Banner from "./components/middleSection/Banner";
import Services from "./components/middleSection/Services";
import Education from "./components/middleSection/Education";
import WorkHistory from "./components/middleSection/WorkHistory";
import ContactUs from "./components/middleSection/ContactUs";
import LocationMap from "./components/middleSection/LocationMap";
import { RiHome2Fill } from "react-icons/ri";
import { DiCodeBadge } from "react-icons/di";
import { FaUserGraduate } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { FaCommentAlt } from "react-icons/fa";
import Footer from "./components/middleSection/Footer";
import NavBtn from "./components/rightSection/NavBtn";
import Certificates from "./components/leftSection/Certificates";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState("Home");

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    name: string,
  ) => {
    setActive(name);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = [
      { id: "Home", ref: homeRef },
      { id: "Services", ref: servicesRef },
      { id: "Education", ref: eduRef },
      { id: "Work", ref: workRef },
      { id: "Contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.ref.current === entry.target);
            if (match) setActive(match.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      },
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex bg-background gap-10 2xl:px-48">
      <div className="bg-component-background w-[20%] h-fit pt-8 px-8">
        <ProfileSection />
        <ProfileDetails />
        <Languages />
        <Skills />
        <Certificates />
        <ExtraSkills />
      </div>
      <div className="w-[70%] mr-[11%]">
        <Banner
          ref={homeRef}
          name="Contact"
          clickFn={scrollToSection}
          cRef={contactRef}
        />
        <Services ref={servicesRef} />
        <Education ref={eduRef} />
        <WorkHistory ref={workRef} />
        <ContactUs ref={contactRef} />
        <LocationMap />
        <Footer />
      </div>
      <div className="flex flex-col items-center bg-component-background h-screen w-[8%] fixed right-0 top-0 2xl:right-47 2xl:w-[7%]">
        <div className="flex flex-col h-2/3 mt-40 items-center justify-around">
          <NavBtn
            ref={homeRef}
            Icon={RiHome2Fill}
            clickfn={scrollToSection}
            active={active == "Home"}
            name="Home"
          />
          <NavBtn
            ref={servicesRef}
            Icon={DiCodeBadge}
            clickfn={scrollToSection}
            active={active == "Services"}
            name="Services"
          />
          <NavBtn
            ref={eduRef}
            Icon={FaUserGraduate}
            clickfn={scrollToSection}
            active={active == "Education"}
            name="Education"
          />
          <NavBtn
            ref={workRef}
            Icon={RiBriefcase4Fill}
            clickfn={scrollToSection}
            active={active == "Work"}
            name="Work"
          />
          <NavBtn
            ref={contactRef}
            Icon={FaCommentAlt}
            clickfn={scrollToSection}
            active={active == "Contact"}
            name="Contact"
          />
        </div>
      </div>
    </div>
  );
}
