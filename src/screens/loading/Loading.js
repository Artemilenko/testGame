import React from "react";
import {View, Text} from "react-native";

export const Loading = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', marginTop: '50%'}}>Loading...</Text>
    </View>
  );
}