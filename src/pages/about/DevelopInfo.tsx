import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBar, Card, Image } from "react-vant";
import Limboer_Yin from "../../images/Limboer_Yin.jpg";
import Hughiecc from "../../images/Hughiecc.jpg";
import { APP_DEVELOP_INFO } from "../../constants";

export default function DevelopInfo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const imgPath = pathname.split("/develop-info/")[1] === APP_DEVELOP_INFO.developer ? Limboer_Yin : Hughiecc;

  useEffect(() => {
    if (pathname.includes('develop-info')) {
      document.body.style.backgroundColor = 'white'
    }
    return () => {
      document.body.style.backgroundColor = '#f7f7f7'
    }
  }, [pathname])

  return (
    <div>
      <NavBar
        fixed
        safeAreaInsetTop
        title="开发人员"
        leftText="返回"
        onClickLeft={() => {
          navigate(-1);
        }}
      />
      <div>
        <Image src={imgPath} />
      </div>
    </div>
  );
}
