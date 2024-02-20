const Hero = () => {
    return (
        <>
            <div className="container mx-auto h-screen flex flex-col justify-center items-center bg-green-100">
                <p className="text-8xl font-bold bg-green-100 mb-7">
                    Free your notes
                </p>
                <a href={`pages/signIn`} className="btn bg-blue-300 hover:bg-green-300 px-5 rounded">
                    <p className="text-xl">Click Me To Get Started With Creating Your Notes</p>
                </a>
            </div>
        </>
    );
}

export default Hero;