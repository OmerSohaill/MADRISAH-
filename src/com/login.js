import './login.css'
function Login() {
    return (
        <>
            <div className="Login grid md:grid-cols-2">

                <div className="loginbox loginimg">
                    <img className='logim' src="https://dashboard.razakar.org/Content/RazakarLogo.png" />
                    <p className='loginpone'>Al-Burhan is serving in numerous avenues of religious education, Islah and social services. With the purpose of providing access to religious education for everyone around the globe, we have recently started “e-Al-Burhan”, an online education system, teaching Quran, Hadees, Seerat and Fiqh to people from 80 countries.</p>
                    <p className='loginptwo'>Copyrights © 2024 Alburhan. All rights reserved.
                        Privacy   Contact</p>


                </div>



                <form action='http://localhost:3001/login' method="POST">
                <div className="loginbox loginsi">
                   
                        <label className='logisign'>Sign  In</label>


                        <input className='logiin' name="fullname" placeholder='User Name' />


                        <input className='logiin' type="password" name="password" placeholder='Password' />

                        <a className='loga' href="">Forgot Password?</a><button className='logbtn' type="submit">Signin</button>


                </div>
                    </form>
        

        </div >
        
        </>
    )
}
export default Login;