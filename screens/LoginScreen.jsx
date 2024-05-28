import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import logo from "../assets/miit_logo.png";
import { Button, TextInput } from "react-native-paper";
import theme from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableSignInBtn, setDisableSignInBtn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState(false);

  const handleSignIn = () => {
    if(email === "kaunghtetkyaw.dev@gmail.com" && password === "123123") {
      setAuthError(false)
      navigation.navigate("bottomnavigationbar")
    }else {
      setAuthError(true)
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={logo} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            width: 250,
          }}
        >
          Myanmar Institute of Information Technology
        </Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
        Sign In
      </Text>
      {authError && <Text style={{ color: "red" }}>*Authentication fail</Text>}
      <TextInput
        error={authError}
        label="Email"
        mode="outlined"
        style={{ backgroundColor: "transparent", marginTop: 10 }}
        keyboardType="email-address"
        textColor="#000"
        theme={{ colors: { primary: theme.colors.primary } }}
        right={
          <TextInput.Icon
            icon="email"
            color="#000"
            style={{ marginTop: "4%" }}
          />
        }
        onChangeText={(value) => [
          setEmail(value),
          value === "" || password === ""
            ? setDisableSignInBtn(true)
            : setDisableSignInBtn(false),
        ]}
      />
      <TextInput
        error={authError}
        label="Password"
        secureTextEntry={!showPassword}
        mode="outlined"
        style={{ backgroundColor: "transparent", marginTop: 10 }}
        keyboardType="default"
        textColor="#000"
        theme={{ colors: { primary: theme.colors.primary } }}
        right={
          <TextInput.Icon
            icon={showPassword === true ? "eye-off" : "eye"}
            color="#000"
            style={{ marginTop: "4%" }}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChangeText={(value) => [
          setPassword(value),
          value === "" || email === ""
            ? setDisableSignInBtn(true)
            : setDisableSignInBtn(false),
        ]}
      />
      <Text style={{ marginTop: 10, textAlign: "right" }}>Forgot Passowrd</Text>
      <Button
        rippleColor="#fff"
        style={{ marginTop: 10, borderRadius: 12 }}
        labelStyle={{ fontSize: 18, padding: 3 }}
        buttonColor={theme.colors.primary}
        mode="contained"
        disabled={disableSignInBtn}
        onPress={() => handleSignIn()}
      >
        Sign In
      </Button>
      <Text style={{ marginTop: 10, textAlign: "center" }}>
        Don't have an account?{" "}
        <Text style={{ color: theme.colors.primary }}>Sign up</Text>
      </Text>
    </View>
  );
}
