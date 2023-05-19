import { useState } from "react";

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ImageLogo } from "../../assets";

export default function Login() {
  const [visible, setVisible] = useState(true);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inner}>
        <View style={styles.header}>
          <Image source={ImageLogo.fptLogo} style={styles.image} />
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            theme={{
              colors: { primary: "green", underlineColor: "transparent" },
            }}
          />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={visible}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 50,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  header: { paddingBottom: 100, rowGap: 20, alignItems: "center" },
  content: {
    paddingHorizontal: 20,
    rowGap: 20,
  },

  image: {
    width: 150,
    height: 150,
  },
  button: {
    marginTop: 50,
    height: 50,
    marginHorizontal: 70,
    backgroundColor: "#f4b860",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
});
