import React from "react";
import { Tabbar } from "react-vant";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { HomeO, InfoO } from "@react-vant/icons";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log('index', pathname)

  return (
    <div className="App">
      <Outlet />

      <Tabbar
        placeholder
        safeAreaInsetBottom
        fixed
        value={`/${pathname.split('/')[1]}`}
        onChange={(v) => {
          navigate(v as string);
        }}
      >
        {/* @ts-ignore */}
        <Tabbar.Item name="/" icon={<HomeO />}>
          主页
        </Tabbar.Item>
        {/* @ts-ignore */}
        <Tabbar.Item name="/about" icon={<InfoO />}>
          关于
        </Tabbar.Item>
      </Tabbar>
    </div>
  );
}

export default App;
