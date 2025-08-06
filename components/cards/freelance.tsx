import React from 'react'
import Card from '../visualEffects/ui/card'
import { Timeline, TimeLineItem } from '../visualEffects/ui/timeline'

export default function FreelanceCard() {
  return (
    <Card title="My Freelance">
        <Timeline>
            {
                FreelanceData.map((ex,i)=>(
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

const FreelanceData = [
    {
        date: "2020 - 2022",
        title: "Ubiqode",
        subtitle: "Web Development",
        link: "https://www.uboqode.co",
        tag: "Remote",
    },
    {
        date: "2021 - 2022",
        title: "UpWork",
        subtitle: "Freelance",
        link: "",
        tag: "Remote",
    },

]
