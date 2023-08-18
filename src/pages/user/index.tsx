import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
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
  const handleClick = (key) => {
    switch (key) {
      case "address":
        Taro.navigateTo({
          url: `/packages/addressList/index`,
        });
        break;
      default:
        break;
    }
  };
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
        <Grid>
          <GridItem text="全部">
            <Image src={all} mode="widthFix" style={{ width: "32px" }} />
          </GridItem>
          <GridItem text="待支付">
            <Image src={pay} mode="widthFix" style={{ width: "32px" }} />
          </GridItem>
          <GridItem text="服务中">
            <Image src={service} mode="widthFix" style={{ width: "32px" }} />
          </GridItem>
          <GridItem text="退款">
            <Image src={back} mode="widthFix" style={{ width: "32px" }} />
          </GridItem>
        </Grid>
      </View>

      <CellGroup>
        <Cell
          title="服务地址"
          // extra={<Right />}
          // iconSlot={
          //   <Image
          //     className="user-grid-cell-icon"
          //     src={location}
          //     mode="widthFix"
          //   />
          // }
          onClick={() => handleClick("address")}
        />
        <Cell
          title="联系客服"
          // extra={<Right />}
          // iconSlot={
          //   <Image src={kefu} className="user-grid-cell-icon" mode="widthFix" />
          // }
        />
        <Cell
          title="关于我们"
          // extra={<Right />}
          // iconSlot={
          //   <Image
          //     src={about}
          //     className="user-grid-cell-icon"
          //     mode="widthFix"
          //   />
          // }
        />
        <Cell
          title="资质展示"
          // extra={<Right />}
          // iconSlot={
          //   <Image src={safe} className="user-grid-cell-icon" mode="widthFix" />
          // }
        />
      </CellGroup>
      <Cell>退出登录</Cell>
    </View>
  );
}

export default User;
