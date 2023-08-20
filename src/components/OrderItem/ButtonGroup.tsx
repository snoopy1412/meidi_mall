import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import "./index.scss";

const ButtonGroup = ({ onClick }) => {
  const handleClick = (key) => {
    onClick && onClick(key);
  };
  return (
    <View className="button-group">
      <Button size="small" onClick={() => handleClick("refund")}>
        退款/售后
      </Button>
      <Button type="primary" size="small" onClick={() => handleClick("book")}>
        立即预约
      </Button>
    </View>
  );
};
export default ButtonGroup;
