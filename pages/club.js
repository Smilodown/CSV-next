import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const ClubPage = () => {

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
            <div className="container">
                <div className="row">
                    <div className="col-12 p-5">
                        <h1 className="text-center">Le Club</h1>
                        <p className="heading text-center">Que vous soyiez musiques actuelles ou plutôt disco-funk, il y a le club qui vous correspond !</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 px-0">
                        <img src="/clubbing-generaliste-1200-600.jpg" alt="" />
                        <div className="row">
                            <div className="col-12 p-5">
                                <h2>Clubbing Généraliste</h2>
                                <p>Rénovée en 2015 dans un esprit cave à champagne, nous vous invitons à partager une agréable soirée dans notre salle généraliste.</p>
                                <p>Chaleureuse et cosy elle arbore un style authentique avec ses murs et voutes en pierres, ses notes de bois, et sa moquette au design singulier qui fait que l’on s’y sent tout de suite bien ! Chaque weekend ce sont des centaines de jeunes qui s’y retrouvent pour un moment de détente et de festivité.</p>
                                <p>Nous vous offrons de grands espaces d’assises, 2 alcôves intimistes, un carré VIP ainsi qu’une loge privative dans l’annexe VIP disponible à la location pour vos grands évènements. Notre club s’est différencié depuis 5 ans par sa force de proposition en matière de soirées conceptuelles.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 px-0">
                        <img src="/clubbing80-1200-600.jpg" alt="" />
                        <div className="row">
                            <div class="col-12 p-5">
                                <h2>Clubbing 80</h2>
                                <p>Dans une ambiance eighties, boules à facettes et murs à paillettes, nous vous invitons à découvrir notre salle Clubbing 80.</p>
                                <p>Familiale et conviviale, venez partager une superbe soirée dans notre salle Clubbing 80 animée par des rois de la nuit, Alex et Pascal, qui vous feront danser jusqu’au bout de la nuit.</p>
                                <p>La salle Clubbing 80 du Cellier Saint-Vincent est LA référence de vos soirées 80 dans la région. Chaque samedi de 23h à 6h, venez faire un saut dans les années 1980-1990’s-2000 et profitez d’une soirée mémorable à nos côtés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ClubPage