import React, { useEffect, useState } from 'react';
// Import Amplify libraries if needed for data fetching
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { withAuthenticator, View, Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
// Import your UI components
import {
    NavBarHeader2,
    CommentCard,
    Features2x2,
    MarketingFooter
   } from '../ui-components';


const HomePage = () => {

    return (
        <div>
            <NavBarHeader2 width={'100vw'}/>

            <h1> Projects </h1>

            <Flex direction="column" align="center" justify="center">
                <View width={'100vw'} height={'100vh'}>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    
                </View>
            </Flex>

            <h1> Technologies </h1>

            <Flex align="center" justify="center">
                <View width={'100vw'} height={'100vh'}>
                    <Features2x2 width={'100vw'} />
                </View>
            </Flex>

            <MarketingFooter width={'100vw'} />

        </div>
    );
};

export default HomePage;