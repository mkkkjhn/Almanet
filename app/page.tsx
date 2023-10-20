import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Controls } from "@/components/Controls";
import {Footer} from "@/components/Footer";
export default function Home() {

    return (
        <div className="
            flex
            flex-col
            h-screen
            w-screen
        "
        >
            <Header />
            <Hero />
            <Controls />
            <Footer />
        </div>
    )
}
