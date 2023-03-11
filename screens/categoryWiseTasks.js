import React from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useState } from 'react';

import { useContext } from 'react';
import { DataContext } from '../data/context';

export default function CategoryWiseTasks({ navigation, route }) {
    const obj = useContext(DataContext);
    const taskList = obj.tasks;
    const categoryList = obj.categories;
    function count(cat) {
        console.log(cat);
        let task = taskList.filter(element => { return element.category == cat });
        console.log(task)
        return task.length;
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Expense Tracker</Text>
            </View>
            {
                categoryList.map((item, index) => {
                    return (
                        <View style={styles.pressables}>
                            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Tasks', { category: item.title })}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>{item.title} Task - {count(item.title)}</Text>
                            </Pressable>
                        </View>
                    )
                })
            }
            {/* <View style={styles.pressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('Tasks', { category: "Home" })} >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Home Tasks - {count("Home")}</Text>
                </Pressable>
            </View>
            <View style={styles.pressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('Tasks', { category: "Personal" })}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Personal Tasks - {count("Personal")}</Text>
                </Pressable>
            </View>
            <View style={styles.pressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('Tasks', { category: "Office" })}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Office Task - {count("Office")}</Text>
                </Pressable>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        backgroundColor: 'darkgrey',
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        height: 30,
    },
    pressables: {
        backgroundColor: 'brown',
        marginVertical: 20,
        width: 200,
        height: 80,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressable: {
        width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',
    }
});