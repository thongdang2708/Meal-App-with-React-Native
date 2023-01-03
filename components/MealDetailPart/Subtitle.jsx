import {View, Text, StyleSheet} from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}> {children} </Text>
    </View>
  )
};

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 12,
        borderBottomWidth: 2,
        borderBottomColor: "white"
    },
    subtitle: {
        textAlign: "center",
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    }
});

export default Subtitle