import Header from '@/components/navigation/header/header'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import FancyButton from '@/components/visualEffects/ui/fancy-button'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function LandingSection() {
  return (
    <div className='relative h-screen overflow-hidden p-8'>
        {/* Header*/}
        <Header />
        {/* Show magnetic fancy button on small screens and hide it on big screens*/}
        <div className='absolute bottom-36 left-10 -z-20 md:hidden'>
            <MagneticWrapper >
                <FancyButton
                text="Let's talk"
                icon={<FaArrowRight/>}
                />
            </MagneticWrapper>
        </div>
        {/*Live clock*/}

        <div>

        </div>
        {/*Slogan*/}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]'>
            <div className='flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase'>
                <div>
                    <span>Code.</span> 
                </div>
                <div>
                    <span>Crafted</span>
                </div>
                <div className='relative'>
                    <span>Magnificence</span>
                    <div className=' text-[1rem] leading-[1.4rem] tracking-[0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal'>
                        <span>Through code, I wield intelligence</span>
                        <br />
                        <span>as a force to transcend limits</span>
                        <br />
                        <span> and architect the unimaginable</span>
                        <br />
                        <span>with precision.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
