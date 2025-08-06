import React from 'react'
import Card from '../visualEffects/ui/card'
import { Timeline, TimeLineItem } from '../visualEffects/ui/timeline'

export default function EducationCard() {
  return (
    <Card title="My Education">
        <Timeline>
            {
                EducationData.map((ex,i)=>(
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

const EducationData = [
    {
        date: "2021 - 2021",
        title: "Software Engineering",
        subtitle: " HyperionDev",
        link: "https://www.linkedin.com/posts/lungelo-packery_hyperiondev-software-engineering-certificate-activity-6863545012462919680-JQ2M?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUkvjMBnahdGkFtouHgLRLLr55NFGxup6Y",
        tag: "Johannesburg, South Africa",
    },
  
]
