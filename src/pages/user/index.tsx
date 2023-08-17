import { View, Image, Text } from "@tarojs/components";
import {
  CellGroup,
  Cell,
  Avatar,
  Grid,
  GridItem,
} from "@nutui/nutui-react-taro";
import location from "@/assets/user/location.png";
import kefu from "@/assets/user/kefu.png";
import safe from "@/assets/user/safe.png";
import about from "@/assets/user/about.png";
import all from "@/assets/user/all.png";
import pay from "@/assets/user/pay.png";
import service from "@/assets/user/service.png";
import back from "@/assets/user/back.png";
import "./index.scss";

function User() {
  return (
    <View className="user-container">
      <View
        className="user-bg"
        style={{
          backgroundImage: `url(./assets/user/bg.png)`,
        }}
      >
        <View className="user-info">
          <Avatar
            size="large"
            icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Text className="user-info-name">156****3795</Text>
        </View>
      </View>
      <View className="user-grid">
        <View className="user-grid-title">商城订单</View>
        <Grid border={false}>
          <GridItem icon={all} iconSize={32} text="全部" />
          <GridItem icon={pay} iconSize={32} text="待支付" />
          <GridItem icon={service} iconSize={32} text="服务中" />
          <GridItem icon={back} iconSize={32} text="退款" />
        </Grid>
      </View>

      <CellGroup>
        <Cell
          title="服务地址"
          isLink
          iconSlot={
            <Image
              className="user-grid-cell-icon"
              src={location}
              mode="widthFix"
            />
          }
        />
        <Cell
          title="联系客服"
          isLink
          iconSlot={
            <Image src={kefu} className="user-grid-cell-icon" mode="widthFix" />
          }
        />
        <Cell
          title="关于我们"
          isLink
          iconSlot={
            <Image
              src={about}
              className="user-grid-cell-icon"
              mode="widthFix"
            />
          }
        />
        <Cell
          title="资质展示"
          isLink
          iconSlot={
            <Image src={safe} className="user-grid-cell-icon" mode="widthFix" />
          }
        />
      </CellGroup>
      <Cell descTextAlign="center" desc="退出登录" />
    </View>
  );
}

export default User;
