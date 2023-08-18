import { SearchBar, Grid } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import bg from "@/assets/user/bg.png";
import { View } from "@tarojs/components";
import GoodItem from "./GoodItem";
import "./index.scss";

const Index = () => {
  const data = [
    {
      name: "电热水器全拆洗",
      url: bg,
      originPrice: "1980",
      countPrice: "2000",
    },
    {
      name: "电热水器全拆洗",
      url: bg,
      originPrice: "1980",
      countPrice: "2000",
    },
    {
      name: "电热水器全拆洗",
      url: bg,
      originPrice: "1980",
      countPrice: "2000",
    },
    {
      name: "电热水器全拆洗",
      url: bg,
      originPrice: "1980",
      countPrice: "2000",
    },
    {
      name: "电热水器全拆洗",
      url: bg,
      originPrice: "1980",
      countPrice: "2000",
    },
  ];
  return (
    <View className="home">
      <SearchBar placeholder="请输入关键字" />
      <Grid columns={2}>
        {data.map((v, i) => (
          <Grid.Item
            key={i}
            onClick={() =>
              Taro.navigateTo({
                url: "/packages/detail/index",
              })
            }
          >
            <GoodItem
              src={v.url}
              name={v.name}
              originPrice={v.originPrice}
              countPrice={v.countPrice}
            />
          </Grid.Item>
        ))}
      </Grid>
    </View>
  );
};
export default Index;
