"use client"

import Image from "next/image"
import Logo from "../../../../public/SVG/noteverse-lightmode-logo.svg"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { useUser } from "@auth0/nextjs-auth0/client"

const Navbar = () => {


  const {user, error, isLoading} = useUser();

  const router = useRouter()

  return (
    <nav className="bg-slate-200">
      <div className="container mx-auto flex justify-between py-2 items-center ">
        <Link href="/" className="border p-2 rounded-btn">
          <Image src={Logo} width={25} height={25} alt="Logo" className="h-full" />
        </Link>
        <div className="h-full w-1/2 flex justify-end">
          {/* <button className="bg-cs-primary hover:bg-cs-action hover:text-cs-primary hover:ease-in duration-300 text-cs-action mx-2 px-5 py-2 rounded-lg text-sm font-bold" onClick={() => router.push('/api/auth/login', { scroll: true })}>SIGN IN</button>
          <button className="bg-cs-action text-cs-primary hover:ease-in hover:bg-cs-primary hover:text-cs-action border-0 mx-2 px-5 py-2 rounded-lg text-sm font-bold" onClick={() => router.push('/api/auth/signup', { scroll: true })}>SIGN UP</button> */}

          <button className="bg-cs-primary hover:bg-cs-action hover:text-cs-primary hover:ease-in duration-300 text-cs-action mx-2 px-5 py-2 rounded-lg text-sm font-bold" onClick={() => router.push('/api/auth/login', { scroll: true })}>Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
