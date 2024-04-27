import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYnNtYXBzMDEiLCJhIjoiY2x2ZWxoM2NyMDQ1ajJqcGhoa2Q5OWFiOCJ9.J1SGwj6YjD9M7q5vR6UMcw"; // Set your Mapbox access token here

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/bsmaps01/clvg0amgs05g301pkboad5onc', // Set the map style here
            center: [-109.7097303553673, 23.159350793984153], // [lng, lat]
            zoom: 15
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right'); // Add navigation controls to the top right
        map.addControl(new mapboxgl.FullscreenControl(), 'top-right'); // Add fullscreen control to the top right

        map.on('load', () => {
          map.addLayer({
            id: 'traficv1-data',
            type: 'line',
            source: {
              type: 'vector',
              url: 'mapbox://mapbox.mapbox-trafic-v1'
            },
            'source-layer': 'contour'
          });
        });

        

        map.on('click', (e) => {
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML('You clicked the map at ' + e.lngLat.toString())
                .setHTML('The height of the building is 100 meters')
                .addTo(map);
        });

        return () => map.remove();
    }, []);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
