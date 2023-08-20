import { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { Button, Dialog } from "@nutui/nutui-react-taro";
import right from "@/assets/public/right.svg";
import TimeSelectModal from "./TimeSelectModal";
import location from "@/assets/user/location.svg";
import { Check } from "@nutui/icons-react-taro";
import "./index.scss";

const Book = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleSelect = (value) => {
    console.log(value);
    setVisible(false);
  };
  return (
    <View className="book-container">
      <View className="book-address">
        <View
          className="book-address-top"
          onClick={() => {
            Taro.navigateTo({
              url: "/packages/addressList/index",
            });
          }}
        >
          <View className="book-address-info">
            <Image
              src={location}
              className="book-address-icon"
              mode="widthFix"
            />
            <Text className="book-address-detail">金地自在城2期 9栋1111室</Text>
          </View>
          <Image
            src={right}
            mode="widthFix"
            className="book-selected-right-img"
          />
        </View>
        <View className="book-address-bottom">
          <View className="book-address-selected">
            <Text>上门服务</Text>
            <View className="book-address-selected-icon">
              <Check className="book-address-selected-check" />
            </View>
          </View>
        </View>
      </View>
      <View className="book-selected">
        <Text className="book-selected-left">期望上门时间</Text>
        <View className="book-selected-right" onClick={() => setVisible(true)}>
          <Text className="book-selected-right-text">请选择</Text>
          <Image
            src={right}
            className="book-selected-right-img"
            mode="widthFix"
          />
        </View>
      </View>
      <View className="book-bottom">
        <Button
          block
          type="primary"
          onClick={() => {
            Dialog.open("tips", {
              title: "提示",
              content: "具体上门服务时间以工程师电话预约为准",
              onConfirm: () => {
                Dialog.close("tips");
                Taro.navigateTo({
                  url: "/packages/orderList/index",
                });
              },
              onCancel: () => {
                Dialog.close("tips");
              },
            });
          }}
        >
          提交
        </Button>
      </View>
      <TimeSelectModal
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={handleSelect}
      />
      <Dialog id="tips" />
    </View>
  );
};
export default Book;
