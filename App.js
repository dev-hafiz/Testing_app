import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 200,
            height: 300,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://i.pinimg.com/564x/fb/30/56/fb30568930a5e4edb122e476008db1fa.jpg",
          }}
        />
        <Pressable
          onPress={() => {
            alert("Button Presed");
          }}
        >
          <Text style={styles.button}>Press Alert</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.view1}>
          <Text style={styles.personTitle}>
            Olza {"\n"}
            Bozoneska
          </Text>
          <Text style={styles.minText}>Post --Korem ipsum dolor sit amet.</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.personTitle}>Victoriaya of Puru</Text>
          <Text style={styles.minText}>Post --Korem ipsum dolor sit amet.</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.personTitle}>Selzana Naedira</Text>
          <Text style={styles.minText}>Post --Korem ipsum dolor sit amet.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "#ECDBD1",
    padding: 20,
  },
  view2: {
    flex: 1,
    backgroundColor: "#ED5A39",
    padding: 20,
  },
  view3: {
    flex: 1,
    backgroundColor: "#D4D4D4",
    padding: 20,
  },
  personTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000",
  },
  minText: {
    fontWeight: "bold",
  },
  button: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ED5A39",
    padding: 20,
    borderRadius: 16,
    color: "#FFFFFF",
    margin: 10,
  },
});
