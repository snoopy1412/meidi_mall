import { useEffect, useState } from "react";
import { SearchBar, Price } from "@nutui/nutui-react-taro";
import { ProductFeed } from "@nutui/nutui-biz";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { dataType } from "./index.d";
import "./index.scss";

const Index = () => {
  const [data, setData] = useState<dataType[]>([
    {
      id: 12,
      imgUrl:
        "https://img13.360buyimg.com/imagetools/jfs/t1/1908…2881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      label: "自营",
    },
    {
      id: 13,
      imgUrl: "../../assets/example/1.jpg",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      label: "自营",
    },
    {
      id: 14,
      imgUrl: "../../assets/example/1.jpg",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      label: "自营",
    },
    {
      id: 15,
      imgUrl: "../../assets/example/1.jpg",
      name: "我是标题我是标题我是标题我是标题我是标题",
      desc: "更多买点更多买点",
      price: "388",
      label: "自营",
    },
  ]);
  const customProductDouble = (item: any) => {
    return (
      <>
        <div className="name-box">{item.name}</div>
        <div className="price-box">
          <div className="price">
            <Price price={item.price} />
          </div>
        </div>
      </>
    );
  };
  const handleClick = () => {
    Taro.navigateTo({
      url: `/packages/detail/index`,
    });
  };
  return (
    <div className="page">
      <div className="searchBar">
        <SearchBar placeholder="请输入关键字" />
      </div>
      <div className="content">
        <ProductFeed
          style={{ width: "100%" }}
          infiniteloadingProps={{
            hasMore: false,
            onLoadMore: console.log,
          }}
          customProduct={customProductDouble}
          data={data}
          col={2}
          imgUrl="imgUrl"
          imgWidth="165"
          imgHeight="144"
          onClick={handleClick}
          onImageClick={console.log}
        />
      </div>
    </div>
  );
};
export default Index;
