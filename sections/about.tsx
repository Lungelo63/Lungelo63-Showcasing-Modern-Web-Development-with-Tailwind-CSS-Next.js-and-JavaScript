import Background from '@/components/cards/background'
import CertificationCard from '@/components/cards/certification'
import EducationCard from '@/components/cards/education'
import ExperienceCard from '@/components/cards/experience'
import FreelanceCard from '@/components/cards/freelance'
import Gallery from '@/components/cards/gallery'
import MeCard from '@/components/cards/me'
import ResumeCard from '@/components/cards/resume'
import Heading from '@/components/heading/heading'
import Card from '@/components/visualEffects/ui/card'
import React from 'react'

export default function AboutSection() {
  return (
    <div className='pt-24 px-3 lg:px-8'>
        <Heading 
        number="Everything" title_1='About' title_2='Me' />
        <div className="space-y-4 py-8">
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
              {/*The me card*/}  
              <MeCard />
              <ResumeCard />
              <Background />
              <div className='2xl:hidden'>
                <Gallery/>
              </div>
            </div>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
              <div className="space-y-4">
                <CertificationCard /> 
                <FreelanceCard />
              </div> 
              <div className="space-y-4">
                <Card title='Stack'>Stack</Card>
                <ExperienceCard/>
                <EducationCard />
              </div>
              <div className="hidden 2xl:flex">
              <Gallery />
              </div>
            </div> 
          </div>
    </div>
  )
}
