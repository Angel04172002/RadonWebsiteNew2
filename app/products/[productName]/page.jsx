// 'use client'

import Carousel from '../../ui/Carousel/Carousel';
import './ProductDetails.css';
import '../../ui/Carousel/Carousel.css';

import WhatIsIncluded from '../../ui/WhatIsIncluded/WhatIsIncluded';

import {

    ViewPlusAccordionItemOne,
    ViewPlusAccordionItemТwo,
    ViewPlusAccordionItemThree,
    ViewPlusAccordionItemFour,
    ViewPlusAccordionItemFive,
    ViewPlusAccordionItemSix,
    ViewPlusAccordionItemSeven,
    ViewPlusAccordionItemEight

} from './view-plus-accordion-items/ViewPlusAccordionItems';


import {

    WaveMiniItemOne,
    WaveMiniItemTwo,
    WaveMiniItemThree,
    WaveMiniItemFour,
    WaveMiniItemFive

} from './wave-mini-accordion-items/WaveMiniAccordionItems';

import {

    FaqItemOne,
    FaqItemTwo,
    FaqItemThree,
    FaqItemFour

} from './faq-question-items/FaqQuestionItems';


import {
    ViewPlusFaqItemOne,
    ViewPlusFaqItemTwo,
    ViewPlusFaqItemThree,
    ViewPlusFaqItemFour
} from './view-plus-faq-question-items/ViewPlusFaqQuestionItems';

import {
    RenewQuestionItemOne,
    RenewQuestionItemTwo,
    RenewQuestionItemThree,
    RenewQuestionItemFour
} from './renew-question-items/RenewQuestionItems';


import {
    WaveEnhanceFaqItemOne,
    WaveEnhanceFaqItemTwo,
    WaveEnhanceFaqItemThree,
    WaveEnhanceFaqItemFour
} from './wave-enhance-faq-question-items/WaveEnhanceFaqQuestionItems';

import {
    WaveEnhanceItemOne,
    WaveEnhanceItemTwo,
    WaveEnhanceItemThree,
    WaveEnhanceItemFour,
    WaveEnhanceItemFive,
    WaveEnhanceItemSix,
    WaveEnhanceItemSeven,
} from './wave-enhance-items/WaveEnhanceItems';

import Accordion from '@/app/ui/Accordion/Accordion';




const products = {

    "livingroom-bedroom-bundle": {
        title: 'Дневна + спалня',
        description: 'Започнете пътуването си за качеството на въздуха в помещението с монитори, които обхващат две от стаите, в които прекарвате най-много време у дома.',
        price: '€358.00',
        images: [
            '/Images/living-room-bedroom/livingroom_and_bedroom_1__1.png',
            '/Images/living-room-bedroom/view_plus_-_hero_image_-_intl_-_left_1_2_3.png',
            '/Images/living-room-bedroom/view_plus_1.png',
            '/Images/living-room-bedroom/view_plus1_1.png',
            '/Images/living-room-bedroom/view_plus2_1.png',
            '/Images/living-room-bedroom/view_plus3_1.png',
            '/Images/living-room-bedroom/wave_enahance1_3.png',
            '/Images/living-room-bedroom/wave_enahance2.png',
            '/Images/living-room-bedroom/wave_enahance3.png',
        ],
        whatIsIncluded: {
            image1: '/Images/living-room-bedroom/whatisincludedplus-min.jpg',
            image2: '/Images/living-room-bedroom/whatisincludedwave-min.png',
            title1: '1 x View Plus',
            title2: '1 x Wave Enhance',
            desc1: 'Отлично решение за семейни стаи и кухни, където семейството се събира и прекарва времето си заедно.',
            desc2: 'Компактен интелигентен монитор за спални, измерващ въглероден диоксид (CO2) и други фактори, влияещи върху качеството на въздуха в помещенията и условията на околната среда. Чудесно средство за подобряване на съня и производителността',
            url1: '/products/view-plus',
            url2: '/products/wave-enhance',
        }
    },
    "livingroom-bathroom-bundle": {
        title: 'Дневна + баня',
        description: 'Получете важна информация за качеството на въздуха в помещението, в което семейството ви прекарва най-много време, и следете риска от поява на плесени във влажните помещения.',
        price: '€302.00',
        images: [
            '/Images/living-room-bathroom/livingroom_and_bathroom.png',
            '/Images/living-room-bathroom/view_plus_us_-_lifestyle_2.png',
            '/Images/living-room-bathroom/bathroom---mini.jpg',
            '/Images/living-room-bathroom/wave_mini_app_-_hero_image_-_left.png',
            '/Images/living-room-bathroom/wave_plus_-_hero_image_-_left_1.png',
            '/Images/living-room-bathroom/wave_mini_-_hero_image_-_hero_image_-_right_2.png',
            '/Images/living-room-bathroom/view_plus_-_hero_image_-_intl_-_left_1.png',
            '/Images/living-room-bathroom/wave_mini_-_hero_image_batteries_1.png'
        ],
        whatIsIncluded: {
            image1: '/Images/living-room-bedroom/whatisincludedplus-min.jpg',
            image2: '/Images/living-room-bathroom/airthings_wave_mini_-_lifestyle_utility_room_web_1.png',
            title1: '1 x View Plus',
            title2: '1 x Wave Mini',
            desc1: 'Отлично решение за семейни стаи и кухни, където семейството се събира и прекарва времето си заедно.',
            desc2: 'Измерване на VOC в полезните помещения. Или оценете риска от развитие на мухъл в топлите и влажни кътчета в дома.',
            url1: '/products/view-plus',
            url2: '/products/wave-mini',
        }
    },
    "essential-house-kit": {
        title: 'Основен комплект за къща',
        description: 'Цялостен мониторинг на качеството на въздуха и интелигентно пречистване на въздуха в една фантастична сделка. Поемете истински контрол върху качеството на въздуха в дома си. Очаква се доставката да бъде извършена не по-рано от 12 август 2024 г.',
        price: '€558.00',
        images: [
            '/Images/essential-kit/airthings_app_-_product_photoshoot_-_living_room_main_light_mode_web_1_.png',
            '/Images/essential-kit/airthings_renew_-_hero_image_-_flat_pannel_led_web.jpg',
            '/Images/essential-kit/airthings_renew_-_hero_image_-_side_filter_3_4_web_1.jpg',
            '/Images/essential-kit/airthings_renew_-_hero_image_-_top_higher_3_4_close-up_web_1.jpg',
            '/Images/essential-kit/airthings_renew_-_product_photoshoot_-_bedroom_03_-_button_web.png',
            '/Images/essential-kit/airthings_renew_-_product_photoshoot_-_children_bedroom_02_web.png',
            '/Images/essential-kit/airthings_view_plus_-_product_photoshoot_-_kitchen_02_pm_co2_web.png',
            '/Images/essential-kit/essential_housekit_2.png',
            '/Images/essential-kit/view_plus_-_hero_image_-_us_-_batteries_desktop_1490x1200_1.png',
            '/Images/essential-kit/view_plus_-_hero_image_-_us_-_front_desktop_1490x1200_1.png',

        ],
        whatIsIncluded: {
            image1: '/Images/essential-kit/renew_airthings_air_purifier_1_2.png',
            image2: '/Images/view-plus/view-plus-details/view_plus_3-min.jpg',
            title1: '1 x Renew пречиствател',
            title2: '1 x View Plus',
            desc1: 'Проектиран отвътре и отвън, за да бъде идеалният избор за спални. Тих, сдържан и ефективен.',
            desc2: 'Отлично решение за семейни стаи и кухни, където семейството се събира и прекарва времето си заедно.',
            url1: '/products/renew',
            url2: '/products/view-plus',
        }
    },
    "view-plus": {
        title: 'View Plus',
        description: 'Нашият най-всеобхватен монитор за радон и качество на въздуха със 7 сензора, включително за радон, PM 2.5, CO2 и други - свързан с Wi-Fi и без кабел.',
        price: '€299.00',
        images: [
            '/Images/view-plus/view-plus-details/view_plus_-_hero_image_-_us_-_front_desktop_1000x1000_1-min.png',
            '/Images/view-plus/view-plus-details/view_plus_-_hero_image_-_intl_-_batteries_desktop_1000x1000_3_1-min.png',
            '/Images/view-plus/view-plus-details/airthings_view_plus_-_hero_image_-_main_with_app_light_-_main_us_web-min.jpg',
            '/Images/view-plus/view-plus-details/airthings_view_plus_-_hero_image_-_main_with_app_light_-_pm_graph_web_1_-min.jpg',
            '/Images/view-plus/view-plus-details/airthings_view_plus_-_lifestyle_living_room_3_web-min.jpg',
            '/Images/view-plus/view-plus-details/view_plus_3-min.jpg',
        ]
    },
    "renew": {
        title: 'Пречиствател за въздух Renew',
        description: 'За по-чист въздух, по-добър сън и спокойствие. Премахва до 99,97% от фините частици, тихо и красиво. Проектиран в Норвегия.',
        price: '€399.00',
        images: [
            '/Images/renew/renew_airthings_air_purifier_1_2-min.png',
            '/Images/renew/renew_2-min.png',
            '/Images/renew/renew_3-min.png',
            '/Images/renew/renew_1-min.png',
            '/Images/renew/airthings_renew_-_hero_image_-_side_-_filter_web-min.png',
            '/Images/renew/airthings_renew_-_hero_image_-_top_pannel_close-up_led_web-min.png',
            '/Images/renew/airthings_renew_-_hero_image_-_top_higher_3_4_close-up_led_web-min.png',
            '/Images/renew/airthings_renew_-_hero_image_-_flat_pannel_led_web-min.png',
            '/Images/renew/airthings_renew_-_exploded_filters_view.jpg',
        ]
    },
    "wave-enhance": {
        title: 'Wave Enhance',
        description: 'Компактен интелигентен монитор за спални, измерващ въглероден диоксид (CO2) и други фактори, влияещи върху качеството на въздуха в помещенията и условията на околната среда. Чудесно средство за подобряване на съня и производителността.',
        price: '€149.00',
        images: [
            '/Images/wave-enhance/details/airthings_wave_enhance_-_product_photoshoot_-_bedroom_web_1_4 (1)-min.png',
            '/Images/wave-enhance/details/airthings_wave_enhance_-_product_photoshoot_-_bedroom_still_web_1_2-min.png',
            '/Images/wave-enhance/details/wave_enhance4_1-min.png',
            '/Images/wave-enhance/details/wave_enhance3_1-min.png',
            '/Images/wave-enhance/details/wave_enhance2_1-min.png',
        ]
    },
    "wave-mini": {
        title: 'Wave Mini',
        description: 'Опростен и интелигентен монитор за въздуха в помещенията, който следи за наличието на ЛОС или показва риска от развитие на плесени. За бани, перални помещения и гаражи.',
        price: '€79.00',
        images: [
            '/Images/wave-mini/details/wave_mini_-_hero_image_-_front_desktop_1000x1000-min.png',
            '/Images/wave-mini/details/wave_mini_-_hero_image_-_batteries_desktop_1000x1000-min.png',
            '/Images/wave-mini/details/airthings_wave_mini_-_lifestyle_utility_room_web_1-min.png',
            '/Images/wave-mini/details/wave_mini-_hero_image_-_right_desktop_1000x1000-min.png',
            '/Images/wave-mini/details/wave_mini_-_lifestyle_basement_desktop_1000x1000-min.png',
            '/Images/wave-mini/details/wave_mini_-_lifestyle_desktop_1000x1000-min.png',
        ]
    }
}




