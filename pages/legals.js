import Head from 'next/head'
import { motion } from 'framer-motion'

const LegalsPage = () => {
    return (
        <motion.div id="app" 
            initial={{ opacity: 0}} 
            animate={{ opacity: 1}} 
            exit={{ opacity: 0}}>
            <Head>
                <title>CSV</title>
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"></link>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"></link>
                <link href="//api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
            </Head>
        </motion.div>
    )
}

export default LegalsPage