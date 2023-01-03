import {View, Text, Pressable, StyleSheet, Platform} from "react-native";

function SingleCategory({title, color, onPress}) {
  return (
    <View style={styles.outerContainer}>
        <Pressable style={({pressed}) => pressed ? [styles.button, styles.buttonPressed] : styles.button} android_ripple={{color: "#dddddd"}} onPress={onPress}>
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.textInput}> {title} </Text>
            </View>
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "white",
        height: 150,
        elevation: 4,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.5,
        overflow: Platform.OS === "android" ? "hidden" : "visible" 
    },
    buttonPressed: {
        opacity: 0.5
    },  
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        overflow: "hidden"
    },
    textInput: {
        color: "black",
        fontWeight: "bold"
    }
});

export default SingleCategory