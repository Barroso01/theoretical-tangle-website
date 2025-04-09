import React from 'react';

import {
    ProjectCollection,
    MarketingFooter
   } from '../ui-components';
import './ProjectPage.css'; 

const ProjectsPage = () => {
    return (
        
        <div>

            {/* Projects Section */}
            <div className="project-collection-container">
            <ProjectCollection width={'90vw'}/>
            </div>

            {/* Footer */}
            <MarketingFooter width={'100vw'} />

        </div>
    );
};

export default ProjectsPage;