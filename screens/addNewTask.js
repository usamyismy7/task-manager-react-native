import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Modal, Alert } from 'react-native';
import { useState } from 'react';

import { useContext } from 'react';
import { DataContext } from '../data/context';

export default function AddNewTask({ navigation, route }) {
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const obj = useContext(DataContext);
    // const task = obj.tasks;

    const object = {
        title: "",
        category: "",
        date: "",
    }

    function addUser(text, category, date) {
        object.title = text;
        object.category = category;
        object.date = date;
        obj.addNewTask(object);
        // Alert.alert('Task Added');
        console.log(obj.tasks);
        // console.log(JSON.stringify(obj.tasks[0].title));
        setText('');
        setCategory('');
        setDate('');
    }

    // arrayList.map((item,index)=>(
    //     <View></View>
    // ))

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.textInput}>
                    <TextInput style={{ backgroundColor: '#eee', paddingHorizontal: 5, height: '100%' }}
                        value={text} onChangeText={setText} placeholder="Title" />
                </View>
                <View style={styles.textInput}>
                    <TextInput style={{ backgroundColor: '#eee', paddingHorizontal: 5, height: '100%' }}
                        value={category} onChangeText={setCategory} placeholder="Category" />
                </View>
                <View style={styles.textInput}>
                    <TextInput style={{ backgroundColor: '#eee', paddingHorizontal: 5, height: '100%' }}
                        value={date} onChangeText={setDate} placeholder="Date" />
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={() => addUser(text, category, date)}>
                        <Text style={{ color: 'white' }}>Add New Task</Text>
                    </Pressable>
                </View>
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
    subcontainer: {
        backgroundColor: '#ccc',
        width: 500,
        height: 300,
        padding: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'purple',
        width: '70%',
        alignSelf: 'center',
        height: 30,
        margin: 10,
    },
    buttonContainer: {
        alignSelf: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 30,
    }
});