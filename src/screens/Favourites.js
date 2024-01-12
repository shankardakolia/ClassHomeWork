import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from '../utils/scalling';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromFav} from '../redux/FavouritesSlice';

const Favourites = () => {
  const reduxData = useSelector(state => state.fav);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {reduxData.data.length === 0 && (
        <Text
          style={{
            alignSelf: 'center',
            fontSize: moderateScale(18),
            color: 'red',
            fontWeight: '600',
            marginTop: moderateVerticalScale(20),
          }}>
          There are no Favourites
        </Text>
      )}
      <FlatList
        data={reduxData.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.productsView}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: scale(60),
                  height: verticalScale(60),
                  borderRadius: moderateScale(10),
                }}
              />
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontWeight: '500',
                    marginLeft: moderateScale(10),
                  }}>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + '...'
                    : item.title}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    dispatch(removeItemFromFav(item));
                  }}>
                  <Image
                    source={require('../images/Remove.png')}
                    style={{
                      height: verticalScale(30),
                      width: scale(30),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cartItemsView: {
    backgroundColor: '#D0D3D4',
    borderRadius: 10,
    padding: 5,
  },
  favouriteItems: {
    backgroundColor: '#fe2247',
    borderRadius: 10,
    padding: 5,
  },
  cartItems: {
    color: 'black',
    fontWeight: '600',
  },
  productsView: {
    width: '90%',
    height: verticalScale(80),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
    backgroundColor: '#F7F9F9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: '#CACFD2',
    borderWidth: 1,
  },
  btn: {
    marginLeft: 5,
  },
});

export default Favourites;
