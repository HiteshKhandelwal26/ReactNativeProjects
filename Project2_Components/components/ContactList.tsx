import React, { JSX } from "react";

import { View, Text, StyleSheet, Image, ScrollView, Pressable, Linking } from "react-native";


function ContactList(): JSX.Element {

    const myContacts = [
        {
            uid: '1',
            username: 'Hitesh Khandelwal',
            userStatus: "Just an extra ordinary developer",
            url: 'https://www.linkedin.com/in/hitesh-khandelwal-60644557/',
            image: 'https://picsum.photos/id/1011/200/200',
            time: "1:01 AM"
        },
        {
            uid: '2',
            username: 'Jane Smith',
            userStatus: "I love my job",
            url: 'https://example.com/jane',
            image: 'https://picsum.photos/id/1012/200/200',
            time: "3:09 PM"
        },
        {
            uid: '3',
            username: 'Mark Lee',
            userStatus: "Busy at the moment",
            url: 'https://example.com/mark',
            image: 'https://picsum.photos/id/1013/200/200',
            time: "4:17 PM"
        },
        {
            uid: '4',
            username: 'Emily Rose',
            userStatus: "Buiding secure digital currencies",
            url: 'https://example.com/emily',
            image: 'https://picsum.photos/id/1014/200/200',
            time: "2:10 AM"
        },
    ];

    function loadURL(url: string) {
        Linking.openURL(url)
    }

    return (
        <View>
            <Text style={style.headingText}>Contact List</Text>
            <ScrollView style={style.mainContainer}>

                {myContacts.map(({ uid, username, url, image, userStatus, time }) => (
                    <View style={style.container} key={uid}>
                        <Pressable style={style.clickImage} onPress={() => loadURL(url)}>
                            <View style={style.innerContainer}>
                                <Image style={style.userImage} source={{ uri: image }} />
                                <View style={style.contentContainer}>
                                    <View style={style.textContainer}>
                                        <Text style={style.textOne}>{username}</Text>
                                        <Text style={style.textTwo}>{userStatus}</Text>
                                    </View>
                                    <Text style={style.timeContainer}>{time}</Text>
                                </View>
                            </View>

                        </Pressable>
                    </View>
                ))}

            </ScrollView>
        </View>
    )

}

const style = StyleSheet.create(
    {
        mainContainer: {
            backgroundColor: "#787878",
            margin: 5
        },
        headingText: {
            fontWeight: "bold",
            fontSize: 20,
            marginStart: 8,
            marginTop: 8
        },
        container: {
            backgroundColor: "#988010",
            margin: 3,
            padding: 2,
            borderRadius: 6,

        },


        innerContainer: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
        },

        textContainer: {
            flexShrink: 1,
        },

        timeWrapper: {
            alignSelf: "flex-start", // aligns time to top/right
        },


        userImage: {
            height: 55,
            width: 55,
            marginRight: 10,
            borderRadius: 60 / 2
        },
        clickImage: {
            padding: 8
        },
        textOne: {
            fontSize: 18,
            color: "#ffffff"
        },
        textTwo:
        {
            color: "#ffffff"
        },

        contentContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },



        timeContainer: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 12,
            marginTop: 4,
        },
    }
)

export default ContactList