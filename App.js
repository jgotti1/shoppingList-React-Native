import {useEffect} from "react"
import { View, TextInput, FlatList, ImageBackground, Alert, Text, TouchableOpacity, Linking  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "react-native-elements";
import { useState } from "react";
import ListItem from "./components/ListItem";
import styles from "./styles.js";
import ListInput from "./components/ListInput";
import EraseItems from "./components/EraseAllButton";
import { NativeBaseProvider } from "native-base";
import Constants from 'expo-constants';


export default function App() {
  const version = Constants.manifest.version;
  const [item, setItem] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

// console.log(`App version: ${version}`);

  useEffect(() => {

    loadItems()
    console.log(`memory loaded`)
  }, [])




  
  const saveItems = async (items) => {
  if (items === undefined || items === null) {
    console.log('Items is undefined or null')
    return
  }
  try {
    await AsyncStorage.setItem('items', JSON.stringify(items))
  } catch (error) {
    console.log(error)
  }
}

  
  
  const loadItems = async () => {
  try {
    const itemsString = await AsyncStorage.getItem('items')
    if (itemsString !== null) {
      setAllItems(JSON.parse(itemsString))
    }
  } catch (error) {
    console.log(error)
  }
}


  const submitItem = () => {
    if (!item) {
 setModalVisible(false)
} else { 
      setAllItems([...allItems, { text: item, key: Math.random().toString() }]);
      saveItems([...allItems, { text: item, key: Math.random().toString() }]);
      setItem("");
      setModalVisible(false)
     
    }
  };


  const itemInputHandler = (itemText) => {
    setItem(itemText);
  };

  
  const handleDeleteItem = async (id) => {
    
    Alert.alert(
      "Confirmation",
      "Are you sure you want to erase this item?",
      [
        {
          text: "Cancel",
          onPress: () => { return },
          style: "cancel",
        },
        {
        text: "Erase",
        onPress: async () => {
            setAllItems(allItems => {
              return allItems.filter((item) => item.key !== id);
            });
            try {
              await AsyncStorage.removeItem(id);
              console.log(`Item with id ${id} removed from AsyncStorage`);
            } catch (error) {
              console.log(error.message);
            }
            saveItems(allItems.filter((item) => item.key !== id));
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );

  };

  const startAddItem = () => {
    setModalVisible(!modalVisible);
  }

  return (
    
    <NativeBaseProvider>
    <ImageBackground
    source={require('./assets/cart.jpg')}
    style={styles.modal}>
  <View style={styles.appContainer}>
{/* Version and copright link     */}
  <View style={styles.topContainer}>
      <Text style={styles.versionText}>{version}</Text>
      <View style={styles.copyright}>
        <TouchableOpacity onPress={() => Linking.openURL('https://portfolio.margottiworld.com/')}>
          <Text style={styles.linkText}>&#169; margotticode2023</Text>
        </TouchableOpacity>
      </View>
  </View>
{/* section end */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.heading}>Shopping List</TextInput>
        <View style={styles.buttonContainer}>
          <Button buttonStyle={styles.button} title="Add Item" onPress={startAddItem} />
         </View>
      </View>
        <ListInput submitItem={submitItem} itemInputHandler={itemInputHandler} item={item} modalVisible={modalVisible} startAddItem={startAddItem} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonErase}>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <FlatList
          data={allItems}
          renderItem={(data) => {
            return <ListItem data={data.item} handleDeleteItem={handleDeleteItem}/>;
          }}
          />
      </View>
    <EraseItems setAllItems={setAllItems} />
    </View>
    </ImageBackground>
          </NativeBaseProvider>
  );
}
