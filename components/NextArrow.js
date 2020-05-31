const NextArrow = props => {

    const { className, style, onClick } = props
    return (
        <div className="next-gallery" onClick={onClick}></div>
    )
}

export default NextArrow