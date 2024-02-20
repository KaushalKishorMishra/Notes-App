import React from "react"
import FormState from "@/zustand/state/formState"
import { RxAvatar } from "react-icons/rx";
import ActiveList from "../../active/ActiveList";

interface AccountInfoProps {
    onUpdateFormState: (updates: Partial<FormState>) => void
    formState: FormState["accountInfo"]
}

const AccountDetail: React.FC<AccountInfoProps> = ({ onUpdateFormState, formState }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        onUpdateFormState({ accountInfo: { ...formState, [name]: value } })
    }
    return (
        <section>
            <div>
                <ul className="steps">
                    <ActiveList dataContent="1" title="Account" state={true} />
                    <ActiveList dataContent="2" title="Contact" state={true} />
                    <ActiveList dataContent="3" title="User" state={true} />
                    <ActiveList dataContent="4" title="Detail" state={true} />
                </ul>
            </div>
            <div>
                <label htmlFor="">Username:</label>
                <input type="text" name="userName" value={formState.userName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={formState.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" value={formState.password} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formState.confirmPassword} onChange={handleChange} />
            </div>
        </section>

    )
}

export default AccountDetail