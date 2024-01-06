import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Screen1 = () => {
  return (
    <View>
      <Image
        // source={require('../images/background2.jpeg')}
        source={require('../images/background1.jpeg')}
        style={styles.background}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <View style={styles.bottomView}>
        <Text style={styles.title}>Follow Latest</Text>
        <Text style={styles.title}>Style Shoes</Text>
        <Text style={styles.desc}>find your perfect pair of</Text>
        <Text style={styles.desc}>shoes with ease</Text>
        <TouchableOpacity style={styles.btn}>
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomView: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  btn: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  desc: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    // marginBottom: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // Adjust the alpha value for the desired level of grey
  },
});

export default Screen1;
