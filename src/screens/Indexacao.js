import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import StyleIndexacao from '../styles/StyleIndexacao'


const Indexacao = ({ navigation }) => {

  const [inputCpf, setImputCpf] = useState('000.000.000-00');
  const [valorCpf, setValorCpf] = useState(0);

  return (
    <>
      <View style={StyleIndexacao.homeImageArea}>
        <Text style={StyleIndexacao.homeImageAreaText}>
          Para começar, preencha as infomações abaixo.
        </Text>
      </View>
      <View style={StyleIndexacao.homeTextArea}>
        <Text style={StyleIndexacao.TextArea1}>
          CPF
        </Text>
        <TextInputMask
          type={'cpf'}
          value={inputCpf}
          maxLength={14}
          onChangeText={value => {
            setImputCpf(value);
            value = value.replace('0', '');
            value = value.replace('.', '');
            value = value.replace('-', '');
            setValorCpf(Number(value));
          }}
        />
      </View>
      <View style={StyleIndexacao.homeButtonArea}>
        <TouchableOpacity style={StyleIndexacao.button} onPress={() => navigation.navigate("Tutorial")}>
          <Text style={StyleIndexacao.buttonTitle}>AVANÇAR</Text>
        </TouchableOpacity>
      </View>
    </>
  )

};

export default Indexacao;