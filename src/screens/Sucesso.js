import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import StyleSucesso from '../styles/StyleSucesso'

const Sucesso = ({ navigation }) => {

    return (
        <>
            <View style={StyleSucesso.homeTopBarArea}>
                <Image source={require('../assets/images/IconCloseDark.png')} />
            </View>
            <View style={StyleSucesso.homeImageArea}>
                <Image source={require('../assets/images/IconSucesso.png')} />
            </View>
            <View style={StyleSucesso.homeTextArea}>
                <Text style={StyleSucesso.TextArea1}>
                    Pronto!
                </Text>
                <Text style={StyleSucesso.TextArea2}>
                    Seu documento foi recebido.
                </Text>
            </View>
            <View style={StyleSucesso.homeButtonArea}>
                <TouchableOpacity style={StyleSucesso.button} >
                    <Text style={StyleSucesso.buttonTitle}>FINALIZAR</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Sucesso;