import React from "react";
import {
    NavBarHeader,
    Logotl,
    PlaceOverviewCollection,
    ProductDetail,
} from '../ui-components';
import './HomePage.css'; // Assuming you create a CSS file for custom styles
import { Flex } from '@aws-amplify/ui-react';
import { useState } from "react";


function MapsPage() {

    const [selected, setSelected] = useState();

    console.log(selected)

    return (
        <div>
            <NavBarHeader className="navbar-header" width={'100vw'} />
            <Flex overflow="auto" >

            <PlaceOverviewCollection width={'20vw'} overideItems={[({item})=>({onClick:()=>setSelected(item)})]} />

            <Flex position="relative" overflow="hidden" grow={1} >
                {selected ? <ProductDetail item={selected} /> : <Logotl />}
            </Flex>

         </Flex>
        </div>
    );
}

export default MapsPage;
