import React, { useEffect } from "react";
import { Tabbar } from "react-vant";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { HomeO, InfoO, BarChartO } from "@react-vant/icons";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // react router 不再进行外部的 hash change, 例如, 手动更改 url
  // 解决方法为手动去监听, 调用 react router 自己的 navigate 方法
  // https://github.com/remix-run/react-router/issues/9940#issuecomment-1397534720
  useEffect(() => {
    const handleHashChange = () => {
      const [, path] = window.location.hash.split('#/');
      navigate(path, { replace: true });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [navigate]);

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
        <Tabbar.Item name="/" icon={<HomeO />}>
          主页
        </Tabbar.Item>
        <Tabbar.Item name="/charts" icon={<BarChartO  />}>
          图表
        </Tabbar.Item>
        <Tabbar.Item name="/about" icon={<InfoO />}>
          关于
        </Tabbar.Item>
      </Tabbar>
    </div>
  );
}

export default App;
