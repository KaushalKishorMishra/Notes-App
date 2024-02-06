import FormState from "../state/formState"

type FormAction = {
    updateAccountInfo: (accountInfo: Partial<FormState['accountInfo']>) => void
    updateContactInfo: (contactInfo: Partial<FormState['contactInfo']>) => void
    updateUserInfo: (userInfo: Partial<FormState['userInfo']>) => void
}

export default FormAction