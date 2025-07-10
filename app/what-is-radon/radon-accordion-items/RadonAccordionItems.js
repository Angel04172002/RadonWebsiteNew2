import { Link } from 'next/link';

export function RadonAccordionItemOne() {

    return `

    <div class="row radon-row">

        <div class="col-lg-12 mt-5 text-center mx-auto">
            <div class="contaminant_container mb-5" style="background-color:#42515A; border:1px solid #707070; height: auto; ">
                <h3>„Радонът е причина номер 1 за рак на белия дроб сред непушачите.“</h3>
            </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 order-md-2 order-2 text-center mx-auto">

            <p class="display-6 v-10 accordion-paragraph-1 mt-5">Във въздуха радонът се разпада на малки радиоактивни елементи(потомци на радон), които могат да се задържат в лигавицата на белите дробове, където да излъчват радиация.Тази радиация може да увреди белодробните клетки и в крайна сметка да доведе до рак на белия дроб.</p>
            <p class="display-6 accordion-paragraph-2">Както при повечето замърсители, опасността от радон се поражда от високите нива или продължителното излагане на въздействието му във времето. Ето защо непрекъснатият мониторинг е от ключово значение за разбирането на риска за вас. </p>

        </div>

        <div class="lungs-img-container text-center col-lg-6 col-md-12 col-sm-12 order-md-1 order-1 mt-5 mx-auto">
            <img alt="Lungs" class="mx-auto mb-3 img-fluid radon-img-act-1 mr-5" src="/Images/lungs.svg">
        </div>
    </div>

    `
}

export function RadonAccordionItemTwo() {

    return `  
    
    <div class="row radon-row">
        <div class="col-lg-6 col-md-12 col-sm-12 mt-5 text-start order-md-2 order-2 order-lg-1">
            <p class="display-6 accordion-paragraph-2">Скалите и почвата под домовете ни съдържат следи от уран. С течение на времето уранът се разгражда и образува други елементи. Това се нарича радиоактивно разпадане. Радонът е един от елементите във веригата на разпадане на урана. При разпадането на радон газът излъчва радиация под формата на алфа частици. Тази радиоактивна частица е съставена от два протона и два неутрона.</p>
        </div>  

        <div class="col-lg-6 col-md-12 col-sm-12 mt-5 radon-particle-img order-md-1 order-1 order-lg-2">
            <img alt="Radon Particle" class="w-100 mb-3 img-fluid mx-auto radon-img-act-2" src="/Images/radon-particle.svg">
        </div>
    </div>
    `
}


