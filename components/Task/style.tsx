import { StyleSheet } from "react-native";
import color from '../../contains/color'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: color.background,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        // justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
      },
      event: {
        backgroundColor: color.green
      },
      odd: {
        backgroundColor: color.second
      },
      number: {
        color: color.white,
        fontWeight: 'bold',
        fontSize: 16,
      },
      content: {
        fontSize: 16,
      }
})

export default styles;