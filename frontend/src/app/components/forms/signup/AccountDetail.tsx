const AccountDetail = () => {
    return (
        <section>
            <div>
                <label htmlFor="">Username:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" />
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" />
            </div>
            <div>
                <label htmlFor="">Confirm Password:</label>
                <input type="password" />
            </div>
        </section>

    )
}

export default AccountDetail