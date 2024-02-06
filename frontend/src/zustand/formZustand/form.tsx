import { create } from "zustand"

import FormState from "../state/formState"
import FormAction from "../action/formAction"

const useUserStore = () => create<FormState & FormAction>((set) => ({
    accountInfo: {
        avatar: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    contactInfo: {
        phone: "",
        address: "",
    },
    userInfo: {
        gender: "",
        dateOfBirth: "",
    },
    updateAccountInfo: (accountInfo) => set((state) => ({ accountInfo: { ...state.accountInfo, accountInfo } })),
    updateContactInfo: (contactInfo) => set((state) => ({ contactInfo: { ...state.contactInfo, contactInfo } })),
    updateUserInfo: (userInfo) => set((state) => ({ userInfo: { ...state.userInfo, userInfo } })),

} as FormState & FormAction))

export default useUserStore