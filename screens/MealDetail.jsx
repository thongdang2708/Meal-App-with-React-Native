import {View, Text, Image, StyleSheet, ScrollView, Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react/cjs/react.development";
import Subtitle from "../components/MealDetailPart/Subtitle";
import List from "../components/MealDetailPart/List";
import HeaderRight from "../components/Header/HeaderRight";
import { useContext } from "react/cjs/react.development";
import FavoriteContext from "../store/context";
import { useSelector } from "react-redux";
import { addFavorite } from "../store/redux/actions/FavoriteActions";
import { deleteFavorite } from "../store/redux/actions/FavoriteActions";
import { useDispatch } from "react-redux";
function MealDetail({route, navigation}) {

    let dispatch = useDispatch();

    let {favorIds} = useContext(FavoriteContext);

    let {favoriteIds} = useSelector(state => state.favorite);

    
   
    let mealIdNumber = route.params.mealId;

    let checkIdExist = favoriteIds.includes(mealIdNumber);

    // let checkIdExist = favorIds.includes(mealIdNumber);

    useLayoutEffect(() => {

        let mealTitle = MEALS.find((meal) => meal.id === mealIdNumber).title;

        navigation.setOptions({
            title: mealTitle
        });
        
    },[mealIdNumber]);


    const handlePress = () => {


            if (checkIdExist) {
                // dispatch({
                //     type: "DELETE_FAVORITE",
                //     payload: mealIdNumber
                //    })
                dispatch(deleteFavorite(mealIdNumber));
            } else {
                // dispatch({
                //     type: "ADD_FAVORITE",
                //     payload: mealIdNumber
                //    })
                dispatch(addFavorite(mealIdNumber));
            }
    
         
       
    };
    console.log(favoriteIds);
    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => {
                return <HeaderRight name={checkIdExist ? "star" : "star-outline"} color={"white"} onPress={handlePress}/>
            }
        });



    },[navigation, handlePress]);
















    // const handlePress = () => {
        
    //     if (checkIdExist) {
    //         deleteFavorite(mealIdNumber);
    //     } else {
    //         addFavorite(mealIdNumber);
    //     }
    // };


    // useLayoutEffect(() => {

    //     navigation.setOptions({
    //         headerRight: () => {
    //             return <HeaderRight name={checkIdExist ? "star" : "star-outline"} color={"white"} onPress={handlePress}/>
    //         }
    //     });
    // },[navigation, handlePress]);


   




    let searchedMeal = MEALS.find((meal) => meal.id === mealIdNumber);
  
  return (
    <ScrollView style={styles.rootContainer}>
        <View>
            <Image source={{uri: searchedMeal.imageUrl}} style={styles.imageStyle}/>
            <Text style={styles.title}> {searchedMeal.title} </Text>
        </View>

        <View style={styles.details}>
            <Text style={styles.detail}> {searchedMeal.duration} </Text>
            <Text style={styles.detail}> {searchedMeal.complexity}</Text>
            <Text style={styles.detail}> {searchedMeal.affordability} </Text>
        </View>


        <View style={styles.listOuterContainers}>
            <View style={styles.listContainers}>
                <Subtitle> Ingredients </Subtitle>
                <List data={searchedMeal.ingredients}/>
                <Subtitle> Steps </Subtitle>
                <List data={searchedMeal.steps}/>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    imageStyle: {
        height: 150,
        width: "100%"
    },
    title: {
        margin: 8,
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    detail: {
        color: "white",
        marginHorizontal: 4
    },
    listContainers: {
        width: "80%"
    },
    listOuterContainers: {
        alignItems: "center"
    }
});

export default MealDetail