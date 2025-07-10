export default function CarouselIndicator({slide, label}) {
    return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={slide} aria-label={label}></button>
}