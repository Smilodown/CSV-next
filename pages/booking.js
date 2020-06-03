import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const BookingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div id="app" initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0}}>
            <Head>
            <title>CSV</title>
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"></link>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"></link>
            </Head>
            <Container>
                <Row className="py-5">
                    <Col xs={12} lg={6} className="py-2">
                    <h1>Réserver</h1>
                    <p>Pour être effective, vous devrez recevoir une confirmation de votre réservation par mail ou sms de la part du Cellier Saint Vincent.</p>
                    <p>Les réservations pour le soir même doivent nous parvenir avant 19h afin d’être prise en compte.</p>
                    <p>Les réservations de tables sont valables jusqu'à minuit et demi.</p>
                    </Col>
                    <Col xs={12} lg={6} className="py-2">
                        <Form autoComplete="none">
                            <Form.Group className="py-2">
                                <Form.Label>Nom / Prénom</Form.Label>
                                <motion.div whileTap={{scale:1.02}} whileHover={{scale:0.98}}>
                                    <Form.Control placeholder="Nom et Prénom" autoComplete="no"></Form.Control>
                                </motion.div>
                            </Form.Group>
                            <Form.Group className="py-2">
                                <Form.Label>Téléphone</Form.Label>
                                <motion.div whileTap={{scale:1.02}} whileHover={{scale:0.98}}>
                                    <Form.Control placeholder="Téléphone" autoComplete="no"></Form.Control>
                                </motion.div>
                            </Form.Group>
                            <Form.Group className="py-2">
                                <Form.Label>Adresse e-mail</Form.Label>
                                <motion.div whileTap={{scale:1.02}} whileHover={{scale:0.98}}>
                                    <Form.Control placeholder="Adresse e-mail" autoComplete="no"></Form.Control>
                                </motion.div>
                            </Form.Group>
                            <Form.Group className="py-2">
                                <Form.Label>Nombre de personnes</Form.Label>
                                <motion.div whileTap={{scale:1.02}} whileHover={{scale:0.98}}>
                                    <Form.Control type="text" placeholder="Nombre de personnes" autoComplete="no"></Form.Control>
                                </motion.div>
                            </Form.Group>
                            <Form.Group className="py-2">
                                <Form.Label>Date</Form.Label>
                                <motion.div whileTap={{scale:1.02}} whileHover={{scale:0.98}}>
                                    <Form.Control type="date" placeholder="Adresse e-mail" autoComplete="no"></Form.Control>
                                </motion.div>
                            </Form.Group>
                            
                            <motion.div whileTap={{ scale:1.02}} whileHover={{scale:0.98}}>
                                <Button whileTap={{scale:1.03}} variant="success" type="submit" className="btn-block btn-booking">
                                    Valider
                                </Button>
                            </motion.div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default BookingPage