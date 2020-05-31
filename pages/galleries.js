import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import GalleryCover from '../components/GalleryCover';

const GalleriesPage = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <motion.div id="app" initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}}>
        <Head>
            <title>CSV</title>
            <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"></link>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"></link>
        </Head>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col py-5">
                        <h1 className="text-center">PHOTOS</h1>
                        <p className="heading text-center">Que vous soyiez musiques actuelles ou plutôt disco-funk, il y a le club qui vous correspond !</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container-fluid px-4">
                <motion.div className="row" variants={container}
    initial="hidden"
    animate="show">
                    <GalleryCover cover="/gallery-thumbnail01.jpg" name="Summer Clubbing" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail02.jpg" name="The American Party" date="Samedi 29 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail03.jpg" name="Hello Friday" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail04.jpg" name="Hold Up" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail01.jpg" name="Summer Clubbing" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail02.jpg" name="The American Party" date="Samedi 29 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail03.jpg" name="Hello Friday" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail04.jpg" name="Hold Up" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail01.jpg" name="Summer Clubbing" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail02.jpg" name="The American Party" date="Samedi 29 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail03.jpg" name="Hello Friday" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail04.jpg" name="Hold Up" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail01.jpg" name="Summer Clubbing" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail02.jpg" name="The American Party" date="Samedi 29 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail03.jpg" name="Hello Friday" date="Samedi 22 Juillet" />
                    <GalleryCover cover="/gallery-thumbnail04.jpg" name="Hold Up" date="Samedi 22 Juillet" />
                </motion.div>
            </div>
        </section>
      </motion.div>
    )
  }
  
  export default GalleriesPage;