import Link from "next/link";

const Hero = () => {
    return (
        <section>
            <div className="container mx-auto flex flex-col justify-center items-center h-screen ">
                <p className="text-8xl font-bold mb-7">
                    Free your notes
                </p>
                <Link href={`/signin`} className="btn px-5 rounded">
                    <p className="text-xl">Click Me To Get Started With Creating Your Notes</p>
                </Link>
            </div>
        </section>
    );
}

export default Hero;