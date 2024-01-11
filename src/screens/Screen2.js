import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
console.log('Screen Dimensions:', width, height);
const Screen2 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={require('../images/Menu.png')} style={styles.menuIcon} />
      <Text style={styles.heading}>Discover</Text>
      <Image source={require('../images/cart.png')} style={styles.cart} />
      <View style={styles.searchBox}>
        <Image
          source={require('../images/search.png')}
          style={styles.searchIcon}
        />
        <Text style={{marginLeft: 10, color: 'grey'}}>looking for shoes</Text>
      </View>
      <View style={styles.banner}>
        <Image
          source={require('../images/background2.jpeg')}
          style={styles.bannerImage}
        />

        <View style={styles.overlay}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '700',
            }}>
            Summer
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '700',
            }}>
            Collection
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          marginLeft: 20,
          marginBottom: 20,
        }}>
        <View style={styles.btnHighlight}>
          <Text style={{color: 'white'}}>New Release</Text>
        </View>
        <View style={styles.btn}>
          <Text style={{color: '#959191'}}>Men</Text>
        </View>
        <View style={styles.btn}>
          <Text style={{color: '#959191'}}>Women</Text>
        </View>
        <View style={styles.btn}>
          <Text style={{color: '#959191'}}>Kids</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          marginLeft: 20,
          marginBottom: 20,
        }}>
        <View>
          <View style={styles.imageBox}>
            <Image
              source={require('../images/ShoeT1.png')}
              style={styles.shoes}
              resizeMode={'contain'}
            />
            <Image
              source={require('../images/like.png')}
              style={{
                width: 15,
                height: 15,
                position: 'absolute',
                top: 15,
                right: 15,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.shoeTitle}>Nike Air Max</Text>
            <Image
              source={require('../images/plus.png')}
              style={{
                width: 15,
                height: 15,
                marginLeft: 50,
                marginTop: 7,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.shoeTitle}>$ 180.00</Text>
          </View>
        </View>
        <View>
          <View style={[styles.imageBox, {marginLeft: 15}]}>
            <Image
              source={require('../images/Shoe8.png')}
              style={styles.shoes}
              resizeMode={'contain'}
            />
            <Image
              source={require('../images/like-fill.png')}
              style={{
                width: 15,
                height: 15,
                position: 'absolute',
                top: 15,
                right: 15,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.shoeTitle}>Nike Air Max</Text>
            <Image
              source={require('../images/plus.png')}
              style={{
                width: 15,
                height: 15,
                marginLeft: 50,
                marginTop: 7,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.shoeTitle}>$ 180.00</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          marginLeft: 20,
          marginBottom: 20,
        }}>
        <View style={styles.imageBox}>
          <Image
            source={require('../images/shoes4.png')}
            style={styles.shoes}
            resizeMode={'contain'}
          />
          <Image
            source={require('../images/like.png')}
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              top: 15,
              right: 15,
            }}
          />
        </View>
        <View style={[styles.imageBox, {marginLeft: 15}]}>
          <Image
            source={require('../images/Shoe1.png')}
            style={styles.shoes}
            resizeMode={'contain'}
          />
          <Image
            source={require('../images/like.png')}
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              top: 15,
              right: 15,
            }}
          />
        </View>
      </View>
      <View style={styles.bottomTab}>
        <Image
          source={require('../images/bottom-home.png')}
          style={styles.bottomImages}
        />
        <Image
          source={require('../images/bottom-search.png')}
          style={styles.bottomImages}
        />
        <Image
          source={require('../images/bottom-plus.png')}
          style={styles.bottomImages}
        />
        <Image
          source={require('../images/like.png')}
          style={styles.bottomImages}
        />
        <Image
          source={require('../images/bottom-user.png')}
          style={styles.bottomImages}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    width: 22,
    height: 22,
    position: 'absolute',
    top: 60,
    left: 30,
  },
  cart: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 60,
    right: 30,
  },
  heading: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  searchBox: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: '#EEEEEE',
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  banner: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    marginTop: 15,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // Adjust the alpha value for the desired level of grey
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHighlight: {
    width: 110,
    height: 40,
    borderRadius: 30,
    borderColor: 'grey',
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 80,
    height: 40,
    borderRadius: 30,
    borderColor: 'grey',
    backgroundColor: '#EEEEEE',
    alignSelf: 'center',
    marginTop: 15,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    width: 180,
    height: 180,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  shoes: {
    width: '90%',
    height: '90%',
  },
  shoeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 5,
  },
  bottomTab: {
    width: '86%',
    height: 60,
    backgroundColor: '#AAB7B8',
    borderRadius: 15,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomImages: {
    width: 25,
    height: 25,
  },
});

export default Screen2;
