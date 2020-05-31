import Head from 'next/head'
import Map from '../components/Map'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import DriversServices from '../components/DriversServices'

const InfoPage = () => {

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
                <link href="//api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
            </Head>
            <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <img src="/csv-plan-large-1800.jpg" alt="" />
                </div>
            </div>
        </div>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Info & Accès</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Horaires d'ouverture</h3>
                        <ul>
                            <li><b>Salle Généraliste</b> : ouvert tous les vendredis, samedis et veilles de fêtes de 23h à 6h.</li>
                            <li><b>Salle 80</b> : ouvert tous les samedis de 23h à 6h.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Tarifs</h3>
                        <ul>
                            <li><b>Les vendredis</b> : gratuit pour tous avant 1h, puis 10 euros avec une consommation.</li>
                            <li><b>Les samedis et veilles fêtes</b> : 10 euros avec une consommation jusqu’à 23h30, puis 12,50 euros, toujours avec une consommation.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <DriversServices />
        <Map />
        </motion.div>
    )
}

export default InfoPage;