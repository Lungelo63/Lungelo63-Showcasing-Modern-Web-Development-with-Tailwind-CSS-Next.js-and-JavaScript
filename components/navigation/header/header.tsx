import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import FancyButton from "@/components/visualEffects/ui/fancy-button";
import Profile from "@/components/visualEffects/ui/profile";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
        <Profile/>
        <div className="hidden md:inline">
            <MagneticWrapper >
                <FancyButton
                text="Let's talk"
                icon={<FaArrowRight/>}
                />
            </MagneticWrapper>
        </div>

    </div>
  )
}
