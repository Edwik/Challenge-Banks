import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import _ from "lodash";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from "react-native";
import { useListOfBanks } from "@Hooks/useListOfbanks";
import { ItemProps } from "../../Types/itemProps";
import { BankModel } from "@ModelsbankModel";
import { styles } from "./styles";

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Image
      style={styles.logo}
      source={{
        uri: item.url,
      }}
    />
    <View style={styles.section}>
      <View style={styles.headerSection}>
        <Text style={[styles.title, { color: textColor }]}>
          {item.bankName}
        </Text>
        <View style={styles.containerAge}>
          <Text style={[styles.age]}>Age: {item.age}</Text>
        </View>
      </View>

      <Text style={[styles.description, { color: textColor }]}>
        {item.description}
      </Text>
    </View>
  </TouchableOpacity>
);

const BanksScreen: FC = () => {
  const { DATA } = useListOfBanks();
  const [selected, setSelected] = useState<string>();

  const renderItem = (item: BankModel) => {
    const backgroundColor = item.bankName === selected ? "#6e3b6e" : "#ffffff";
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
      <Text style={styles.h1}>List of the Banks</Text>
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

export { BanksScreen };
