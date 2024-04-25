import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "react-vant";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <Typography.Text>你迷路了...</Typography.Text>
      <Button
        type="primary"
        size="mini"
        onClick={() => {
          navigate("/");
        }}
      >
        回到首页
      </Button>
    </div>
  );
}
