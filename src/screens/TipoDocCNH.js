import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import StyleTipoDocCNH from '../styles/StyleTipoDocCNH'


const EscolhaTipoDoc = ({ navigation }) => {

    return (
        <>
            <View style={StyleTipoDocCNH.homeTopBarArea}>
                <View style={StyleTipoDocCNH.homeTopBarAreaBack}>
                    <Image source={require('../assets/images/IconLeft.png')} />
                </View>
            </View>
            <View style={StyleTipoDocCNH.homeImageArea}>
                <Text style={StyleTipoDocCNH.homeImageAreaText}>
                    Escolha como quer enviar a sua CNH.
                </Text>
            </View>
            <View style={StyleTipoDocCNH.homeTextArea}>
                <TouchableOpacity style={StyleTipoDocCNH.button} onPress={() => navigation.navigate("CapturaDoc")}>
                    <View style={StyleTipoDocCNH.imageButton}>
                        <Image source={require('../assets/images/IconCNHFrente.png')} />
                    </View>
                    <View style={StyleTipoDocCNH.textButton}>
                        <Text style={StyleTipoDocCNH.buttonTitle}>FOTO DA FRENTE</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleTipoDocCNH.homeButtonArea}>
                <TouchableOpacity style={StyleTipoDocCNH.button} onPress={() => navigation.navigate("CapturaDoc")}>
                    <View style={StyleTipoDocCNH.imageButton}>
                        <Image source={require('../assets/images/IconCNHVerso.png')} />
                    </View>
                    <View style={StyleTipoDocCNH.textButton}>
                        <Text style={StyleTipoDocCNH.buttonTitle}>FOTO DO VERSO</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleTipoDocCNH.homeButtonArea2}>
                <TouchableOpacity style={StyleTipoDocCNH.button} onPress={() => navigation.navigate("CapturaDoc")}>
                    <View style={StyleTipoDocCNH.imageButton}>
                        <Image source={require('../assets/images/IconCNHFrenteVerso.png')} />
                    </View>
                    <View style={StyleTipoDocCNH.textButton}>
                        <Text style={StyleTipoDocCNH.buttonTitle}>FRENTE E VERSO</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default EscolhaTipoDoc;