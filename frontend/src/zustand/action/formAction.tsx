import FormState from "../state/formState"

interface FormAction {
    updateAccountInfo: (accountInfo: Partial<FormState['accountInfo']>) => void
    updateContactInfo: (contactInfo: Partial<FormState['contactInfo']>) => void
    updateUserInfo: (userInfo: Partial<FormState['userInfo']>) => void

    // updateUserName: (userName: FormState['userName']) => void
    // updateEmail: (email: FormState['email']) => void
    // updatePassword: (password: FormState['password']) => void
    // updateConfirmPassword: (confirmPassword: FormState['confirmPassword']) => void
    // updateAvatar: (avatar: FormState['avatar']) => void
    // updatePhone: (phone: FormState['phone']) => void
    // updateAddress: (phone: FormState['address']) => void
    // updateGender: (gender: FormState['gender']) => void
    // updateDateOfBirth: (dateOfBirth: FormState['dateOfBirth']) => void
}

export default FormAction