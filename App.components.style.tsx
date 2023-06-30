import { StyleSheet } from "react-native";
import color from './contains/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        marginTop: 35
      },
      body: {
        flex: 1,
      },
      heading: {
        fontSize: 24,
        color: color.primary,
        fontWeight: 'bold'
      },
      listItem: {
        marginTop: 15,
      }
});

export default styles;