const viewPlusItems = [

    {
        _id: '1',
        title: 'Характеристики на продукта',
        content: ViewPlusAccordionItemOne(),
        renderTimes: 'One'
    },
    {
        _id: '2',
        title: 'Спецификации за радонa',
        content: ViewPlusAccordionItemТwo(),
        renderTimes: 'Two'
    },
    {
        _id: '3',
        title: 'Спецификации за качество на въздуха',
        content: ViewPlusAccordionItemThree(),
        renderTimes: 'Three'
    },
    {
        _id: '4',
        title: 'Допълнителни спецификации',
        content: ViewPlusAccordionItemFour(),
        renderTimes: 'Four'
    },
    {
        _id: '5',
        title: 'Прагови равнища',
        content: ViewPlusAccordionItemFive(),
        renderTimes: 'Five'
    },
    {
        _id: '6',
        title: 'Интеграции',
        content: ViewPlusAccordionItemSix(),
        renderTimes: 'Six'
    },
    {
        _id: '7',
        title: 'Допълнителна информация',
        content: ViewPlusAccordionItemSeven(),
        renderTimes: 'Seven'
    },
    {
        _id: '8',
        title: 'Гаранция',
        content: ViewPlusAccordionItemEight(),
        renderTimes: 'Eight'
    }
];

const waveMiniItems = [

    {
        _id: '9',
        title: 'Характеристики на продукта',
        content: WaveMiniItemOne(),
        renderTimes: 'Nine'
    },
    {
        _id: '10',
        title: 'Спецификации за продукта',
        content: WaveMiniItemTwo(),
        renderTimes: 'Ten'
    },
    {
        _id: '11',
        title: 'Прагови равнища',
        content: WaveMiniItemThree(),
        renderTimes: 'Eleven'
    },

    {
        _id: '12',
        title: 'Допълнителна информация',
        content: WaveMiniItemFour(),
        renderTimes: 'Twelve'
    },
    {
        _id: '13',
        title: 'Гаранция',
        content: WaveMiniItemFive(),
        renderTimes: 'Thirteen'
    }
];

const waveEnhanceItems = [
    {
        _id: '50',
        title: 'Полезна документация',
        content: WaveEnhanceItemOne(),
        renderTimes: 'Fifty'
    },
    {
        _id: '51',
        title: 'Характеристики на продукта',
        content: WaveEnhanceItemTwo(),
        renderTimes: 'FiftyOne'
    },
    {
        _id: '52',
        title: 'Допълнителни спецификации',
        content: WaveEnhanceItemThree(),
        renderTimes: 'FiftyTwo'
    },

    {
        _id: '53',
        title: 'Спецификации на IAQ сензор',
        content: WaveEnhanceItemFour(),
        renderTimes: 'FiftyThree'
    },
    {
        _id: '54',
        title: 'Радио спецификации',
        content: WaveEnhanceItemFive(),
        renderTimes: 'FiftyFour'
    },
    {
        _id: '55',
        title: 'Прагови равнища',
        content: WaveEnhanceItemSix(),
        renderTimes: 'FiftyFive'
    },
    {
        _id: '56',
        title: 'Гаранция',
        content: WaveEnhanceItemSeven(),
        renderTimes: 'FiftySix'
    }
]

const faqQuestions = [
    {
        _id: '21',
        title: 'Защо ми трябват две устройства?',
        content: FaqItemOne(),
        renderTimes: 'TwentyOne'
    },
    {
        _id: '22',
        title: 'Как ще разбера дали има проблем с качеството на въздуха?',
        content: FaqItemTwo(),
        renderTimes: 'TwentyTwo'
    },
    {
        _id: '23',
        title: 'Как ще разбера как да подобря качеството на въздуха в помещението си?',
        content: FaqItemThree(),
        renderTimes: 'TwentyThree'
    },
    {
        _id: '24',
        title: 'Къде да поставя устройството си?',
        content: FaqItemFour(),
        renderTimes: 'TwentyFour'
    },
]

const viewPlusFaqQuestions = [
    {
        _id: '25',
        title: 'Мога ли да проверявам показанията си за качеството на въздуха в приложението View Plus в реално време отвсякъде?',
        content: ViewPlusFaqItemOne(),
        renderTimes: 'TwentyFive'
    },
    {
        _id: '26',
        title: 'Как да разбера, че измерванията са точни?',
        content: ViewPlusFaqItemTwo(),
        renderTimes: 'TwentySix'
    },
    {
        _id: '27',
        title: 'Каква е функцията за хъб в View Plus? Защо това би било полезно за мен?',
        content: ViewPlusFaqItemThree(),
        renderTimes: 'TwentySeven'
    },
    {
        _id: '28',
        title: 'Къде да поставя монитора, за да постигна най-добри резултати?',
        content: ViewPlusFaqItemFour(),
        renderTimes: 'TwentyEight'
    },


]

