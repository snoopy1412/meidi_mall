import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  Swiper,
  SwiperItem,
  Cell,
  Price,
  Divider,
} from "@nutui/nutui-react-taro";
import "./index.scss";

function Detail() {
  const [visible, setVisible] = useState(false);
  const [skuData, setSkuData] = useState([]);
  const [goodsInfo, setGoodsInfo] = useState({} as any);
  const [imagePathMap, setImagePathMap] = useState<any>({});

  const getData = () => {
    Taro.request({ url: "https://storage.360buyimg.com/nutui/3x/data.js" })
      .then((res) => {
        const { Sku, Goods, imagePathMap } = res.data;
        console.log(Sku, Goods);
        setSkuData(Sku);
        setGoodsInfo(Goods);
        setImagePathMap(imagePathMap);
      }) //执行结果是 resolve就调用then方法
      .catch((err) => console.log("Oh, error", err)); //执行结果是 reject就调用catch方法
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="detail-container">
      <Swiper height={225} defaultValue={0} indicator style={{ width: "100%" }}>
        <SwiperItem>
          <img
            style={{ width: "100%" }}
            src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
            alt=""
          />
        </SwiperItem>
        <SwiperItem>
          <img
            style={{ width: "100%" }}
            src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
            alt=""
          />
        </SwiperItem>
      </Swiper>
      <Cell className="detail-list">
        {/* <HorizontalScrolling
          maskShadowType="transparent"
          maskWidth={100}
          maskContent={
            <div className="detail-mask-box">
              多种可选
              <Icon name="rect-right" size="small"></Icon>
            </div>
          }
          onClickMask={() => setVisible(true)}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div className="detail-box-item" key={item}>
                <img src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg" />
              </div>
            );
          })}
        </HorizontalScrolling> */}
      </Cell>
      <div className="detail-cell">
        <Price price={145.0} size="normal" thousands />
        <p className="cell-title">这是商品名称这是商品名称这是商品名称</p>
        <p className="cell-desc">高温蒸汽洗 免费上门 不满意重新洗</p>
        <Divider style={{ marginBottom: 0, color: "#ccc" }} />
      </div>
      <Cell onClick={() => setVisible(true)}>
        <div className="cell-service">
          <span className="cell-service-left">已选服务</span>
          <span>【全拆洗】 1台电热水器清洗</span>
          {/* <Icon
            name="rect-right"
            size="small"
            color="rgba(0, 0, 0, 0.6)"
          ></Icon> */}
        </div>
      </Cell>

      <Divider className="detail-divider">服务详情</Divider>
      <img
        style={{ width: "100%" }}
        src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
        alt=""
      />
      {/* <CartBar>
        <div style={{ width: "30%" }}>
          <CartBarIcon text="客服" iconProps={{ name: "dongdong" }} />
        </div>
        <div style={{ width: "70%" }}>
          <CartBarButton
            text="立即购买"
            buttonProps={{ type: "primary", block: true }}
            onClick={() => {
              Taro.navigateTo({
                url: `/packages/settlement/index`,
              });
            }}
          />
        </div>
      </CartBar> */}
    </View>
  );
}

export default Detail;
