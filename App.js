import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo/';

import {get} from './src/services/request';
import {Loading} from './src/screens/loading/Loading';
import {Site} from './src/screens/site/Site';
import {Game} from './src/screens/game/Game';

import {endpoint} from './src/constants';

const App = () => {
  const [state, setState] = useState(<Loading />);

  useEffect(() => {
    NetInfo.fetch().then(data => {
      if (data.isConnected) {
        get(endpoint)
          .then(response => {
            if (response.status === 200) {
              setState(<Site />);
            } else {
              setState(<Game />);
            }
        });
      } else {
        setState(<Game />);
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
