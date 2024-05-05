import '@fortawesome/fontawesome-free/css/all.css';
import './footer.css'
function Footer(){
    return(
        <>
        <div className="Footer grid md:grid-cols-4">
            <div className="footerbox">
            <i className="fas fa-mosque" style={{ fontSize: '36px' }}></i>
            <p>861/7 Railway Stadium Colony Garhi Shahu Lahore </p>
            <i class="fa fa-phone" style={{ fontSize:'24px'}}></i><span>+92-316-3865-813</span>
            <div></div><i class="fa fa-envelope" style= {{ fontSize:'24px' }}></i><span>muhammadumersohail27@gmail.com</span>
            <div></div><i class="fa fa-map-marker" style={{fontSize:"24px"}}></i><span>861/7 Railway Stadium Colony Garhi Shahu Lahore</span>


            </div>

            <div className='footerbox'>
                <h1 className='footercom'>Company</h1>
                <ul className='footerlis'>
                    <li>About Us</li>
                    <li>Home</li>
                    <li>Resgistration</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                </ul>

            </div>

            <div className='footerbox'>
                <h1 className='footercom'>Help & Support</h1>

                <ul className='footerlis'>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Refund Policy</li>
                    <li>Subsribe</li>

                </ul>

            </div>

            
            <div className='footerbox'>
                <h1 className='footercom'>Instagram Widgets</h1>

                <ul className='footerlis grid md:grid-cols-2'>
                    <li><img  class="footerimg" src="https://images.unsplash.com/photo-1577561426384-62154a1e9457?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></li>
                    <li><img class="footerimg" src="https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></li>
                    <li><img class="footerimg" src="https://images.unsplash.com/photo-1567712595315-545da0d341b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></li>
                    <li><img class="footerimg" src="https://plus.unsplash.com/premium_photo-1678483063222-b9cbc116b371?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></li>

                </ul>

            </div>

        </div>
        </>
    )
}
export default Footer;