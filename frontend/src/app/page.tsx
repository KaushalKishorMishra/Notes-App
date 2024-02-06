import Link from "next/link"

const Page = () => {
    return (
        <section className="">
            <div className="container px-5 flex flex-row mx-auto pt-2">
                <div className="basis-1/2 text-2xl">
                    Logo
                </div>
                <div className="basis-1/2">
                    <ul className="flex justify-end w-full">
                        <li className="px-2 grid h-20">
                            <button className="btn bg-blue-300">
                                Sign Up
                            </button>
                        </li>
                        <li>
                            <div className="divider divider-horizontal">OR</div>
                        </li>
                        <li className="px-2 grid h-20">
                            <button className="btn bg-green-300">
                                Sign In
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto h-screen flex flex-col justify-center items-center bg-green-100">
                <p className="text-8xl font-bold bg-green-100 mb-7">
                    Create Your Notes Here
                </p>
                <a href={`process.env.HOST/signIn`} className="btn bg-blue-300 hover:bg-green-300 px-5 rounded">
                    <p className="text-xl">Click Me To Get Started With Creating Your Notes</p>
                </a>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Page