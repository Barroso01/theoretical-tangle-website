
import React from 'react';
import { withAuthenticator, Flex, View } from '@aws-amplify/ui-react';
import {
    NavBarHeader,
    CommentCardCollection,
    Features2x2,
    MarketingFooter
} from '../ui-components';
import './HomePage.css'; // Assuming you create a CSS file for custom styles


const HomePage = () => {
    return (
        <div>
            <NavBarHeader className="navbar-header" width={'100vw'} />


            {/* General Idea Section */}
            <section className="section">
                <h1 className="section-header">Who are we</h1>
                <p>Theoretical Tangled Labs is a digital environment developed by engeneers focused on the aplication of emerging technologies on real life problems. Projects developed in the lab are deployed via entrepreneurs worldwide with the focus of brinding founding to the lab.</p>
            </section>

            {/* Goals Section */}
            <section className="section goals-section">
                <div className="two-sided-section">
                    <div className="section-content">
                        <h1>GOALS</h1>
                        <p>Our current goals are based on UN objectives but also focused to the use of new technologies.</p>
                        {/* Content for goals */}
                    </div>
                    <div className="section-image">
                        {/* Image or Image Component */}
                        <CommentCardCollection width={'50vw'} />
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="section technology-section">
                <h1 className="section-header">Technologies</h1>
                <Flex align="center" justify="center">
                    <View width={'100vw'} height={'100vh'}>
                        <Features2x2 width={'100vw'} />
                    </View>
                </Flex>
            </section>

            <MarketingFooter width={'100vw'} />
        </div>
    );
};

export default withAuthenticator(HomePage);