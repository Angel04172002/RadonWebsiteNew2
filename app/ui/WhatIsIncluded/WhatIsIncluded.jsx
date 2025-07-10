import './WhatIsIncluded.css';

export default function WhatIsIncluded({ image1, image2, title1, title2, desc1, desc2, url1, url2 }) {

    return (

        <div className="row main-include-container justify-content-center gx-3">

            <h2 className="include-title mt-5">Какво е включено</h2>

            <div className="col-lg-6 col-md-6 col-sm-12 first-container c-1 mb-4">


                <a href={url1} className="product-name">

                    <img width={377} height={377} src={image1} className="img-fluid" />
                    <p className="title">{title1}</p>
                    <p style={{ color: '#212529' }} className='short-desc'>{desc1}</p>
                </a>

            </div>

            <div className="col-lg-6 col-md-6 col-sm-10 second-container c-2 mb-4">

                <a href={url2} className="product-name">
                    <img width={377} height={377} src={image2} className="img-fluid" />
                    <p className="title">{title2}</p>
                    <p style={{ color: '#212529' }} className='short-desc'>{desc2}</p>
                </a>

            </div>
        </div>
    )
}