// src/pages/HomePage.js
import React from 'react';
import { Flex } from '@aws-amplify/ui-react';
import {
    CommentCardCollection,
    FeatureTechnologyCollection,
    Logotl,
    MarketingFooter
} from '../ui-components';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            {/* General Idea Section */}
            <section className="section">
                <h1 className="section-header">Who are we</h1>
                <p className="section-text">Theoretical Tangled Labs is a digital environment developed by engineers focused on the application of emerging technologies on real-life problems. Projects developed in the lab are deployed via entrepreneurs worldwide with the focus of bringing funding to the lab.</p>
                <p></p>
            </section>

            {/* Goals Section */}
            <section className="section">
                <div className="two-sided-section">
                    <div className="moving-background">
                        <div className="text-bubble">
                            <Logotl />
                            <h1>Research Agenda </h1>
                            <p>Our current agenda is based on UN objectives and focused on the implementation of new technologies.</p>
                        </div>
                    </div>
                    <div className="section-image">
                        <CommentCardCollection className="comment-collection" width={'60vw'} />
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="technology-section">
                <h1 className="section-header">Technologies</h1>
                <Flex align="center" justify="center" className="feature-technology-container">
                    <FeatureTechnologyCollection />
                </Flex>
            </section>

            <MarketingFooter width={'100vw'} />
        </div>
    );
};

export default HomePage;