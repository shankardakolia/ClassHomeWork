import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contacts = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [badName, setBadName] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [data, setData] = useState([]);
  let userData = [];

  const validate = () => {
    // Validation logic for name
    if (name.trim() === '') {
      setBadName('Name should not be empty');
    } else if (/^[0-9]/.test(name)) {
      setBadName('Name should not start with a number');
    } else {
      setBadName('');
    }
    // Validation logic for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setBadEmail('Please enter a valid email address');
    } else {
      setBadEmail('');
    }
  };

  const save = async () => {
    validate();
    const formData = {name, email};

    try {
      // Retrieve existing data
      const existingData = await AsyncStorage.getItem('USER');
      let mergedData = [];

      if (existingData) {
        const parsedExistingData = JSON.parse(existingData);

        if (Array.isArray(parsedExistingData)) {
          mergedData = [...parsedExistingData, formData];
        } else {
          mergedData = [parsedExistingData, formData];
        }
      } else {
        mergedData = [formData];
      }

      await AsyncStorage.setItem('USER', JSON.stringify(mergedData));

      setData(mergedData);
      const asyncData = await AsyncStorage.getItem('USER');
      console.log('Merged Data', mergedData);
      console.log('Async Data', JSON.stringify(asyncData));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: badName != '' ? 'red' : 'black',
          borderRadius: 10,
          paddingLeft: 15,
          marginBottom: 15,
          color: 'black',
        }}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        returnKeyType="next"
        // maxLength={10}
      />
      {badName != '' && (
        <Text
          style={{
            color: 'red',
            marginLeft: 25,
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          {badName}
        </Text>
      )}
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: badEmail != '' ? 'red' : 'black',
          borderRadius: 10,
          paddingLeft: 15,
          marginBottom: 15,
          color: 'black',
        }}
        placeholder="Enter Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        returnKeyType="next"
        // maxLength={10}
      />
      {badEmail != '' && (
        <Text
          style={{
            color: 'red',
            marginLeft: 25,
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          {badEmail}
        </Text>
      )}
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: 'orange',
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          save();
        }}>
        <Text style={{color: 'white'}}>Add Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: 'orange',
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={async () => {
          await AsyncStorage.removeItem('USER');
          setData([]);
        }}>
        <Text style={{color: 'white'}}>Remove All Contacts</Text>
      </TouchableOpacity>

      {data.map((data, index) => {
        return (
          <View key={index} style={{marginTop: 5}}>
            <Text>{JSON.stringify(data)}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Contacts;
