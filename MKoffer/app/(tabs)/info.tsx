import {StyleSheet, Text, Platform, View} from 'react-native';

export default function InfoView() {
    return (
        <View style={styles.titleContainer}>

            <View style={{paddingTop: 10}}>
                <Text>Hello</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40,
        paddingHorizontal: 10,
        gap: 8,
        borderWidth: 1,
        borderColor: 'red',
    },
});
