import FormState from "@/zustand/state/formState"
import React from "react"
import ActiveList from "../../active/ActiveList"
import { MdFactCheck } from "react-icons/md"

interface ContactDetailProps {
    onUpdateFormState: (updates: Partial<FormState>) => void
    formState: FormState["contactInfo"]
}

const ContactDetail: React.FC<ContactDetailProps> = ({ onUpdateFormState, formState }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        onUpdateFormState({ contactInfo: { ...formState, [name]: value } })
    }
    return (
        <section>
            <div>
                <ul className="steps">
                    <ActiveList dataContent="✔️" title="Account" state={true} />
                    <ActiveList dataContent="2" title="Contact" state={true} />
                    <ActiveList dataContent="3" title="User" state={true} />
                    <ActiveList dataContent="4" title="Detail" state={true} />
                </ul>
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" value={formState.phone} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Address:</label>
                <input type="text" name="address" value={formState.address} onChange={handleChange} />
            </div>
        </section>
    )
}

export default ContactDetail