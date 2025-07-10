import ProductList from '../ui/ProductList/ProductList';
import './Products.css'

export default function Products() {

    return (

        <div className='container main-products-container'>

            <h1 className='products-title'>Продукти</h1>

            <ProductList  />

            
        </div>
    )
}