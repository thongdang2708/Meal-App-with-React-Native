import {View, Text, StyleSheet} from "react-native";

function List({data}) {
    return data.map((singleData) => (
        <View style={styles.listContainer} key={singleData}>
            <Text style={styles.listText}> {singleData} </Text>
        </View>
    ));
}

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497",
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    listText: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold"
    }
});
export default List