export function RadonAccordionItemThree() {

    return ` 

    <div class="container mt-5">

        <div class="row radon-row">

            <div class="col-lg-12 col-md-12 col-sm-12 mt-2 text-start radiodna-text-container">
                <p class="accordion-paragraph-1  text-md-start radiodna-p">Радоновите потомци могат да се прикрепят към прах и други частици и да бъдат вдишани в белите дробове. При разграждането на радон и неговите потомци във въздуха те излъчват радиация, която може да увреди ДНК в клетките на организма, пише cancer.org.</p>
                <p class ="accordion-paragraph-2 text-md-start radiodna-p">Всички наши клетки съдържат ДНК, която действа като ръководство с инструкции или план за клетките как да създават свои копия. Когато алфа частица попадне в ДНК, тя може да увреди плана на клетката. Клетките непрекъснато се възпроизвеждат, но при нарушен план процесът на възпроизвеждане може да се превърне в раков.</p>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12">
                <img class="w-100 mb-5 img-fluid mx-auto" src="/Images/dna-circle-2.svg" alt="DNA Circle" loading="lazy">
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 text-start radiodna-text-container2">

                <div class="right-aligned-container">
                    <img class="radioactivity-img" src="/Images/radioactivity.svg" loading="lazy">
                    <h3 class="display-6 accordion-subcaption pl-1 radioactivity-p">Радиоактивност</h3>
                </div>

                <div class="paragrah-container">
                    <p class="display-6 accordion-subcaption-paragraph text-md-start mb-5">Радиоактивността приема различни форми, включително алфа, бета, гама и неутронно лъчение, които имат различна способност да проникват в различни вещества.</p>
                </div>

                <div class="right-aligned-container-2">
                    <img src="/Images/x-ray.svg" loading="lazy">
                    <h3 class="display-6 accordion-subcaption pl-1">Рентгенови източници</h3>
                </div>

                <div class="paragrah-container">
                    <p class="display-6 accordion-subcaption-paragraph">Гама лъчението е просто високоенергийно електромагнитно излъчване (фотони). Можем „изкуствено“ да създадем такова високоенергийно лъчение в рентгенова тръба, като в този случай го наричаме рентгенови лъчи. Рентгеновите лъчи обикновено се използват при медицински сканирания, като тези, извършвани с компютърен томограф.</p>
                </div>

            </div>


        <div class="col-lg-6 col-md-12 col-sm-12 text-start lungs-container order-2 order-md-1">

            <div class="left-aligned-container mt-5">
                <img class="lungs-icon" src="/Images/lungs-icon.svg" data-src="/Images/lungs-icon.svg" loading="lazy">
                <h3 class="display-6 accordion-subcaption mt-1">Вътрешна тъкан</h3>
            </div>

            <div class="paragrah-container">
                <p class="display-6 accordion-subcaption-paragraph">Радиоактивните дъщерни продукти на радона (главно изотопи на полоний) могат да бъдат вдишани и да се заселят в белите дробове. Когато тези дъщерни продукти на радона се разпаднат, излъчвайки алфа частици, те ще увредят клетките поради непосредствената близост между разпадащия се изотоп и ДНК материала. Алфа-частиците не могат да проникнат дълбоко и са много по-малко вредни, ако радиоактивният материал, който излъчва алфа-частиците, се намира от външната страна на тялото (например върху кожата).</p>
            </div>
        </div>

        
        <div class="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5 order-1 order-md-2">
            <img alt= "X Ray" class="x-ray-image mx-auto img-fluid" src="/Images/x-ray-doctor.svg" data-src="/Images/x-ray-doctor.svg" loading="lazy">
        </div>

      </div>

      
    <div class="row radon-row mt-5 main-radio-dna-img-container justify-content-around order-3 order-md-2">

            <div class="col-lg-6 col-md-12 col-sm-12 radio-dna-img-container c-1 mb-4">
                <h3>Радиоактивно лъчение</h3>
                <img alt="Radiotion Artificial" src="/Images/radiotion-artificial.svg" data-src="/Images/radiotion-artificial.svg" loading="lazy">
                <h4>Изкуствени източници</h4>
                <p>Когато мислим за радиация, често се сещаме за изкуствени източници, като рентгенови лъчи или медицински скенери, но тези източници имат слабо въздействие.</p>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-10 radio-dna-img-container c-2 mb-4">
                <h3>Алфа лъчение срещу гама лъчение</h3>
                <img alt="Alpha Gamma Rad" src="/Images/alpha-gamma-rad.svg" data-src="/Images/alpha-gamma-rad.svg" loading="lazy">
                <p>Алфа-лъчението (например радонът) има много по-голямо въздействие върху ДНК, отколкото гама-лъчението. Представете си, че ДНК е ударена от оръдейна топка - ето на какво прилича алфа радиацията. Докато гама-лъчението е като ДНК да бъде ударена от игла. Има голяма разлика в уврежданията.</p>
            </div>
     </div>

     </div>


    `
}




