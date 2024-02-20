import FormState from "@/zustand/state/formState"
import React from "react"

interface UserDetailProps {
    onUpdateFormState: (updates: Partial<FormState>) => void
    formState: FormState["userInfo"]
}

const UserDetail: React.FC<UserDetailProps> = ({ onUpdateFormState, formState }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        onUpdateFormState({ userInfo: { ...formState, [name]: value } })
    }
    return (
        <section>
            <div>
                <label htmlFor="">Gender:</label>
                <input type="text" name="gender" value={formState.gender} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Date of Birth</label>
                <input type="date" name="dateOfBirth" value={formState.dateOfBirth} onChange={handleChange} />
            </div>

        </section>
    )
}

export default UserDetail