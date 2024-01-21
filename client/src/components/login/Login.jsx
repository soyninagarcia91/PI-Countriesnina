import './login.css'

const Login = ({login}) => {

    const handleClick = () => {
        Login()
    }

    return(
        <div className="log">
            <div className="allLog">
                <h1>Bienvenido!</h1>
                <form>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input
                        name="email"
                        type="email"
                        placeholder='myexample@gmail.com'
                        ></input>
                    </div>
                    <div className="pass">
                        <label htmlFor="password">Password:</label>
                        <input
                        name="password"
                        type="password"
                        placeholder='password'
                        ></input>
                    </div>
                    
                    <button onClick={handleClick}>Login</button>
                </form>
            </div>
           
        </div>
    )
}

export default Login