export function RadonAccordionItemFour() {
    return `

        <div class="container mt-5">

            <div class="row radon-row">

                <div class="col-lg-11 col-md-12 col-sm-12 mt-5 text-start mx-auto">
                    <p class="radon-home-p text-start">Съвременните сгради често са добре изолирани, за да се намалят разходите за енергия. Слабият въздушен поток обаче може да позволи на радона да се натрупа до високи нива и да предизвика дългосрочно облъчване. Вентилацията, която може да бъде толкова проста, колкото отварянето на прозореца, често е решение за поддържане на безопасни нива на радон. Чрез дългосрочно наблюдение можете да разберете кога нивата започват да се повишават и да действате по подходящ начин.</p>
                </div>

            </div>


            <div class="row radon-row mt-5 main-radio-home-container justify-content-around">

                    <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-img-container mb-4">
                        <h4 class="first-radio-heading text-center">Дали радонът е проблем, причинен от човека?</h4>
                        <img alt="Man Made" src="/Images/man-made.svg" data-src="/Images/man-made.svg" loading="lazy">
                        <p>Концентрацията на радон в сградите често е много по-висока, отколкото извън тях. Газът идва от земята и се улавя и задържа в домовете ни, което води до нива, които рядко се срещат в природата.</p>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 d-2 home-dna-img-container mb-4">
                        <h4 class="first-radio-heading">Как радонът прониква в дома ми?</h4>
                        <img alt="How Enter" src="/Images/how-enter.svg" data-src="/Images/how-enter.svg" loading="lazy">
                        <p class="text-align-center">Радонът се издига и може да навлезе в дома или на работното място през пукнатини в основите, места за влизане в тръби и др.</p>
                    </div>


                    <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-img-container mb-4">
                        <h4 class="first-radio-heading">Ще достигне ли радон до най-горните етажи?</h4>
                        <img alt="Top Floors" src="/Images/top-floors.svg" data-src="/Images/top-floors.svg" loading="lazy">
                        <p>В някои сгради нивото на радон е по-високо на последните етажи. Това може да се дължи на изкуствената вентилация, естествения въздушен поток или използваните строителни материали.</p>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 d-2 home-dna-img-container mb-4">
                        <h4 class="first-radio-heading">Влияе ли времето върху нивата на радон?</h4>
                        <img alt="Weather" src="/Images/weather.svg" data-src="/Images/weather.svg" loading="lazy">
                        <p>Да. Нивата на радон могат да бъдат повлияни от естествени източници като студено време, вятър, налягане и разместване на почвата - дори от земетресения и местно строителство.</p>
                    </div>
            </div>
        </div>
    `
}


export function RadonAccordionItemFive() {

    return `
        <div class="container mt-5">

            <div class="row radon-row">
                
                <div class="col-lg-12 col-md-12 col-sm-12 mt-5 text-start">
                    <p class="radon-map-p">Radonmap.com използва сензори на Airthings от цял свят, за да показва нивата на радон в реално време, разбити по местоположение и анонимизирани. Вижте приблизителните изчисления на годишния и месечния риск в тази лесна за използване интерактивна карта! Съседът ви може да има различни нива на радон от вас, затова е важно да наблюдавате собствения си дом.</p>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 mt-5">
                    <img src="/Images/radon-map.png" class="img-fluid mx-auto radonmap-img" alt="Radon Map" loading="lazy">
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 mt-5 justify-content-center mx-auto">
                    <a class="radon-map-btn btn btn-primary" href="/radonmap" target="_blank">Вижте приблизителното ниво на риск във вашия регион</a>
                </div>
            </div>

        </div>
    `
}


