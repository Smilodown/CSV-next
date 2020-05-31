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
            <div className="container">
                <div className="row">
                    <div className="col-12 p-5">
                        <h1>Mentions Légales</h1>
                        <h2>Editeur du site</h2>
                        <p>
                        Le site http://www.celliersaintvincent.com/ est la propriété de la société S.A.S CSV :
                        <br />S.A.S – Au Capital de 15 000 euros enregistrée auRCS de Reims 794 778 860
                        <br />N° de TVA intracommunautaire : FR 59 794 778 860 00021
                        <br />Siège Social : 7, rue de Leuvrigny 51260 SARON-SUR- AUBE – Tél. : 03 26 80 43 51
                        <br />mail : contact@celliersaintvincent.com 
                        <br />Directrice de  publication : MLE JACQUEL Johanna
                        </p>
                        <p>En utilisant le site, l’utilisateur reconnaît avoir pris connaissance de ces conditions et les avoir acceptées. Celles-ci pourront être modifiées à tout moment et sans préavis par la société S.A.S CSV.</p>
                        <p>Par ailleurs, l’utilisateur reconnaît avoir été informé que le présent site est accessible 24 heures sur 24 et 7 jours sur 7, à l’exception des cas de force majeure, difficultés informatiques, difficultés liées à la structure des réseaux de communication ou difficultés techniques. Pour des raisons de maintenance, la société S.A.S CSV pourra interrompre le site et s’efforcera d’en avertir préalablement les utilisateurs.</p>
                        <h2>Hébergement du Site</h2>
                        <ul>
                            <li>Hébergeur : OVH</li>
                            <li>Société : OVH</li>
                            <li>Adresse web : http://www.ovh.com</li>
                            <li>Adresse postale : 2 Rue Kellerman - BP 80157 • 59053 Roubaix CEDEX</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default LegalsPage