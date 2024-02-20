
const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between my-1">
      <div className=" text-4xl w-1/2">Logo</div>
      <div className="h-full w-1/2 flex justify-end">
        <button className="btn hover:bg-primary hover:text-slate-50 text-xl font-thin hover:ease-in duration-300 border-primary">Log In</button>
        <button className="btn bg-primary text-xl text-slate-50 hover:text-slate-700 border-5 hover:ease-in duration-500">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar
