import React from 'react'
import Card from '../visualEffects/ui/card'
import { Timeline, TimeLineItem } from '../visualEffects/ui/timeline'

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
        <Timeline>
            {
                experienceData.map((ex,i)=>(
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

const experienceData = [
    {
        date: "2020 - present",
        title: "Software Engineer",
        subtitle: " Fullsatck Engineering",
        link: "https://www.linkedin.com/in/lungelo-packery",
        tag: "Johannesburg, South Africa",
    },
    {
        date: "2022 - present",
        title: "Security Researcher",
        subtitle: "Smart Contract Auditing",
        link: "",
        tag: "Remote",
    },
    {
        date: "2021 - 2022",
        title: "Bug-bounty Hunter",
        subtitle: "Penetration Testing",
        link: "",
        tag: "Remote",
    },
]
