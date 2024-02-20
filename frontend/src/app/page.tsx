import Link from "next/link"
import Navbar from "./components/templates/Navbar"
import Hero from "./components/templates/Hero"

const Page = () => {
    return (
        <section className="">
            <Navbar />
            <div>
                <Hero />
            </div>
        </section>
    )
}

export default Page