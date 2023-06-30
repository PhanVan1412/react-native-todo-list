import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import React, { useState} from 'react'

import styles from './style'


const Form = (props: any) => {
  const [task, setTask] = useState('')
  const handleAddTask = () => {
    if ( task.length === 0 ) {
      Alert.alert('Vui lòng nhập công việc của bạn')
      return false;
    } 
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  }
  return (
    <View style={styles.addTask}>
      <TextInput 
        placeholder='Your task...' 
        style={styles.inputForm}
        onChangeText={text => setTask(text)}
        value={task}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
            <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Form;