export function RadonAccordionItemSix() {

    return `
        <div class="container mt-5">
        
            <div class="row radon-row">

                <div class="col-lg-12 col-md-12 col-sm-12 mt-5 text-start sensitive-div">
                    <img src="/Images/sensitive_group.svg" class="img-fluid mx-auto sensitive-img" alt="Sensitive Group" loading="lazy">
                    <h4 class="text-center">1 от 30 души са фундаментално чувствителни към радон.</h4>
                </div>


                <div class="col-lg-12 col-md-12 col-sm-12 mt-5 text-start sensitive-div-2">
                    <img src="/Images/children_family.svg" class="img-fluid mx-auto sensitive-img-2" alt="Sensitive Group" loading="lazy">
                    <h3 class="text-center">Всички деца са чувствителни</h3>
                </div>

            </div>

            
            <div class="row radon-row mt-5 main-radio-home-container justify-content-center">

                    <div class="col-lg-6 col-md-6 col-sm-12 e-1 sensitive-dna-img-container mb-4">
                        <img class="sensitive-img-div" alt="Developing" src="/Images/developing.svg" data-src="/Images/developing.svg" loading="lazy">
                        <h4 class="first-radio-heading">Органите на децата все още се развиват</h4>
                        <p class="sens-p w-75 mx-auto">Тяхната репликативна тъкан е по-уязвима към увреждане на ДНК.</p>
                    </div>
                    
                    <div class="col-lg-6 col-md-6 col-sm-12 e-2 sensitive-dna-img-container mb-4">
                        <img class="sensitive-img-div" alt="Weight" src="/Images/weight.svg" data-src="/Images/weight.svg" loading="lazy">
                        <h4 class="first-radio-heading">Децата тежат по-малко</h4>
                        <p class="sens-p w-75 mx-auto">Експозицията им е по-голяма, тъй като се измерва в концентрация на килограм.</p>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 e-1 sensitive-dna-img-container mb-4">
                        <img class="sensitive-img-div" alt="Lungs Icon" src="/Images/lungs-icon-2.svg" data-src="/Images/lungs-icon2.svg" loading="lazy">
                        <h4 class="first-radio-heading">Децата дишат по-бързо</h4>
                        <p class="sens-p w-75 mx-auto">Всъщност те дишат 2-3 пъти по-бързо от възрастните, тъй като белите им дробове са много по-малки.</p>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 e-2 sensitive-dna-img-container mb-4">
                        <img class="sensitive-img-div" alt="Clock" src="/Images/clock.svg" data-src="/Images/clock.svg" loading="lazy">
                        <h4 class="first-radio-heading">На децата им остава повече живот</h4>
                        <p class="sens-p w-75 mx-auto">И по този начин може да живее достатъчно дълго, за да се разболее от рак вследствие на ранното облъчване с радон.</p>
                    </div>
              </div>


        </div>
    `
}

