import { Price, Input, InputNumber, Button } from "@nutui/nutui-react-taro";
import { Text, View, Image } from "@tarojs/components";
import bg from "@/assets/user/bg.png";
import "./index.scss";

const Settlement = () => {
  return (
    <div className="settlement-container">
      <View className="settlement-info">
        <Text className="settlement-info-title">商品信息</Text>
        <View className="settlement-info-detail">
          <Image src={bg} className="settlement-info-img" />
          <View className="settlement-info-right">
            <Text className="settlement-info-name">
              【全拆洗】波轮洗衣机清洗
            </Text>
            <View className="settlement-info-num">
              <Text>￥1980</Text>
              <InputNumber defaultValue={1} />
            </View>
          </View>
        </View>
      </View>
      <View className="settlement-group">
        <View className="settlement-remark">
          <Text className="settlement-remark-label">备注留言</Text>
          <Input placeholder="如有特殊需求可留言给服务人员" align="right" />
        </View>
        <View className="settlement-remark">
          <Text>支付方式</Text>
          <Text>在线支付</Text>
        </View>
      </View>
      <View className="settlement-total">
        <Text>商品总额</Text>
        <Price price={145.0} size="normal" thousands />
      </View>
      <View className="settlement-bottom">
        <View>
          <Text className="settlement-bottom-price">￥</Text>
          <Text className="settlement-bottom-num">1980</Text>
        </View>
        <Button type="primary" onClick={console.log}>
          提交订单
        </Button>
      </View>
    </div>
  );
};
export default Settlement;
