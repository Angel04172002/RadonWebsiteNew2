import '../../public/info-page.css';
import './WhatIsRadon.css';

import { RadonAccordionItemOne } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemTwo } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemThree } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemFour } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemFive } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemSix } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemSeven } from './radon-accordion-items/RadonAccordionItems';

import Accordion from '../ui/Accordion/Accordion';



const accordionItems = [

    {
        _id: '1',
        title: 'Здравни проблеми, свързани с радон: факти',
        content: RadonAccordionItemOne(),
        renderTimes: 'One'
    },
    {
        _id: '2',
        title: 'Откъде идва радонът?',
        content: RadonAccordionItemTwo(),
        renderTimes: 'Two'
    },
    {
        _id: '3',
        title: 'Радон, радиоактивност и ДНК',
        content: RadonAccordionItemThree(),
        renderTimes: 'Three'
    },
    {
        _id: '4',
        title: 'Радон в дома ми',
        content: RadonAccordionItemFour(),
        renderTimes: 'Four'
    },
    {
        _id: '5',
        title: 'Radonmap.com',
        content: RadonAccordionItemFive(),
        renderTimes: 'Five'
    },
    {
        _id: '6',
        title: 'Кой е чувствителен към радон?',
        content: RadonAccordionItemSix(),
        renderTimes: 'Six'
    },
    {
        _id: '7',
        title: 'Защо се променят нивата на радон?',
        content: RadonAccordionItemSeven(),
        renderTimes: 'Seven'
    }
];


export default function WhatIsRadon() {


    return (

        <div className='container mt-5'>

            <div className='main-container row bg d-flex justify-content-center inner-container1'>

                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <h1 className='display-4 main-title-page'>Какво е радон?</h1>
                    <p className="display-6 main-paragraph-page paragraph-page text-md-start">Радонът е невидим газ, който се образува в земната кора. Той заобикаля всеки от нас като част от въздуха, който дишаме.</p>
                    <p className="display-8 main-paragraph-page2 paragraph-page2 mt-5 text-md-start">Проблемът е във високите нива за дълъг период от време. Чрез дългосрочно наблюдение на радон можете да бъдете предупредени за високи нива и да направите малки промени, за да подобрите въздуха, който дишате.</p>
                </div>

                <div class="col-sm-12 col-md-5">
                    <img alt="Radon" className="mt-4 img-fluid" src="/Images/R.png" />
                </div>

                
            </div>


            <div className="row inner-container2">


                <h2 className="text-center accordion-main-title mt-5 mb-5">Всичко, което трябва да знаете за радон</h2>

                <Accordion accordionItems={accordionItems} />

            </div>
        </div>

    )

}
