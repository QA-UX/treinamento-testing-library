import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class User extends React.Component {
  state = {
    alunos: [],
    nome: '',
    sobrenome: '',
    email: '',
    endereco: '',
    celular: '',
    cidade: '',
    pais: '',
    cep: ''
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ [event.target.name]: value });
  }

  handleSubmit = (event) => {
    const { nome, sobrenome, email, endereco, cidade, pais, cep, celular } = this.state;
    event.preventDefault();
    const aluno = {
      'nome': nome,
      'sobrenome': sobrenome,
      'email': email,
      'endereco': endereco,
      'cidade': cidade,
      'pais': pais,
      'cep': cep,
      'celular': celular,
      status: 'inscrito'
    }
    this.setState({ alunos: [...this.state.alunos, aluno] });
  }

  confirmUser = (index) => {
    const newAlunos = [...this.state.alunos];
    if (index !== -1) {
      newAlunos.splice(index, 1);
      this.setState({ alunos: newAlunos });
    }
  }


  render() {
    const { alunos } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Adicionar Aluno</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label>Nome</label>
                          <Input
                            onChange={this.handleChange}
                            name="nome"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label>Sobrenome</label>
                          <Input
                            type="text"
                            onChange={this.handleChange}
                            name="sobrenome"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email
                          </label>
                          <Input
                            type="email"
                            onChange={this.handleChange}
                            name="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>Endereço</label>
                          <Input
                            type="text"
                            name="endereco"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Celular</label>
                          <Input placeholder="99999999"
                            onChange={this.handleChange}
                            type="number"
                            name="celular"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Cidade</label>
                          <Input
                            type="text"
                            name="cidade"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>País</label>
                          <Input
                            type="text"
                            name="pais"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>CEP</label>
                          <Input placeholder="99999999"
                            onChange={this.handleChange}
                            type="number"
                            name="cep"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick={this.handleSubmit}
                        >
                          Adicionar Aluno
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Alunos Adicionados Recentementes</CardTitle>
                </CardHeader>
                {alunos.map((aluno, index) => {
                  return (
                    <CardBody>
                      <ul className="list-unstyled team-members">
                        <li key={index}>
                          <Row>
                            <Col md="9" xs="7" test={`aluno-${index}-${aluno.celular}`}>
                              {aluno.nome} {aluno.sobrenome}<br />
                              <span className="text-muted">
                                <small>{aluno.status}</small>
                              </span>
                            </Col>
                            <Col className="text-right" md="3" xs="3">
                              <Button
                                test={`aluno-${index}-${aluno.celular}`}
                                className="btn-round btn-icon"
                                color="success"
                                onClick={() => this.confirmUser(index)}
                                outline
                                size="sm"
                              >
                                <i className="fa fa-check" />
                              </Button>
                            </Col>
                          </Row>
                        </li>
                      </ul>
                    </CardBody>
                  )
                })}
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
