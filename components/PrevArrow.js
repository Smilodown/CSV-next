const PrevArrow = props => {

    const { className, style, onClick } = props
    return (
        <div className="prev-gallery" onClick={onClick}></div>
    )
}

export default PrevArrow