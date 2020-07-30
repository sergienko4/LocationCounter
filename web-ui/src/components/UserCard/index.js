import React from "react";
import { isNull } from "lodash";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Label,
  FormGroup,
  Button,
} from "reactstrap";
import { UserTypeSelector } from "../UserType";

export const UsersCard = ({ user, onChange, onSave, onCreate }) => {
  const onClick = user?.id ? onSave : onCreate;

  return !isNull(user) ? (
    <>
      <Row>
        <Col>
          <div className="animated fadeIn fadeOut">
            <Card>
              <CardHeader>
                <i className="icon-user"></i> <b>{user.user_name}</b>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        value={user.user_name}
                        type="text"
                        id="name"
                        onChange={({ target: { value } }) => {
                          onChange({ user_name: value });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        value={user.email}
                        type="text"
                        id="floor"
                        onChange={({ target: { value } }) => {
                          onChange({ email: value });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <UserTypeSelector
                      value={user.user_type}
                      onChange={({ target: { value } }) => {
                        onChange({ user_type: value });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12"></Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  onClick={onClick}
                >
                  Save
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  ) : (
    ""
  );
};