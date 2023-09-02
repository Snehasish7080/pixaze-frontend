/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Linking, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/feature/store';
import ParentNavigation from './src/navigations/ParentNavigation/ParentNavigation';
import {Camera} from 'react-native-vision-camera';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      const audioPermission = await Camera.requestMicrophonePermission();
      if (permission === 'denied') await Linking.openSettings();
      if (audioPermission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <>
            <ParentNavigation />
          </>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
