import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pincode, setPincode] = useState('');
  const [badName, setBadName] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [badMobile, setBadMobile] = useState('');
  const [badPincode, setBadPincode] = useState('');

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
    // Validation logic for mobile
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setBadMobile('Mobile number should be 10 digits');
    } else {
      setBadMobile('');
    }
    // Validation logic for PIN code
    const pinCodeRegex = /^[0-9]+$/;
    if (!pinCodeRegex.test(pincode)) {
      setBadPincode('PIN code should contain only numbers');
    } else {
      setBadPincode('');
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
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: badMobile != '' ? 'red' : 'black',
          borderRadius: 10,
          paddingLeft: 15,
          marginBottom: 15,
          color: 'black',
        }}
        placeholder="Enter Mobile Number"
        value={mobile}
        onChangeText={text => {
          setMobile(text);
        }}
        returnKeyType="next"
        // maxLength={10}
      />
      {badMobile != '' && (
        <Text
          style={{
            color: 'red',
            marginLeft: 25,
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          {badMobile}
        </Text>
      )}
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: badPincode != '' ? 'red' : 'black',
          borderRadius: 10,
          paddingLeft: 15,
          color: 'black',
        }}
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={text => {
          setPincode(text);
        }}
        returnKeyType="next"
        // maxLength={10}
      />
      {badPincode != '' && (
        <Text
          style={{
            color: 'red',
            marginLeft: 25,
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          {badPincode}
        </Text>
      )}
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          validate();
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
