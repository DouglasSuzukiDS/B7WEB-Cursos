import { StyleSheet, Text, View } from "react-native";
import { Switch } from "../components/switch";
import { useState } from "react";

export default function Screen() {
   const [status, setStatus] = useState(false)

   const handleChangeStatus = (newStatus: boolean) => {
      setStatus(newStatus)
   }

   return (
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
         <Text>Status: { status ? 'ON' : 'OFF' }</Text>
         
         <Switch
            status={status}
            onChangeStatus={handleChangeStatus}
         />
      </View>
   )
}

const styles = StyleSheet.create({


})