import './Footer.css';

export default function Footer() {


    return (

        <>
            <div className='row footer-row justify-content-center'>
                <footer className="footer">

                    <div className="container">

                        <div className="row justify-content-center">


                            <div className="col-md-3">
                                <h5 className='products-title'>Продукти</h5>

                                <ul className='footer-links'>
                                    <li><a href='/products/renew'>Пречиствател Renew</a></li>
                                    <li><a href='/products/view-plus'>View Plus</a></li>
                                    <li><a href='/products/wave-mini'>Wave Mini</a></li>
                                    <li><a href='/products/wave-enhance'>Wave Enhance</a></li>
                                </ul>
                            </div>


                            <div className="col-md-3 kits-div">
                                <h5 className='products-title'>Комплекти</h5>

                                <ul className='footer-links'>
                                    <li><a href='/products/livingroom-bedroom-bundle'>Дневна + спалня</a></li>
                                    <li><a href='/products/livingroom-bathroom-bundle'>Дневна + баня</a></li>
                                    <li><a href='/products/essential-house-kit'>Основен комплект за къща</a></li>
                                </ul>
                            </div>



                            <div className="col-md-3">
                                <h5 className='contacts-title'>Свържете се с нас</h5>
                                <ul className="list-unstyled">
                                    <li><strong>Имейл:</strong> probusiness77@gmail.com</li>
                                    <li><strong>Телефон:</strong> 0887904742</li>
                                    <li><strong>Адрес:</strong> София, ул. Мила Родина 36</li>
                                </ul>
                            </div>
                            
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-6">
                                <p className='text-center'>&copy; 2025 Всички права запазени.</p>
                            </div>
                            {/* <div className="col-md-6 text-end">
                            <ul className="list-inline footer-links">
                                <li className="list-inline-item">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Terms of Service</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Sitemap</a>
                                </li>
                            </ul>
                        </div> */}
                        </div>
                    </div>
                </footer>
            </div>
        </>


    )
}
