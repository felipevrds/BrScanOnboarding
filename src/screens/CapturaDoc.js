import React, { Component, useState } from 'react'
import {
    Text, StyleSheet, View, Image, TouchableOpacity,
    Alert,
    Modal,
    ImageBackground,
} from 'react-native'

import StyleCapturaDoc from '../styles/StyleCapturaDoc'


import { RNCamera } from "react-native-camera";


const Camera = ({ isVisible, onChangePhoto, onCloseCamera, navigation }) => {
    const [camera, setCamera] = useState();

    const onTakePicture = async () => {
        try {
            const { uri } = await camera.takePictureAsync({
                quality: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true
            });
            onChangePhoto(uri);
        } catch (error) {
            Alert.alert("Erro", "Houve um erro ao tirar a foto.");
        }
    };

    return (
        <Modal animationType="slide" transparent={false} visible={isVisible}>

            {/* <View style={{ backgroundColor: 'red', flexDirection: 'row', flex: 0.3 }}></View> */}

            <RNCamera
                ref={ref => setCamera(ref)}
                style={{
                    backgroundColor: '#20161c',
                    // flexDirection: 'row',
                    flex: 1,
                    // marginTop: 50,
                    // margin: 35,
                    // padding: 10,
                    // paddingRight: 20,
                    // marginRight: 20,
                    borderColor: '#20161c',
                    // borderRightColor: 'red',
                    // borderWidth: 30,
                    borderTopWidth: 35,
                    // borderRightWidth: 35,
                    // borderLeftWidth: 100,
                    borderBottomWidth: 35
                }}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title: "Permissão para usar a câmera",
                    message: "Precisamos da sua permissão para usar a câmera.",
                    buttonPositive: "Ok",
                    buttonNegative: "Cancelar"
                }}
                captureAudio={false}
            >


                {/* <View style={StyleCapturaDoc.bordasLeft}> */}
                {/* <Text style={StyleCapturaDoc.homeImageAreaText}>
                        Aperte o botão para captar a foto
                    </Text>
                    <Image source={require('../assets/images/IconLeft.png')} />
                     <Image source={require('../assets/images/IconLeft.png')} />  */}
                {/* </View> */}



                <View style={StyleCapturaDoc.bordas}>
                    <Text style={StyleCapturaDoc.homeImageAreaText}>
                        Aperte o botão para captar a foto
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("EscolhaTipoDoc")}>
                        <Image source={require('../assets/images/IconClose.png')} />
                    </TouchableOpacity>
                </View>



                <View style={StyleCapturaDoc.buttonCapturar}>
                    <TouchableOpacity

                        onPress={() => navigation.navigate('Sucesso')}
                    // onPress={() => this.props.navigation.navigate('Sucesso')}

                    >
                        <Image source={require('../assets/images/ButtonCaptura.png')} />
                    </TouchableOpacity>
                </View>



            </RNCamera>

        </Modal>

    );
};


export default Camera;