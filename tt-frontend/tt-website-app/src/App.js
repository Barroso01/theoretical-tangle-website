import React from 'react';
import './App.css';
import { Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import ProjectCard from './ProjectCard';
import Header from './Header';
import Footer from './Footer';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(awsExports);
Amplify.configure(config);

const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', link: '/project1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', link: '/project2' },
    // ... add more projects
];

function App({ signOut, user }) {
    return (
        <div className="App">
            <Header  signOut={signOut} user={user} />
            <h1>Projects</h1>
            <main>
                <div className="project-container">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
            
            <Footer />
        </div>
    );
}

export default withAuthenticator(App);
