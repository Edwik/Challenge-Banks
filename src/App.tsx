import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import _ from "lodash";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { useListOfBanks } from "@Hooks/useListOfbanks";
import { BankModel } from "@ModelsbankModel";

type ItemProps = {
  item: BankModel;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.bankName}</Text>
  </TouchableOpacity>
);

const App: FC = () => {
  const { DATA } = useListOfBanks();
  const [selected, setSelected] = useState<string>();

  const renderItem = (item: BankModel) => {
    const backgroundColor = item.bankName === selected ? "#6e3b6e" : "#f9c2ff";
    const color = item.bankName === selected ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelected(item.bankName)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to List of the Banks</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {!_.isEmpty(DATA) && Array.isArray(DATA) ? (
          DATA.map((item: BankModel, index: number) => {
            return <View key={index}>{renderItem(item)}</View>;
          })
        ) : (
          <Text>Empty Screen</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
