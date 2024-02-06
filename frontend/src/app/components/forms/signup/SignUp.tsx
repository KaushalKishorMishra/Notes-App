import AccountDetail from "./AccountDetail"
import Detail from "./Detail"
import UserDetail from "./UserDetail"
const SignUpForm = () => {
    return (
        <section>
            <form action="post">
                <div>
                    <AccountDetail />
                </div>
                <div>
                    <UserDetail />
                </div>
                <div>
                    <Detail />
                </div>
            </form>
        </section>
    )


}

export default SignUpForm