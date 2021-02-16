import QueueAnim from "rc-queue-anim";
import React from "react";
import Web from "../layouts/web";
import { Row, Col, Typography, Grid } from "antd";
import ElementCard from "../components/ElementCard";

const { useBreakpoint } = Grid;
const { Title } = Typography;

function Home() {
  const screens = useBreakpoint();

  return (
    <Web>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <QueueAnim type="left" delay={300} className="queue-simple">
            <div key="title">
              <Title className="uppercase" level={screens.xs ? 3 : 2}>
                Choose your Element
              </Title>
            </div>
          </QueueAnim>
        </Col>
        <ElementCard />
      </Row>
    </Web>
  );
}

export default Home;
