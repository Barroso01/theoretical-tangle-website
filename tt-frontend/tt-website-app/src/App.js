import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator, View, Flex } from '@aws-amplify/ui-react';
//import ProjectCard from './components/ProjectCard';
//import Header from './layouts/Header';
//import Footer from './layouts/Footer';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import {
    NavigationBar,
    ProjectPost,
    ProjectPostCollection
   } from './ui-components';

   //import { uploadData } from 'aws-amplify/storage';

   //try {
     //const result = await uploadData({
       //key: filename,
       //data: file
     //}).result;
     //console.log('Succeeded: ', result);
   //} catch (error) {
     //console.log('Error : ', error);
   //}
//<ProjectPostCollection  width={'100vw'} />


   
Amplify.configure(awsExports);
Amplify.configure(config);

function App() {
    return (
        <div className='App'>
            <NavigationBar width={'100vw'} />
            <Flex overflow = 'auto'>
                <View className = 'project-posts'>
                    <ProjectPost width={'100vw'} />
                    <ProjectPost width={'100vw'} />

                </View>
            </Flex>

        </div>
    );
}

export default withAuthenticator(App);


// Authentication
// function App({ signOut, user }) {
// <Header  signOut={signOut} user={user} />
//export default withAuthenticator(App);
