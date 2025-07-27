"use client"
import Button from "@/components/visualEffects/ui/button";
import Input from "@/components/visualEffects/ui/input";
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { FaArrowRight, FaRegUser } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
//import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import Card from "@/components/visualEffects/ui/card";
import dynamic from "next/dynamic";
import TextArea from "@/components/visualEffects/ui/text-area";
import FancyButton from "@/components/visualEffects/ui/fancy-button";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/visualEffects/scroll-down";
import Profile from "@/components/visualEffects/ui/profile";
import LandingSection from "@/sections/landing";
import Header from "@/components/navigation/header/header";
import FeaturedSection from "@/sections/featured";
import About from "@/sections/about";
import AboutSection from "@/sections/about";
// Dynamic import to make sure it is only used in the client side env
const WaterWaveWrapper = dynamic (
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false}
);

export default function Home() {
  return (
    <WaterWaveWrapper
    imageUrl=""
    dropRadius="3"
    perturbance="3"
    resolution="2048"
    >
      {() => (
        <div className="pb-8">
        
          <LandingSection />
          < FeaturedSection />
        
          <AboutSection />
        
        
        
        </div>
      )}
    </WaterWaveWrapper> 
  );
}

