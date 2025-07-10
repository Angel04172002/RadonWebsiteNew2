export function ViewPlusAccordionItemOne() {
    return `
    <ul>  

        <li><strong>Сензори:</strong> Радон, прахови частици (PM2.5), въглероден диоксид (CO2), температура, влажност, химикали във въздуха (ЛОС), въздушно налягане</li>
        <li><strong>Дисплей:</strong> 2.9” 296128 pixels ePaper</li>
        <li><strong>Визуален индикатор:</strong> Червен/жълт/зелен индикатор за светене</li>
        <li><strong>Дълъг живот на батерията: </strong>До 2 години (в зависимост от интервала между сензорите и WiFi рутера)</li>
        <li>Опционална работа с USB-C (работи с батерии, ако са извадени)</li>
        <li>Поддържа монтаж на стена или поставяне на маса</li>
        <li><strong>Безжична връзка: </strong>WiFi или Airthings SmartLink (с концентратор)</li>
        <li>Bluetooth за конфигурация при качване на борда и ежедневна употреба</li>
        <li><strong>Функционалност на концентратора:</strong> Активирано, когато е свързано с Wi-Fi и USB-C кабелът е включен към устройството (не е съвместимо с Wave Radon 1st Gen SN: 2900xxxx)</li>

    </ul>
    `
}

export function ViewPlusAccordionItemТwo() {

    return `
        <ul>

            <li><strong>Вземане на проби от радон: </strong>Пасивна дифузионна камера</li>
            <li><strong>Метод на откриване: </strong>Алфа спектрометрия</li>
            <li><strong>Обхват на измерване: </strong>0 - 500 pCi/L / 0 - 20,000 Bq/m<sup>3</sup></li>
            <li><strong>Точност/прецизност при 5,4 pCi/L / 200 Bq/m<sup>3</sup>: </strong>След 7 дни ~ 10 % След 2 месеца ~ 5 %</li>

        </ul>
    `

}

export function ViewPlusAccordionItemThree() {

    return `
        <ul>

            <li><strong>Интервал на вземане на проби от сензора:</strong></li>
            <li class="none-style">5 минути</li>
            <li><strong>Резолюция на сензора:</strong></li>
            
            <li class="none-style">Температура ∓ 0,1°C / F</li>
            <li class="none-style">Влажност ∓1%</li>
            <li class="none-style">Налягане ∓0.15hPa</li>



            <li><strong>Време за първоначално калибриране:</strong></li>
            <li class="none-style">VOC ~7 дни</li>
            <li class="none-style">CO2 ~7 дни</li>


            <li><strong>Данни за CO2:</strong></li>
            <li class="none-style">NDIR сензор (недисперсивен инфрачервен сензор):</li>
            <li class="none-style">Диапазон на измерване 400-5000 ppm</li>
            <li class="none-style">Оптимална точност ±50ppm ±3% в рамките на 10-35°C / 50-95°F и 0-80%RH след първоначално калибриране</li>


            <li><strong>Подробности за праховите частици (PM2.5):</strong></li>

            <li class="none-style">Оптичен брояч на частици на базата на лазерно разсейване</li>
            <li class="none-style">Диапазон на откриване на размера на частиците: 300 nm до 10 μm</li>
            <li class="none-style">Обхват: 0 ~ 200 μg/m³</li>
            <li class="none-style">Грешка при измерването (PM2.5): 0 ~ 100 μg/m<sup>3</sup>, ± 10 μg/m<sup>3</sup>, 100 ~ 200 μg/m<sup>3</sup>, ± 10 %. Калибрирано с GRIMM, използвайки източник на цигарен дим</li>


        </ul>
        
    `
}


export function ViewPlusAccordionItemFour() { 

    return `
        <ul>          
       

            <li><strong>Препоръчителни условия на работа:</strong></li>

            <li class="none-style">Температура: 4°C до 40°C / 39.2°F до 104°F</li>
            <li class="none-style">Влажност: от 0% до 85% (без кондензация)</li>

         

            <li><strong>Тегло: </strong>360 g / 12,7 oz (с батерии, без кабел)</li>
           
            <li><strong>Размери: </strong>17 см (дължина) x 9 см (височина) x 3,3 см (ширина)</li>
            <li><strong>Мощност: </strong>6 батерии AA или USB-C</li>
            <li><strong>Свързаност:</strong> WiFi (2,4 GHz и 802.11b/g/n), Airthings SmartLink и Bluetooth Low Energy</li>
            <li><strong>Поверителност: </strong>Индикаторът за шум се използва само за измерване на нивото на звуковото налягане, без притеснения за поверителността (активиран само за Airthings for Business)</li>
          

        </ul>
    
    `
}


