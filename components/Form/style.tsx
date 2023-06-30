import { StyleSheet } from "react-native";
import color from '../../contains/color';

const styles = StyleSheet.create({
    addTask: {
        bottom: 10,
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        gap: 10
    },
    inputForm: {
        height: 45,
        width: '80%',
        backgroundColor: color.background,
        borderWidth: 1,
        borderColor: color.second,
        borderRadius: 10,
        padding: 10,
    },
    iconWrapper: {
        backgroundColor: color.second,
        width: 50,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 24,
        fontWeight: 'bold',
        color: color.white,
    }
})

export default styles;