const waveEnhanceFaqQuestions = [
    {
        _id: '40',
        title: 'Къде да поставя монитора, за да постигна най-добри резултати?',
        content: WaveEnhanceFaqItemOne(),
        renderTimes: 'Forty'
    },
    {
        _id: '41',
        title: 'Мога ли да проверявам показанията за качеството на въздуха на Wave Enhance в приложението отвсякъде?',
        content: WaveEnhanceFaqItemTwo(),
        renderTimes: 'FortyOne'
    },
    {
        _id: '42',
        title: 'Записва ли Wave Enhance звук?',
        content: WaveEnhanceFaqItemThree(),
        renderTimes: 'FortyTwo'
    },
    {
        _id: '43',
        title: 'Ще имам ли точни измервания от първия ден?',
        content: WaveEnhanceFaqItemFour(),
        renderTimes: 'FortyThree'
    },

]

const renewQuestions = [
    {
        _id: '31',
        title: 'Полезна документация',
        content: RenewQuestionItemOne(),
        renderTimes: 'ThirtyOne'
    },
    {
        _id: '32',
        title: 'Спецификации за качество на въздуха',
        content: RenewQuestionItemTwo(),
        renderTimes: 'ThirtyTwo'
    },
    {
        _id: '33',
        title: 'Технически детайли',
        content: RenewQuestionItemThree(),
        renderTimes: 'ThirtyThree'
    },
    {
        _id: '34',
        title: 'Гаранция',
        content: RenewQuestionItemFour(),
        renderTimes: 'ThirtyFour'
    },

]



export async function generateStaticParams() {
    return Object.keys(products).map((productName) => ({
        productName,
    }));
}


