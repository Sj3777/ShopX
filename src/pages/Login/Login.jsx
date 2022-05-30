import React from 'react'
import './login.css'
import logo from "../../components/assets/images/Logo.png"
import facebook from '../../components/assets/images/facebook.png'
import google from '../../components/assets/images/google.png'
import instagram from '../../components/assets/images/instagram.png'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const history = useNavigate()
  const goRegister = () => {
    history("/register")
  }
  return (
    <>
      <div className='main_login_container'>
        <div className='container_login '>
          <div className='left_box'>
            <img className='logo_def' src={logo} />
          </div>
          <div className='right_box'>
            <p>Welcome back!</p>
            <h4>Sign in</h4>
            <form>
              <div className='input_con'>
                <label>
                  Email
                </label>
                <br />
                <input type="email" placeholder="Enter your email" className='input_box' />
              </div>
              <div className='input_con'>
                <label>
                  Password
                </label>
                <br />
                <input type="password" placeholder="Enter your password" className='input_box' />
              </div>
              <button className='sign_button'>
                Sign in
              </button>
            </form>
            <div className="social_icon">
              <h5>or</h5>
            </div>
            <div className="social_icon icon_stl">
              <a href="#" class="social"><img src={facebook} alt="facebook" className='icon_sz' /></a>
              <a href="#" class="social"><img src={google} alt="google" className='icon_sz' /></a>
              <a href="#" class="social"><img src={instagram} alt="instagram" className='icon_sz' /></a>
            </div>
            <div className='register_here'>
              <h5>New to ShopX? <button  className='go_btn' onClick={() => {goRegister()}}>Register here!</button></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
