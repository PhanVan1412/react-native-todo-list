import { Text, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

import Task from './components/Task/index';
import Form from './components/Form';
import styles from './App.components.style';

const inititalListTask: string[] = [];

export default function App() {

  const [taskList, setTaskList] = useState(inititalListTask);

  const handleAddTask = (task: string) => {
    //add task
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index: number) => {
    Alert.alert('Thông báo!!!', 'Bạn có chắc muốn xóa task này không.', [
      {
        text: 'Có đâu',
        onPress: () => console.log(''),
        style: 'cancel',
      },
      {text: 'Đúng rồi đó', onPress: () => {
          const taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        }
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.heading}>Todo List</Text>
        <ScrollView style={styles.listItem}>
          {
            taskList.map((item, index) => {
              return <Task key={index} content={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
        <Form onAddTask={handleAddTask}/>
      </View>
    </View>
  );
}
