/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Cell = ({cellNumber, onPress, selected}) => {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: '#fff',
          width: '19.8%',
          height: 60,
          borderWidth: 1,
          borderColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        },
        selected && {backgroundColor: 'red'},
      ]}>
      <Text
        style={[
          {
            fontSize: 18,
            color: '#000',
          },
          selected && {color: '#fff'},
        ]}>
        {cellNumber}
      </Text>
    </TouchableOpacity>
  );
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const App = () => {
  const [array, setArray] = useState(
    shuffle(new Array(25).fill(1).map((i, index) => i + index)),
  );
  const [selectedList, setSelectedList] = useState([]);
  console.log(selectedList);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text
          style={{
            paddingVertical: 50,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {' '}
          Bingoooo{' '}
        </Text>
        <View style={styles.scrollView}>
          {array.map((i, index) => {
            return (
              <Cell
                selected={
                  selectedList.length &&
                  selectedList.findIndex((item) => item === i) > -1
                }
                onPress={() => {
                  setSelectedList([...selectedList, i]);
                }}
                cellNumber={i}
              />
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedList([]);
            }}
            style={{
              flex: 1,
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0000EE',
              borderRadius: 15,
              paddingVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#ffffff',
              }}>
              clear
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedList([]);
              let newArray = new Array(25).fill(1).map((i, index) => i + index);
              shuffle(newArray);
              setArray(newArray);
            }}
            style={{
              flex: 1,
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0000EE',
              borderRadius: 15,
              paddingVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#ffffff',
              }}>
              shuffle
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
