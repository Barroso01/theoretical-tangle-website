import React, { useEffect, useState } from 'react';
// Import Amplify libraries for data fetching
// Import Amplify libraries if needed for data fetching
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { withAuthenticator, View, Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
import {
    NavBarHeader2,
    ProjectCollection,
    MarketingFooter
   } from '../ui-components';

const ProjectsPage = () => {
    return (
        <div>
            <Flex direction="column" align="center" justify="center">
                <View width={'100vw'} height={'100vh'}>
                    <NavBarHeader2 width={'100vw'}/>
                    <ProjectCollection />
                    <MarketingFooter width={'100vw'} /> 
                </View>

            </Flex>

            </div>
    );
};

export default ProjectsPage;