import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function LoginSignup(props: any) {
    return <div className='flex justify-center align-middle flex-1'>
        <div id="login-box">
            <div className="left">
                <h1>Sign up</h1>

                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="password2" placeholder="Retype password" />

                <input type="submit" name="signup_submit" value="Sign me up" />
            </div>

            <div className="right">
                <span className="loginwith">Sign in with<br />social network</span>
                <button className="social-signin email">Log in with Email</button>
                <button className="social-signin facebook">Log in with facebook</button>
                <button className="social-signin twitter">Log in with Twitter</button>
                <button className="social-signin google">Log in with Google+</button>
            </div>
            <div className="or">OR</div>
        </div>
        <p className="credit">Developed by <a href="http://www.designtheway.com" target="_blank">Design the way</a></p>
    </div>

}

LoginSignup.propTypes = {

}

export default LoginSignup

