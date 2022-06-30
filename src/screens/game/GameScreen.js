import React from "react";
import {WebView} from 'react-native-webview';

import {pathGame} from "../../constants";

export const GameScreen = () => {
  return (
    <WebView
      style={{flex: 1}}
      originWhitelist={['*']}
      source={{uri: `file:///android_asset/${pathGame}`, baseUrl:"file:///android_asset/"}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowFileAccess={true}
      allowUniversalAccessFromFileURLs={true}
      allowingReadAccessToURL={true}
      mixedContentMode={'always'}
    />
  );
}