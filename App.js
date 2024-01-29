// Atividade: atv01

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, Alert, ScrollView, Platform, secureTextEntry } from 'react-native';

const logo = require('./assets/LEGO_logo.svg.webp')

export default function App() {
  return (

    <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
      <ScrollView>

        <View style={styles.centalizarImg}>
          <Image style={{ width: 220, height: 110, marginTop: 120, }} source={logo}></Image>
          <StatusBar style="light" />
        </View>

        <View>
          <Text style={styles.labelInput}>USUÁRIO</Text>
          <TextInput placeholder='Digite seu usuário' style={styles.input}></TextInput>
          <Text style={styles.labelInput}>SENHA</Text>
          <TextInput placeholder='Digite sua senha' style={styles.input} secureTextEntry={true}></TextInput>
        </View>

        <View style={[styles.alinharHorizontal]}>
          <Button title='ACESSAR' color='gold' onPress={() => Alert.alert('OLÁ, SEJA BEM VINDO!', 'Login feito com sucesso!',
            [
              {
                text: 'Cancelar',
                onPress: () => console.log('Botão cancelar pressionado')
              },
              {
                text: 'OK',
                onPress: () => console.log('Botão OK pressionado')
              }
            ])}></Button>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centalizarImg: {
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  labelInput: {
    fontSize: 18,
    marginBottom: 1,
    color: 'white',
    marginBottom: 5,
    marginTop: 50,
  },
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  alinharHorizontal: {
    gap: 10,
    marginTop: 50,
  },
});
