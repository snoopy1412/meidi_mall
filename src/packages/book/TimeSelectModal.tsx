import { Popup, Button } from "@nutui/nutui-react-taro";
import { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Close } from "@nutui/icons-react-taro";
import "./modal.scss";

const GoodModal = ({ visible, onClose, onConfirm }) => {
  const [selectedId, setSelectId] = useState<number>(1);
  const data = [
    {
      date: "2023-08-15",
      time: "8:00-10:00",
    },
    {
      date: "2023-08-15",
      time: "8:00-10:00",
    },
    {
      date: "2023-08-15",
      time: "8:00-10:00",
    },
    {
      date: "2023-08-15",
      time: "8:00-10:00",
    },
    {
      date: "2023-08-15",
      time: "8:00-10:00",
    },
    {
      date: "2023-08-15",
      time: "8:00-10:00",
    },
    {
      date: "2023-08-15",
      time: "",
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
      <View className="time-modal">
        <View className="time-modal-top">
          <Text className="time-modal-title">选择上门时间</Text>
        </View>
        <View className="time-modal-middle">
          <View className="time-modal-list">
            {data.map((v, i) => (
              <View
                className={`time-modal-info ${
                  selectedId === i ? "time-modal-info-selected" : ""
                }`}
                onClick={() => setSelectId(i)}
              >
                <Text>{v.date}</Text>
                <Text>{v.time}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="time-modal-bottom">
          <Button onClick={onClose}>取消</Button>
          <Button type="primary" onClick={handleConfirm}>
            确认
          </Button>
        </View>
      </View>
    </Popup>
  );
};
export default GoodModal;
