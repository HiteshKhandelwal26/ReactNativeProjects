import { View, StatusBar, FlatList, Text, TextInput, Pressable, StyleSheet, useColorScheme } from "react-native"
import React, { JSX, useEffect, useState } from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";



const test = ({ navigation }: any) => {
    const [mycolor, setColor] = useState("#FFFFFF")

    const updateMyColor = () => {
        setColor("#cdcdcd")
    }

    const myArr = [
        {
            uid: "1",
            name: "hitesh"
        },
        {
            uid: "2",
            name: "hitesh"
        },
        {
            uid: "3",
            name: "hitesh"
        }
    ]
    const isMyTheme = useColorScheme() === "dark"

    type Post = {
        userId: number;
        id: number;
        title: string;
        body: string;
    };


    const [data, setData] = useState<Post | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);


    type Posting = {
        userId: number,
        id: number,
        title: string,
        body: string
    }

    const [mydata, updateMyData] = useState<Posting[]>([]);
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts") // sample API
            .then((response) => response.json()) // convert response to JSON
            .then((json) => {
                updateMyData(json);     // save data to state
                setLoading(false); // stop loading
            })
            .catch((error) => console.error(error));
    }, []); // empty dependency array = run once when component mounts


    const myTheme = useColorScheme() ==="dark"
    const inTheme = useColorScheme()
    return (
        <View style= {myTheme?styles.textContainer: styles.textContainers}>
            <Text style = {{backgroundColor: inTheme === "dark"? "red": "black"}}>

            </Text>
        

    
        </View>


    )
}



const styles = StyleSheet.create(
    {
        textContainer:
        {
            paddingHorizontal: 15,
            paddingVertical: 10,
            fontWeight: "800",
            fontSize: 20
        },
        textContainers:
        {
            paddingHorizontal: 15,
            paddingVertical: 10,
            fontWeight: "800",
            fontSize: 20
        }
    }
)


export default test