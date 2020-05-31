import Link from 'next/link'

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 px-5 py-3">
                    <h5>Cellier Saint Vincent</h5>
                    <span>10, route de Montgenost • 51260 Bethon - +33(0)3.26.80.43.51</span>
                </div>
                <div className="col-12 col-md-6 px-5 py-3">
                    <h5>Menu</h5>
                    <ul>
                        <li><Link href="/" scroll={false}><a>Accueil</a></Link></li>
                        <li><Link href="/agenda" scroll={false}><a href="">Agenda</a></Link></li>
                        <li><a href="">Le Club</a></li>
                        <li><a href="">Photos</a></li>
                        <li><a href="">Info & Accès</a></li>
                        <li><a href="">Recrutement</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 px-5 py-3">
                    <h5>Réseaux Sociaux</h5>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Snapchat</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 px-5 py-3">
                    <ul>
                        <li><Link href="legals"><a>Mention Légales</a></Link></li>
                        <li><Link href="policy"><a>Politique de confidentialité</a></Link></li>
                        <li><Link href="terms-of-use"><a>Conditions d'utilisation</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer