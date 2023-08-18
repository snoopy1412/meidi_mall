import { useState } from "react";
import { View, Text } from "@tarojs/components";
import {
  Input,
  Checkbox,
  Address,
  TextArea,
  Button,
} from "@nutui/nutui-react-taro";
import "./index.scss";

function EditAddress() {
  const [text, setText] = useState<any>("请选择");
  const [visible, setVisible] = useState<boolean>(false);
  const [optionsDemo1] = useState([
    {
      value: "浙江",
      text: "浙江",
      children: [
        {
          value: "杭州",
          text: "杭州",
          disabled: true,
          children: [
            { value: "西湖区", text: "西湖区", disabled: true },
            { value: "余杭区", text: "余杭区" },
          ],
        },
        {
          value: "温州",
          text: "温州",
          children: [
            { value: "鹿城区", text: "鹿城区" },
            { value: "瓯海区", text: "瓯海区" },
          ],
        },
      ],
    },
    {
      value: "湖南",
      text: "湖南",
      disabled: true,
      children: [
        {
          value: "长沙",
          text: "长沙",
          disabled: true,
          children: [
            { value: "西湖区", text: "西湖区" },
            { value: "余杭区", text: "余杭区" },
          ],
        },
        {
          value: "温州",
          text: "温州",
          children: [
            { value: "鹿城区", text: "鹿城区" },
            { value: "瓯海区", text: "瓯海区" },
          ],
        },
      ],
    },
    {
      value: "福建",
      text: "福建",
      children: [
        {
          value: "福州",
          text: "福州",
          children: [
            { value: "鼓楼区", text: "鼓楼区" },
            { value: "台江区", text: "台江区" },
          ],
        },
      ],
    },
  ]);
  return (
    <View className="addAddress">
      <View className="addAddress-input">
        <Text className="addAddress-input-label">收货人</Text>
        <Input placeholder="请输入" align="right" />
      </View>
      <View className="addAddress-input">
        <Text className="addAddress-input-label">联系电话</Text>
        <Input placeholder="请输入" align="right" />
      </View>
      <View className="addAddress-input" onClick={() => setVisible(true)}>
        <Text className="addAddress-input-label">所在地区</Text>
        <Text className="addAddress-input-label">{text}</Text>
      </View>
      <TextArea />
      <View className="addAddress-textarea">
        <View className="addAddress-textarea-top">
          <Text className="addAddress-textarea-label">设为默认地址</Text>
          <Checkbox defaultChecked={true} />
        </View>
        <Text className="addAddress-textarea-desc">
          提醒：每次下单时会使用该地址，实际下单地址会根据您的历史订单进行智能判断，请在下单时确认哦！
        </Text>
      </View>
      <Button block type="primary">
        保存
      </Button>
      <Address
        visible={visible}
        options={optionsDemo1}
        title="详细地址"
        onChange={(value) => {
          setText(value);
        }}
        onClose={() => setVisible(false)}
      />
    </View>
  );
}

export default EditAddress;
