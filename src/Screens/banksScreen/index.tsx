import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import _ from "lodash";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { useListOfBanks } from "@Hooks/useListOfbanks";
import { BankModel } from "@ModelsbankModel";
import { styles } from "./styles";
import { CardComponent } from "@Components/atom/CardComponent";

const BanksScreen: FC = () => {
  const { DATA } = useListOfBanks();
  const [selected, setSelected] = useState<string>();

  const renderItem = (item: BankModel) => {
    const backgroundColor = item.bankName === selected ? "#6e3b6e" : "#ffffff";
    const color = item.bankName === selected ? "white" : "black";

    return (
      <CardComponent
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
