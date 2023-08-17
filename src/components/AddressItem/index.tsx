import { Cell, Divider, Radio } from "@nutui/nutui-react-taro";
import { View, Image, Text } from "@tarojs/components";
import del from "@/assets/components/del.png";
import edit from "@/assets/components/edit.png";
import "./index.scss";

type Props = {
  name: string;
  phone: string;
  location: string;
  isDefault: boolean;
  id: string | number;
};
interface IProps {
  info: Props;
}
const AddressItem = ({ info }: IProps) => {
  const { name, phone, location, isDefault, id } = info || {};
  return (
    <View className="address-item">
      <Cell className="address-item-cell">
        <View className="address-item-top">
          <Text className="address-item-name">{name}</Text>
          <Text className="address-item-phone">{phone}</Text>
        </View>
        <Text className="address-item-middle">{location}</Text>
        <Divider
          style={{ color: "#d1d1d1", marginTop: "12px", marginBottom: "8px" }}
        />
        <View className="address-item-bottom">
          <Radio.RadioGroup value={isDefault ? id : undefined}>
            <Radio iconName="success" iconActiveName="checked" value={id}>
              默认地址
            </Radio>
          </Radio.RadioGroup>

          <View className="address-item-action">
            <View className="address-item-icon" style={{ marginRight: "16px" }}>
              <Image src={del} mode="widthFix" style={{ width: "16px" }} />
              <Text>编辑</Text>
            </View>
            <View className="address-item-icon">
              <Image src={edit} mode="widthFix" style={{ width: "16px" }} />
              <Text>删除</Text>
            </View>
          </View>
        </View>
      </Cell>
    </View>
  );
};
export default AddressItem;
