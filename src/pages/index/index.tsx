import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import { AddressList } from "@nutui/nutui-biz";

// import "./index.scss";
function Index() {
  const data: any = [
    {
      id: 3,
      testaddressName: "姓名",
      phone: "123****4567",
      defaultAddress: false,
      fullAddress: "北京亦庄经济技术开发区科创十一街18号院",
    },
    {
      id: 4,
      testaddressName: "姓名",
      phone: "123****4567",
      defaultAddress: true,
      fullAddress: "北京亦庄经济技术开发区科创十一街18号院",
    },
  ];

  const dataMapOptions = {
    id: "testid",
    addressDetail: "testaddressDetail",
    addressName: "testaddressName",
  };

  const itemClick = () => {
    console.log("Click To Address");
  };

  const delClick = () => {
    console.log("Click To Delete");
  };

  const editClick = () => {
    console.log("Click To Edit");
  };
  return (
    <View className="nutui-react-demo">
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button111
        </Button>
      </View>
      <AddressList
        data={data}
        showBottomButton={false}
        dataMapOptions={dataMapOptions}
        onDelIcon={delClick}
        onEditIcon={editClick}
        onItemClick={itemClick}
      />
    </View>
  );
}

export default Index;
