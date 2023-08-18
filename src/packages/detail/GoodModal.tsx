import { Popup, Button } from "@nutui/nutui-react-taro";
import { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Close } from "@nutui/icons-react-taro";
import "./modal.scss";

const GoodModal = ({ visible, onClose, onConfirm }) => {
  const [selectedId, setSelectId] = useState<number>(1);
  const data = [
    {
      name: "【全拆洗】波轮洗衣机清洗",
      price: "100.00",
    },
    {
      name: "【全拆洗】波轮洗衣机清洗",
      price: "100.00",
    },
    {
      name: "【全拆洗】波轮洗衣机清洗",
      price: "100.00",
    },
    {
      name: "【全拆洗】波轮洗衣机清洗",
      price: "100.00",
    },
  ];
  const handleConfirm = () => {
    onConfirm && onConfirm(selectedId);
  };
  return (
    <Popup
      visible={visible}
      position="bottom"
      onClose={onClose}
      closeable={true}
      round={true}
      closeIcon={<Close size={12} />}
    >
      <View className="good-modal">
        <View className="good-modal-top">
          <Text className="good-modal-price">￥1980</Text>
          <Text className="good-modal-price-u">￥2080</Text>
        </View>
        <View className="good-modal-middle">
          <View className="good-modal-list">
            <View className="good-modal-title">服务类型</View>
            {data.map((v, i) => (
              <View
                className={`good-modal-info ${
                  selectedId === i ? "good-modal-info-selected" : ""
                }`}
                onClick={() => setSelectId(i)}
              >
                <Text>{v.name}</Text>
                <Text>{`¥${v.price}`}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="good-modal-bottom">
          <Button type="primary" block onClick={handleConfirm}>
            立即购买
          </Button>
        </View>
      </View>
    </Popup>
  );
};
export default GoodModal;
