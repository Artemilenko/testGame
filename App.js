import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo/';

import axios from 'axios';

import {LoadingScreen} from './src/screens/loading/LoadingScreen';
import {SiteScreen} from './src/screens/site/SiteScreen';
import {GameScreen} from './src/screens/game/GameScreen';

import {endpoint, urlSite} from './src/constants';

const App = () => {
  const [state, setState] = useState(<LoadingScreen />);

  const getRequest = async (url) => {
    try {
      const response = await axios.get(url);
      setState(<SiteScreen />);
    } catch (error) {
      setState(<GameScreen />);
    }
  }

  useEffect(() => {
    NetInfo.fetch().then(data => {
      if (data.isConnected) {
        getRequest(urlSite);
      } else {
        setState(<GameScreen />);
      }
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      {state}
    </View>
  );
};

export default App;
