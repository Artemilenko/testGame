import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Alert
} from 'react-native';
import NetInfo from '@react-native-community/netinfo/';

import axios from 'axios';

import {get} from './src/services/request';
import {Loading} from './src/screens/loading/Loading';
import {Site} from './src/screens/site/Site';
import {Game} from './src/screens/game/Game';

import {endpoint} from './src/constants';

const App = () => {
  const [state, setState] = useState(<Loading />);
  // const [request, setRequest] = useState(false);

  const getRequest = async (url) => {
    try {
      const response = await axios.get(url);
      // console.log(response)
      setState(<Site />);
    } catch (error) {
      // console.log(error)
      setState(<Game />)
    }
  }

  useEffect(() => {
    // NetInfo.fetch().then(data => {
    //   if (data.isConnected) {
    //     axios.get(endpoint)
    //     .then(function(response) {
    //       // console.log(response.status);
    //       setState(<Site />);
    //     })
    //     .catch(function(error) {
    //       // console.log(error)
    //       setState(<Game />)
    //     })
    //   } else {
    //     setState(<Game />);
    //   }
    // })
    NetInfo.fetch().then(data => {
      if (data.isConnected) {
        getRequest(endpoint);
      } else {
        setState(<Game />);
      }
    })
    // if (request) {
    //   axios.get(endpoint)
    //     .then(function(response) {
    //       console.log(response.status);
    //       setState(<Site />);
    //     })
    //     .catch(function(error) {
    //       console.log(error)
    //       setState(<Game />)
    //     })
    // }
    // getRequest(endpoint)
  }, []);

  // NetInfo.fetch().then(data => {
  //   // Alert.alert('Connecting is: ' + data.isConnected);
  //   if (data.isConnected) {
  //     get(endpoint)
  //       .then(response => {
  //         // Alert.alert('Request status: ' + response.status);
  //         if (response.status === 200) {
  //           setState(<Site />);
  //         } else {
  //           setState(<Game />);
  //         }
  //     });
  //   } else {
  //     setState(<Game />);
  //   }
  // });

  return (
    <View style={{flex: 1}}>
      {state}
    </View>
  );
};

export default App;
