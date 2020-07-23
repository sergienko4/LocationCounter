import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import SensorsTable from "../../components/SensorsTable";
import SensorEventList from "../../components/SensorEventList";
import { loadSensors, loadSensorsEvents } from "./actions";
import LocationDetailsCard from "../../components/LocationDetailsCard/indejx";
import BuildingDetailsCard from "../../components/BuildingDetailsCard";
import { isNull } from "lodash";
import ChooseLocation from "../ChooseLocationContainer";

const Sensors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSensors());
  }, []);

  const {
    sensors,
    events,
    selected,
    location,
    building,
  } = useSelector((state) => state.sensorsList.toJS());
  const onSelect = (sensor) => dispatch(loadSensorsEvents(sensor));
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <b>
                {" "}
                <i className="cui-location-pin"></i> Sensors
              </b>
            </CardHeader>
            <CardBody>
              <SensorsTable
                sensors={sensors}
                onSelect={onSelect}
                selected={selected}
              />
            </CardBody>
          </Card>
        </Col>
        <SensorEventList events={events} />
        <Col>
          {isNull(location) ? (
            <ChooseLocation />
          ) : (
            <LocationDetailsCard location={location} />
          )}
          <BuildingDetailsCard building={building} />
        </Col>
      </Row>
    </div>
  );
};

export default Sensors;
