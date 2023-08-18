import { useState } from "react";
import { View } from "@tarojs/components";
import { Tabs } from "@nutui/nutui-react-taro";
import OrderItem from "@/components/OrderItem";
import "./index.scss";

const OrderList = () => {
  const tabs = [
    { title: "全部订单", key: "1" },
    { title: "待支付", key: "2" },
    { title: "服务中", key: "3" },
    { title: "退款", key: "4" },
  ];
  const [tab1value, setTab1value] = useState<any>("0");
  return (
    <View className="orderList">
      <Tabs
        value={tab1value}
        onChange={(value) => {
          setTab1value(value);
        }}
      >
        {tabs.map((v) => (
          <Tabs.TabPane title={v.title}>
            <OrderItem />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </View>
  );
};
export default OrderList;
