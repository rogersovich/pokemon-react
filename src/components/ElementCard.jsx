import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Card, Grid } from "antd";
import { getType } from "../api/pokemon";
import { ImageType } from "./ImageType";
import QueueAnim from "rc-queue-anim";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const ElementCard = () => {
  const [types, setTypes] = useState([]);

  const screens = useBreakpoint();

  const getTypes = async () => {
    await getType().then((response) => {
      setTypes(response.data.results);
    });
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <QueueAnim type="left" delay={300} className="queue-simple">
      {types.map((type) => (
        <Col xs={24} md={6} key={type.name} className="bismillah">
          <Card
            size="small"
            bordered={false}
            bodyStyle={{ minHeight: "80px", minWidth: "100%" }}
            className={`group shadow-md hover:bg-${type.name} hover:bg-opacity-80`}
          >
            <Row align="middle" justify="space-between" className="px-2">
              <Col span={16}>
                <Title
                  level={screens.xs ? 4 : 3}
                  className="text-gray-900 capitalize font-medium text-opacity-80 group-hover:text-white"
                >
                  {type.name}
                </Title>
              </Col>
              <Col span={4}>
                <ImageType typeName={type.name} />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </QueueAnim>
  );
};

export default ElementCard;
