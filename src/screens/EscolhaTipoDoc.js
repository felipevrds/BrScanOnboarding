import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import StyleEscolhaTipoDoc from '../styles/StyleEscolhaTipoDoc'


const EscolhaTipoDoc = ({ navigation }) => {

    return (
        <>
            <View style={StyleEscolhaTipoDoc.homeTopBarArea}>
                <View style={StyleEscolhaTipoDoc.homeTopBarAreaBack}>
                    <Image source={require('../assets/images/IconLeft.png')} />
                </View>
            </View>
            <View style={StyleEscolhaTipoDoc.homeImageArea}>
                <Text style={StyleEscolhaTipoDoc.homeImageAreaText}>
                    Para começar, preencha as infomações abaixo.
                </Text>
            </View>
            <View style={StyleEscolhaTipoDoc.homeTextArea}>
                <TouchableOpacity style={StyleEscolhaTipoDoc.button} onPress={() => navigation.navigate("TipoDocRG")}>
                    <View style={StyleEscolhaTipoDoc.imageButton}>
                        <Image source={require('../assets/images/IconRG.png')} />
                    </View>
                    <View style={StyleEscolhaTipoDoc.textButton}>
                        <Text style={StyleEscolhaTipoDoc.buttonTitle}>USAR MEU RG</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleEscolhaTipoDoc.homeButtonArea}>
                <TouchableOpacity style={StyleEscolhaTipoDoc.button} onPress={() => navigation.navigate("TipoDocCNH")}>
                    <View style={StyleEscolhaTipoDoc.imageButton}>
                        <Image source={require('../assets/images/IconCNH.png')} />
                    </View>
                    <View style={StyleEscolhaTipoDoc.textButton}>
                        <Text style={StyleEscolhaTipoDoc.buttonTitle}>USAR MINHA CNH</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default EscolhaTipoDoc;