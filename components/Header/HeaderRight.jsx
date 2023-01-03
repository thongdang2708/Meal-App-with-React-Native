import {View, Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";


function HeaderRight({name, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.buttonPress}>
        <Ionicons name={name} color={color} size={24}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonPress: {
      opacity: 0.7
  }
});
export default HeaderRight