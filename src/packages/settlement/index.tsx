import {
  Cell,
  CellGroup,
  Price,
  Input,
  InputNumber,
} from "@nutui/nutui-react-taro";
import { SettleBar } from "@nutui/nutui-biz";
import "./index.scss";

const Settlement = () => {
  return (
    <div className="settlement-container">
      <Cell
        title="商品信息"
        subTitle={
          <div className="settlement-info">
            <img
              src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
              alt=""
            />
            <div className="settlement-info-right">
              <div className="settlement-info-name">
                【全拆洗】波轮洗衣机清洗
              </div>
              <div className="settlement-info-num">
                <span>￥1980</span>
                <InputNumber modelValue={1} />
              </div>
            </div>
          </div>
        }
      ></Cell>
      <CellGroup>
        <Input
          name="text"
          label="备注留言"
          placeholder="如有特殊需求可留言给服务人员"
          inputAlign="right"
          style={{ padding: "var(--nutui-cell-padding, 13px 16px)" }}
        />
        <Cell title="支付方式" desc="在线支付" />
      </CellGroup>
      <Cell
        title="商品总额"
        linkSlot={<Price price={145.0} size="normal" needSymbol />}
      ></Cell>
      <SettleBar
        style={{
          background: "#fff",
          boxShadow: "0px -2px 10px 0px rgba(0, 0, 0, 0.1)",
          padding: "16px 24px",
        }}
        total={100}
        totalAlign="left"
        customTotalPrice={<Price price={145.0} size="normal" needSymbol />}
        showZero={false}
        customSelectAll=""
        placeholder={true}
        settleButtonText="提交订单"
        onClickButton={console.log}
      />
    </div>
  );
};
export default Settlement;
