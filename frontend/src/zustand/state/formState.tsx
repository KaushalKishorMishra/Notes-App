type FormState = {
    accountInfo: {
        avatar: string
        userName: string
        email: string
        password: string
        confirmPassword: string
    },
    contactInfo: {
        phone: string
        address: string
    }
    userInfo: {
        gender: string
        dateOfBirth: string
    }
}

export default FormState