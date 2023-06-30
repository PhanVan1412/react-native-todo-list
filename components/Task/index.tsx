import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style'

const Task = (props: any) => {
  const { number } = props;
  const numberText = number < 10 ? `0${number}` : number;
  const itemBg = number % 2 === 0 ? styles.event : styles.odd;
  
  return (
    <View>
       <TouchableOpacity onPress={props.onDeleteTask}>
          <View style={styles.item} >
              <View style={[styles.box, itemBg]}>
                <Text style={styles.number}>{numberText}</Text>
              </View>
              <Text style={styles.content}>{props.content}</Text>
          </View>
      </TouchableOpacity>
          
    </View>
  )
}

export default Task