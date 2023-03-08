import { View, Text, Pressable} from "react-native";
import styles from "../styles";

function ListItem({ handleDeleteItem, data }) {
  
  return (
    
    <View style={styles.item}>
      <Pressable style={({pressed})=> pressed && styles.pressItem} onPress={handleDeleteItem.bind(this, data.key)}>
      <Text style={styles.itemText}>{data.text}</Text>
    </Pressable>
    </View>
    
  );
}

export default ListItem;
