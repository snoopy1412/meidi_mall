import { SearchBar } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import "./index.scss";

const Index = () => {
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
    </div>
  );
};
export default Index;
