import {View, Text, StyleSheet, Pressable, Image, Platform} from "react-native";

function SingleMeal({title, imageUrl, duration, complexity, affordability, onPress}) {
  return (
    <View style={styles.outerContainer}>
      <Pressable style={({pressed}) => pressed ? [styles.button, styles.buttonPressed] : styles.button} android_ripple={{color: "#dddddd"}} onPress={onPress}>
        <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageUrl}} style={styles.imageStyle}/>
              <Text style={styles.title}> {title} </Text>
            </View>

            <View style={styles.details}>
              <Text style={styles.detail}> {duration}</Text>
              <Text style={styles.detail}> {complexity}</Text>
              <Text style={styles.detail}> {affordability} </Text>
            </View>
        </View>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
    imageStyle: {
      width: "100%",
      height: 150
    },
    outerContainer: {
      margin: 10,
      borderRadius: 6,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      elevation: 4,
      shadowColor: "black",
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      shadowOpacity: 0.5,
      backgroundColor: "white"
    },
    buttonPressed: {
      opacity: 0.5
    }, 
    title: {
      fontSize: 20,
      margin: 5,
      color: "black",
      fontWeight: "bold",
      textAlign: "center"
    },
    button: {
      flex: 1
    },
    innerContainer: {
      flex: 1,
      borderRadius: 5,
      overflow: "hidden"
    },
    details: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 5
    },
    detail: {
      fontSize: 16,
      marginHorizontal: 4
    }
    
});

export default SingleMeal