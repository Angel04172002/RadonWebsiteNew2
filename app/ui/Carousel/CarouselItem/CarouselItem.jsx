import './CarouselItem.css';

export default function CarouselItem({ imageUrl }) {
    return (
        <div className="carousel-item">
            <div className="card main-card">
                <img className="d-block carousel-img" src={imageUrl} />
            </div>
        </div>
    )
}