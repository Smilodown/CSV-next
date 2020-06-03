import Link from 'next/link'

const ComingEvents = () => {
    const slug = 'example-event'
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col py-5">
                        <h2 className="text-center">Prochaines Soirées</h2>
                    </div>
                </div>
                <div className="row">
                    <Link href="/agenda/[slug]" as={`/agenda/back-to-the-club`} scroll={false}><div className="col-lg-4 px-5 mb-5">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <img src="/disc-default-600.png" alt="" />
                            </div>
                            <div className="col-12 text-center">
                                <h3>The American Party</h3>
                                <h4>Samedi 22 Juillet</h4>
                            </div>
                        </div>
                    </div></Link>
                    <Link href="/agenda/[slug]" as={`/agenda/summer-clubbing`} scroll={false} ><div className="col-lg-4 px-5 mb-5">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <img src="/disc-default-600.png" alt="" />
                            </div>
                            <div className="col-12 text-center">
                                <h3>Hello Friday !</h3>
                                <h4>Samedi 22 Juillet</h4>
                            </div>
                        </div>
                    </div></Link>
                    <div href="/agenda/[slug]" as={`/agenda/${slug}`} className="col-lg-4 px-5 mb-5">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <img src="/disc-default-600.png" alt="" />
                            </div>
                            <div className="col-12 text-center">
                                <h3>Summer Clubbing</h3>
                                <h4>Samedi 22 Juillet</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingEvents