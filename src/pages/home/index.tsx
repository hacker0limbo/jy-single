import React, { useMemo, useRef, useState } from "react";
import { NavBar, Card, Image, Button, Space, Tag, Flex, Typography, Popup, Form, Selector } from "react-vant";
import data from "../../data/data.json";
import { Like, FilterO } from "@react-vant/icons";
import { singleFields } from "../../constants";
import boyAvatar from "../../images/boy.jpg";
import girlAvatar from "../../images/girl.jpg";
import dayjs from "dayjs";

type FormValues = {
  gender?: string[];
};

const initialValues: FormValues = {
  gender: ["男", "女"],
};

export default function Home() {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [form] = Form.useForm<FormValues>();
  const [searchParams, setSearchParams] = useState<FormValues>(initialValues);
  const filteredData = useMemo(() => {
    return data.filter((item: Record<string, string>) => searchParams.gender?.includes(item?.[singleFields?.gender]));
  }, [searchParams.gender]);

  return (
    <div>
      <NavBar
        placeholder
        fixed
        safeAreaInsetTop
        title="主页"
        leftArrow={false}
        rightText={
          <FilterO
            onClick={() => {
              setShowFilterPopup(true);
            }}
            style={{ color: "black", marginTop: 2 }}
            fontSize={20}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      />
      <div style={{ padding: 12 }}>
        {filteredData.map((item: Record<string, string>, index) => {
          const isMale = item?.[singleFields.gender] === "男";

          return (
            <Card key={index} round style={{ marginBottom: 10 }}>
              <Card.Body onClick={() => {}}>
                <Flex gutter={16}>
                  <Flex.Item span={8}>
                    <Image radius={4} src={isMale ? boyAvatar : girlAvatar} />
                  </Flex.Item>
                  <Flex.Item span={16}>
                    <Space justify="between" align="baseline" style={{ width: "100%", marginBottom: 4 }}>
                      <Typography.Title level={5} style={{ margin: 0 }}>
                        {isMale ? "男生" : "女生"}
                        {index + 1}号
                      </Typography.Title>
                      <Typography.Text>{dayjs().get("year") - Number(item?.[singleFields.birth])}岁</Typography.Text>
                    </Space>

                    <Space justify="between" align="baseline" gap={8} style={{ marginBottom: 4 }}>
                      <Tag type="primary" plain>
                        {item?.[singleFields.education]}
                      </Tag>
                      <Tag type="primary" plain>
                        {item?.[singleFields.occupation]}
                      </Tag>
                      <Tag type="primary" plain>
                        {item?.[singleFields.annualSalary]}
                      </Tag>
                      <Tag type="primary" plain>
                        {item?.[singleFields.height]}/{item?.[singleFields.weight]}
                      </Tag>
                    </Space>
                    <Typography.Text ellipsis style={{ color: "var(--rv-cell-label-color)" }}>
                      兴趣爱好: {item?.[singleFields.hobbies]}
                    </Typography.Text>
                    <Typography.Text ellipsis style={{ color: "var(--rv-cell-label-color)" }}>
                      接受年龄: {item?.[singleFields.acceptableAgeRange]}
                    </Typography.Text>
                    <Typography.Text ellipsis style={{ color: "var(--rv-cell-label-color)" }}>
                      择偶标准: {item?.[singleFields.preferences]}
                    </Typography.Text>
                  </Flex.Item>
                </Flex>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <Popup
        title="筛选"
        round
        style={{ height: "70%" }}
        position="top"
        visible={showFilterPopup}
        onClose={() => {
          setShowFilterPopup(false);
        }}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={(values: FormValues) => {
            const { gender } = values;
            console.log("onFinish", values);
            setSearchParams({
              gender,
            });
            setShowFilterPopup(false);
          }}
          initialValues={initialValues}
        >
          <Form.Item name="gender" label="性别">
            <Selector
              options={[
                {
                  label: "男生",
                  value: "男",
                },
                {
                  label: "女生",
                  value: "女",
                },
              ]}
              multiple={true}
            />
          </Form.Item>
        </Form>
        <div style={{ margin: "0 16px", position: "sticky", top: "90%" }}>
          <Button
            round
            type="primary"
            block
            onClick={() => {
              form.submit();
            }}
          >
            确定
          </Button>
        </div>
      </Popup>
    </div>
  );
}
