import React from "react";
import {View, Text} from "react-native";
import {WebView} from 'react-native-webview';

import {urlSite} from "../../constants";

export const SiteScreen = () => {
  return (
    <WebView
      style={{flex: 1}}
      originWhitelist={['*']}
      source={{uri: urlSite}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowFileAccess={true}
      allowUniversalAccessFromFileURLs={true}
      allowingReadAccessToURL={true}
      mixedContentMode={'always'}
    />
  );
}