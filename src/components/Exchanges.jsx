import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoExchangeApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data;

  if (isFetching) return <Loader />;

  const result = Object.values(exchangesList).map(value => {
    return value;
  });

  return (
    <>
      <Row>
        <Col span={6}><h1>Exchange Name</h1></Col>
        <Col span={6}><h1>Total Trade Volume</h1></Col>
        <Col span={6}><h1>Website</h1></Col>
      </Row>
      <hr></hr>
      <Row>
        {result.map((exchange, i) => (
          <Col span={24}>
              <Panel
                key={exchange.name_id}
                showArrow={false}
                header={(
                  <Row key={exchange.name_id}>
                    <Col span={6}>
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume_usd)} USD</Col>
                    <Col span={6}><a href={exchange.url}>{exchange.name}</a></Col>
                  </Row>
                  )}
              />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;