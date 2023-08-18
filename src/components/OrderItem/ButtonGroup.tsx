import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import "./index.scss";

const ButtonGroup = () => {
  return (
    <View className="button-group">
      <Button size="small">退款/售后</Button>
      <Button type="primary" size="small">
        立即预约
      </Button>
    </View>
  );
};
export default ButtonGroup;
