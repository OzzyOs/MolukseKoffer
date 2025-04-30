import {View, Text, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

type ContentCardProps = {
    Title: string;
    Description: string;
    Content?: any;
};

export default function ContentCard({Title, Description, Content } : ContentCardProps) {
    const router = useRouter();

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
            <View>
                <Text style={{fontWeight: "bold", fontSize: 28}}>{Title}</Text>
                <Text>{Description}</Text>
                <Text>{Content}</Text>
            </View>
            <Pressable style={{height: 25}} onPress={()=> router.navigate('/screens/PhotoView')}>
                <Text>Details</Text>
            </Pressable>
        </View>)
}