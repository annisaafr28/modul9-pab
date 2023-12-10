import React, { useState } from "react";
import {
  Box,
  Alert,
  FormControl,
  Text,
  Modal,
  ModalBackdrop,
  AlertText,
} from "@gluestack-ui/themed";
import { Input, Button } from "../../components";
import { registerUser } from "../../actions/AuthAction";
import BackFAB from "../../components/kecil/back_fab";

const Register = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("MainApp");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };

  return (
    <Box flex={1} backgroundColor="$blue400" justifyContent="center">
      <BackFAB />
      <Box
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={"$25"}
        shadowRadius={"$3.5"}
        elevation={"$5"}
        backgroundColor="$white"
        borderRadius={"$md"}
        marginTop={"$10"}
        marginHorizontal={"$6"}
        p={"$5"}
      >
        <Text size="3xl" color="$black" fontWeight="bold">
          Hello
        </Text>
        <Text size="sm" color="$black" my={"$1"}>
          Sign up to continue!
        </Text>
        <FormControl>
          <Input
            label="Nama"
            value={null}
            onChangeText={(nama) => setNama(nama)}
            height={"10"}
          />
          <Input
            label="Email"
            value={null}
            onChangeText={(email) => setEmail(email)}
            height={"10"}
          />
          <Input
            label="No. Handphone"
            keyboardType="phone-pad"
            value={null}
            onChangeText={(nohp) => setNohp(nohp)}
            height={"10"}
          />
          <Input
            label="Password"
            secureTextEntry
            value={null}
            onChangeText={(password) => setPassword(password)}
            height={"10"}
          />
        </FormControl>
        <Box flexDirection="column" my={"$5"}>
          <Button
            title="Register"
            type="text"
            icon="submit"
            padding={"$3"}
            fontSize={"$md"}
            onPress={() => {
              onRegister();
            }}
          />
        </Box>
      </Box>
      
      {/* Show Alert */}
      {showAlert && (
        <Modal isOpen={showAlert} onClose={toggleAlert}>
          <ModalBackdrop />
          <Alert mx="$4" action="error" variant="solid">
            <AlertText fontWeight="$bold">Error!</AlertText>
            <AlertText>{alertMessage}</AlertText>
          </Alert>
        </Modal>
      )}
    </Box>
  );
};

export default Register;
