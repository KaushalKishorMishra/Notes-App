import { create } from "zustand"

import FormState from "../state/formState"
import FormAction from "../action/formAction"

const useFormStore = create<FormState & FormAction>((set) => ({
    // const useFormStore = () => create<FormState>((set) => ({
    accountInfo: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        avatar: "",
    },
    contactInfo: {
        phone: "",
        address: "",
    },
    userInfo: {
        gender: "",
        dateOfBirth: "",
    },
    updateAccountInfo: (newAccountInfo) => set((state) => ({ accountInfo: { ...state.accountInfo, ...newAccountInfo } })),
    updateContactInfo: (newContactInfo) => set((state) => ({ contactInfo: { ...state.contactInfo, ...newContactInfo } })),
    updateUserInfo: (newUserInfo) => set((state) => ({ userInfo: { ...state.userInfo, ...newUserInfo } })),
}))

export default useFormStore