export function RadonAccordionItemSeven() {

    return `
        <div class="container mt-5">
        
            <div class="row radon-row">

                <div class="col-lg-12 col-md-12 col-sm-12 mt-5 text-start">

                    <p class="why-change-p">Нивата на радон се променят с течение на времето. Ето защо е толкова важно да измервате непрекъснато, за да сте сигурни, че нивата ви остават ниски.</p>
                    <p class="why-change-p">Количеството на радон, излъчвано от земята, и количеството, което действително влиза в дома ни, може да се промени поради следните причини:</p>

                </div>

            </div>



            <div class = "row place-where-div justify-content-start">

                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/temperature.svg' class="img-fluid mx-auto" alt="Temperature" loading="lazy">
                        <p class="text-center radon-level-desc-p">Температура</p>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/pressure.svg' class="img-fluid mx-auto" alt="Pressure" loading="lazy">
                        <p class="text-center radon-level-desc-p">Налягане</p>
                    </div>  

                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/humidity.svg' class="img-fluid mx-auto" alt="Humidity" loading="lazy">
                        <p class="text-center radon-level-desc-p">Влажност</p>
                        
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/ventilation.svg' class="img-fluid mx-auto" alt="Ventilation" loading="lazy">
                        <p class="text-center radon-level-desc-p">Вентилация</p>
                    </div>  
                    
                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/insulation.svg' class="img-fluid mx-auto" alt="Insulation" loading="lazy">
                        <p class="text-center radon-level-desc-p">Строителна изолация</p>
                    </div>  
                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/foundation.svg' class="img-fluid mx-auto" alt="Foundation" loading="lazy">
                        <p class="text-center radon-level-desc-p">Основата на вашия дом</p>
                    </div>  
                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/snowfall.svg' class="img-fluid mx-auto" alt="Snowfall" loading="lazy">
                        <p class="text-center radon-level-desc-p">Снеговалеж</p>
                    </div>  
                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/ice.svg' class="img-fluid mx-auto" alt="Ice" loading="lazy">
                        <p class="text-center radon-level-desc-p">Лед</p>
                    </div>  
                    
                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/rain.svg' class="img-fluid mx-auto" alt="Rain" loading="lazy">
                        <p class="text-center radon-level-desc-p">Дъжд</p>
                    </div>  
                    <div class="col-lg-3 col-md-6 col-sm-6 d-1-1 home-dna-place-container mb-4 mt-5">
                        <img src='/Images/earthquakes.svg' class="img-fluid mx-auto" alt="Earthquakes" loading="lazy">
                        <p class="text-center radon-level-desc-p">Земетресения</p>
                    </div>  


                    <div class="row radon-sampling-row mt-5">

                        <div class="col-lg-5 col-sm-12 mt-5 mb-5">
                            <img src="/Images/CS_Radon_Coffee.svg" class="img-fluid mx-auto radon-sampling-img" alt="Radon Sampling" loading="lazy">
                        </div>

                        <div class="col-lg-6 col-sm-12 content-sampling-div mt-5">

                            <h4 class="text-start">Вземане на проби от радон: радонът не се разпределя равномерно в помещението.</h4>
                            <p class="text-start">Представете си да добавите малко сметана в чаша черно кафе, но да не я разбъркате. Ако след това вземете няколко проби от малко място в това кафе за нивото на сметаната, ще получите много различни показания с течение на времето, тъй като сметаната бавно се смесва с кафето. Вземането на проби от радон работи по същия начин.</p>
                            <p class="text-start">В резултат на това сензорите за радон на Airthings дават показания за краткосрочна проба, както и средно дългосрочно показание. Ето защо препоръчваме да оставите Вашия детектор за радон да измерва в продължение на поне 30 дни, за да може мониторът да получи достатъчно проби от въздуха, за да осигури надеждна средна стойност в дългосрочен план.</p>
                            
                        </div>

                    </div>



                    <div class="row radon-levels-last-div mt-5">

                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h2 class="text-center">Какво означават моите нива на радон?</h2>
                        </div>

                        <div class="row main-last-row flex-column mt-5">

                            <div class="inner-level-last-div col-lg-6 col-md-6 col-sm-6">
                                <h2>Добро</h2>
                            </div>
                                
                             <span style="color: #2dc26b;">●</span>  
                             <p class="radon-lev-last-p">0 - 1.3 pCi/L </p>           
                             <p class="radon-lev-last-p-2">Не е необходимо да се предприемат действия</p>

                             
                            <br/>

                            <span style="color: #2dc26b;">●</span>
                            <p class="radon-lev-last-p">1.4 - 2.6 pCi/L</p>
                            <p class="radon-lev-last-p-2 w-100">Експериментирайте с вентилация <br/> и уплътняване на пукнатини, за да <br/> намалите нивата.</p>



                            <div class="inner-level-last-div col-lg-6 col-md-6 col-sm-6">

                                <h2>Справедливо</h2>
                            
                            </div>

                            <span style="color: #FEC200;">●</span>
                            <p class="radon-lev-last-p">2.7 - 4.0 pCi/L</p>
                            <p class="radon-lev-last-p-2">Продължавайте да измервате. <br/> Ако нивата се запазят за повече <br/> от 3 месеца, свържете се с <br/> професионален специалист <br/> за намаляване на радон. </p>


                            <div class="inner-level-last-div col-lg-6 col-md-6 col-sm-6">

                                <h2>Лошо</h2>
             
                                
                            </div>
                                
                            <span style="color: #F54354;">●</span>
                            <p class="radon-lev-last-p">4.0 pCi/L и нагоре</p>
                            <p class="radon-lev-last-p-2">Продължавайте да измервате. <br/> Ако нивата се запазят за повече <br/> от един месец, свържете се с <br/> професионален специалист <br/> за намаляване на радон.</p>

                        </div>

                    </div>


            </div>
            


     
      


       


        </div>
    `
}