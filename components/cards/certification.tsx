import React from 'react'
import Card from '../visualEffects/ui/card'
import { Timeline, TimeLineItem } from '../visualEffects/ui/timeline'

export default function CertificationCard() {
  return (
    <Card title="My Certifications">
        <Timeline>
            {
                CertificationData.map((ex,i)=>(
                    <TimeLineItem 
                    key={i}
                    date={ex.date}
                    title={ex.title}
                    subtitle={ex.subtitle}
                    link={ex.link}
                    tag={ex.tag}
                    />
                ))
            }
        </Timeline>
    </Card>
  );
}

const CertificationData = [
    {
        date: "2022 - 2023",
        title: "Web3,Blockchain (Ethereum) Bootcamp",
        subtitle: "Alchemy University",
        link: "",
        tag: "Remote",
    },
  
]
