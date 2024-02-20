import FormState from "@/zustand/state/formState"
import React from "react"

interface DetailProps {
    formData: FormState
}

const Detail: React.FC<DetailProps> = ({ formData }) => {
    return (
        <section>
            <p>Account Info</p>
            <pre>{JSON.stringify(formData.accountInfo, null, 2)}</pre>
            <p>Contact Info</p>
            <pre>{JSON.stringify(formData.contactInfo, null, 2)}</pre>
            <p>User Info</p>
            <pre>{JSON.stringify(formData.userInfo, null, 2)}</pre>
        </section>
    )
}

export default Detail