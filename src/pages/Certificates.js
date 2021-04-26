import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Certificates.css';

function Certificates(){
    const schoolSlideImages = [
        { src: 'content/zeugnisse/0_1_Berufsschule.jpg' },
        { src: 'content/zeugnisse/0_2_Kantonsschule.jpg' },
        { src: 'content/zeugnisse/0_3_Sekundarschule.jpg' },
        { src: 'content/zeugnisse/0_4_Gymnasium.jpg' },
        { src: 'content/zeugnisse/1_0_bzz.jpg' },
        { src: 'content/zeugnisse/1_0_zli.jpg' },
        { src: 'content/zeugnisse/2_1_18-19_f.jpg' },
        { src: 'content/zeugnisse/2_2_18-19_h.jpg' },
        { src: 'content/zeugnisse/2_3_17-18_f.jpg' },
        { src: 'content/zeugnisse/2_4_17-18_h.jpg' },
        { src: 'content/zeugnisse/3_1_16-17_h.jpg' },
        { src: 'content/zeugnisse/3_2_16-17_h.jpg' },
        { src: 'content/zeugnisse/4_1_15-16_h.jpg' },
        { src: 'content/zeugnisse/4_2_15-16_f.jpg' },
        { src: 'content/zeugnisse/4_3_14-15_h.jpg' },
        { src: 'content/zeugnisse/4_4_14-15_f.jpg' }
      ];
      const langSlideImages = [
          { src: 'content/sprachen/0_1_Französisch.jpg' },
          { src: 'content/sprachen/0_2_Russisch.jpg' },
          { src: 'content/sprachen/1_Französisch_1.jpg' },
          { src: 'content/sprachen/1_Französisch_2.jpg' },
          { src: 'content/sprachen/2_Russisch_1.jpg' },
          { src: 'content/sprachen/2_Russisch_2.jpg' }
        ];
    const diplSlideImages = [
        { src: 'content/diplome/0_1_ECDL.jpg' },
        { src: 'content/diplome/0_2_Abacus.jpg' },
        { src: 'content/diplome/0_3_Multicheck.jpg' },
        { src: 'content/diplome/1_ECDL.jpg' },
        { src: 'content/diplome/2_Abacus.jpg' },
        { src: 'content/diplome/3_Multicheck_1.jpg' },
        { src: 'content/diplome/3_Multicheck_2.jpg' },
        { src: 'content/diplome/3_Multicheck_3.jpg' },
        { src: 'content/diplome/3_Multicheck_4.jpg' }
      ];
    return(
        <div className="certificates">
            <div className="certificates_about section">
                <div className="box slide">
                    {schoolSlideImages.map((image, index) => {
                        <img src={image.src} key={index} alt="" />
                    })}
                </div>
            </div>
            <div className="certificates_school section">
        

            </div>
            <div className="certificates_lang section">

            </div>
            <div className="certificates_dipl section">

            </div>
        </div>
    )
}

export default Certificates;