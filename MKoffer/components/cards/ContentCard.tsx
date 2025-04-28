import { Image, StyleSheet, Platform, View, Text,  } from 'react-native';

type ContentCardProps = {
    Title: string;
    Description: string;
    Content?: any;
};

export default function ContentCard({Title, Description, Content } : ContentCardProps) {

    return (
        <View id="Card Body" style={{flex: 1, borderWidth: 1, maxHeight: 300, width: 400, borderRadius: 5, padding: 10}}>
            <Text style={{fontWeight: "bold", fontSize: 28}}>{Title}</Text>
            <Text>{Description}</Text>
            <Text>{Content}</Text>
        </View>)
}