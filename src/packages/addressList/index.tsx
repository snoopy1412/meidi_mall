import { useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import AddressItem from "@/components/AddressItem";
import { Button, Dialog } from "@nutui/nutui-react-taro";
import "./index.scss";

function AddressList() {
  const [visible, setVisible] = useState<boolean>(false);
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
  const handleClick = ({ key, id }) => {
    console.log(key, id);

    switch (key) {
      case "edit":
        Taro.navigateTo({
          url: `/packages/editAddress/index?id=${id}`,
        });
        break;
      case "delete":
        setVisible(true);
        break;
      default:
        break;
    }
  };
  return (
    <View className="address-list-container">
      {data.map((v, i) => (
        <AddressItem info={v} key={i} onClick={handleClick} />
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
      <Dialog
        title="删除确认"
        visible={visible}
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <View>确定删除该地址吗？</View>
      </Dialog>
    </View>
  );
}

export default AddressList;
