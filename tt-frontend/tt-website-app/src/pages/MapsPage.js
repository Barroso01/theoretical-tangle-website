import React from 'react';
import {
    NavBarHeader,
} from '../ui-components';
import MapComponent from '../mapbox-components/MapComponent';

import './HomePage.css'; // Assuming you create a CSS file for custom styles
import 'mapbox-gl/dist/mapbox-gl.css'; // Ensure proper rendering of the map

function MapsPage() {

    return (
        <div >
            <NavBarHeader className="navbar-header" width={'100vw'} />
            <MapComponent height={'200px'} />
        </div>
    );
}

export default MapsPage;


