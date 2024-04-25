import React from "react";
import { Cell, NavBar } from "react-vant";
import { useNavigate } from "react-router-dom";
import { APP_DEVELOP_INFO } from "../../constants";

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar fixed safeAreaInsetTop title="关于" leftArrow={false} />
      <Cell.Group title="开发人员">
        <Cell
          title="平台制作"
          isLink
          value={APP_DEVELOP_INFO.developer}
          onClick={() => {
            navigate(`develop-info/${APP_DEVELOP_INFO.developer}`);
          }}
        />
        <Cell
          title="数据整理"
          isLink
          value={APP_DEVELOP_INFO.dataManager}
          onClick={() => {
            navigate(`develop-info/${APP_DEVELOP_INFO.dataManager}`);
          }}
        />
      </Cell.Group>
    </div>
  );
}
