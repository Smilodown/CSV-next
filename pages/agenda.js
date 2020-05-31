import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const AgendaPage = () => {

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
            <div>
                <img src="assets/images/slide-1800-900.jpg" alt=""/>
            </div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <h2 className="text-center">Prochaines Soirées</h2>
                        </div>
                    </div>
                    <div className="row">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }} 
                            className="col-lg-4 px-5 mb-5">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <img src="/disc-default-600.png" alt="" />
                                </div>
                                <div className="col-12 text-center">
                                    <h3>The American Party</h3>
                                    <h4>Samedi 22 Juillet</h4>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }} 
                            className="col-lg-4 px-5 mb-5">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <img src="/disc-default-600.png" alt="" />
                                </div>
                                <div className="col-12 text-center">
                                    <h3>Hello Friday !</h3>
                                    <h4>Samedi 22 Juillet</h4>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }} 
                            className="col-lg-4 px-5 mb-5">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <img src="/disc-default-600.png" alt="" />
                                </div>
                                <div className="col-12 text-center">
                                    <h3>Summer Clubbing</h3>
                                    <h4>Samedi 22 Juillet</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default AgendaPage;