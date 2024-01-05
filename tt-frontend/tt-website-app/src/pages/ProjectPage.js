import React, { useEffect, useState } from 'react';
// Import Amplify libraries for data fetching
// Import Amplify libraries if needed for data fetching
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { withAuthenticator, View, Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
import {
    NavBarHeader,
    ProjectCollection,
    MarketingFooter
   } from '../ui-components';
import './ProjectPage.css'; // Assuming you create a CSS file for custom styles

const ProjectsPage = () => {
    return (
        
        <div>

            <NavBarHeader className="navbar-header" width={'100vw'} />

            {/* Projects Section */}
            <div className="project-collection-container">
            <ProjectCollection width={'100vw'}/>
            </div>

            {/* Footer */}
            <MarketingFooter width={'100vw'} />

        </div>
    );
};

export default ProjectsPage;