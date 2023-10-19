import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Controls } from "@/components/Controls";
export default function Home() {

    return (
        <div className='
            flex
            flex-col
            h-full
        '
        >
            <Header />
            <Hero />
            <Controls />
        </div>
    )
}
