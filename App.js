import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo/';

import {get} from './src/services/services';
import {endpoint} from './src/constants';

import {LoadingScreen} from './src/screens/loading/LoadingScreen';
import {SiteScreen} from './src/screens/site/SiteScreen';
import {GameScreen} from './src/screens/game/GameScreen';

const App = () => {
  const [state, setState] = useState(<LoadingScreen />);

  useEffect(() => {
    NetInfo.fetch().then(data => {
      if(data.isConnected) {
        get(endpoint)
          .then(function(response) {
            if (response.status === 200) {
              setState(<SiteScreen />);
            }
          })
          .catch(function(error) {
            setState(<GameScreen />);

          })
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
}

export default App;