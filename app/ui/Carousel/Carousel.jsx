import './Carousel.css';

import CarouselItem from './CarouselItem/CarouselItem';
import CarouselIndicator from './CarouselIndicator/CarouselIndicator';

export default function Carousel({ images }) {


    const slicedImages = images.slice(1);


    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                {slicedImages.map((_, i) => <CarouselIndicator slide={i + 1} label={`Slide ${i + 2}`} />)}

            </div>


            <div className="carousel-inner">

                <div className="carousel-item active">
                    <div className="card main-card">
                        <img className="d-block carousel-img" src={images[0]} />
                    </div>
                </div>

                {slicedImages.map(img => <CarouselItem key={img} imageUrl={img} />)}
                
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                {/* <span style={{ color: 'black' }} className="sr-only">Previous</span> */}
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                {/* <span style={{ color: 'black' }} className="sr-only">Next</span>     */}
            </button>

            <script>
                {/* $('.carousel').carousel() */}
            </script>
        </div>
    )
}