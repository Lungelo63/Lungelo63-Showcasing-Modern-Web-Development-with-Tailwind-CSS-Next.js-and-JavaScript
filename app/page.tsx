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
      <div className="w-full p-10">
        <div className="max-w-2xl mx-auto">
          <Card title="Ui components">
            <div className="grid grid-cols-4">
              <Button>Basic Button</Button>
              <Button>
                <AiOutlineHome/>
                Basic Button
                </Button>
                <Button isIcon>
                  <FaRegUser/>
                  </Button>
                  <Button link="https://www.google.com">Google</Button>
            </div>
            <Input type="text" placeholder="Full name"/>
            <Input type="text" placeholder="Full name" icon={<FaRegUser />} />
            <TextArea placeholder="Full name"  />
            <TextArea placeholder="Full name" icon={<FaRegUser />} />

            <MagneticWrapper className="w-[350px]">
              <FancyButton text="Contact me" icon={<FaArrowRight/>} />
            </MagneticWrapper>

            <MagneticWrapper className="">
              <ScrollDown/>
            </MagneticWrapper>
          </Card>
        </div>
      </div>
    )}
    </WaterWaveWrapper>
  );
}

