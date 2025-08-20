import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/visualEffects/ui/button";
import Card from "@/components/visualEffects/ui/card";
import Input from "@/components/visualEffects/ui/input";
import SelectInput from "@/components/visualEffects/ui/select-input";
import TextArea from "@/components/visualEffects/ui/text-area";
import { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPhoneVolume, FaUser } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export default function ContactSection() {
    const [services, setServices] = useState<string[]>([]);
    console.log("services", services);
  return (
    <div className="pt-24 px-3 lg:px-8">
        <Heading 
          number="Reach Me" title_1="Contact" title_2="Me"
        />
        <Card>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                {/*Contact cards */}
                <div className="flex flex-col gap-8">
                    <ContactCard 
                    title="Reach me on:"
                    icon={<FaPhoneVolume className="fill-[#333] text-lg"/>}
                    text="+27 - 72 - 778 - 6554"
                    btnText="Make Call"
                    />
                    <ContactCard 
                    title="Write me at:"
                    icon={<MdEmail className="fill-[#333] text-lg"/>}
                    text="lungelopackery@gmail.com"
                    btnText="Send Email"
                    />
                </div>
                {/* Contact Form */}
                <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
                        <Input 
                        type="text"
                        placeholder="Full Name"
                        icon={<FaUser/>}
                        />
                        <Input 
                        type="email"
                        placeholder="Email Address"
                        icon={<MdEmail/>}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4 gap-8">
                        
                        <Input 
                        type="text"
                        placeholder="Subject"
                        icon={<MdSubject/>}
                        />
                    </div>
                    {/* Multiple selector wrapper */}
                    <div className="flex flex-col gap-6">
                        <div className="space-y-6">
                            <h1 className="font-bold text-lg">
                                Reason for contact?
                            </h1>
                            <div className="flex flex-wrap items-center justify justify-between mb-4 gap-8">
                            {/*Services */}
                            {
                                servicesOptions.map((service)=>(
                                <SelectInput
                                key={service.id}
                                type="checkbox"
                                id={service.id}
                                text={service.text}
                                selectedOptions={services}
                                setSelectedOptions={setServices}
                                allowMultiple
                                />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Text Area Message*/}
                <TextArea placeholder=" Message"  icon={<FaProjectDiagram /> }
                />
                <div className="w-full flex justify-end">
                    <Button className="w-44 py-3 text-xl">
                        Send <SiMinutemailer />
                    </Button>
                </div>
                
                </div>
            </div>
        </Card>
    </div>
  )
}

const servicesOptions = [
    {
      id: "A Recruiter",
      text: "Recruiter",
    },
    {
      id: "Smart Contract Development",
      text: "Smart Contract Development",
    },
    {
      id: "Smart Contract Audit",
      text: "Smart Contract Audit",
    },
    {
        id: "Web3 Intergration",
        text: "Web3 Intergration",
      },
    {
      id: "General Enquiry",
      text: "Enquiry",
    },
    {
        id: "Other",
        text: "Other",
      },
    
  ];
  
  {/*const budgetsOptions = [
    {
      id: "less than 500$",
      text: "< $500",
    },
    {
      id: "between 500$ and 2000$",
      text: "$500 - $2000",
    },
    {
      id: "between 2000$ and 5000$",
      text: "$2000 - $5000",
    },
    {
      id: "more than 5000$",
      text: "> $5000",
    },
  ];    */}
