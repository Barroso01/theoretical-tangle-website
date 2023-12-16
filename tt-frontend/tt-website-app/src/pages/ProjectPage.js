import React, { useEffect, useState } from 'react';
// Import Amplify libraries for data fetching
import { API, graphqlOperation } from 'aws-amplify';
import { listProjects } from '../graphql/queries'; // Adjust based on your GraphQL setup
import ProjectCollection from '../ui-components/ProjectCollection';
import NavBarHeader2 from '../ui-components/NavBarHeader2';
import MarketingFooter from '../ui-components/MarketingFooter';
import './ProjectsPage.css';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectData = await API.graphql(graphqlOperation(listProjects));
                setProjects(projectData.data.listProjects.items);
            } catch (err) {
                console.error('Error fetching projects', err);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <NavBarHeader2 />
            {/* Display your projects using ProjectCollection */}
            <MarketingFooter />
        </div>
    );
};

export default ProjectsPage;
