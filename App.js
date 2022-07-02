import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import {
  Alert,
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo/';

import axios from 'axios';

import {LoadingScreen} from './src/screens/loading/LoadingScreen';
import {SiteScreen} from './src/screens/site/SiteScreen';
import {GameScreen} from './src/screens/game/GameScreen';

import {endpoint} from './src/constants';

const App = () => {
  const [state, setState] = useState(<LoadingScreen />);

  // const getRequest = async (url) => {
  //   try {
  //     const response = await axios.get(url);
  //     setState(<SiteScreen />);
  //   } catch (error) {
  //     setState(<GameScreen />);
  //   }
  // }

  // const getRequest = async (url) => {
  //   const result = await axios.get(url);
  //   return await result;
  // }

  const getFoo = async (url) => {
    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', url, true);
    // xhr.send();

    // xhr.addEventListener('readystatechange', () => {
    //   if (xhr.status === 200) {
    //     setState(<SiteScreen />);
    //   } else {
    //     setState(<GameScreen />);
    //   }
    // })

    const result = await fetch(url);

    return await result;
  }

  useEffect(() => {
    NetInfo.fetch().then(data => {
      // if (data.isConnected) {
      //   getRequest(endpoint)
      //     .then(function(response) {
      //       console.log(response.status)
      //       if (response.status === 200) {
      //         setState(<SiteScreen />);
      //       } else if (response.status === 500) {
      //         setState(<GameScreen />);
      //       }
      //     })
      //     .catch(function(error) {
      //       setState(<GameScreen />);
      //     })
      // } else {
      //   setState(<GameScreen />);
      // }
      // if (data.isConnected) {
      //   get(endpoint);
      // } else {
      //   setState(<GameScreen />);
      // }

      if (data.isConnected) {
        getFoo(endpoint)
        .then(function(response) {
          if (response.status === 200) {
            // console.log(response.status)
            setState(<SiteScreen />);
          } else if (response.status === 500) {
            setState(<GameScreen />);
          }
        })
        .catch(function(error) {
          setState(<GameScreen />)
        })
      } else {
        setState(<GameScreen />)
      }
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      {state}
    </View>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       screen: <LoadingScreen />,
//     }
//   }

//   async getRequest (url) {
//     await axios.get(url)
//       .then(function (response) {
//         if (response.status === 200) {
//           this.setState({screen: <SiteScreen />});
//         } else if (response.status === 500) {
//           this.setState({screen: <GameScreen />});
//         }
//       })
//       .then(function (error) {
//         this.setState({screen: <GameScreen />});
//       })
//   }

//   componentDidMount() {
//     NetInfo.fetch().then(data => {
//       if (data.isConnected) {
//         this.getRequest(endpoint);
//       } else {
//         this.setState({screen: <GameScreen />});
//       }
//     });
//   }

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         {this.state.screen}
//       </View>
//     );
//   }
// }

export default App;
