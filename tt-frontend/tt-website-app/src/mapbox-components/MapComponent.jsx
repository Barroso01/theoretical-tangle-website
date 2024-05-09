import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
    const mapContainer = useRef(null);
    const popup = useRef(new mapboxgl.Popup({ closeOnClick: true }));

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYnNtYXBzMDEiLCJhIjoiY2x2ZWxoM2NyMDQ1ajJqcGhoa2Q5OWFiOCJ9.J1SGwj6YjD9M7q5vR6UMcw"; // Set your Mapbox access token here

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/bsmaps01/clvg0amgs05g301pkboad5onc', // Set the map style here
            center: [-109.7097303553673, 23.159350793984153], // [lng, lat]
            zoom: 14,
            projection: 'globe'
        });

        map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
        map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

        map.on('load', () => {
            // Add 3D buildings layer with customizations
            map.addLayer({
                id: '3d-buildings',
                type: 'fill-extrusion',
                source: 'composite',
                'source-layer': 'building',
                filter: ['==', 'extrude', 'true'],
                paint: {
                    'fill-extrusion-color': 'hsl(190, 50%, 50%)', // color of buildings (tangled labs blue)
                    'fill-extrusion-height': [
                        'interpolate', ['linear'], ['zoom'],  // interpolation with linear transition based on zoom level
                        15, 0, 
                        15.05, ['get', 'height'] // for zoom level > 15.05, extrude height of the building.
                    ],
                    'fill-extrusion-base': [
                        'interpolate', ['linear'], ['zoom'],
                        15, 0,
                        15.05, ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            });
            // Add landuse overlay layer
            map.addLayer({
                id: 'landuse-overlay',
                type: 'fill',
                source: 'composite',
                'source-layer': 'landuse_overlay',
                paint: {
                    'fill-color': '#3887be',
                    'fill-opacity': 0.5
                }
            });
            // Add landuse layer
            map.addLayer({
                id: 'landuse',
                type: 'fill',
                source: 'composite',
                'source-layer': 'landuse',
                paint: {
                    'fill-color': '#a0a0a0',
                    'fill-opacity': 0.5
                }
            });
            // Add water layer
            map.addLayer({
                id: 'water',
                type: 'fill',
                source: 'composite',
                'source-layer': 'water',
                paint: {
                    'fill-color': '#74c8ed',
                    'fill-opacity': 0.5
                }
            });
            // Add on click display action
            map.on('click', (e) => {
                const features = map.queryRenderedFeatures(e.point, { layers: ['3d-buildings', 'landuse-overlay', 'landuse', 'water'] }); // Obtain the features of clicked point
                if (features.length > 0) { 
                    const feature = features[0];
                    const coordinates = e.lngLat;
                    let description = '';

                    if (feature.layer.id === '3d-buildings') {
                        description = `
                            <strong>Building ID:</strong> ${feature.properties.id}<br/>
                            <strong>Height:</strong> ${feature.properties.height}<br/>
                            <strong>Min Height:</strong> ${feature.properties.min_height}<br/>
                            <strong>ISO 3166-1:</strong> ${feature.properties.iso_3166_1}<br/>
                            <strong>ISO 3166-2:</strong> ${feature.properties.iso_3166_2}
                        `;
                    } else if (feature.layer.id === 'landuse') {
                        description = `
                            <strong>Landuse:</strong><br/>
                            <strong>Type:</strong> ${feature.properties.class}
                        `;
                    } else if (feature.layer.id === 'landuse-overlay') {
                        description = `
                            <strong>Landuse Overlay:</strong><br/>
                            <strong>Type:</strong> ${feature.properties.class}
                        `;
                    } else if (feature.layer.id === 'water') {
                        description = `
                            <strong>Water:</strong><br/>
                            <strong>Type:</strong> ${feature.properties.type}
                        `;
                    }

                    popup.current // Display the feature descriptions in a popup at clicked point. 
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(map);
                }
            });

            // Change the cursor to a pointer when the mouse is over the 3D buildings layer.
            map.on('mouseenter', '3d-buildings', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', '3d-buildings', () => {
                map.getCanvas().style.cursor = '';
            });

            map.on('mouseenter', 'landuse-overlay', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'landuse-overlay', () => {
                map.getCanvas().style.cursor = '';
            });

            map.on('mouseenter', 'landuse', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'landuse', () => {
                map.getCanvas().style.cursor = '';
            });

            map.on('mouseenter', 'water', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'water', () => {
                map.getCanvas().style.cursor = '';
            });
        });

        return () => {
            map.remove(); // Cleanup on unmount
        };
    }, []);

    return <div ref={mapContainer} style={{ width: '100%', height: '600px' }} />; // Set the map container style
};

export default MapComponent;


