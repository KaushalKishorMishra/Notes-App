import { CiShoppingTag } from "react-icons/ci";
import { FaChalkboardUser, FaNoteSticky, FaRegTrashCan } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <>
            <aside className="w-1/6 h-full border bg-customPrimary">
                <nav className="h-full">
                    <h1 className="text-2xl font-bold text-center py-5 border-b">Keep Your Notes</h1>
                    <div className="w-full flex flex-col justify-between h-[92%]">
                        <div className="">
                            <div className="text-center py-3 hover:bg-white">
                                <a href="" className="flex flex-row w-full justify-center items-center text-xl hover:text-primary">
                                    <span className="pe-3"><FaChalkboardUser /></span>
                                    <span>
                                        User
                                    </span>
                                </a>
                            </div>
                            <div className="text-center py-3  hover:bg-white">
                                <a href="" className="flex flex-row w-full justify-center items-center text-xl hover:text-primary">
                                    <span className="pe-3"><FaNoteSticky /></span>
                                    <span>
                                        Note
                                    </span>
                                </a>
                            </div>
                            <div className="text-center py-3  hover:bg-white">
                                <a href="" className="flex flex-row w-full justify-center items-center text-xl hover:text-primary">
                                    <span className="pe-3 font-bold text-2xl"><CiShoppingTag /></span>
                                    <span>
                                        Tag
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="text-center py-3  hover:bg-white">
                                <a href="" className="flex flex-row w-full justify-center items-center text-xl text-error hover:text-red-600">
                                    <span className="pe-3"><FaRegTrashCan /></span>
                                    <span>
                                        Trash
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar