import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <view style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});