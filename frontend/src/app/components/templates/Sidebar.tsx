import { TbTagStarred } from "react-icons/tb";
import { FaChalkboardUser, FaNoteSticky, FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import Image from "next/image";

import Logo from "../../../../public/noteverse-logo.png"

const Sidebar = () => {
    return (
        <>
            <aside className="w-[100px] h-full border rounded-br-badge rounded-tr-badge ">
                <nav className="h-full flex flex-col justify-between items-center">
                    <Image src={Logo} alt="NoteVerse Logo" className="bg-cs-secondary w-full rounded-e-badge " />
                    <div className="w-full flex flex-col justify-between">
                        <div className="text-center py-3 group hover:bg-cs-secondary hover:rounded-e-badge my-3 tooltip" data-tip="User">
                            <a href="" className="flex flex-row w-full justify-center text-cs-secondary items-center group-hover:text-cs-primary text-2xl">
                                <span className=""><FaChalkboardUser /></span>
                                {/* <span>
                                        User
                                    </span> */}
                            </a>
                        </div>
                        <div className="text-center py-3 group hover:bg-cs-secondary hover:rounded-e-badge my-3 tooltip" data-tip="Note">
                            <a href="" className="flex flex-row w-full justify-center text-cs-secondary items-center text-2xl group-hover:text-cs-primary">
                                <span className=""><FaNoteSticky /></span>
                                {/* <span>
                                        Note
                                    </span> */}
                            </a>
                        </div>
                        <div className="text-center py-3 group hover:bg-cs-secondary hover:rounded-e-badge my-3 tooltip" data-tip="Tag">
                            <a href="" className="flex flex-row w-full justify-center text-cs-secondary items-center text-2xl group-hover:text-cs-primary">
                                <span className=""><TbTagStarred /></span>
                                {/* <span>
                                        Tag
                                    </span> */}
                            </a>
                        </div>
                        <div className="text-center py-3  group hover:bg-cs-secondary hover:rounded-e-badge my-3 tooltip tooltip-error" data-tip="Trash">
                            <a href="" className="flex flex-row w-full justify-center text-cs-secondary items-center text-2xl group-hover:text-error">
                                <span className=""><FaRegTrashCan /></span>
                                {/* <span>
                                        Trash
                                    </span> */}
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center text-2xl py-3 group hover:bg-cs-secondary text- hover:rounded-e-badge w-full tooltip" data-tip="User Setting">
                        <a href="" className="flex flex-row w-full justify-center text-cs-secondary items-center text-2xl group-hover:text-cs-primary">
                            <MdOutlineSettings />
                            {/* <span>
                                Settings
                            </span> */}
                        </a>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar