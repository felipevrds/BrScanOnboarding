import React, { Component, useState } from 'react'
import {
    Text, 
    StyleSheet, 
    View, 
    Image, 
    TouchableOpacity,
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

            <RNCamera
                ref={ref => setCamera(ref)}
                style={{
                    backgroundColor: '#20161c',
                    flex: 1,
                    borderColor: '#20161c',
                    borderTopWidth: 35,
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

                <View style={StyleCapturaDoc.bordas}>
                    <Text style={StyleCapturaDoc.homeImageAreaText}>
                        Aperte o botão para captar a foto
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("TipoDocRG")}>
                        <Image source={require('../assets/images/IconClose.png')} />
                    </TouchableOpacity>
                </View>

                <View style={StyleCapturaDoc.buttonCapturar}>
                    <TouchableOpacity onPress={() => navigation.navigate('Sucesso')}>
                        <Image source={require('../assets/images/ButtonCaptura.png')} />
                    </TouchableOpacity>
                </View>

            </RNCamera>

        </Modal>

    );
};


export default Camera;