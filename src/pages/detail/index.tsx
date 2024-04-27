import React, { useMemo } from "react";
import { Card, Cell, NavBar, Image, Space, Button } from "react-vant";
import { useNavigate, useParams } from "react-router-dom";
import boyAvatar from "../../images/boy.jpg";
import girlAvatar from "../../images/girl.jpg";
import { Like } from "@react-vant/icons";
import data from "../../data/data.json";
import { singleFields } from "../../constants";

export default function Detail() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const detail: Record<string, string> = useMemo(() => data[Number(params.id)], [params.id]);
  const isMale = useMemo(() => detail?.[singleFields.gender] === "男", [detail]);

  // TODO: 参考青藤之恋...
  return (
    <div>
      <NavBar
        placeholder
        fixed
        safeAreaInsetTop
        title="详情"
        leftText="返回"
        onClickLeft={() => {
          navigate(-1);
        }}
      />
      <div style={{ padding: 16 }}>
        <Card round style={{ marginBottom: 20 }}>
          <Card.Cover onClick={() => {}}>
            <Image src={isMale ? boyAvatar : girlAvatar} />
          </Card.Cover>
          <Card.Header onClick={() => {}}>
            {isMale ? "男生" : "女生"}
            {Number(params.id) + 1}号
          </Card.Header>
          <Card.Body onClick={() => {}}>待完成....</Card.Body>
          <Card.Footer>
            <Space>
              <Button round size="small">
                更多
              </Button>
              <Button icon={<Like />} round color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">
                收藏
              </Button>
            </Space>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
