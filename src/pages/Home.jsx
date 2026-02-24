import HeroSlider from "@/components/HeroSlider"
import MenuCategorySlider from "@/components/MenuCategorySlider"
import Navbar from "@/components/Navbar"
import OrderOnlineBar from "@/components/OrderOnlineBar"

function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-700">
            <Navbar transparent={true}/>
            <HeroSlider />
            <OrderOnlineBar/>
            <MenuCategorySlider/>
        </div>
    )
}

export default Home
