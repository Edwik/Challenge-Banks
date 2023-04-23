import { Text, TouchableOpacity, View, Image } from "react-native";
import { ItemProps } from "../../Types/itemProps";
import { styles } from "./styles";

const CardComponent = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: ItemProps) => {
  return (
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
};

export { CardComponent };
