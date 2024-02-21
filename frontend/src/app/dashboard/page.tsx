import Editor from "@/app/components/editor/Editor"
import Sidebar from "@/app/components/templates/Sidebar"

const Page = () => {
    return (
        <section className="h-screen w-screen flex bg-cs-primary">
            <Sidebar />
            <Editor />
        </section>
    )
}

export default Page