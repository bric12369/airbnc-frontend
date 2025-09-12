
const Login = ({ users }) => {

    return (
        <div>
            <label>Choose a user:
                <select>
                    {users.map((user) => {
                        return <option key={user.user_id}>{`${user.first_name} ${user.surname}`}</option>
                    })}
                </select>
            </label>
        </div>
    )
}

export default Login