import './ProductList.css'

import ProductCard from '../ProductCard/ProductCard';
import { time } from 'console';
import { truncate } from 'fs';


const products = [
    {
        _id: '4',
        title: 'View Plus',
        description: 'Нашият най-добър монитор за радон и качеството на въздуха с 7 сензора, включително за радон, PM 2.5, CO2 и други - с Wi-Fi свързаност и без кабели.',
        price: '€299.00',
        imageUrl: '/Images/view-plus/view-plus-details/view_plus_3-min.jpg',
        showCloseBtn: true
    },
    {
        _id: '7',
        title: 'View Radon',
        description: 'Радонът вече не може да се крие. Единственото по-лошо от проблем, който виждаш, е този, който не виждаш. Осигури си постоянен контрол върху нивата на радон в дома си с Airthings View Radon. Устройството е свързано с Wi-Fi, за да имаш достъп по всяко време до актуални показания и навременни известия. То комбинира eInk дисплей и сензори за радон, влажност и температура.',
        price: '€199.00',
        imageUrl: '/Images/view-radon/airthings_view_radon_-_product_photoshoot_-_basement_radon_intl_web_1.png',
        showCloseBtn: false
    },
    {
        _id: '8',
        title: 'Correntium Home 2',
        description: 'Оригиналният дигитален детектор за радон, сега с Bluetooth Smart свързаност и допълнителни сензори за температура и влажност.',
        price: '€179.00',
        imageUrl: '/Images/correntium/airthings_corentium_home_2_-_hero_image_-_with_iphone15_intl_graph_web_1_.jpg',
        showCloseBtn: false
    },
    {
        _id: '1',
        title: 'Дневна + спалня',
        description: 'Започнете пътуването си за качеството на въздуха в помещението с монитори, които обхващат две от стаите, в които прекарвате най-много време у дома.',
        price: '€358.00',
        imageUrl: '/Images/living-room-bedroom/livingroom_and_bedroom_1__1.png',
        subcaption: 'View Plus + Wave Enhance',
        showCloseBtn: true
    },
    {
        _id: '2',
        title: 'Основен комплект',
        description: 'Цялостен мониторинг на качеството на въздуха и интелигентно пречистване на въздуха в една фантастична сделка.',
        price: '€558.00',
        imageUrl: '/Images/essential-kit/essential_housekit_2.png',
        subcaption: 'Renew + View Plus',
        showCloseBtn: true
    },
    {
        _id: '3',
        title: 'Дневна + баня',
        description: 'Получете важна информация за качеството на въздуха в помещението, в което семейството ви прекарва най-много време, и следете риска от поява на плесени във влажните помещения.',
        price: '€302.00',
        imageUrl: '/Images/living-room-bathroom/livingroom_and_bathroom.png',
        subcaption: 'View Plus + Wave Mini',
        showCloseBtn: true
    },
    {
        _id: '5',
        title: 'Пречиствател на въздуха Renew',
        description: 'Проектиран отвътре и отвън, за да бъде идеалният избор за спални. Тих, сдържан и ефективен.',
        price: '€399.00',
        imageUrl: '/Images/renew/renew_airthings_air_purifier_1_2-min.png',
        showCloseBtn: true
    },
    {
        _id: '6',
        title: 'Wave Enhance',
        description: 'Компактен интелигентен монитор за спални, измерващ въглероден диоксид (CO2) и други фактори, влияещи върху качеството на въздуха в помещенията и условията на околната среда. Чудесно средство за подобряване на съня и производителността.',
        price: '€149.00',
        imageUrl: '/Images/wave-enhance/airthings_wave_enhance_-_product_photoshoot_-_bedroom_web_1_4-min.png',
        showCloseBtn: true
    },
]


export default function ProductList() {


    return (

        <div className='last-row row row-cols-1 row-cols-md-3 g-4'>

            {products.map(p => <ProductCard

                key={p._id}
                {...p}

            />
            )}

        </div>



    )
}