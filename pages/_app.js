import React from 'react'
import App from 'next/app';
import Layout from '../components/layout'
import { AnimatePresence } from 'framer-motion'
import  '../style.css'


class MyApp extends App {
    render() {
        const { Component, pageProps, router} = this.props
        return (
            <Layout>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        )
    }
}

export default MyApp;