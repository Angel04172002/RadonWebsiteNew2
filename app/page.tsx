import ProductList from './ui/ProductList/ProductList';
import './Home.css';
import Link from 'next/link';


export default function Page() {

  return (

    <div className='container main-home-container'>

      <div className='row'>

        <div className='col-md-12 col-lg-7'>

          <h1 className='display-4 home-title px-3'>Интелигентни монитори за качество на въздуха и пречистватели, на които можете да се доверите</h1>
          <p className='display-6 home-paragraph px-3'>Променете състоянието си на съществуване с Airthings. Нашите продукти могат да ви помогнат да подобрите качеството на въздуха в помещението, което води до по-добър фокус, успокояване на алергиите и подобряване на съня, като същевременно осигуряват цялостно по-здравословен дом.</p>

        </div>

        {/* <div className='col-md-5'>

          <img className='animate-image-home' width={'50%'} src="https://cdn.britannica.com/14/22314-050-04B2DD0D/element-radon-symbol-square-Rn-properties-some.jpg" alt="Image" />

        </div> */}

      </div>


      <div className='row'>

        <div className="col-lg-6 col-md-6 col-sm-12 flex-column first-containerm r-1 mx-auto">

          <div className='content-container-m'>

            <p className='vp-span mt-5'>View Plus</p>
            <h2 className='vp-h2'>1. Вашият въздух, вашето здраве</h2>
            <p className='mt-5 vp-p'>Нашите монитори откриват радон, твърди частици, летливи органични съединения и други замърсители, за да гарантират, че въздухът, който дишате, е чист.</p>

            <a href='/products/view-plus' className='btn btn-primary mt-5 btn-fancy'>Научете повече</a>

            <div className='img-m-cont'>
              <img width={500} height={500} src='/Images/view-plus-box-2.jpg' className="img-fluid px-3" />
            </div>

          </div>


        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 flex-column second-containerm r-2 mx-auto">

          <div className='content-container-m'>
            <p className='vp-span mt-5'>Мобилно приложение</p>
            <h2 className='vp-h2'>2. Разберете</h2>

            <p className='mt-5 vp-p vp-p-2'>Получете полезни прозрения, персонализирани съвети и проследете въздействието на подобренията си с течение на времето.</p>

            {/* <a style={{display: 'none'}} className='btn btn-primary mt-5 btn-fancy btn-fancy-2'>Разглеждане на функциите</a> */}

            <br />


            <div className='img-m-cont'>
              <img width={500} height={500} src='/Images/airthings-app-crop.jpg' className="img-fluid px-3" />
            </div>

          </div>



        </div>

        <div className='col-lg-12 col-md-12 col-sm-12 flex-column third-containerm r-3 mx-auto'>

          <div className='content-container-m'>
            <p className='vp-span mt-5'>Пречиствател RENEW</p>
            <h2 className='vp-h2'>3. Пречистване: глътка свеж въздух</h2>

            <p className='mt-5 vp-p vp-p-3'>Проектиран да работи безпроблемно с нашите монитори, той реагира и се адаптира към качеството на въздуха, като осигурява чиста, безопасна и спокойна атмосфера</p>

            <a href='/products/renew' className='btn btn-primary mt-5 btn-fancy btn-fancy-2'>Вижте Renew</a>

            <div className='img-m-cont'>
              <img alt='Air purifier' width={1000} height={500} src='/Images/renew-3.jpg' className="img-fluid px-3 pur-img" />
            </div>
          </div>




        </div>

      </div>


      <h2 className='products-above-main-title mt-5 px-5'>Започнете наблюдение с View Plus, преминете към цялостно наблюдение на дома</h2>        

      <div className='row last-row mt-5 row-cols-1 row-cols-md-3'>



        <div className='col-lg-4 col-md-6 px-3'>
          <div className="card h-100">

            <img className="card-img-top" src='/Images/view-plus/view-plus-details/view_plus_3-min.jpg' alt={'View Plus'} />

            <div className="card-body">
              <div className='card-body-container'>
                <h5 className="card-title">View Plus</h5>
              </div>
              <p className="card-text">Отлично решение за семейни стаи и кухни, където семейството се събира и прекарва времето си заедно.</p>
            </div>

            <div className='card-price'>
              <p className='card-text price-text'>€234.99</p>
            </div>

            <a href='/products/view-plus' className="w-100 btn open-btn btn-primary">Разгледай</a>

          </div>
        </div>

        <div className='col-lg-4 col-md-6'>
          <div className="card h-100">

            <img className="card-img-top" src='/Images/wave-enhance/details/airthings_wave_enhance_-_product_photoshoot_-_bedroom_web_1_4 (1)-min.png' alt={'Wave Enhance'} />

            <div className="card-body">
              <div className='card-body-container'>
                <h5 className="card-title">Wave Enhance</h5>
              </div>
              <p className="card-text">Компактен интелигентен монитор за спални, измерващ въглероден диоксид (CO2) и други фактори, влияещи върху качеството на въздуха в помещенията и условията на околната среда. Чудесно средство за подобряване на съня и производителността.</p>
            </div>

            <div className='card-price'>
              <p className='card-text price-text'>€149.99</p>
            </div>

            <a href='/products/wave-enhance' className="w-100 btn open-btn btn-primary">Разгледай</a>

          </div>
        </div>

        <div className='col-lg-4 col-md-6'>

          <div className="card h-100">

            <img className="card-img-top" src='/Images/wave-mini/details/airthings_wave_mini_-_lifestyle_utility_room_web_1-min.png' alt={'Wave Mini'} />

            <div className="card-body">
              <div className='card-body-container'>
                <h5 className="card-title">Wave Mini</h5>
              </div>
              <p className="card-text">Измервa VOC в полезните помещения. Или оценете риска от развитие на мухъл в топлите и влажни кътчета в дома.</p>
            </div>

            <div className='card-price'>
              <p className='card-text price-text'>€79.99</p>
            </div>

            <a href='/products/wave-mini' className="w-100 btn open-btn btn-primary">Разгледай</a>

          </div>
        </div> 
        
      </div>


     


    </div>
  )
}
