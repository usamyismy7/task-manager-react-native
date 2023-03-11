import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Modal } from 'react-native';
import { useState } from 'react';

import { useContext } from 'react';
import { DataContext } from '../data/context';

export default function TodaysTasks({ navigation, route }) {

    const obj = useContext(DataContext);
    var taskList = obj.tasks;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy; //today's date
    taskList = taskList.filter(items => { return (items.date == today) })

    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 1, width: 250, borderColor: 'purple' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>Title</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>Category</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>Date</Text>
                </View>
                {
                    taskList.map((item, index) => (
                        // <View style={{ borderWidth: 1, width: '500', borderColor: 'purple' }}>

                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
});