import React,{useRef, useEffect} from 'react';

import './Map.css';

const Map = props => {
    const mapRef = useRef()

    const {center, zoom} = props;

    useEffect(() => {
        window.mapboxgl.accessToken = "pk.eyJ1IjoibmF0aWdhc2h1IiwiYSI6ImNrbXlqd2Z0eTA0cHUybm80ZTBmaGFtNTIifQ.Vsi1rLZ5NrDfFkz-2Q__3g";
        const map = new window.mapboxgl.Map({
            container: mapRef.current, // container ID
            style: 'mapbox://styles/mapbox/satellite-v9', // style URL
            center: [center.lng, center.lat], // starting position [lng, lat]
            zoom: zoom // starting zoom
        });
        map.addControl(new window.mapboxgl.NavigationControl());
    }, [center,zoom]);

    return <div ref = {mapRef}className={`map ${props.className}`} style={props.style}>
        
    </div>
};
export default Map;