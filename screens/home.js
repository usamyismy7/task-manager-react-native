import React from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation, route }) {
    const [modal, setModal] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Task Manager</Text>
            </View>
            <View style={styles.pressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('TodaysTasks')}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Today's Tasks</Text>
                </Pressable>
            </View>
            <View style={styles.pressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('CategoryWiseTasks')} >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Category Wise Tasks</Text>
                </Pressable>
            </View>
            <View style={styles.pressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('AddNewTask')}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Add New Task</Text>
                </Pressable>
            </View>
            <View style={styles.pressables}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('AddCategory')}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Add New Category</Text>
                </Pressable>
            </View>
            {/* <Modal visible={modal}>
                <View style={styles.modal}>

                </View>
            </Modal> */}
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