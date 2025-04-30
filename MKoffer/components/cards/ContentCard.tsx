import { View, Text,  } from 'react-native';

type ContentCardProps = {
    Title: string;
    Description: string;
    Content?: any;
};

export default function ContentCard({Title, Description, Content } : ContentCardProps) {

    return (
        <View id="Card Body"
              style={{
                  borderWidth: 1,
                  minHeight: 300,
                  maxHeight: 300,
                  minWidth: 400,
                  maxWidth: 400,
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor:'lightgray'
        }}
        >
            <Text style={{fontWeight: "bold", fontSize: 28}}>{Title}</Text>
            <Text>{Description}</Text>
            <Text>{Content}</Text>
        </View>)
}