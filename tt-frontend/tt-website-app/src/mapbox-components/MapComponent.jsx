// mapboxgl.accessToken = "pk.eyJ1IjoiYnNtYXBzMDEiLCJhIjoiY2x2ZWxoM2NyMDQ1ajJqcGhoa2Q5OWFiOCJ9.J1SGwj6YjD9M7q5vR6UMcw"; // Set your Mapbox access token here
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
    const mapContainer = useRef(null);
    const popup = useRef(new mapboxgl.Popup({ closeOnClick: true }));

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnNtYXBzMDEiLCJhIjoiY2x2ZWxoM2NyMDQ1ajJqcGhoa2Q5OWFiOCJ9.J1SGwj6YjD9M7q5vR6UMcw';

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/bsmaps01/clvg0amgs05g301pkboad5onc', // Set the map style here
            center: [-99.1899, 19.347855], // [lng, lat]
            zoom: 20,
            projection: 'globe'
        });

        map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
        map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

        map.on('load', () => {
            map.addLayer({
                id: '3d-buildings',
                type: 'fill-extrusion',
                source: 'composite',
                'source-layer': 'building',
                filter: ['==', 'extrude', 'true'],
                paint: {
                    'fill-extrusion-color': '#055af7', //bluish colored buildings
                    'fill-extrusion-height': [
                        'interpolate', ['linear'], ['zoom'],
                        15, 0,
                        15.05, ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate', ['linear'], ['zoom'],
                        15, 0,
                        15.05, ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            });

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

            map.addLayer({
                id: 'alvaro-obregon-01000',
                type : 'point',
                source: 'composite',
                'source-layer': 'alvaro-obregon-01000',
                paint: {
                    // for zoom closeup, big radius, for zoom out, very small radius
                    'circle-radius': 9,
                    'circle-opacity': 0.8,
                }
            })

            map.on('click', (e) => {
                const features = map.queryRenderedFeatures(e.point, { layers: ['3d-buildings', 'landuse-overlay', 'landuse', 'water', 'alvaro-obregon-01000'] });
                if (!features.length) {
                    return;
                }

                let description = '';
                features.forEach(feature => {
                    switch (feature.layer.id) {

                    case 'alvaro-obregon-01000':
                        description += ` <div>
                            <strong>alcaldia:</strong> ${feature.properties.alcaldia}$<br/>
                            <strong>anio_construccion:</strong> ${feature.properties.anio_construccion}$<br/>
                            <strong>clave_rango_nivel:</strong> ${feature.properties.clave_rango_nivel}$<br/>
                            <strong>clave_valor_unitario_suelo:</strong> ${feature.properties.clave_valor_unitario_suelo}$<br/>
                            <strong>superficie_construccion:</strong> ${feature.properties.superficie_construccion}$<br/>
                            <strong>superficie_terreno:</strong> ${feature.properties.superficie_terreno}$<br/>
                            <strong>uso_construccion:</strong> ${feature.properties.uso_construccion}$<br/>
                            <strong>valor_suelo:</strong> ${feature.properties.valor_suelo}$<br/>
                            <strong>valor_unitario_suelo:</strong> ${feature.properties.valor_unitario_suelo} </div><br/>
                            `;
                        break;
                        case '3d-buildings':
                            description += ` <div>
                            <strong>Building ID:</strong> ${feature.properties.id}<br/>
                            <strong>Height:</strong> ${feature.properties.height}<br/>
                            <strong>Min Height:</strong> ${feature.properties.min_height}<br/>
                            <strong>ISO 3166-1:</strong> ${feature.properties.iso_3166_1}<br/>
                            <strong>ISO 3166-2:</strong> ${feature.properties.iso_3166_2}</div><br/>
                            `;
                        break;
                        case 'landuse-overlay':
                            description += ` <div>
                            <strong>Landuse Overlay:</strong><br/>
                            <strong>Type:</strong> ${feature.properties.class}</div><br/>
                            `;
                        break;
                        case 'landuse':
                            description += ` <div>
                                <strong>Landuse:</strong><br/>
                                <strong>Type:</strong> ${feature.properties.class}</div><br/>
                            `;
                            break;
                        case 'water':
                            description += ` <div>
                                <strong>Water:</strong><br/>
                                <strong>Type:</strong> ${feature.properties.class}</div><br/>
                            `;
                            break;
                        default:
                            description += ` <div>
                                <strong>Data on this place:</strong><br/>
                    `;
                        break;

                            
                    }
                });

                if (description.length > 0){
                    popup.current
                        .setLngLat(e.lngLat)
                        .setHTML(description)
                        .addTo(map);
                }
               
            });


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


            // Add WMS source for INEGI's 'AGEB urbana'
            map.addSource('ageb-urbana', {
                type: 'raster',
                tiles: [
                    'http://gaia.inegi.org.mx/NLB/tunnel/wms/wms61?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=AGEB_urbana'
                ],
                tileSize: 256
            });

            // Add the layer using the source paint it with a bright color
            map.addLayer({
                id: 'ageb-urbana-layer',
                type: 'raster',
                source: 'ageb-urbana',
                paint: {
                    'raster-opacity': 1
                }

            });

        });

        return () => {
            map.remove();
        };
    }, []);

    return <div ref={mapContainer} style={{ width: '100%', height: '600px' }} />;
};

export default MapComponent;

