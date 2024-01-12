import React, {useEffect, useState} from 'react';
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
import {addItemToCart} from '../redux/CartSlice';
import {useNavigation} from '@react-navigation/native';
import {addItemToFav} from '../redux/FavouritesSlice';

const Products = () => {
  const productsData = useSelector(state => state.cart);
  const favouritesData = useSelector(state => state.fav);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        json.map(item => {
          item.qty = 1;
        });
        setProducts(json);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Redux App</Text>
        <TouchableOpacity
          style={styles.favouriteItems}
          onPress={() => {
            navigation.navigate('Favourites');
          }}>
          <Text
            style={{
              color: 'white',
            }}>{`Favourites (${favouritesData.data.length})`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cartItemsView}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Text
            style={
              styles.cartItems
            }>{`Cart Items (${productsData.data.length})`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
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
                    dispatch(addItemToCart(item));
                  }}>
                  <Image
                    source={require('../images/Add.png')}
                    style={{
                      height: verticalScale(30),
                      width: scale(30),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    dispatch(addItemToFav(item));
                  }}>
                  <Image
                    source={require('../images/Favourites.png')}
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

export default Products;
