import React from "react";
import {WebView} from 'react-native-webview';

import {endpoint} from "../../constants";

export const SiteScreen = () => {
  return (
    <WebView
      style={{flex: 1}}
      originWhitelist={['*']}
      source={{uri: endpoint}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowFileAccess={true}
      allowUniversalAccessFromFileURLs={true}
      allowingReadAccessToURL={true}
      mixedContentMode={'always'}
    />
  );
}