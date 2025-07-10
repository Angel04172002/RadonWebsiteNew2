import '../../public/info-page.css';
import './WhatIsPm.css'



export default function WhatIsParticulateMatter() {

    return (

        <>

            <div className='container-fluid'>


                <div className='row bg pm-main-row'>

                    <div className="col-sm-12 col-md-6 col-lg-6">

                        <h1 className='display-4 mt-5'>Какво е <br /> <strong>материя?</strong></h1>

                        <img className='pm-main-img px-3' src='/Images/pm-icon-no-text.svg' alt="PM Icon" width={150} height={150} />

                    </div>

                </div>

                <div className='row pm-main-img-row'>

                    <div className='pm-main-div col-sm-12 col-md-6'>
                        <p className="display-6 text-center pm-main-par px-3">Фините прахови частици не са само един замърсител или замърсител. Това е набор от частици прах, мръсотия и течности, които се суспендират във въздуха. Някои от тях са достатъчно големи, за да се видят, като дим, смог или сажди, но най-вредни са по-малките, невидими частици1. Те могат да попаднат в белите дробове и дори в кръвта. Колкото по-здравословен е въздухът, толкова по-малко са ФПЧ.</p>
                        <h2 className="display-6 text-center pm-main-heading px-3">9 от 10 души дишат въздух, който надвишава препоръчителните граници на СЗО и съдържа високи нива на замърсителите.</h2>
                    </div>

                </div>

                <div className='row bg justify-content-center flex-column pm-air-pollution-row'>

                    <div className='col-sm-12 col-md-6 text-center w-100'>
                        <h2 className='display-6 air-poll-h2 text-sm-center text-md-start'><strong>Замърсяване на въздуха и PM:</strong> <br /> Едно и също ли е това?</h2>
                    </div>

                    <div className='row air-poll-1-row-inner bg justify-content-center'>

                        <div className='col-sm-12 col-md-12 col-lg-6 air-poll-row-inner-p-div'>
                            <p className='pm-main-par text-center text-lg-start px-3'>В известен смисъл да. Замърсяването на въздуха е наличието на вещества във въздуха над естественото ниво3. Замърсеният въздух може да бъде вреден за околната среда и за хората4.</p>
                            <p className='pm-main-par text-center text-lg-start mt-5 special-par'>Съществуват различни видове замърсители на въздуха, като газове, частици (органични и неорганични) и биологични молекули. Следователно ФПЧ е замърсител на въздуха.</p>
                        </div>

                        <div className='col-sm-6 col-md-12 col-lg-2 air-poll-row-inner-img-div'>
                            <img width={170} height={349.53} className="img-fluid px-3 mt-5" alt="Air Pollution" src='/Images/PMIllustrations_Air pollution-1.svg' loading='lazy' />
                        </div>

                    </div>


                    <div className='air-poll-2-row-inner row bg justify-content-center'>

                        <div className='col-sm-12 air-poll-2-row-inner-p-div'>
                            <h2 className='text-sm-center text-md-start display-6'>Каква е разликата между PM2.5, PM1 и PM10?</h2>
                        </div>

                        <div className='row mt-5'>

                            <div className='col-sm-12 col-lg-5 air-poll-2-row-inner-img-div order-lg-1 order-md-1 order-2'>
                                <img width={170} height={400} className='img-fluid mt-5 particle-img' src='/Images/PM particles_difference between.svg' alt='PM Particles' loading='lazy' />
                            </div>

                            <div className='col-lg-6 offset-lg-1 order-lg-2 order-md-1 order-1'>

                                <p className='pm-main-par text-center text-lg-start mt-5'>Тъй като праховите частици са толкова много, учените са намерили начин да ги измерват. Например PM1 се отнася до размера на частицата.</p>
                                <p className='mt-5 pm-list-par text-center text-lg-start'>ФПЧ1 са изключително фини частици с диаметър, по-малък от 1 микрона. <br /> ФПЧ2,5 (известни още като фини частици) имат диаметър, по-малък от 2,5 микрона. <br /> PM10 означава, че частиците са с диаметър по-малък от 10 микрона или 100 пъти по-малък от един милиметър.</p>
                                {/* <p className='pm-list-par text-center text-lg-start'></p>
                                <p className='pm-list-par text-center text-md-start text-lg-start'></p> */}
                            </div>



                        </div>


                    </div>

                    <div className='col-sm-12 col-md-12 mt-5'>
                        <img className='mt-5 img-fluid px-1 particle-img-2 mr-5' src='/Images/PM Illustrations_PM size-2.svg' alt='Particles' loading='lazy' width={1080} height={583.64} />
                    </div>
                </div>

                <div className='row bg justify-content-center pt-5'>

                    <div className='col-sm-12 col-md-10'>
                        <h2 className='mattery-title display-5 px-2'>Може ли материята да ви разболее?</h2>
                        <p className='paragraph-page-mattery mt-5 px-2 text-center'>Да, праховите частици и замърсяването могат да навредят на здравето ви, тъй като се вдишват поради малкия си размер. Размерът на частиците е пряко свързан с потенциалната им способност да причиняват здравословни проблеми.</p>
                    </div>


                    <div className='col-md-12 col-lg-6 mt-5 first-col'>
                        <img width={270} height={320.19} className="lungImg" alt="Coarse Particles" src='/Images/PM Illustrations-10.svg' loading='lazy' />
                        <p className='lung-paragraph'>Eдри частици</p>
                        <p className='text-center lung-desc px-3'>Известни още като ПЧ , едрите частици имат диаметър обикновено по-голям от 2,5 µm и по-малък или равен на 10 µm в диаметър. Измерването на ФПЧ включва частици с диаметър под 2,5 um.</p>
                    </div>

                    <div className='col-md-12 col-lg-7 mt-5'>

                        <img width={270} height={320.19} className="lungImg" alt="Fine Particles" src='/Images/PM Illustrations_Lungs_3.svg' loading='lazy' />
                        <p className='lung-paragraph'>Фини частици</p>
                        <p className='lung-desc text-center px-3'>Фините частици (PM <sub>2,5</sub>) представляват най-голям риск за здравето. Това е така, защото те могат да навлязат дълбоко в белите дробове, а някои от тях могат да попаднат дори в кръвния поток, като излагането на въздействието им може да засегне белите дробове и сърцето. Измерването на PM <sub>2,5</sub> включва частици с диаметър под 2,5 um.</p>

                    </div>

                    <div className='col-md-12 col-lg-6 mt-5'>

                        <img width={270} height={320.19} className="lungImg" alt="Ultrafine Particles" src='/Images/PM Illustrations_Lungs_4.svg' loading='lazy' />
                        <p className='lung-paragraph'>Ултрафини частици</p>

                        <p className='lung-desc px-3'>Ултрафиновите частици са 0,1um или по-малки.</p>

                    </div>
                </div>

                <div className='row bg justify-content-center pm-health-row mt-5'>

                    <div className='col-sm-12 pt-5'>
                        <img className='img-fluid' alt='Heart Rate' src="/Images/heart-rate.svg" loading='lazy' />
                    </div>


                    <div className='col-md-12 col-lg-8 mt-5'>

                        <h2 className='main-health-heading mt-5'><strong>Как PM влияе на здравето ми?</strong></h2>

                        <p className='mt-5 text-start health-main-par px-3'>Знаем, че ФПЧ могат да навлязат дълбоко в белите дробове и може би дори в кръвния поток, така че как ФПЧ влияят на здравето ни? Освен това изследванията показват, че замърсяването с прахови частици оказва влияние върху три основни области на нашето здраве: </p>



                        <blockquote className='mt-5 text-start'>По оценки на СЗО около 7 милиона души умират всяка година от излагане на фини частици в замърсения въздух</blockquote>

                        <div className='row'>

                            <div className='col-lg-10'>
                                <p className='mt-5 text-start health-main-par px-3'>Дразнене на очите, ушите, носа и гърлото: Праховите частици могат да предизвикат възпаление, дори когато лигавицата на носа ви си върши работата и филтрира по-големите частици. Някои проучвания показват, че вдишването на твърди частици е свързано с по-голяма нужда от операция на синусите9. В краткосрочен план това вероятно означава хрема, кихане и сърбеж в очите10.</p>
                            </div>

                            <div className='col-lg-2'>
                                <img width={150} height={210.5} className='img-fluid' src='/Images/sneeze.svg' alt='Sneeze' loading='lazy' />
                            </div>

                        </div>

                        <div className='row'>


                            <div className='col-lg-2'>
                                <img width={200} height={187} className='img-fluid mt-5' src='/Images/asthma.svg' alt='Asthma' loading='lazy' />
                            </div>

                            <div className='col-lg-10'>
                                <p className='mt-5 text-start health-main-par px-3'>Предизвикване на астма и алергии: Тъй като ФПЧ възпаляват дихателните пътища, хората с астма са особено податливи на въздействието им и също така допринасят за развитието на болестта11. ФПЧ се свързват и с алергични респираторни реакции, като сенна хрема12. Можете да научите повече за подобряването на живота на страдащите от астма чрез оптимизиране на качеството на въздуха в помещенията тук.</p>
                            </div>

                        </div>

                        <div className='row'>

                            <div className='col-lg-10'>
                                <p className='mt-5 text-start health-main-par px-3'>Засилване на коронарните и респираторните заболявания: Частиците могат да предизвикат обостряне или влошаване на проблемите при хора с коронарна болест, застойна сърдечна недостатъчност или хронична обструктивна белодробна болест (ХОББ)13.</p>
                                <p className='mt-5 text-start health-main-par px-3'>Всъщност проучванията показват, че замърсяването може да повлияе на хората през целия им живот, а едно проучване установи, че децата и възрастните хора са сред най-уязвимите от въздействието на ФПЧ14. Като се имат предвид значителните въздействия върху здравето, проверката на нивата на ФПЧ с View Plus е жизненоважна.</p>
                            </div>

                            <div className='col-lg-2'>
                                <img width={150} height={190} className='img-fluid mt-5' src='/Images/lungs-3.svg' alt='Lungs' loading='lazy' />
                            </div>

                        </div>

                    </div>



                    {/* <p>Дразнене на очите, ушите, носа и гърлото: Праховите частици могат да предизвикат възпаление, дори когато лигавицата на носа ви си върши работата и филтрира по-големите частици. Някои проучвания показват, че вдишването на твърди частици е свързано с по-голяма нужда от операция на синусите9. В краткосрочен план това вероятно означава хрема, кихане и сърбеж в очите10. */}

                </div>


                <div className='row bg justify-content-center pm-where-does-come-row pt-5'>

                    <div className='col-lg-9'>
                        <h2 className='text-center px-3'>Откъде идва PM?</h2>
                        <p className='text-center px-3 mt-5'>Фините частици (PM2,5) могат да проникнат дълбоко в белите дробове, а някои от тях дори да попаднат в кръвния поток, затова е важно да знаем откъде идват. Фините прахови частици се състоят от смес от твърди и течни вещества, както органични, така и неорганични, включително прах, цветен прашец, сажди, дим, сложни химикали, сулфати, минерален прах и други15. Мнозина смятат, че ФПЧ се натрупват само на открито, но всъщност те могат да се задържат и в помещенията и дори да се отделят в тях.</p>
                    </div>

                    <div className='col-lg-9 mt-5 pm-outdoor-div'>

                        <h3 className='text-center px-3'>Прахови частици на открито</h3>

                        <p className='mt-5 px-3 text-center'>91% от хората, живеещи в градовете, не дишат безопасен въздух</p>


                        <div className='row'>

                            <div className='col-lg-6'>
                                <p className='mt-5 text-start health-main-par px-3'>ФПЧ идват както от антропогенни, така и от природни източници. Антропогенните могат да се генерират от промишлеността, строителството, сметищата, селското стопанство, моторните превозни средства с бензинови или дизелови двигатели и триенето от спирачките и гумите.</p>
                            </div>

                            <div className='col-lg-6'>
                                <img style={{ margin: '20px' }} width={400} className='img-fluid mt-5' src='/Images/outdoors.svg' alt='Outdoors' loading='lazy' />
                            </div>

                            <div className='col-lg-12'>
                                <p className='mt-5 px-3 text-center'>Естествените източници включват горски пожари, растения, произвеждащи цветен прашец, пръски, разпръсквани от водата, почвата и дори вулкани и други сеизмични дейности. Вторичните частици се образуват, когато газове реагират във въздуха и образуват ФПЧ. Азотните оксиди, отделяни при движението по пътищата, и някои промишлени газове могат да се превърнат в твърди или течни вещества по този начин</p>
                            </div>

                            <div className='col-lg-12'>
                                <p className='mt-5 px-3 text-center'>Пътният прах, морските пръски, полените или частиците, създадени от строителни проекти, обикновено са по-големи от PM<sub>10</sub>, докато изгарянето на гориво, работата на двигателите или обработката за промишлеността обикновено създават PM<sub>2.5</sub> частици. Вторичните прахови частици вероятно също се състоят от тези по-малки и по-вредни частици.</p>
                            </div>

                            <div className='col-lg-12'>
                                <p className='mt-5 px-3 text-center'>Колебания в PM<sub>2.5</sub>  са свързани с климатичните и метеорологичните променливи, включително температурата, относителната влажност и вятъра. Това е логично, тъй като частиците във въздуха могат да се разпространят по-далеч или да се задържат за по-дълго време в зависимост от метеорологичните условия.</p>
                            </div>


                        </div>


                        <h3 className='text-center px-3 mt-5'>Прахови частици на закрито</h3>

                        <p className='mt-5 px-3 text-center'>3,8 милиона души умират всяка година от излагане на замърсяване на въздуха от домакинствата</p>

                        <p className='mt-5 px-3 text-center'>Част от PM, които дишате в дома си, са попаднали в него от външната среда. Въпреки това има много неща, които създават ФПЧ и в помещенията!</p>



                        <div className='row mt-5'>

                            <div className='col-lg-6 col-sm-12'>
                                <p className='px-3 mx-auto' style={{ fontWeight: 'bold', marginRight: '3.5em' }}>Ежедневни дейности, създаващи PM</p>
                                <p className='mt-5 px-3 text-start offset-1'>В ежедневието си има някои дейности, които могат да генерират PM в помещението. Например готвенето, нещо, което всички правим през повечето дни, може да генерира PM. Подобно на това, дейностите, свързани с горене, като палене на свещи, използване на камини и пушене на цигари, могат да увеличат нивата на ФПЧ в дома ви. Част от тях са свързани с вентилацията, тъй като отоплителните уреди без вентилатор или керосиновите нагреватели създават ПМ и могат да попаднат в капан в помещението. Известно е, че дори някои хобита, като дървообработването, дърворезбата, изкуствата и занаятите, ги създават.</p>
                            </div>

                            <div className='col-lg-6 col-sm-12 mx-auto'>
                                <img className='img-fluid mt-5' src='/Images/indoors.svg' width={230} loading='lazy' alt='Indoors' style={{ margin: '20px' }} />
                            </div>

                        </div>

                        <p className='px-3 mt-5 text-center'><span style={{fontWeight: 'bold'}}>Биологични източници на PM</span></p>
                        <p className='px-3 mt-5'>Праховите частици в помещенията могат да идват и от биологични източници, като спори на плесени или мухъл, прах и пърхот от домашни любимци (малки парченца кожа, отделяни от домашните любимци). Смята се, че тези форми на ПМ предизвикват алергични реакции.</p>
                        <p className='px-3 mt-5'>Нивата на праховите частици в дома ви зависят от фактори като нивата навън, вида на вентилацията или филтрацията в имота ви и начина на живот на обитателите. Ако не пушите и има малко допълнителни източници на частици, нивата на ПЧ трябва да са същите или по-ниски от измерените на открито.</p>
                    </div>



                </div>
            </div >









            {/* <div className='container-fluid'>


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
            {/* </div>


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



            </div> */}

        </>

    )

} 