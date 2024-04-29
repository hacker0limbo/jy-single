import React from "react";
import { Cell, NavBar, Tabs } from "react-vant";
import { useNavigate } from "react-router-dom";
import GenderChart from "./GenderChart";

export default function Charts() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar placeholder fixed safeAreaInsetTop title="图表" leftArrow={false} />
      <Tabs>
        <Tabs.TabPane name="gender" title="男女比例">
          <GenderChart />
        </Tabs.TabPane>
        <Tabs.TabPane name="birth" title="出生日期">
          等我有空再完成...
        </Tabs.TabPane>
        <Tabs.TabPane name="salary" title="年薪">
          等我有空再完成...
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
