import { View } from "@tarojs/components";
import AddressItem from "@/components/AddressItem";
import { CartBar, CartBarButton, CartBarIcon } from "@nutui/nutui-biz";
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
      <CartBar safeAreaInsetBottom placeholder>
        <CartBarButton text="立即购买" />
      </CartBar>
    </View>
  );
}

export default AddressList;