export default function ProductPage({ params }) {

    const productName = params.productName;
    const productDetails = products[productName];

    if (!productDetails) return <div>Продуктът не е намерен</div>;

    return (

        <div className='row'>

            <div className='col-sm-12 col-md-6 carousel-container text-center mx-auto px-3'>

                <Carousel images={productDetails.images} />

            </div>


            <div className='col-sm-12 col-md-6 product-desc-container text-center mx-auto pt-5'>

                <h1>{productDetails.title}</h1>
                <p className='w-75 description'>{productDetails.description}</p>

                <p className='w-50 price'>{productDetails.price}</p>

                {/* <a href={'/contacts'} className="w-100 btn open-btn btn-primary">Изпрати запитване</a> */}

            </div>



            {(productDetails.title == 'Дневна + спалня' || productDetails.title == 'Дневна + баня'
                || productDetails.title == 'Основен комплект за къща'

            )

                && (
                    <WhatIsIncluded
                        image1={productDetails.whatIsIncluded.image1}
                        image2={productDetails.whatIsIncluded.image2}
                        title1={productDetails.whatIsIncluded.title1}
                        title2={productDetails.whatIsIncluded.title2}
                        desc1={productDetails.whatIsIncluded.desc1}
                        desc2={productDetails.whatIsIncluded.desc2}
                        url1={productDetails.whatIsIncluded.url1}
                        url2={productDetails.whatIsIncluded.url2}
                    />
                )}





            {productDetails.title == 'Дневна + баня' && (
                <>

                    <div className='row'>

                        <div className='col-lg-12'>
                            <h2 className='living-bathroom-h2'>Получете видимост за качеството на въздуха</h2>
                        </div>

                        <div className='row mt-5'>


                            <div className='view-plus-img-div col-lg-6 col-md-6 col-sm-12'>
                                <img alt='Airthings discount bundle' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/living-room-bathroom/Airthings_discount_bundle.png' />
                            </div>

                            <div className='view-plus-content col-lg-4 col-md-6 col-sm-12'>
                                <p className='living-bathroom-main-subcaption'>View Plus за дневна</p>
                                <p className='living-bathroom-main-subcaption-desc'>Насладете се на широка видимост на качеството на въздуха в дома си в уюта на всекидневната. Следете излагането си на радон, както и концентрацията на частици и газове, температурата и влажността - и всичко това, докато прекарвате време с любимите си хора.</p>
                                <p className='living-bathroom-main-subcaption'>Wave Mini за баня</p>
                                <p className='living-bathroom-main-subcaption-desc'>Оценявайте риска от поява на плесени и следете за химикалите във въздуха, температурата и влажността.</p>
                            </div>

                            <div className='view-plus-img-div view-plus-img-div-2 col-lg-6 col-md-6 col-sm-12 mt-5'>
                                <img alt='Airthings View App' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/living-room-bathroom/Airthings_View_App.png' />
                            </div>

                            <div className='view-plus-content view-plus-content-2 col-lg-4 col-md-6 col-sm-12 lvb-div-1'>
                                <p className='living-bathroom-main-subcaption'>Airthings приложение</p>
                                <p className='living-bathroom-main-subcaption-desc'>Проверявайте показанията в реално време, анализирайте тенденциите с помощта на усъвършенствани графики, конфигурирайте известия и получавайте съвети за качеството на въздуха.</p>
                                <p className='living-bathroom-main-subcaption'>Wifi свързаност</p>
                                <p className='living-bathroom-main-subcaption-desc'>Проверявайте данните си в реално време по всяко време и получавайте навременни известия за качеството на въздуха, където и да се намирате</p>
                                <p className='living-bathroom-main-subcaption'>Покритие в няколко помещения</p>
                                <p className='living-bathroom-main-subcaption-desc'>Поставете своя Wave Mini в една стая, а View Plus - в друга. Проверявайте цялата си информация в приложението.</p>
                            </div>

                        </div>




                    </div>



                    <div className='row'>

                        <div className='col-lg-6 col-sm-12 col-md-12 text-center mx-auto'>

                            <h2 className='tab-header px-3'>Технически спецификации</h2>


                            <h3 className='view-plus-tab-title text-align-center mt-5'>View Plus</h3>
                            <Accordion accordionItems={viewPlusItems} />

                            <h3 className='wave-mini-tab-title text-align-center mt-5'>Wave Mini</h3>
                            <Accordion accordionItems={waveMiniItems} />
                        </div>
                    </div>




                </>

            )}


            {productDetails.title == 'Дневна + спалня' && (

                <>
                    <div className='row main-view-wave-container flex-row d-flex justify-content-evenly'>




                        <div className="col-lg-6 col-md-6 col-sm-12 flex-column first-containerm r-1">

                            <div className='content-container-m'>

                                <p className='vp-p mt-5'>View Plus</p>
                                <h2 className='vp-h2'>Дайте старт на здравословния си дом</h2>

                                <p className='mt-5'>View Plus ви дава възможност да наблюдавате точно 7 фактора за качеството на въздуха, така че да можете да разберете какъв е въздухът в дома ви.</p>
                                <p>Поставете View Plus в семейната стая или кухнята, където семейството прекарва времето си заедно. Получете цялостна картина на качеството на въздуха в дома си. Работете с батерии за удобство без кабел или го включете, за да активирате неговия интернет хъб за монитор Wave Enhance.</p>
                            </div>

                            <div className='img-m-cont'>
                                <img src='/Images/living-room-bedroom/View Plus Livingroom.png' className="img-fluid mt-5 px-3" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 flex-column second-containerm r-2">

                            <div className='content-container-m'>
                                <p className='vp-p mt-5'>Wave Enhance</p>
                                <h2 className='vp-h2'>Иновации за вашия сън</h2>

                                <p className='mt-5'>Проектирани са, за да ви помогнат да усъвършенствате обстановката в спалнята си. Wave Enhance следи факторите във въздуха, които влияят върху качеството на съня ви, като например нивата на CO2, температурата, влажността, околния шум и светлината.</p>
                                <p>Разберете как се променя въздухът в спалнята ви през нощта. Не само факторите на комфорта, като влажност и температура, но и чрез проследяване на нивата на СО₂, които могат да повлияят на способността ви да спите спокойно.</p>
                            </div>

                            <div className='img-m-cont'>
                                <img src='/Images/living-room-bedroom/Wave Enahcne App Sleep Green1.png' className="img-fluid mt-5 px-3" />
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 first-containerm r-1 q-1'>
                            <div className='content-container-m'>
                                <p className='vp-p mt-5'>Приложение Airthings</p>
                                <h2 className='vp-h2'>Премиум Multiroom система</h2>

                                <p className='mt-5'><strong>Лесно за разбиране:</strong> AirGlimpse™️ ви информира за качеството на въздуха с един поглед, като ви позволява да разберете кога може да се наложи да предприемете действия.</p>
                                <p className='mt-5'><strong>Разкриване на тенденции:</strong> Научете повече за качеството на въздуха с помощта на графики, които позволяват да се открият тенденциите, за да можете да идентифицирате и сведете до минимум източниците на лошо качество на въздуха.</p>
                                <p className='mt-5'><strong>Получете информация за съня:</strong> Разберете как въздухът може да влияе на съня ви и получете съвети как да избегнете смущенията в съня.</p>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 flex-column second-containerm r-2 q-2">
                            <div className='img-m-cont'>
                                <img src='/Images/living-room-bedroom/LivingroomandBedroom.png' className="img-fluid px-3" />
                            </div>
                        </div>




                        <h2 className='tab-header faq-header px-3'>Често задавани въпроси</h2>

                        <div className='col-sm-12 col-md-6 mx-auto mt-5'>
                            <Accordion accordionItems={faqQuestions} />
                        </div>




                        <h2 className='tab-header px-3'>Технически спецификации</h2>

                        <h3 className='view-plus-tab-title text-align-center mt-5'>View Plus</h3>

                        <div className='col-sm-12 col-md-6 mx-auto'>
                            <Accordion accordionItems={viewPlusItems} />
                        </div>


                        <h3 className='view-plus-tab-title text-align-center mt-5'>Wave Enhance</h3>

                        <div className='col-sm-12 col-md-6 mx-auto'>
                            <Accordion accordionItems={waveEnhanceItems} />
                        </div>


                    </div>


                </>

            )}

            {productDetails.title == 'Основен комплект за къща' && (

                <>

                    <div className='row mt-5 justify-content-center monitor-div'>

                        <h1 className='main-monitor-h1'>Следете въздуха около себе си</h1>

                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Радон</p>
                            <p className='monitor-desc w-75'>Не можете да го видите или усетите, но продължителното излагане на този радиоактивен газ е основната причина за рак на белия дроб при непушачите.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Прахови частици (PM 2.5)</p>
                            <p className='monitor-desc w-75'>Фините прахови частици (PM2,5) достигат дълбоко в белите дробове, причинявайки краткотраен дискомфорт и дългосрочни рискове за здравето.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Въглероден диоксид (CO2)</p>
                            <p className='monitor-desc w-75'>Когато достигне високи нива в помещенията, въглеродният диоксид (CO2) може да причини лош сън и проблеми с концентрацията.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Температура</p>
                            <p className='monitor-desc w-75'>Температурата не е само въпрос на комфорт, тя може да повлияе негативно на качеството на съня, настроението и бдителността.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Пренасяни по въздуха химикали</p>
                            <p className='monitor-desc w-75'>Летливите органични съединения (ЛОС) са химикали, които се отделят във въздуха от предмети от бита - много от тях са безвредни, но някои са токсични.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Налягане на въздуха</p>
                            <p className='monitor-desc w-75'>Промените във въздушното налягане влияят на нивата на радон и при някои хора могат да предизвикат главоболие, скованост на ставите и болка.</p>
                        </div>
                    </div>


                    <div className='row'>

                        <div className="col-lg-6 col-md-6 col-sm-12 flex-column first-containerm r-1 s-1 mx-auto">

                            <div className='content-container-m'>

                                <div className='content-m-cont'>

                                    <p className='vp-span mt-5'>View Plus</p>
                                    <h2 style={{ fontSize: '25px' }} className='vp-h2'>Дайте старт на здравословния си дом</h2>

                                    <p className='mt-5 vp-p'>View Plus ви дава възможност да наблюдавате точно 7 фактора за качеството на въздуха, така че да можете да разберете какъв е въздухът в дома ви.</p>
                                    <p className='vp-p'>Поставете View Plus в семейната стая или кухнята, където семейството прекарва времето си заедно. Получете цялостна картина на качеството на въздуха в дома си. Работете с батерии за удобство без кабел или го включете, за да активирате неговия интернет хъб за монитор Wave Plus.</p>

                                </div>

                                <div className='img-m-cont'>
                                    <img src='/Images/view-plus-box-2.jpg' className="img-fluid px-3" />
                                </div>

                            </div>


                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 flex-column second-containerm r-2 s-2 mx-auto">

                            <div className='content-container-m'>


                                <div className='content-m-cont'>

                                    <p className='vp-span mt-5'>Renew</p>
                                    <h2 className='vp-h2'>По-добър сън с чист въздух</h2>

                                    <p className='mt-5 vp-p vp-p-2'>Renew е интелигентният пречиствател на въздуха, който бързо решава проблемите, свързани с прах, полени, дим, животински пърхот, миризми и др.</p>
                                    <p className='vp-p vp-p-2'>Дори когато е в режим на готовност, Renew непрекъснато следи качеството на въздуха в спалнята ви. Използвайте графиката, за да откриете тенденции, които ви помагат да идентифицирате източниците на лош въздух в дома си.</p>
                                </div>


                                <div className='img-m-cont img-m-cont-2'>
                                    <img src='/Images/airthings-app-crop.jpg' className="img-fluid px-3" />
                                </div>

                            </div>



                        </div>



                        <div className='row third-containerm r-3 s-3 mx-auto'>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='content-container-m'>
                                    <p style={{ textAlign: 'start' }} className='vp-span mt-5'>Приложение Airthings</p>
                                    <h2 style={{ textAlign: 'start' }} className='vp-h2'>Премиум Multiroom система</h2>

                                    <p style={{ textAlign: 'start' }} className='mt-5 vp-p vp-p-3'><strong style={{ color: 'black' }}>Управлявайте Renew отвсякъде:</strong> За по-чист въздух, по-добър сън и спокойствие.</p>
                                    <p style={{ textAlign: 'start' }} className='vp-p vp-p-3'><strong style={{ color: 'black' }}>Лесно за разбиране:</strong> AirGlimpse™️ ви информира за качеството на въздуха с един поглед. Дава ви представа кога да предприемете действия.</p>
                                    <p style={{ textAlign: 'start' }} className='vp-p vp-p-3'><strong style={{ color: 'black' }}>Анализирайте данните си:</strong> Научете повече за качеството на въздуха си с помощта на графики. Забелязвайте тенденциите, за да можете да идентифицирате източниците на лошо качество на въздуха.</p>
                                    <p style={{ textAlign: 'start' }} className='vp-p vp-p-3'><strong style={{ color: 'black' }}>Получете информация за съня:</strong> Разберете как въздухът влияе на съня ви и получете съвети как да се справите с причинителите на смущения в съня.</p>
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-12 col-sm-12'>

                                <img alt='Multiroom Airthings App' src='/Images/essential-kit/Multrioom_Airthings_App.png' className="img-fluid px-3 pur-img" />

                            </div>

                        </div>

                    </div>


                    <h2 style={{ marginTop: '2em' }} className='tab-header px-3'>Технически спецификации</h2>

                    <div className='col-sm-12 col-lg-6 mx-auto'>
                        <h3 className='view-plus-tab-title text-align-center mt-5'>Renew пречиствател на въздуха</h3>
                        <Accordion accordionItems={renewQuestions} />
                    </div>


                    <div className='row'>
                        <div className='col-sm-12 col-lg-6 mx-auto mt-5'>
                            <h3 className='view-plus-tab-title text-align-center mt-5'>View Plus</h3>
                            <Accordion accordionItems={viewPlusItems} />
                        </div>
                    </div>


                </>
            )}

            {productDetails.title == 'View Plus' && (

                <>
                    <div className='row mt-5 gx-3'>

                        <div className='view-plus-img-div col-lg-6 col-md-6 col-sm-12'>
                            <img alt='Graph' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/view-plus/view-plus-details/View Plus in Livingroom.png' />
                        </div>

                        <div className='view-plus-content col-lg-4 col-md-6 col-sm-12'>
                            <p className='view-plus-caption px-3'>Нашият най-всеобхватен монитор</p>
                            <h3 className='view-plus-heading px-3'>Подобрете подхода си към здравето и благосъстоянието с View Plus</h3>
                            <p className='view-plus-desc px-3'>Снабден със седем сензора за качество на въздуха и постоянна връзка с приложението, View Plus ще издигне вашата система за интелигентен дом на ново ниво - и до по-здравословен дом.</p>
                        </div>

                        <div className='view-plus-img-div view-plus-img-div-2 col-lg-6 col-md-6 col-sm-12 mt-5'>
                            <img alt='Graph' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/view-plus/view-plus-details/View Pluss in bedroom.png' />
                        </div>

                        <div className='view-plus-content view-plus-content-2 col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='view-plus-caption px-3'>Учени в джоба ви</p>
                            <h3 className='view-plus-heading px-3'>Вижте какво има във въздуха, който дишате, по всяко време и навсякъде</h3>
                            <p className='view-plus-desc px-3'>View Plus се грижи за дългосрочното ви здраве. Екипът ни от учени и инженери, работещи в областта на качеството на въздуха, е посветен на това да ви даде възможност да вземате информирани решения за по-здравословен живот по лесен и интерактивен начин.</p>
                        </div>
                    </div>



                    <div className='row view-plus-experience-div'>

                        <div className='col-lg-9 col-md-6 col-sm-12 mt-5 mx-auto'>
                            <p className='view-plus-ex-caption text-start px-3'>Опит с View Plus</p>
                            <h3 className='view-plus-ex-heading text-start px-3'>Присъединете се към над 100 000+ клиенти, които следят своя въздух с View Plus</h3>
                            <p className='text-s text-start px-3'>Наблюдавайте и подобрявайте въздуха си от първия ден в приложението Airthings. Налично е за Android и iOS.</p>
                        </div>
                    </div>

                    <div className='row row-cols-1 row-cols-md-3 g-4'>

                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>

                            <div className="card-view-pl h-100">

                                <div className="card-body">
                                    <div className='card-body-container'>
                                        <p className="subcaption">WIFI свързаност</p>
                                        <h5 className="card-title">Контролирайте отвсякъде</h5>
                                    </div>
                                    <p className="card-text">Разберете как качеството на въздуха влияе на въпросите, които ви вълнуват. Проучете тенденциите.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/view-plus/view-plus-details/Airthings_App_Graph.png' alt='App graph' />
                                </div>

                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>

                            <div className="card-view-pl h-100">

                                <div className="card-body">
                                    <div className='card-body-container'>
                                        <p className="subcaption">Airglimpse</p>
                                        <h5 style={{ fontSize: '19px' }} className="card-title w-100">Фокусирайте се върху важните неща</h5>
                                    </div>
                                    <p className="card-text">Получете актуална информация за качеството на въздуха с AirGlimpse™.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/view-plus/view-plus-details/Airthings_App_Air_Glimpse.png' alt='Air Glimpse' />
                                </div>
                            </div>

                        </div>


                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>

                            <div className="card-view-pl h-100">

                                <div className="card-body">
                                    <div className='card-body-container'>
                                        <p className="subcaption">Нарушители на съня</p>
                                        <h5 className="card-title w-100">По-добър сън всяка нощ</h5>
                                    </div>
                                    <p className="card-text">Проследявайте и подобрявайте цикъла на съня си с персонализирани отчети за въздуха.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/view-plus/view-plus-details/Sleep.png' alt='Sleep' />
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>
                            <div className="card-view-pl h-100">

                                <div className="card-body">
                                    <div className='card-body-container'>
                                        <p className="subcaption">Прозрения</p>
                                        <h5 className="card-title w-100">Преодоляване на алергиите</h5>
                                    </div>
                                    <p className="card-text">Избягвайте алергии на открито с нашата функция за прогноза за полени.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/view-plus/view-plus-details/Airthings App Pollen.png' alt='App Pollen' />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="row mt-5 justify-content-around place-where-div">

                        <p className='multi-room-p'>View Plus Multiroom</p>
                        <h3 className='multi-room-h3'>Къде да поставите монитора си?</h3>


                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container mb-4 mt-5">
                            <h4 className="text-start">Дневна</h4>
                            <p className='mt-5 text-start'>Знайте кога да проветрявате, да смекчавате и как да намалите натрупването на замърсители като PM2,5 в дневната си.</p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 d-2 home-dna-place-container mb-4 mt-5">
                            <h4 className="text-start">Детска стая</h4>
                            <p className='mt-5 text-start'>Следете за качеството на въздуха в стаите на децата си, за да намалите риска от поява на мухъл и алергени.</p>
                        </div>


                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container mb-4">
                            <h4 className="text-start">Кухня</h4>
                            <p className='mt-5 text-start'>Избягвайте излишните ЛОС и PM2.5, които могат да се натрупат във въздуха по време на готвене.</p>

                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 d-2 home-dna-place-container mb-4">
                            <h4 className="text-start">Спалня</h4>
                            <p className='mt-5 text-start'>Създайте оптимална среда за сън, като поддържате идеална температура, влажност и нива на CO2.</p>

                        </div>
                    </div>

                    <div className='row mt-5 justify-content-center monitor-div'>

                        <h1 className='main-monitor-h1'>Следете въздуха около себе си</h1>

                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Радон</p>
                            <p className='monitor-desc w-75'>Не можете да го видите или усетите, но продължителното излагане на този радиоактивен газ е основната причина за рак на белия дроб при непушачите.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Прахови частици (PM 2.5)</p>
                            <p className='monitor-desc w-75'>Фините прахови частици (PM2,5) достигат дълбоко в белите дробове, причинявайки краткотраен дискомфорт и дългосрочни рискове за здравето.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Въглероден диоксид (CO2)</p>
                            <p className='monitor-desc w-75'>Когато достигне високи нива в помещенията, въглеродният диоксид (CO2) може да причини лош сън и проблеми с концентрацията.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Температура</p>
                            <p className='monitor-desc w-75'>Температурата не е само въпрос на комфорт, тя може да повлияе негативно на качеството на съня, настроението и бдителността.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Пренасяни по въздуха химикали</p>
                            <p className='monitor-desc w-75'>Летливите органични съединения (ЛОС) са химикали, които се отделят във въздуха от предмети от бита - много от тях са безвредни, но някои са токсични.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Налягане на въздуха</p>
                            <p className='monitor-desc w-75'>Промените във въздушното налягане влияят на нивата на радон и при някои хора могат да предизвикат главоболие, скованост на ставите и болка.</p>
                        </div>


                    </div>


                    <div className='row justify-content-center vp-explained-div'>

                        <div className='col-lg-12'>

                            <p className='multi-room-p'>View Plus с обяснения</p>
                            <h3 className='multi-room-h3'>Все още скролирате?</h3>


                            <p className='nerd-p text-start'>За нърдовете</p>
                            <h3 className='nerd-h3 text-start'>Нашият най-всеобхватен монитор за качество на въздуха в помещенията</h3>
                            <p className='nerd-p-2 text-start w-50'>View Plus е свързан с Wi-Fi за достъп по всяко време до показанията в реално време и навременни известия за качеството на въздуха. Той включва дисплей с електронно мастило и следи 7 аспекта на качеството на въздуха.</p>

                        </div>


                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-1 mb-4 mt-5">
                            <h4 className="text-start">Интеграции със Smarthome</h4>
                            <p className='mt-5 text-start'>IFTTT, Amazon Alexa, Google Assistant и Homey.</p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-2 mb-4 mt-5">
                            <h4 className="text-start">Седем сензора за качество на въздуха</h4>
                            <p className='mt-5 text-start'>Радон, прахови частици (PM2.5), въглероден диоксид (CO2), химикали във въздуха (ЛОС), влажност, температура и въздушно налягане.</p>
                        </div>

                        <div className='col-lg-12'>

                            <p className='nerd-p text-start'>За всеки друг</p>
                            <h3 className='nerd-h3 text-start'>View Plus следи въздуха ви и ви казва как да го подобрите</h3>
                            <p className='nerd-p-2 text-start w-50'>Да видиш, означава да повярваш. Ние сме вашият треньор по въздуха, показваме ви как да подобрите въздуха, за да подобрите настроението, съня и здравето си.</p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-1 mb-4 mt-5">
                            <h4 className="text-start">Приложение Airthings</h4>
                            <p className='mt-5 text-start'>Лесни за разбиране цветни графики и полезни съвети.</p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-2 mb-4 mt-5">
                            <h4 className="text-start">Местоположение</h4>
                            <p className='mt-5 text-start'>Поставете навсякъде на закрито, където сте загрижени за въздуха, който дишате.</p>
                        </div>


                    </div>

                    <div className='col-lg-6 mx-auto faq-div'>
                        <h2 style={{ marginTop: '2em' }} className='tab-header faq-header px-3'>Често задавани въпроси</h2>
                        <Accordion accordionItems={viewPlusFaqQuestions} />

                        <h2 style={{ marginTop: '2em' }} className='tab-header faq-header px-3'>Технически спецификации</h2>
                        <Accordion accordionItems={viewPlusItems} />
                    </div>



                </>
            )}

            {productDetails.title == 'Пречиствател за въздух Renew' && (

                <>

                    <div className='row renew-main-container pt-5'>

                        <div className='col-lg-12 col-sm-12 smart-div-container'>

                            <p className='smart-system-p text-center'>Умна система</p>
                            <h3 className='smart-system-h3 text-center'>Еволюцията на въздуха с Renew</h3>
                            <p className='smart-system-desc w-50 text-center'>Интелигентен пречиствател за въздух, който дискретно премахва до 99,97% от частиците. Проверявайте нивата на замърсяване в помещението и контролирайте Renew отвсякъде чрез приложението Airthings.</p>
                        </div>

                        <div className='col-lg-6 col-sm-12 video-renew-container'>
                            <video width={282.93} height={377.75} className="cmsb482-w-full cmsb482-h-full cmsb482-object-cover filter-video" controls="" autoplay="" loop="" muted="">
                                <source src="/Images/renew/Placement.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className='col-lg-6 col-sm-12 content-renew-container'>

                            <p className='renew-p'>Скандинавски дизайн</p>
                            <p className='renew-desc text-start mt-5 w-75 mx-auto'>Минималистичен дизайн с приглушени тъмни тонове, които се сливат с околната среда. Вдъхновен от красотата на скандинавските пейзажи и интериори.</p>

                        </div>

                    </div>


                    <div className='row renew-experience-container mt-5 pt-5 justify-content-center'>

                        <div className='col-lg-12 renewex-main-div'>
                            <p className='renewex-p'>Renew преживяване</p>
                            <h3 className='renewex-h3'>Изберете режима на работа за това, което ви е необходимо в момента</h3>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 experience-div-container mt-5">

                            <h4 className='text-center'>Boost</h4>
                            <p className='mt-5 text-center'>Почистете въздуха ми възможно най-скоро, моля</p>

                        </div>
                        <div className='col-lg-4 col-sm-12 experience-div-container mt-5'>

                            <h4 className='text-center'>Тих режим</h4>
                            <p className='mt-5 text-center'>Шшшш, спя, но продължавам да пречиствам</p>
                        </div>
                        <div className='col-lg-4 col-sm-12 experience-div-container mt-5'>

                            <h4 style={{ fontSize: '22px' }} className='text-center'>Автоматичен режим</h4>
                            <p className='mt-5 text-center'>Вие сте интелигентен пречиствател на въздуха, имам ви доверие</p>
                        </div>


                        <div className='col-lg-12 airh-div'>

                            <h3 className='airthings-h3 mt-5'>Перфектното допълнение към вашия интелигентен дом Airthings</h3>
                            <p className='airthings-p px-3'>Получете пълен контрол върху въздуха, за да го поддържате чист</p>

                            <img src='/Images/renew/Airthings Renew - Product Photoshoot - Living room_WEB-1-1-min.png' className='img-fluid mt-5 px-3' />
                        </div>



                    </div>


                    <div className='row justify-content-center auto-mode-div'>

                        <div className='col-lg-6 col-sm-12 auto-mode-main-div'>

                            <p className='auto-mode-p'>Автоматичен режим</p>
                            <h3 className='auto-mode-h3'>Задай и забрави</h3>
                            <p className='auto-mode-desc w-75 mx-auto'>Настройте Renew на автоматичен режим за чист въздух и спокойствие. Използвайте приложението Airthings, за да управлявате Renew отвсякъде, и наблюдавайте как той интелигентно пречиства въздуха ви; подобрява съня, здравето и дори настроението ви. </p>

                        </div>

                        <div className='col-lg-6 col-sm-12'>
                            <video className='auto-mode-video cmsb482-w-full cmsb482-h-full cmsb482-object-cover filter-video' controls="" autoplay="" loop="" muted="">
                                <source src="/Images/renew/Air_Inflow+App_Animation (1).mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className='col-lg-6 col-sm-12 effective-filter-div'>

                            <p className='auto-mode-p'>Обмислен дизайн</p>
                            <h3 className='auto-mode-h3'>Ефективно 4-степенно филтриране</h3>

                        </div>




                        <div className='row justify-content-center experience-main-container'>

                            <div className="col-lg-6 col-sm-12 experience-div-container ex-d-c filter-new-container mt-5">

                                <h5 className='text-center w-100'>Измиващи се филтри</h5>

                                <p style={{ fontSize: '16px' }} className='experience-p-title w-100 mt-5 text-start'>1. Външен текстилен предфилтър от аудио клас</p>
                                <p className='experience-p-desc text-start'>Предпазва от най-големите частици като косми от домашни любимци и прах.</p>

                                <p className='experience-p-title w-100 mt-5 text-start'>2. Сменяем и миещ се вътрешен предфилтър</p>
                                <p className='experience-p-desc text-start'>Улавя по-дребните частици като полени и прах.</p>

                            </div>

                            <div className="col-lg-6 col-sm-12 experience-div-container ex-d-c mt-5 filter-new-container mx-auto">

                                <h5 className='text-center w-100'>Сменяеми филтри</h5>

                                <p className='experience-p-title w-100 mt-5 text-start'>3. Филтър за частици HEPA-13</p>
                                <p className='experience-p-desc text-start'>Филтърът HEPA 13 премахва 99,97% от всички частици с размер до 0,3 микрона.</p>

                                <p className='experience-p-title w-100 mt-5 text-start'>4. Филтър с активен въглен</p>
                                <p className='experience-p-desc text-start'>Улавя и задържа газовете (VOC) и миризмите.</p>

                            </div>


                            <div className='col-lg-12 airh-div maintenance-div'>

                                <h3 className='airthings-h3 mt-5'>Доказани технологии</h3>
                                <p className='airthings-p px-3'>Лесна поддръжка за пълна защита</p>

                                <video className="cmsb482-w-full cmsb482-h-full cmsb482-object-cover filter-video" controls="" autoplay="" loop="" muted="">
                                    <source src="/Images/renew/Filters.mp4" type="video/mp4" />
                                </video>
                            </div>


                        </div>


                        <h2 style={{ marginTop: '4em' }} className='tab-header px-3'>Технически спецификации</h2>


                        <div className='col-sm-12 col-md-6 mx-auto renew-accordion'>
                            <Accordion accordionItems={renewQuestions} />
                        </div>

                    </div>

                </>
            )}

            {productDetails.title == 'Wave Enhance' && (
                <>

                    <div className='row first-wave-video-div'>

                        <div className='col-lg-12 mt-5'>

                            <h3 className='airthings-h3 mt-5'>По-добър въздух, по-добър сън, по-добър живот</h3>

                            <video className="cmsb482-w-full cmsb482-h-full cmsb482-object-cover filter-video-2" controls="" autoplay="" loop="" muted="">
                                <source src="/Images/wave-enhance/details/Wave Ehnace.mp4" type="video/mp4" alt="View Plus showing air quality" />
                            </video>

                        </div>
                    </div>

                    <div className='row mt-5 gx-3'>

                        <div className='view-plus-img-div col-lg-6 col-md-6 col-sm-12'>
                            <img alt='Wave Enhance App Sleep' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/wave-enhance/details/Wave Enahcne App Sleep Green1 (1).png' />
                        </div>


                        <div className='view-plus-content col-lg-4 col-md-6 col-sm-12'>
                            <p className='view-plus-caption px-3'>Иновации за вашия сън</p>
                            <h3 className='view-plus-heading px-3'>Дали нещо във въздуха пречи на съня ви?</h3>
                            <p className='view-plus-desc px-3'>Създаден, за да ви помогне да усъвършенствате обстановката в спалнята си, Wave Enhance следи факторите във въздуха, които влияят на качеството на съня ви, като например нивата на CO2, температурата, влажността, шума и светлината.</p>
                        </div>


                        <div className='view-plus-img-div view-plus-img-div-2 col-lg-6 col-md-6 col-sm-12 mt-5'>
                            <img alt='App Notification Sleep' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/wave-enhance/details/App_notification_Sleep_.png' />
                        </div>


                        <div className='view-plus-content view-plus-content-2 col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='view-plus-caption px-3'>Нови показатели за съня ви</p>
                            <h3 className='view-plus-heading px-3'>Проверявайте ежедневния си доклад Sleep Disruptors™</h3>
                            <p className='view-plus-desc px-3'>Знаем, че добрият сън е от решаващо значение за емоционалното ви състояние, остротата на ума и физическото ви здраве. С Wave Enhance ще можете да идентифицирате и елиминирате факторите, които влияят на почивката ви, за да създадете оптимална среда за съня си.</p>
                        </div>

                    </div>


                    <div className='row'>
                        <div className='col-lg-12 mt-5'>

                            <h3 className='airthings-h3 mt-5'>Подобрете ежедневието си</h3>
                            <p className='airthings-p px-3'>Спете чудесно тази нощ за по-продуктивен утрешен ден</p>


                            <video className="cmsb482-w-full cmsb482-h-full cmsb482-object-cover filter-video-2" controls="" autoplay="" loop="" muted="">
                                <source src="/Images/wave-enhance/details/Wave App.mp4" type="video/mp4" alt="Wave App" />
                            </video>



                        </div>
                    </div>

                    <div className='row mt-5'>

                        <div className='col-lg-12'>

                            <p className='airthings-p px-3'>Изживейте Wave Enhance</p>
                            <h3 className='airthings-h3 px-3'>Разберете факторите, които влияят на съня ви всеки ден</h3>
                            <p className='px-3 w-50 mx-auto improve-air-p'>Наблюдавайте и подобрявайте въздуха в спалнята си още от първия ден с помощта на приложението Airthings. Налично е за Android и iOS.</p>

                        </div>


                    </div>


                    <div className='row row-cols-1 row-cols-md-3 g-4'>

                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>

                            <div className="card-view-pl h-100">

                                <div className="card-body">

                                    <div className='card-body-container'>
                                        <p className="subcaption">Последното парче от пъзела</p>
                                        <h5 className="card-title w-100">Не проследявайте само симптомите, а открийте причините</h5>
                                    </div>
                                    <p style={{ marginTop: '4.4em' }} className="card-text">Разкрийте факторите, които заобикалят съня ви, с доклада Sleep Disruptors™. Комбинирайте тези прозрения с данни от вашето носимо устройство, за да изградите цялостна картина на средата на съня си.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/wave-enhance/details/Sleep_report_notification.png' alt='Sleep Report Notification' />
                                </div>

                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>

                            <div className="card-view-pl h-100">

                                <div className="card-body">
                                    <div className='card-body-container'>
                                        <p className="subcaption">Разкрийте невидимото</p>
                                        <h5 className="card-title w-100">Научете какво се съдържа във въздуха в спалнята ви</h5>
                                    </div>
                                    <p className="card-text mt-5">Разберете как се променя въздухът в спалнята ви през нощта. Не само факторите, свързани с комфорта, като влажност и температура, но и като проследявате нивата на CO₂, които могат да повлияят на способността ви да спите спокойно през нощта.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/wave-enhance/details/Wave Enhance Report.png' alt='Wave Enhance Report' />
                                </div>
                            </div>

                        </div>


                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>

                            <div className="card-view-pl h-100">

                                <div className="card-body">
                                    <div className='card-body-container'>
                                        <p className="subcaption">По-добре от приспивна песен</p>
                                        <h5 className="card-title w-100">За спокойна дрямка и нощно време</h5>
                                    </div>
                                    <p className="card-text mt-5">Създали ли сте идеалното място за сън на детето си? Потърсете партньор, който да ви помогне да нагласите спалнята на детето си, като се уверите, че са осигурени правилната вентилация, температура и нива на шум, за да се поддържа спокойният сън, от който то се нуждае за здравословен растеж.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/wave-enhance/details/Wave Enahnce APP KID.png' alt='Wave Enhance App KID' />
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 card-up'>
                            <div className="card-view-pl h-100">

                                <div className="card-body">
                                    <div className='card-body-container'>
                                        <p className="subcaption">Страхотни идеи през целия ден</p>
                                        <h5 className="card-title w-100">Поддържане на върхови нива на продуктивност</h5>
                                    </div>
                                    <p className="card-text mt-5">Когато нивата на въглероден диоксид се повишат, може да започнете да се чувствате уморени или да имате проблеми с концентрацията. Дръжте CO2 под контрол и извлечете максимума от деня си.</p>
                                </div>

                                <div className='card-img-container'>
                                    <img className="card-img-top" src='/Images/wave-enhance/details/Group_37394.png' alt='Air quality control' />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='row mt-5 justify-content-center monitor-div'>

                        <h1 className='main-monitor-h1'>Следете въздуха около себе си</h1>

                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Въглероден диоксид (CO2)</p>
                            <p className='monitor-desc w-75'>Когато достигне високи нива в помещенията, въглеродният диоксид (CO2) може да причини лош сън и проблеми с концентрацията.</p>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Температура</p>
                            <p className='monitor-desc w-75'>Температурата не е само въпрос на комфорт, тя може да повлияе негативно на качеството на съня, настроението и бдителността.</p>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <p className='monitor-title'>Пренасяни по въздуха химикали</p>
                            <p className='monitor-desc w-75'>Летливите органични съединения (ЛОС) са химикали, които се отделят във въздуха от предмети от бита - много от тях са безвредни, но някои са токсични.</p>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Налягане на въздуха</p>
                            <p className='monitor-desc w-75'>Промените във въздушното налягане влияят на нивата на радон и при някои хора могат да предизвикат главоболие, скованост на ставите и болка.</p>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Влажност</p>
                            <p className='monitor-desc w-75'>Високата влажност насърчава развитието на плесени и влошава симптомите на астма, а прекалено сухият въздух може да доведе до дразнене на кожата и гърлото.</p>
                        </div>


                        <h2 className='environment-factors-h2 mt-5'>... и фактори на околната среда</h2>

                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Околен шум</p>
                            <p className='monitor-desc w-75'>Идентифициране на тенденции и аномалии чрез измерване на нивото на околния шум, отчетено в децибели А (dBA).</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Светлина</p>
                            <p className='monitor-desc w-75'>Разберете по-добре как се променя интензивността на светлината през дните и сезоните. Измерване на ефекта от новите осветителни тела и прозоречни покрития.</p>
                        </div>




                    </div>

                    <div className='row where-to-place-wave-enhance-div pt-5'>

                        <p className='multi-room-p'>Wave Enhance във вашия дом</p>
                        <h2 className='environment-factors-h2'>Къде да го поставите?</h2>
                        <p className='text-s text-start px-3 w-50 mx-auto where-place-p'>Използвайте вградената поставка за маса или я монтирайте на стената. Не забравяйте да я поставите на височина 40-70 инча (110-170 см) над пода, за да осигурите най-доброто събиране на данни.</p>

                        <div className='row justify-content-center'>
                            <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-1 mb-4 mt-5">
                                <h4 className="text-start">Детска стая</h4>
                                <p className='mt-5 text-start'>Монтирайте Wave Enhance на стената над леглото на детето си или го поставете на нощното шкафче. Осигурете си спокойствие, като проследявате качеството на въздуха, температурата и околния шум в стаята на детето си.</p>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-2 mb-4 mt-5">
                                <h4 className="text-start">Вашата спалня</h4>
                                <p className='mt-5 text-start'>Поставете Wave Enhance на нощното си шкафче или го монтирайте на стената наблизо, за да следите условията в стаята за спокоен сън, така че да се подготвите за продуктивен утрешен ден.</p>
                            </div>
                        </div>

                    </div>











                    <div className='row justify-content-center vp-explained-div'>

                        <div className='col-lg-12'>

                            <p className='multi-room-p'>Wave Enhance с обяснения</p>
                            <h3 className='multi-room-h3'>Все още скролирате?</h3>


                            <p className='nerd-p text-start'>За нърдовете</p>
                            <h3 className='nerd-h3 text-start'>Монитор за качеството на въздуха, разработен от експерти</h3>
                            <p className='nerd-p-2 text-start w-50'>Wave Enhance е нашият компактен, дискретен монитор за качеството на въздуха в помещенията, захранван с батерия, създаден, за да оптимизира съня и вниманието ви. Идеален за спални и домашни офиси, Wave Enhance следи седем аспекта на околната среда.</p>

                        </div>


                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-1 mb-4 mt-5">
                            <h4 className="text-start">Интеграции със Smarthome</h4>
                            <p className='mt-5 text-start'>Свържете своя Wave Enhance към интернет хъба в монитора от серията Airthings View за постоянен достъп до данните за въздуха. След това можете да използвате IFTTT, Amazon Alexa, Homey, Google Assistant, за да зададете рутинни процедури.</p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-2 mb-4 mt-5">
                            <h4 className="text-start">Пет сензора за качество на въздуха</h4>
                            <p className='mt-5 text-start'>Wave Enhance разполага с пет ключови сензора за качество на въздуха: CO2, ЛОС, влажност, температура и налягане на въздуха. Когато добавите околния шум и светлина, получавате по-пълна картина на вътрешната среда.</p>
                        </div>



                        <div className='col-lg-12'>


                            <p className='nerd-p text-start'>За всеки друг</p>
                            <h3 className='nerd-h3 text-start'>Wave Enhance следи средата, в която спите, и ви подсказва как да я подобрите.</h3>
                            <p className='nerd-p-2 text-start w-50'>Wave Enhance следи въздуха ви и предоставя полезни идеи за това как да го подобрите. Мислете за нас като за вашия треньор по отношение на въздуха, който ви казва как да промените средата си, за да подобрите настроението си, качеството на съня и цялостното си здраве.</p>

                        </div>


                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-1 mb-4 mt-5">
                            <h4 className="text-start">Приложение Airthings</h4>
                            <p className='mt-5 text-start'>Приложението Airthings предоставя лесни за четене данни и графики, ежедневен доклад за нарушителите на съня™ и съвети за качеството на въздуха. Налично за iOS и Android, то се синхронизира с Wave Enhance чрез Bluetooth за актуализации вкъщи.</p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 d-1 home-dna-place-container home-dna-place-container-2-2 mb-4 mt-5">
                            <h4 className="text-start">Поставяне</h4>
                            <p className='mt-5 text-start'>Wave Enhance се захранва с батерии, което го прави лесен за поставяне навсякъде в помещения, където качеството на въздуха е проблем. Може да се монтира на стена или да се постави на повърхност с помощта на вградената стойка за маса.</p>
                        </div>


                        <h2 style={{ marginTop: '2em' }} className='tab-header faq-header px-3'>Често задавани въпроси</h2>

                        <div className='col-sm-12 col-md-6 mx-auto mt-5'>
                            <Accordion accordionItems={waveEnhanceFaqQuestions} />
                        </div>



                        <h2 style={{ marginTop: '4em' }} className='tab-header px-3'>Технически спецификации</h2>


                        <div className='col-sm-12 col-md-6 mx-auto renew-accordion'>
                            <Accordion accordionItems={waveEnhanceItems} />
                        </div>



                    </div>




                </>
            )}


            {productDetails.title == 'Wave Mini' && (
                <>
                    <div className='row'>

                        <div className='col-lg-12 wave-mini-main-div'>
                            <p className='wave-mini-main-p'>Малък размер. Голямо въздействие</p>
                            <p className='wave-mini-desc mx-auto'>Този универсален монитор, работещ с батерия, включва сензори, които непрекъснато следят химикалите във въздуха (ЛОС), температурата и влажността. Когато нивата на ЛОС се повишат, направете проучване, за да идентифицирате източниците и да сведете до минимум въздействието им върху качеството на въздуха в помещението. Четвърти, виртуален сензор предоставя индикация за риска от развитие на мухъл в зоната около монитора. Поставете го в помещения, които са склонни да бъдат влажни и в които се опасявате, че може да се развие плесен. Ако той отчете висок риск от развитие на мухъл, предприемете мерки за нормализиране на влажността и температурата, преди мухълът да получи възможност.</p>
                        </div>


                        <div className='col-lg-12'>
                            <iframe className='wave-mini-video w-75' frameborder="0" allowfullscreen="" data-src="https://www.youtube.com/embed/_psD3bKkRl8" data-element="video" src="https://www.youtube.com/embed/_psD3bKkRl8?autoplay=1"></iframe>
                        </div>


                    </div>


                    <div className='row mt-5 justify-content-center monitor-div'>

                        <h1 className='main-monitor-h1'>Следете въздуха около себе си</h1>

                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Индикация за риск от мухъл</p>
                            <p className='monitor-desc w-75'>Спрете плесента, преди да е започнала. Предупреждавайте, когато условията на околната среда създават благоприятна среда за развитие на плесени.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Температура</p>
                            <p className='monitor-desc w-75'>Температурата не е само въпрос на комфорт, тя може да повлияе негативно на качеството на съня, настроението и бдителността.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Пренасяни по въздуха химикали</p>
                            <p className='monitor-desc w-75'>Летливите органични съединения (ЛОС) са химикали, които се отделят във въздуха от предмети от бита - много от тях са безвредни, но някои са токсични.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                            <p className='monitor-title'>Влажност</p>
                            <p className='monitor-desc w-75'>Високата влажност насърчава развитието на мухъл и влошава симптомите на астма, а прекалено сухият въздух може да доведе до дразнене на кожата и гърлото.</p>
                        </div>

                    </div>

                    <div className='row mt-5'>

                        <div className='col-lg-12'>
                            <p className='wave-mini-main-p'>Интелигентен дизайн отвътре и отвън</p>
                        </div>

                        <div className='view-plus-img-div col-lg-6 col-md-6 col-sm-12'>
                            <img width={554} height={409} alt='Wave Mini' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/wave-mini/details/wave_mini-min.png' />
                        </div>

                        <div className='view-plus-content col-lg-4 col-md-6 col-sm-12'>

                            <p className='wave-mini-subcaption mt-5'>Индикация за риск от мухъл</p>
                            <p className='wave-mini-subcaption-desc'>Предупреждавайте, когато температурата и влажността на околната среда са благоприятни за развитие на плесени.</p>

                            <p className='wave-mini-subcaption'>Лесни и бързи проверки</p>
                            <p className='wave-mini-subcaption-desc'>Махнете с ръка над монитора, за да получите цветна индикация за текущото качество на въздуха.</p>

                            <p className='wave-mini-subcaption'>Захранване с батерии и без кабели</p>
                            <p className='wave-mini-subcaption-desc'>Работи без кабел с батерии до 3 години.</p>
                        </div>

                        <div className='view-plus-img-div view-plus-img-div-2 col-lg-6 col-md-6 col-sm-12 mt-5'>
                            <img alt='Mold Risk' className='img-fluid px-3 offset-2 view-plus-main-img mx-auto' src='/Images/wave-mini/details/Airthings_Wave_Mini_-_Hero_Image_-_Main_with_App_Light_-_Mold_risk_graph_GLOW_WEB-min.jpg' />
                        </div>

                        <div className='view-plus-content view-plus-content-2 col-lg-4 col-md-6 col-sm-12 mt-5'>

                            <p style={{ marginTop: '3em' }} className='wave-mini-subcaption'>Приложение Airthings</p>
                            <p className='wave-mini-subcaption-desc'>Проверявайте показанията в реално време, анализирайте тенденциите с помощта на усъвършенствани графики, конфигурирайте известия и получавайте съвети за качеството на въздуха.</p>

                            <p className='wave-mini-subcaption'>Свързване чрез Bluetooth</p>
                            <p className='wave-mini-subcaption-desc'>Свързване чрез Bluetooth за достъп до показанията в реално време вкъщи.</p>

                            <p className='wave-mini-subcaption'>Подготвен за Multiroom</p>
                            <p className='wave-mini-subcaption-desc'>Осигурете отдалечен достъп до вашия монитор Wave, като го свържете с WiFi свързан монитор от серията View, действащ като концентратор.</p>

                        </div>


                    </div>



                    <h2 style={{ marginTop: '2em' }} className='tab-header px-3'>Технически спецификации</h2>

                    <div className='col-sm-12 col-md-6 mx-auto'>
                        <Accordion accordionItems={waveMiniItems} />
                    </div>


                </>
            )}



        </div >
    )


}