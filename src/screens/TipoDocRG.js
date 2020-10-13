import React from 'react'
import {
    Text, StyleSheet, View, Image, TouchableOpacity,
} from 'react-native'

import StyleTipoDocRG from '../styles/StyleTipoDocRG'


const EscolhaTipoDoc = ({ navigation }) => {

    return (
        <>
            <View style={StyleTipoDocRG.homeTopBarArea}>
                <View style={StyleTipoDocRG.homeTopBarAreaBack}>
                    <TouchableOpacity onPress={() => navigation.navigate("Tutorial")}>
                        <Image source={require('../assets/images/IconLeft.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={StyleTipoDocRG.homeImageArea}>
                <Text style={StyleTipoDocRG.homeImageAreaText}>
                    Escolha como quer enviar o seu RG.
                </Text>
            </View>
            <View style={StyleTipoDocRG.homeTextArea}>
                <TouchableOpacity style={StyleTipoDocRG.button}

                    onPress={() => navigation.navigate("CapturaDoc")}
                >
                    <View style={StyleTipoDocRG.imageButton}>
                        <Image source={require('../assets/images/IconRGFrente.png')} />
                    </View>
                    <View style={StyleTipoDocRG.textButton}>
                        <Text style={StyleTipoDocRG.buttonTitle}>FOTO DA FRENTE</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleTipoDocRG.homeButtonArea}>
                <TouchableOpacity style={StyleTipoDocRG.button} onPress={() => navigation.navigate("CapturaDoc")}>
                    <View style={StyleTipoDocRG.imageButton}>
                        <Image source={require('../assets/images/IconRGVerso.png')} />
                    </View>
                    <View style={StyleTipoDocRG.textButton}>
                        <Text style={StyleTipoDocRG.buttonTitle}>FOTO DO VERSO</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleTipoDocRG.homeButtonArea2}>
                <TouchableOpacity style={StyleTipoDocRG.button} onPress={() => navigation.navigate("CapturaDoc")}>
                    <View style={StyleTipoDocRG.imageButton}>
                        <Image source={require('../assets/images/IconRGFrenteVerso.png')} />
                    </View>
                    <View style={StyleTipoDocRG.textButton}>
                        <Text style={StyleTipoDocRG.buttonTitle}>FRENTE E VERSO</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default EscolhaTipoDoc;