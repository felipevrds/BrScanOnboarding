import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import StyleSucesso from '../styles/StyleSucesso'

const Sucesso = ({ navigation }) => {

    // ======================================================================
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)
    // ======================================================================

    const [inputCpf, setImputCpf] = useState('000.000.000-00');
    const [valorCpf, setValorCpf] = useState(0);

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