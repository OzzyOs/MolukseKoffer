import { Pressable, Text, TextInput, View } from "react-native";
import { Controller, Form, useForm } from "react-hook-form";

type modalProps = {
  setVisible: (visible: boolean) => void;
}; // You need to define setVisible as a function that takes a boolean:

type formData = {
  name: string;
};

// todo add image upload
// todo add styling
// todo add or edit components to fit form design

export default function UploadModal({ setVisible }: modalProps) {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: formData) => {
    console.log("Form data submitted:", data);
    const url = "http://192.168.2.16:3000/api/posts"; // Your API endpoint

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Response from server:", responseData);
      setVisible(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={{
          height: 30,
          borderWidth: 1,
          width: 35,
          padding: 2,
          alignSelf: "flex-end",
          borderRadius: 5,
        }}
        onPress={() => setVisible(false)}
      >
        <Text style={{ justifyContent: "center", alignSelf: "center" }}>
          Hide
        </Text>
      </Pressable>

      <View id="formContainer" style={{ flex: 1, alignItems: "center" }}>
        <View id="formFields">
          {/* Change to relating fields */}

          <Controller
            control={control}
            name={"title"}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <View>
                <Text>Title</Text>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Voeg een titel toe"
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name={"description"}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <View>
                <Text>Description</Text>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Voeg een beschrijving toe"
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name={"image"}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginBottom: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Voeg een afbeelding toe"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {/* Submit button */}
          {/* @ts-ignore */}
          <Pressable onPress={handleSubmit(onSubmit)}>
            <Text>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
