import Link from "next/link"

const SignInForm = () => {
    return (
        <section className="flex flex-col justify-center items-center p-5 w-1/2 bg-slate-700">
            <p className="text-4xl font-bold">
                Sign In
            </p>
            <form action="post"  >
                <div className="mb-2">
                    <label htmlFor="" className="label ">Email</label>
                    <input type="email" id="inputEmail" className="input input-bordered max-x-sm w-full" />
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="label ">Password</label>
                    <input type="password" id="inputPassword" className="input input-bordered max-x-sm w-full" />
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <input type="submit" className="btn bg-green-300" value={"Submit"} />
                    <div className="divider divider-accent text-accent">OR</div>
                    <div>
                        If not registered.
                        <Link href="/signup" className="ms-3 link px-3 py-2 hover:bg-blue-300 italic font-bold">
                            Register Here
                        </Link>
                    </div>
                </div>
            </form>
        </section>
    )

}

export default SignInForm