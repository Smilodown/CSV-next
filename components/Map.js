import ReactMapGL from 'react-map-gl'

const Map = () => {

    const viewport = {
        latitude: 48.6,
        longitude: 3.8,
        zoom: 9,
        height: '400px',
        width: '100vw',
    }
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/celliersaintvincent/cjjswiz9z2tie2spjqetepssp"
            mapboxApiAccessToken="pk.eyJ1IjoiY2VsbGllcnNhaW50dmluY2VudCIsImEiOiJjampzb3dsbWMwMWJlM3ZwMzZvN2U2bTZtIn0.AJ-N7pj5KMA2xxN8cElFhw"
            {...viewport}
        />
    )
}

export default Map