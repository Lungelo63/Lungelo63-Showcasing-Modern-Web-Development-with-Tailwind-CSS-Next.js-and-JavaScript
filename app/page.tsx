"use client"
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import Card from "@/components/visualEffects/ui/card";

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
          <Card title="Ui components">...</Card>
        </div>
      </div>
    )}
    </WaterWaveWrapper>
  );
}
