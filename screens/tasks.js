import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Modal } from 'react-native';
import { useState, useEffect } from 'react';

import { useContext } from 'react';
import { DataContext } from '../data/context';

export default function Tasks({ navigation, route }) {

    const cat = route.params.category;
    const obj = useContext(DataContext);
    const catList = obj.categories;
    const taskList = obj.tasks;
    const filteredList = [];
    function filter() {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].category == cat) {
                filteredList.push(taskList[i])
            }
        }
        // console.log(filteredList[0])
        return filteredList;
    }
    // console.log(filteredList[0])
    function uniqueKey() {
        setKey(key + 1);
        return key;
    }
    useEffect(() => {
        filter()
    }, [])
    function check(j) {
        if (j.category == cat)
            return true;
        return false;
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>{cat} Tasks:</Text>
            </View>
            <View style={{ borderWidth: 1, width: '20%', borderColor: 'purple' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>Title</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>Category</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>Date</Text>
                </View>
                {
                    taskList.map((item, index) => (
                        <View style={check(item) ? { flexDirection: 'row', justifyContent: 'space-around' } : { opacity: 0, width: 0, height: 0 }}>
                            <Text>{item.title}</Text>
                            <Text>{item.category}</Text>
                            <Text>{item.date}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
});