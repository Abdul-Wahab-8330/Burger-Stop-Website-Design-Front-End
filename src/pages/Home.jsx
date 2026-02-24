import FreshHotSection from "@/components/FreshHotSection"
import HeroSlider from "@/components/HeroSlider"
import LocationsSection from "@/components/LocationsSection"
import MenuCategorySlider from "@/components/MenuCategorySlider"
import Navbar from "@/components/Navbar"
import OrderOnlineBar from "@/components/OrderOnlineBar"
import TestimonialSection from "@/components/TestimonialSection"
import TurboChargedSection from "@/components/TurboChargedSection"


function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-700">
            <Navbar transparent={true}/>
            <HeroSlider />
            <OrderOnlineBar/>
            <MenuCategorySlider/>
            <TurboChargedSection/>
            <LocationsSection/>
            <OrderOnlineBar/>
            <FreshHotSection/>
            <TestimonialSection/>
        </div>
    )
}

export default Home
