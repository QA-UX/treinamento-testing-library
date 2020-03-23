/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
  state = {
    visible: true
  };
  notificationAlert = React.createRef();
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7
    };
    this.notificationAlert.current.notificationAlert(options);
  }
  render() {
    return (
      <>
        <div className="content">
          <NotificationAlert ref={this.notificationAlert} />
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Card className="card-plain">
                        <CardBody>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="0"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              O Aluno 10865-10 Foi inscrito com sucesso - John Snow
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="1"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                            O Aluno 10866-14 Foi inscrito com sucesso - Victor Teso
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="2"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                            O Aluno 10867-18 teve sua inscrição recusada
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="3"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 4956 Turma 22 foi requisitado documentos MEC
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="4"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 5554 Tuma 30 foi aprovado pelo MEC
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="5"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 5000 Tuma 01 foi aprovado pelo MEC
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                            test="6"
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 5552 Tuma 31 obteve nota máxima no MEC
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="7"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Aluno 10855-18 teve sua inscrição recusada 
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="8"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 5777 Tuma 10 obteve nota 4 no MEC
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="9"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              O Aluno 10444-10 necessita enviar os documentos restantes
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="10"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              O Aluno 11455-18 não entregou os documentos no prazo
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="11"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 3333 Tuma 55 teve inicio dia 14/10/2019
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            test="12"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 5522 Tuma 20 teve seu incio adiado
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                            test="13"
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span data-notify="message">
                              Curso 222 Tuma 10 teve inicio no dia 16/10/2019
                            </span>
                          </UncontrolledAlert>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
