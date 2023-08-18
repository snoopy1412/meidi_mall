import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import AddressItem from "@/components/AddressItem";
import { Button } from "@nutui/nutui-react-taro";
import "./index.scss";

function AddressList() {
  const data = [
    {
      id: 3,
      name: "张静",
      phone: "123****4567",
      isDefault: true,
      location: "北京亦庄经济技术开发区科创十一街18号院",
    },
    {
      id: 4,
      name: "张静",
      phone: "123****4567",
      isDefault: false,
      location: "北京亦庄经济技术开发区科创十一街18号院",
    },
    {
      id: 5,
      name: "张静",
      phone: "123****4567",
      isDefault: false,
      location: "北京亦庄经济技术开发区科创十一街18号院",
    },
    {
      id: 6,
      name: "张静",
      phone: "123****4567",
      isDefault: false,
      location: "北京亦庄经济技术开发区科创十一街18号院",
    },
  ];
  return (
    <View className="address-list-container">
      {data.map((v, i) => (
        <AddressItem info={v} key={i} />
      ))}
      <View className="address-list-bottom">
        <Button
          block
          type="primary"
          onClick={() => {
            Taro.navigateTo({
              url: "/packages/addAddress/index",
            });
          }}
        >
          新增地址
        </Button>
      </View>
    </View>
  );
}

export default AddressList;
