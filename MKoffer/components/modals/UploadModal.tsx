import {Pressable, Text, TextInput, View} from "react-native";
import {Controller, Form, useForm} from "react-hook-form";

type modalProps = {
    setVisible: (visible: boolean) => void;} // You need to define setVisible as a function that takes a boolean:

type formData = {
    "name": string;
}
export default function UploadModal({setVisible}: modalProps){
    const { handleSubmit, control } = useForm()

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <View style={{flex: 1}}>

            <Pressable
                style={{height: 30, borderWidth: 1, width: 35, padding: 2 ,alignSelf: 'flex-end', borderRadius: 5}}
                onPress={() => setVisible(false)}>
                <Text style={{justifyContent:'center', alignSelf:'center'}}>Hide</Text>
            </Pressable>

            <View style={{flex:1 ,alignItems:'center'}}>

                <View>
                {/* Change to relating fields */}
                    <Controller
                        control={control}
                        name={"name"}
                        defaultValue=""
                        render={({ field: {onChange, value} }) => (
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: "gray",
                                    borderWidth: 1,
                                    marginBottom: 10,
                                    paddingHorizontal: 10,
                                }}
                                placeholder="Enter your name"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    {/* Submit button */}
                    <Pressable onPress={handleSubmit(onSubmit)}>
                        <Text>Save</Text>
                    </Pressable>

                </View>

            </View>

        </View>
    )
}