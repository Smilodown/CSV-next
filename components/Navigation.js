import Link from 'next/link'
import { useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {

    return (
        <header id="header">
        <Navbar expand="lg" className="fixed-top">
         <Navbar.Brand className="navbar-brand">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                FERMER
                <span className="bun"></span>
                <span className="bun"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item"><Link href="/" scroll={false}><a className="nav-link">Accueil</a></Link></li>
                <li className="nav-item"><Link href='/club' scroll={false}><a className="nav-link">Le Club</a></Link></li>
                <li className="nav-item"><Link href="/agenda" scroll={false}><a className="nav-link">Agenda</a></Link></li>
                <li className="nav-item"><Link href="/offers" scroll={false}><a className="nav-link">Offres</a></Link></li>
                <li className="nav-item"><Link href="/galleries" scroll={false}><a className="nav-link">Photos</a></Link></li>
                <li className="nav-item"><Link href="/info" scroll={false}><a className="nav-link">Infos</a></Link></li>
            </ul>
            <div className="text-center pb-5 d-block d-lg-none">
                <a href="" className="btn btn-dark btn-rounded btn-text-small-upper">Réserver</a>
            </div>
            </Navbar.Collapse>
            <div className="d-none d-lg-block pr-4">
                <Link href="/booking" scroll={false}><a className="btn btn-dark btn-rounded btn-text-small-upper">Réserver</a></Link>
            </div>
        </Navbar>
    </header>
    )
}
export default Navigation;