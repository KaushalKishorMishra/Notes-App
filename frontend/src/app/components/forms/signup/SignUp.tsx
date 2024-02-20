'use client'
// import react components
import React, { useState } from "react"
// import forms 
import AccountDetail from "./AccountDetail"
import ContactDetail from "./ContactDetail"
import UserDetail from "./UserDetail"
// import all the details in one file
import Detail from "./Detail"
// zustand state action and store
import FormState from "@/zustand/state/formState"
import useFormStore from "@/zustand/store/formStore"
// icons import
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { CiSaveUp2 } from "react-icons/ci";
import ActiveList from "../../active/ActiveList"




const SignUpForm: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0)
    const formStore = useFormStore()

    const handleNextStep = () => {
        setActiveStep((prevStep) => prevStep + 1)
    }

    const handlePrevStep = () => {
        setActiveStep((prevStep) => prevStep - 1)
    }

    const handleSubmit = () => {
        console.log("Form Data:", formStore)
    }

    const handleUpdateFormState = (updates: Partial<FormState>) => {
        switch (activeStep) {
            case 0:
                formStore.updateAccountInfo(updates.accountInfo!)
                break
            case 1:
                formStore.updateContactInfo(updates.contactInfo!)
                break
            case 2:
                formStore.updateUserInfo(updates.userInfo!)
                break
            default:
                break
        }
    }   

    return (
        <section>
            {/* <ul className="steps">
                {
                    ["Account", "Contact", "User", "Details"].map((step: string, index: number) => {
                        console.log("ActiveStep:", index)
                        return (
                            <ActiveList key={index} state={activeStep === index} title={step} />
                        )
                    })
                }
            </ul> */}
            <form onSubmit={handleSubmit}>
                <div>
                    {
                        activeStep === 0 && (
                            <AccountDetail onUpdateFormState={handleUpdateFormState} formState={formStore.accountInfo} />
                        )
                    }
                </div>
                <div>
                    {
                        activeStep === 1 && (
                            <ContactDetail onUpdateFormState={handleUpdateFormState} formState={formStore.contactInfo} />
                        )
                    }
                </div>
                <div>
                    {
                        activeStep === 2 && (
                            <UserDetail onUpdateFormState={handleUpdateFormState} formState={formStore.userInfo} />
                        )
                    }
                </div>
                <div>
                    {activeStep === 3 && (
                        <Detail formData={formStore} />
                    )}
                </div>
                {activeStep > 0 && <button type="button" onClick={handlePrevStep}>
                    <span>
                        <span>
                            <GrFormPrevious />
                        </span>
                        Prev
                    </span>
                </button>}
                {activeStep < 3 && <button type="button" onClick={handleNextStep}>
                    <span>
                        <span>

                            <MdNavigateNext />
                        </span>
                        Next
                    </span>
                </button>}
                {activeStep >= 3 && <button type="submit">
                    <span>
                        <span>
                            <CiSaveUp2 />
                        </span>
                        Submit
                    </span>
                </button>}
            </form>
        </section>
    )


}

export default SignUpForm