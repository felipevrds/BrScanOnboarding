'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import StyleTutorial from '../styles/StyleTutorial';

export default class swiper extends Component {

  constructor(props) {
    super(props)
    this.swiperRef = swiper => this.swiper = swiper
    this.scrollHandler = page => {
      console.log('Page ', page, this.swiper)
      this.swiper && this.swiper.scrollTo(page, true)
    }
  }

  render() {
    return (
      <Swiper
        ref={this.swiperRef}
        showsButtons={false}
        width={500}
        height={500}
        showsPagination={false}
        index={0}
        loop={false} >

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide1}>
          <View style={StyleTutorial.homeImageArea}>
            <Image source={require('../assets/images/DocIconFrenteDocumento.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea}>
            <Text style={StyleTutorial.TextArea1}>
              Vamos lá!
                </Text>
            <Text style={StyleTutorial.TextArea2}>
              Tenha seus documentos em mãos, RG ou CNH.
                </Text>
          </View>
          <View style={StyleTutorial.homeButtonArea}>
            <TouchableOpacity style={StyleTutorial.button} onPress={() => { console.log('Page 0'); this.swiper.scrollTo(1, true) }}>
              <Text style={StyleTutorial.buttonTitle}>AVANÇAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide2}>
          <View style={StyleTutorial.homeTopBarArea2}>
            <Image source={require('../assets/images/IconLeftDark.png')} />
          </View>
          <View style={StyleTutorial.homeImageArea2}>
            <Image source={require('../assets/images/DocIconAcessoCamera.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea22}>
            <Text style={StyleTutorial.TextArea12}>
              Você precisa liberar o acesso à câmera para fotografar os documentos.
                </Text>
          </View>
          <View style={StyleTutorial.homebutton2Area2}>
            <TouchableOpacity style={StyleTutorial.button2} onPress={() => { console.log('Page 1'); this.swiper.scrollTo(2, true) }}>
              <Text style={StyleTutorial.button2Title2}>AUTORIZAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide3}>
          <View style={StyleTutorial.homeTopBarArea3}>
            <View style={StyleTutorial.homeTopBarAreaBack3}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
            <View style={StyleTutorial.homeTopBarAreaClose3}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
          </View>
          <View style={StyleTutorial.homeImageArea3}>
            <Image source={require('../assets/images/DocIconLuz.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea3}>
            <Text style={StyleTutorial.TextArea13}>
              Escolha um local iluminado
                </Text>
            <Text style={StyleTutorial.TextArea23}>
              Posicione seu documento em uma superfície lisa e, de preferência, escura.
                </Text>
          </View>
          <View style={StyleTutorial.homebuttonArea33}>
            <TouchableOpacity style={StyleTutorial.button3} onPress={() => { console.log('Page 2'); this.swiper.scrollTo(3, true) }}>
              <Text style={StyleTutorial.buttonTitle3}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide4}>
          <View style={StyleTutorial.homeTopBarArea4}>
            <View style={StyleTutorial.homeTopBarAreaBack4}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
            <View style={StyleTutorial.homeTopBarAreaClose4}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
          </View>
          <View style={StyleTutorial.homeImageArea4}>
            <Image source={require('../assets/images/DocIconPlastico.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea4}>
            <Text style={StyleTutorial.TextArea14}>
              Retire o documento do plástico
                </Text>
            {/* <Text style={StyleTutorial.TextArea24}>
                   Posicione seu documento em uma superfície lisa e, de preferência, escura.
                </Text> */}
          </View>
          <View style={StyleTutorial.homebuttonArea4}>
            <TouchableOpacity style={StyleTutorial.button4} onPress={() => { console.log('Page 3'); this.swiper.scrollTo(4, true) }}>
              <Text style={StyleTutorial.buttonTitle4}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide5}>
          <View style={StyleTutorial.homeTopBarArea5}>
            <View style={StyleTutorial.homeTopBarAreaBack5}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
            <View style={StyleTutorial.homeTopBarAreaClose5}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
          </View>
          <View style={StyleTutorial.homeImageArea5}>
            <Image source={require('../assets/images/DocIconFundoEstampado.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea5}>
            <Text style={StyleTutorial.TextArea15}>
              Evite fundos estampados
                </Text>
            {/* <Text style={StyleTutorial.TextArea25}>
                   Posicione seu documento em uma superfície lisa e, de preferência, escura.
                </Text> */}
          </View>
          <View style={StyleTutorial.homebutton5Area5}>
            <TouchableOpacity style={StyleTutorial.button5} onPress={() => { console.log('Page 4'); this.swiper.scrollTo(5, true) }}>
              <Text style={StyleTutorial.buttonTitle5}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide6}>
          <View style={StyleTutorial.homeTopBarArea6}>
            <View style={StyleTutorial.homeTopBarAreaBack6}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
            <View style={StyleTutorial.homeTopBarAreaClose6}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
          </View>
          <View style={StyleTutorial.homeImageArea6}>
            <Image source={require('../assets/images/DocIconReflexo.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea6}>
            <Text style={StyleTutorial.TextArea16}>
              Evite reflexos no documento
                </Text>
            {/* <Text style={StyleTutorial.TextArea26}>
                   Posicione seu documento em uma superfície lisa e, de preferência, escura.
                </Text> */}
          </View>
          <View style={StyleTutorial.homebutton6Area6}>
            <TouchableOpacity style={StyleTutorial.button6} onPress={() => { console.log('Page 5'); this.swiper.scrollTo(6, true) }}>
              <Text style={StyleTutorial.buttonTitle6}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide7}>
          <View style={StyleTutorial.homeTopBarArea7}>
            <View style={StyleTutorial.homeTopBarAreaBack7}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
            <View style={StyleTutorial.homeTopBarAreaClose7}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
          </View>
          <View style={StyleTutorial.homeImageArea7}>
            <Image source={require('../assets/images/DocIconFrenteDocumento.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea7}>
            <Text style={StyleTutorial.TextArea17}>
              Fotografe a frente do documento
                </Text>
            <Text style={StyleTutorial.TextArea27}>
              Use o lado que possui sua foto.
                </Text>
          </View>
          <View style={StyleTutorial.homebutton7Area7}>
            <TouchableOpacity style={StyleTutorial.button7} onPress={() => { console.log('Page 6'); this.swiper.scrollTo(7, true) }}>
              <Text style={StyleTutorial.buttonTitle7}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide8}>
          <View style={StyleTutorial.homeTopBarArea8}>
            <View style={StyleTutorial.homeTopBarAreaBack8}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
            <View style={StyleTutorial.homeTopBarAreaClose8}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
          </View>
          <View style={StyleTutorial.homeImageArea8}>
            <Image source={require('../assets/images/DocIconTrasDocumento.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea8}>
            <Text style={StyleTutorial.TextArea18}>
              Fotografe o verso do documento
                </Text>
            <Text style={StyleTutorial.TextArea28}>
              Use o lado que não possui sua foto.
                </Text>
          </View>
          <View style={StyleTutorial.homebutton8Area8}>
            <TouchableOpacity style={StyleTutorial.button8} onPress={() => this.props.navigation.navigate('EscolhaTipoDoc')}>
              <Text style={StyleTutorial.buttonTitle8}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

        <View style={StyleTutorial.slide9}>
          <View style={StyleTutorial.homeTopBarArea3}>
            <View style={StyleTutorial.homeTopBarAreaBack3}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
            <View style={StyleTutorial.homeTopBarAreaClose3}>
              <Image source={require('../assets/images/IconLeftDark.png')} />
            </View>
          </View>
          <View style={StyleTutorial.homeImageArea3}>
            <Image source={require('../assets/images/DocIconLuz.png')} />
          </View>
          <View style={StyleTutorial.homeTextArea3}>
            <Text style={StyleTutorial.TextArea13}>
              Escolha um local iluminado
                </Text>
            <Text style={StyleTutorial.TextArea23}>
              Posicione seu documento em uma superfície lisa e, de preferência, escura.
                </Text>
          </View>
          <View style={StyleTutorial.homebuttonArea33}>
            <TouchableOpacity style={StyleTutorial.button3} onPress={() => { console.log('Page 8'); this.swiper.scrollTo(9, true) }}>
              <Text style={StyleTutorial.buttonTitle3}>FIMM</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================================================================= */}

      </Swiper>
    )
  }

}

AppRegistry.registerComponent('myproject', () => swiper);