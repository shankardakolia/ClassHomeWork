import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Screen3 = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ECF0F1'}}>
      <Image
        source={require('../images/left-arrow.png')}
        style={styles.menuIcon}
      />
      <Text style={styles.heading}>Order Details</Text>
      <Image source={require('../images/cart.png')} style={styles.cart} />
      <Image
        source={require('../images/screen3-shoe.png')}
        style={{height: 300, width: 300, alignSelf: 'center'}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.indicatorHighlight}></View>
        <View style={styles.indicator}></View>
        <View style={styles.indicator}></View>
        <View style={styles.indicator}></View>
        <View style={styles.indicator}></View>
      </View>
      <View style={styles.card}>
        <View>
          <Text style={{marginLeft: 20, fontWeight: '700', fontSize: 24}}>
            Nike Air Max
          </Text>
          <Text
            style={{
              position: 'absolute',
              fontWeight: '600',
              fontSize: 24,
              right: 20,
            }}>
            $ 180.00
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 20,
              fontWeight: '500',
              fontSize: 16,
              marginTop: 5,
              color: 'grey',
            }}>
            Men Shoe's
          </Text>
          <Image
            source={require('../images/like-fill.png')}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              top: 5,
              right: 25,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Color
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.circleColor,
              {backgroundColor: 'black', marginLeft: 20, marginRight: 10},
            ]}></View>
          <View
            style={[
              styles.circleColor,
              {backgroundColor: 'pink', marginRight: 10},
            ]}></View>
          <View
            style={[
              styles.circleColor,
              {backgroundColor: 'orange', marginRight: 10},
            ]}>
            <Image
              source={require('../images/tick-mark.png')}
              style={{
                width: 30,
                height: 30,
                position: 'absolute',
                top: 3,
                left: 3,
              }}
            />
          </View>
          <View
            style={[
              styles.circleColor,
              {backgroundColor: 'blue', marginRight: 10},
            ]}></View>
          <View
            style={[
              styles.circleColor,
              {backgroundColor: 'purple', marginRight: 10},
            ]}></View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text style={{marginLeft: 20, fontSize: 16, fontWeight: '600'}}>
            Select a size
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 14,
              fontWeight: '400',
              color: 'grey',
            }}>
            view size guide
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.circleColor,
              {
                borderColor: 'black',
                borderWidth: 1,
                marginLeft: 20,
                marginRight: 10,
              },
            ]}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                color: 'black',
              }}>
              40
            </Text>
          </View>
          <View
            style={[
              styles.circleColor,
              {backgroundColor: 'black', marginRight: 10},
            ]}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                color: 'white',
              }}>
              41
            </Text>
          </View>
          <View
            style={[
              styles.circleColor,
              {
                borderColor: 'black',
                borderWidth: 1,
                marginRight: 10,
              },
            ]}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                color: 'black',
              }}>
              42
            </Text>
          </View>
          <View
            style={[
              styles.circleColor,
              {
                borderColor: 'black',
                borderWidth: 1,
                marginRight: 10,
              },
            ]}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                color: 'black',
              }}>
              43
            </Text>
          </View>
          <View
            style={[
              styles.circleColor,
              {
                borderColor: 'black',
                borderWidth: 1,
                marginRight: 10,
              },
            ]}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                color: 'black',
              }}>
              44
            </Text>
          </View>
          <View
            style={[
              styles.circleColor,
              {
                borderColor: 'black',
                borderWidth: 1,
                marginRight: 10,
              },
            ]}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                color: 'black',
              }}>
              45
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#CACFD2',
            marginTop: 20,
          }}></View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginTop: 20,
              marginLeft: 20,
            }}>
            Description
          </Text>
        </View>
        <Text style={{marginLeft: 20, marginTop: 10}}>
          Feather you've errol bonnet bred orbs tell with.
        </Text>
        <Text style={{marginLeft: 20}}>
          Who goblet owl trace bott's...
          <Text style={{fontWeight: '600'}}>Read More</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'white'}}>Add To Cart</Text>
      </TouchableOpacity>
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
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  indicatorHighlight: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginHorizontal: 3,
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    elevation: 5,
    marginTop: 410,
    paddingTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  circleColor: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  btn: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
  },
});

export default Screen3;
