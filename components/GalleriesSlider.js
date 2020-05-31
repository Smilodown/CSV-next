import Slider from "react-slick"
import PrevArrow from "./PrevArrow"
import NextArrow from "./NextArrow"
import  { motion } from 'framer-motion'

const GalleriesSlider = () => {
    const settings = {
        items: 'gallery-thubnail',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        marginLeft: 10,
        dots: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }
    return (
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col py-5">
                        <h2 className="text-center">Dernieres Photos</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="slider-container">
            <Slider {...settings}>
                <motion.div
                    whileTap={{ scale: 0.96 }} 
                    className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail01.jpg" alt="" />
                        <div className="caption">
                            <h4>The American Party - Summer Time</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.96 }} 
                    className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail02.jpg" alt="" />
                        <div className="caption">
                            <h4>Hello Friday !</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.96 }}
                    className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail03.jpg" alt="" />
                        <div className="caption">
                            <h4>Summer Clubbing</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.96 }}
                    className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail04.jpg" alt="" />
                        <div className="caption">
                            <h4>Dolls Make Me Crazy !</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.96 }}
                    className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail01.jpg" alt="" />
                        <div className="caption">
                            <h4>Hold Up !</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </motion.div>
                <div className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail02.jpg" alt="" />
                        <div className="caption">
                            <h4>Mousse Party - Part I</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </div>
                <div className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail03.jpg" alt="" />
                        <div className="caption">
                            <h4>Back To The Club</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </div>
                <div className="gallery-thumblink">
                    <div className="inner">
                        <img src="/gallery-thumbnail04.jpg" alt="" />
                        <div className="caption">
                            <h4>Summer Clubbing</h4>
                            <h6>Samedi 22 Juillet</h6>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
        </>
    )
}

export default GalleriesSlider