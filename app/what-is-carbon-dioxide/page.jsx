import './WhatIsCo2.css';
import Co2Icon from './images/co2-icon-blue.png';
import Link from 'next/link';

export default function WhatIsCarbonDioxide() {

    return (

        <div className='container-fluid'>

            <div className="row bg co2-main-row">

                <div className="col-sm-12 col-md-6 col-lg-6">

                    <h1>Какво е въглероден диоксид?</h1>

                    {/* <img src={Co2Icon} alt='co2-icon' className='co2-icon img-fluid' /> */}

                </div>
            </div>


            <div className='row bg co2-row d-flex justify-content-center'>

                <div className='col-sm-12 col-md-8 col-lg-8 text-center mx-auto'>

                    <p className="mt-2 fs-5 w-100 co2-par text-center text-md-start co2-gas-par">Въглеродният диоксид (CO2) е парников газ, който в малки количества е естествен и безвреден, но при повишаване на нивата му може да повлияе на производителността и съня. Най-често се образува в помещенията от въздуха, който издишваме, а нивата на CO2 се концентрират в помещения с по-слаба вентилация.</p>

                </div>

            </div>


            <div className='row bg d-flex co2-important-row justify-content-center'>

                <div className='col-sm-10 col-md-6 col-lg-6 text-center mx-auto'>

                    <div className='co2-content-container'>

                        <h2 className='mt-5 text-center text-md-start px-3'>Защо въглеродният диоксид е важен?</h2>
                        <p className='fs-5 p-2 co2-important-par text-center text-md-start'>Въглеродният диоксид е газ, състоящ се от една част въглерод и две части кислород. Той е един от най-важните газове на Земята, тъй като растенията го използват за производството на въглехидрати в процес, наречен фотосинтеза. Тъй като хората и животните зависят от растенията за храна, фотосинтезата е необходима за оцеляването на живота на Земята.</p>

                    </div>


                    <div className='co2-image-container'>

                        <img src='/Images/co2formula.svg' data-src="/Images/co2formula.svg" alt="CO2 Formula" width={980} height={197} className='co2formula-img img-fluid px-3' />

                    </div>


                    <div class="single-img row formula">

                    </div>

                </div>



            </div>


            <div className='row bg d-flex co2-how-heard-row justify-content-center'>

                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <h2 className='mt-5 text-center text-md-start px-3'>Как може да съм чул за въглеродния диоксид?</h2>
                    <p className='fs-5 p-2 co2-heard-par text-center text-md-start'>Вероятно сте чували за емисиите на CO2 в новините, свързани с глобалното затопляне. Тъй като CO2 се натрупва в атмосферата ни от изгарянето на изкопаеми горива, той има затоплящ ефект, който може да промени климата на Земята.</p>
                </div>

                <div>
                    <img src='/Images/factory_with_windows.png' data-src='/Images/factory_with_windows.png' width={981} height={937} alt='factory_with_windows' className='factory-img img-fluid' />
                </div>
                
            </div>


            <div className='row bg d-flex co2-where-does-come-from-row justify-content-center'>

                <h2 className='mt-5 text-center px-3'>От къде идва въглеродния диоксид?</h2>

                <div className='col-sm-6 col-md-6 col-lg-5'>
                    <p className='fs-5 p-3 co2-concentration-par text-center text-md-start mt-3'>Концентрацията на въглероден диоксид в помещенията се определя от комбинацията от външния CO2, дишането в помещенията и степента на вентилация на сградата. Тъй като сградите и домовете стават все по-енергийно ефективни и херметични, това означава, че разполагаме с по-малко свеж въздух.</p>
                </div>

                <div className='col-sm-6 col-md-6 col-lg-5'>
                    <p className='fs-5 p-3 co2-concentration-par text-md-start mt-3'>Много от вентилационните системи, които използваме днес, рециклират въздуха, за да пестят енергия, като по същество преместват замърсения въздух, вместо да вкарват нов. Това води до високи концентрации на CO2 и лошо качество на въздуха в помещенията.</p>
                </div>

                <div className='col-lg-12 col-sm-12'>
                    <img src='/Images/house.svg' data-src='/Images/house.svg' alt='House' width={900} height={537} className='img-fluid' />
                </div>

            </div>


            <div className='row bg d-flex co2-what-are-effects-row justify-content-center mt-5'>

                <div className='col-sm-12 col-md-7 col-lg-7 effects-container'>

                    <h2 className='mt-5 text-center px-3'><strong>Какви са</strong> ефектите <strong>на CO<sub>2</sub></strong></h2>
                    <p className='fs-5 p-2 text-start ps-4 mt-5'>Високите нива са пряко свързани с ниската производителност и големия брой отпуски по болест, поради което този проблем е изключително важен в офисите, училищата и дома.</p>
                </div>
            </div>


            <div className='row bg d-flex what-are-effects-img-row justify-content-center'>

                <div className='col-6 col-md-4 mb-2'>
                    <img src='/Images/muscular.svg' className='img-fluid' alt="muscular" width={86} height={87} loading='lazy' style={{ maxWidth: '100%' }} />
                    <p className='fs-5 p-3 text-center mt-1'>Безпокойство</p>

                </div>

                <div className='col-6 col-md-4 mb-2'>
                    <img src='/Images/Dimmed.svg' className='img-fluid' alt="Dimmed" width={97} height={60} loading='lazy' style={{ maxWidth: '100%' }} />
                    <p className='fs-5 p-3 text-center drowsy-par'>Сънливост</p>
                </div>

                <div className='col-6 col-md-4 mb-2'>
                    <img src='/Images/increasedofbreath.svg' className='img-fluid' alt="Increased of Breath" width={73} height={93} loading='lazy' style={{ maxWidth: '100%' }} />
                    <p className='fs-5 p-3 text-center mt-1'>Повишена сърдечна честота <br /> и кръвно налягане</p>

                </div>

                <div className='col-6 col-md-4 mb-2 icon-special'>
                    <img src='/Images/sweating.svg' className='img-fluid' alt="Sweating" width={60} height={89} loading='lazy' style={{ maxWidth: '100%' }} />
                    <p className='fs-5 p-3 text-center mt-1'>Изпотяване</p>
                </div>

                <div className='col-6 col-md-4 mb-2 icon-special'>
                    <img src='/Images/drowsiness.svg' className='img-fluid' alt="Drowsiness" width={103} height={89} loading='lazy' style={{ maxWidth: '100%' }} />
                    <p className='fs-5 p-3 text-center mt-1'>Главоболие</p>
                </div>

            </div>


            <div className='row bg d-flex co2-at-home-row justify-content-center'>

                <div className='col-sm-12 col-md-8 col-lg-8 text-center mx-auto'>
                    <h2 className='mt-5 text-center px-3 mb-5'>Вкъщи</h2>
                    <p className="mt-2 fs-5 w-100 text-center text-md-start px-3">Свежият въздух ще ви помогне да заспите по-добре през нощта. Дръжте вратата или прозореца си отворени, докато спите, за да избегнете усещането за застоял въздух, което се дължи на повишеното ниво на CO2.</p>
                </div>

            </div>



            <div className='row d-flex people-row justify-content-center'>

                <div className='col-sm-12 col-md-7 col-lg-7'>
                    <h2 className='mt-5 text-center px-3'>В училище или в офиса </h2>
                    <p className='fs-5 p-2 text-center ps-4 mt-5 mb-5'>Проучванията показват, че с повишаването на нивата на CO2 хората много по-трудно учат, изпълняват прости и сложни задачи и вземат решения.</p>
                </div>

                <div>
                    <img src='/Images/people.png' width={900} height={835} className='img-fluid' alt='people' />
                </div>

                <div className='row d-flex justify-content-center mt-5'>

                    <div className='col-sm-12 col-md-6 col-lg-6 mr-2'>
                        <img src='/Images/pencil2.svg' className='img-fluid px-2' alt='pencil' />
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-row mt-5'>
                        <p className='fs-5 p-2 text-start ps-4 mt-5 mb-5'>Учениците в класна стая с нива на CO2 от 2500 ppm имат много по-лоши резултати на тестовете, отколкото при 1000 ppm.</p>
                    </div>

                </div>


                <div className='col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center mt-5'>
                    <img src='/Images/cloud.svg' className='img-fluid' alt='cloud' height={335} />
                </div>



                <div className='col-sm-12 col-md-7 col-lg-7 flex-column justify-content-center mb-5'>
                    <h2 className='mt-5 text-center px-3'>Намаляване на CO<sub>2</sub></h2>
                    <p className='fs-5 p-2 text-start ps-4 mt-5 mb-5'>Нивата на CO2 се повишават и понижават редовно в помещенията. Има много фактори, които влияят на нивата на CO2, включително вентилацията, броя на хората и продължителността на пребиваване в затворено пространство.</p>
                </div>


                <div className='row d-flex justify-content-center mt-4'>

                    <div className='col-12 col-md-6 flex-column mt-5'>
                        <h2 className='ventilation-heading'>Вентилация и филтрация</h2>
                        <p className='fs-5 p-2 text-start ps-4 mt-5 mb-5'>Редовно сменяйте въздушните филтри на вътрешните вентилационни системи и инсталирайте монитор за CO2, който да ви напомня кога да освежите дома си.</p>
                    </div>

                    <div className='col-12 col-md-5'>
                        <img src='/Images/open_window.png' alt="open window" width={434} height={474} className='img-fluid px-2 ventilation-img' />
                    </div>

                </div>



            </div>


            <div className='row bg d-flex flex-row plants-row justify-content-center mt-5 pt-10'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <h2 className='mt-10 text-center px-3 mb-5'><strong>Растения</strong></h2>
                    <p className='p-2 text-start ps-4 mt-5 offset-2'>В миналото се твърдеше, че растенията помагат за намаляване на нивата на CO2 в дома, но това беше опровергано. Растенията намаляват нивата на CO2 в световен мащаб чрез фотосинтеза, но за съжаление е необходимо голямо количество, за да се промени качеството на въздуха в дома. Едно от предимствата обаче е, че според проучвания пребиваването сред природата може да помогне за намаляване на стреса и да предизвика спокойствие.</p>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <img src='/Images/plants.png' alt='Bamse' width={360} height={519} className='img-fluid px-2 mt-10' />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 mt-10 what-do-levels-mean-div'>

                    <h2 className='mt-10 text-center px-3 mb-5'><strong style={{ fontSize: '1.3em', lineHeight: '1em' }}>Какво означават моите нива</strong> на CO<sub>2</sub>?</h2>
                    {/* <div class="second-img row formula m-5 w-25">

                    </div> */}
                </div>


                <div className='row mt-10 flex-row justify-content-center levels-of-co2-div'>

                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <h3 className='mt-10 text-center px-3 first-heading'>&lt; 800 ppm</h3>
                        <p className='fs-5 p-3 text-start mt-1'>Добри нива на CO2. Дишайте спокойно. Настройте сигнали в таблото за управление на Airthings, за да бъдете уведомявани, ако нивата отново започнат да се повишават.</p>
                    </div>

                    <div className='col-sm-12 col-md-4 col-lg-4 second-div-level'>
                        <h3 className='mt-10 text-center px-3 second-heading'>&gt;= 800 и &lt; 1000 ppm</h3>
                        <p className='fs-5 p-3 text-start mt-1'>Справедливи нива на CO2. Започнете да предприемате стъпки за подобряване на нивата в помещението, като например отваряне на прозорец.</p>
                    </div>

                    <div className='col-sm-12 col-md-4 col-lg-4 third-div-level'>
                        <h3 className='mt-10 text-center px-3 third-heading'>&gt;= 1000 ppm</h3>
                        <p className='fs-5 p-3 text-start mt-1'>Ниски нива. Възможно е да се появят оплаквания от сънливост и лош въздух. Опитайте се да намалите нивата на CO2 в помещението, като отворите прозорците, проверите вентилацията на помещението и др.</p>
                    </div>

                </div>

                <div className='dark-container mt-10'>

                    <h2 className='mt-5 text-center px-3 pt-4'>Изберете монитор за качество на въздуха</h2>

                   
                    <div class="third-img row formula">

                    </div>


                    <div className='row flex-row d-flex justify-content-between waveplusdiv'>

                        <div className='col-sm-12 col-md-6 col-lg-6 flex-column wave-col'>
                            <img src='/Images/Wave_plus_with_phone.png' width={177} height={183} alt='Wave_plus_with_phone (1)' style={{ height: 'auto', maxWidth: '100%', width: '177px' }} />
                            <Link className='d-block wave-link' href='/wave-plus'>Airthings Wave Plus &gt;</Link>
                            <p className='p-3 text-center mt-1 wave-p'>Общ монитор за качество на въздуха в помещенията и откриване на радон</p>
                        </div>


                        <div className='col-sm-12 col-md-6 col-lg-6 float-end wave-col'>
                            <img src='/Images/Wave_plus_with_phone.png' width={177} height={183} alt='Wave_plus_with_phone (1)' style={{ height: 'auto', maxWidth: '100%', width: '177px' }} />
                            <Link className='d-block wave-link' href='/wave'>Airthings Wave &gt;</Link>
                            <p className='p-3 text-center mt-1 wave-p'>Интелигентен детектор за радон с бързи и точни резултати на вашия смартфон</p>
                        </div>

                    </div>


                </div>

            </div>



        </div>


    )


}