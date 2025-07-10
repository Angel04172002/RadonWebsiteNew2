import './ProductList.css'

import ProductCard from '../ProductCard/ProductCard';


const products = [
    {
        _id: '1',
        title: 'Дневна + спалня',
        description: 'Започнете пътуването си за качеството на въздуха в помещението с монитори, които обхващат две от стаите, в които прекарвате най-много време у дома.',
        price: '€358.00',
        imageUrl: '/Images/living-room-bedroom/livingroom_and_bedroom_1__1.png',
        subcaption: 'View Plus + Wave Enhance'
    },
    {
        _id: '2',
        title: 'Основен комплект',
        description: 'Цялостен мониторинг на качеството на въздуха и интелигентно пречистване на въздуха в една фантастична сделка.',
        price: '€558.00',
        imageUrl: '/Images/essential-kit/essential_housekit_2.png',
        subcaption: 'Renew + View Plus'
    },
    {
        _id: '3',
        title: 'Дневна + баня',
        description: 'Получете важна информация за качеството на въздуха в помещението, в което семейството ви прекарва най-много време, и следете риска от поява на плесени във влажните помещения.',
        price: '€302.00',
        imageUrl: '/Images/living-room-bathroom/livingroom_and_bathroom.png',
        subcaption: 'View Plus + Wave Mini'
    },
    {
        _id: '4',
        title: 'View Plus',
        description: 'Отлично решение за семейни стаи и кухни, където семейството се събира и прекарва времето си заедно.',
        price: '€299.00',
        imageUrl: '/Images/view-plus/view-plus-details/view_plus_3-min.jpg'
    },
    {
        _id: '5',
        title: 'Пречиствател на въздуха Renew',
        description: 'Проектиран отвътре и отвън, за да бъде идеалният избор за спални. Тих, сдържан и ефективен.',
        price: '€399.00',
        imageUrl: '/Images/renew/renew_airthings_air_purifier_1_2-min.png'
    },
    {
        _id: '6',
        title: 'Wave Enhance',
        description: 'Компактен интелигентен монитор за спални, измерващ въглероден диоксид (CO2) и други фактори, влияещи върху качеството на въздуха в помещенията и условията на околната среда. Чудесно средство за подобряване на съня и производителността.',
        price: '€149.00',
        imageUrl: '/Images/wave-enhance/airthings_wave_enhance_-_product_photoshoot_-_bedroom_web_1_4-min.png'
    },
    {
        _id: '7',
        title: 'Wave Mini',
        description: 'Измервa VOC в полезните помещения. Или оценете риска от развитие на мухъл в топлите и влажни кътчета в дома.',
        price: '€79.00',
        imageUrl: '/Images/wave-mini/airthings_wave_mini_-_lifestyle_utility_room_web_1-min.png'
    }
]


export default function ProductList() {

  
    return (

        <div className='last-row row row-cols-1 row-cols-md-3 g-4'>

            {products.map(p => <ProductCard
                    
                    key = {p._id}
                    {...p}

                />
            )}

        </div>

   

    )
}