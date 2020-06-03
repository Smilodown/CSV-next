import Link from 'next/link'
import { useState} from 'react'

const Navigation = () => {

    return (
        <header id="header">
        <nav className="navbar navbar-expand-lg light-menu fixed-top">
            <a href="#" className="navbar-brand">Cellier Saint Vincent</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    FERMER
                    <span className="bun"></span>
                    <span className="bun"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                <ul className="navbar-nav">
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
            </div>
            <div className="d-none d-lg-block pr-4">
                <Link href="/booking" scroll={false}><a className="btn btn-dark btn-rounded btn-text-small-upper">Réserver</a></Link>
            </div>
        </nav>
    </header>
    )
}
export default Navigation;