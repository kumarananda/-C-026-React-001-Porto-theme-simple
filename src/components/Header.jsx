
import './Header.css'
import logosite from '../imgs/logo.png'


const Header = () => {
    return (
        <>
            <section className="header">
            <div className="container">
                 <div className="row">
                    <div className="col-md-3">
                        <div className="site-logo">
                            <img src={logosite} alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        manu
                    </div>


                 </div>
            </div>
            </section>
            
        
        </>
    )
}

export default Header;