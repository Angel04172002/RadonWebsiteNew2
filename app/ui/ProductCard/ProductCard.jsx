import './ProductCard.css';


const productNamesMapping = {
    'Дневна + спалня': 'livingroom-bedroom-bundle',
    'Основен комплект': 'essential-house-kit',
    'Дневна + баня': 'livingroom-bathroom-bundle',
    'View Plus': 'view-plus',
    'Пречиствател на въздуха Renew': 'renew',
    'Wave Enhance': 'wave-enhance',
    'Wave Mini': 'wave-mini'
};



export default function ProductCard({
    title,
    description,
    price,
    imageUrl,
    subcaption
}) {

    const productName = productNamesMapping[title];
    const pathname = `/products/${productName}`;

    return (

        <div className='col-lg-4 col-md-6'>
            <div className="card h-100">

                <img className="card-img-top" src={imageUrl} alt={title} />

                <div className="card-body">
                    <div className='card-body-container'>
                        <h5 className="card-title">{title}</h5>
                        {subcaption != '' ? <p className="subcaption">{subcaption}</p> : ''}
                    </div>
                    <p className="card-text">{description}</p>
                </div>

                <div className='card-price'>
                    <p className='card-text price-text'>{price}</p>
                </div>

                <a href={pathname} className="w-100 btn open-btn btn-primary">Разгледай</a>

            </div>
        </div>
    )
}