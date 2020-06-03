import Head from 'next/head'
import { motion } from 'framer-motion'

const EventPage = ({slug}) => {
    return (
        <motion.div id="app" initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}}>
            <Head>
                <title>CSV</title>
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
            </Head>
            <div>
                Cover Image
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <h1>{slug}</h1>
                        <h2>Event subtitle</h2>
                    </div>
                    <div className="col py-5">
                        Description de l'évèement
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            slug: context.params.slug
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params : {slug: 'sluuug'}}
        ], fallback: true
    }
}


export default EventPage