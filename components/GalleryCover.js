import { motion } from 'framer-motion'

const GalleryCover = ({cover, name, date}) => {
    const item = {
        hidden: {opacity: 0, y: -80},
        show: {opacity: 1, y: 0}
    }
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={item}
            className="gallery-cover col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="inner">
                <img src={cover} alt="" />
                <div className="caption">
                    <h2>{name}</h2>
                    <h3>{date}</h3>
                </div>
            </div>
        </motion.div>
    )
}

export default GalleryCover