export function ViewPlusAccordionItemFive() { 
   return `
    <ul>

    <li><strong>Радон (pCi/L)</strong></li>
    <li class="none-style"><span style="color: #e67e23;">● </span>≥4 pCi/L</li>
    <li class="none-style"><span style="color: #f1c40f;">● </span>≥2.7 и &lt;4 pCi/L</li>
    <li class="none-style"><span style="color: #2dc26b;">● </span>&lt;2.7 pCi/L</li>

    <li><strong>Радон (Bq/m3)</strong></li>
    
    <li class="none-style"><span style="color: #e67e23;">●</span> ≥150 Bq/m<sup>3</sup></li>
    <li class="none-style"><span style="color: #f1c40f;">● </span>≥100 и &lt;150 Bq/m<sup>3</sup></li>
    <li class="none-style"><span style="color: #2dc26b;">● </span>&lt;100 Bq/m<sup>3</sup></li>

    <li><strong>Прахови частици (PM2.5)</strong></li>

    <li class="none-style"><span style="color: #e67e23;">●</span>≥25 μg/m<sup>3</sup></li>
    <li class="none-style"><span style="color: #f1c40f;">● </span>≥10 и <25 μg/m<sup>3</sup></li>
    <li class="none-style"><span style="color: #2dc26b;">● </span> <10 μg/m<sup>3</sup></li>


    <li><strong>Въглероден диоксид</strong></li>
     <li class="none-style"><span style="color: #e67e23;">●</span>≥1000 ppm</li>
     <li class="none-style"><span style="color: #f1c40f;">● </span>≥800 и <1000 ppm</li>
     <li class="none-style"><span style="color: #2dc26b;">● </span><800 ppm</li>

     <li><strong>Влажност</strong></li>

     <li class="none-style"><span style="color: #e67e23;">●</span>≥70 %</li>
     <li class="none-style"><span style="color: #f1c40f;">●</span>≥60 и <70 %</li>
     <li class="none-style"><span style="color: #2dc26b;">●</span>≥30 и <60 %</li>

     <li class="none-style"><span style="color: #f1c40f;">●</span>≥25 и <30 %</li>
     <li class="none-style"><span style="color: #e67e23;">●</span><25 %</li>


     <li><strong>Температура (°F)</strong></li>

     

     <li class="none-style"><span style="color: #e67e23;">●</span>>77 °F</li>
     <li class="none-style"><span style="color: #f1c40f;">● </span>≥64 и ≤77 °F</li>
     <li class="none-style"><span style="color: #3598DB;">● </span><64 °F</li>

     <li><strong>Температура (°C)</strong></li>

    <li class="none-style"><span style="color: #e67e23;">●</span>>25 °C</li>
     <li class="none-style"><span style="color: #f1c40f;">●</span>≥18 и ≤25 °C</li>
     <li class="none-style"><span style="color: #3598DB;">●</span><18 °C</li>


     <li><strong>Химикали, пренасяни по въздуха (VОС)</strong></li>



    <li class="none-style"><span style="color: #e67e23;">●</span>≥2000 ppb</li>
     <li class="none-style"><span style="color: #f1c40f;">● </span>≥250 и <2000 ppb</li>
     <li class="none-style"><span style="color: #2dc26b;">● </span><250 ppb</li>

    </ul>
   
   `
}

export function ViewPlusAccordionItemSix() { 
    return `
    <ul>
        <li>IFTTT</li>
        <li>Amazon Alexa</li>
        <li>Google Assistant</li>
    </ul>
    `
}


export function ViewPlusAccordionItemSeven() {

    return `
        <ul>

            <li class="none-style"><strong>Модел 2960</strong></li>
            <li class="none-style"><strong>Съдържание на пакета:</strong></li>

            <li class="none-style">Преглед на плюс</li>
            <li class="none-style">6 батерии AA</li>
            <li class="none-style">USB C кабел</li>
            <li class="none-style">Кратко ръководство за стартиране</li>

            <li class="none-style"><strong>Изисквания</strong></li>
            <li class="none-style">Една от трите последни основни версии на iOS или Android, поддържащи Bluetooth 4.2 или по-нова версия</li>
        </ul>
    `
 }


export function ViewPlusAccordionItemEight() { 

    return `
        <ul>
            <li class="none-style">
                <strong>Предлага се безплатна 5-годишна гаранция:</strong> Airthings предлага 5-годишна удължена гаранция за всички монитори за качество на въздуха за потребителите.  Регистрацията е безплатна. Това допълнително покритие е в допълнение към стандартната гаранция, която се прилага, дори ако решите да не регистрирате продукта си. Нерегистрирането на вашия продукт не намалява вашите законови права.
            </li>
        </ul>
    `
}