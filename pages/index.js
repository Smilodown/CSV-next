import Head from 'next/head'
import GalleriesSlider from '../components/GalleriesSlider'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import HomeSlider from '../components/HomeSlider'
import ComingEvents from '../components/ComingEvents'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div id="app" initial={{ opacity: 0, y: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}}>
      <Head>
        <title>CSV</title>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"></link>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"></link>
      </Head>
      <HomeSlider />
      <ComingEvents />
      <GalleriesSlider />
    </motion.div>
  )
}

export default Home