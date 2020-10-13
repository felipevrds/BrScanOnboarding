import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import StyleHome from '../styles/StyleHome'


const Home = ({ navigation }) => {

  return (
    <>
      <View style={StyleHome.containerTela}>
        <View style={StyleHome.homeImageArea}>
          <Image source={require('../assets/images/IconHome.png')} />
        </View>
        <View style={StyleHome.homeTextArea}>
          <Text style={StyleHome.TextArea1}>
            BrSafe
        </Text>
          <Text style={StyleHome.TextArea2}>
            Bioface
        </Text>
        </View>
        <View style={StyleHome.homeButtonArea}>
          <TouchableOpacity style={StyleHome.button} onPress={() => navigation.navigate("Indexacao")} >
            <Text style={StyleHome.buttonTitle}>INICIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )

};

export default Home;