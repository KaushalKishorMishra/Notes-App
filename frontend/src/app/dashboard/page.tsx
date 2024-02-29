import React from 'react'
import EditorComponent from "@/app/components/editor/Editor"
import Sidebar from "@/app/components/templates/Sidebar"

import {withPageAuthRequired} from "@auth0/nextjs-auth0"

const Page = () => {
    return (
        <section className="h-screen w-screen flex flex-grow">
            <Sidebar />
            <div className="w-full pt-10">
                <div className="text-center font-bold text-2xl">
                    Get started by writing something!
                </div>
                <EditorComponent />
            </div>
        </section>
    )
}

export default withPageAuthRequired(Page, {
    onRedirecting: () => <Loading />,
    onError: error => <ErrorMessage>{error.message}</ErrorMessage>
  });