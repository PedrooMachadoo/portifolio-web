import instagram from './instagram-icone.png';
import linkedin from './linkedin-icone.png';
import whatsapp from './whatsapp-icone.png';
import banner from './pedro2.png';

import { Col, Container, Row, Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Container fluid className="nopadding">
      <div className="App">
        <div className='foto-eu'>
          <div className="main">
            <div className="center">
              <div className="menu">
                <div>
                  <a className="item-menu" href='/'>HOME</a>
                  <a className="item-menu" href='#profissional'>PROFISSIONAL</a>
                  <a className="item-menu" href='/'>EXPERIÊNCIA</a>
                  <a className="item-menu" href='/'>PORTIFÓLIO</a>
                  <a className="item-menu" href='/'>CONTATO</a>
                </div>
              </div>
            </div>
          </div>

          <Row className="d-flex justify-content-center">
            <Col md={6} className="apresentacao">
              <h2 className="titulo-apresentacao">Olá, eu sou </h2>
              <div className="titulo-apresentacao-flex">
                <h2 className="titulo-apresentacao">Pedro Antônio</h2>
                <h2 className="titulo-apresentacao2">.</h2>
              </div>
              <p className="subtitulo-apresentacao">UI/UX DESIGNER</p>
            </Col>
          </Row>
        </div>


        <Row className="d-flex justify-content-center">
          <Row className="curriculo d-flex justify-content-center align-content-center">
            <Row className=" d-flex justify-content-center align-content-center">
              <Col className='texto-curriculo'>
                <Row className="d-flex justify-content-center">
                  <Col className='texto-curriculo2'>
                    <p>Um designer apaixonado por esse universo inovador criativo que está em<br></br>constante mudança. Aqui vai um pouco da minha trajetória como<br></br> profissional e alguns dos meus trabalhos, espero que gostem e vamos<br></br> mudar esse mundão juntos!!! </p>
                  </Col>
                </Row>
                <Row>
                  <Col className='texto-curriculo2'>
                    <a className="botao"> Baixar curriculo</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Row>

        <div className='profissional' id="profissional">
          <h3 className="profissional-titulo">PROFISSIONAL</h3>
          <p className="profissional-subtitulo">HABILIDADES</p>
          <div className="categorias">
            <p className="texto-categoria">UX/UI DESIGN</p>
            <p className="texto-categoria">WEB DESIGN</p>
            <p className="texto-categoria">BRANDING</p>
            <p className="texto-categoria">SEMIÓTICA</p>
            <p className="texto-categoria">DESIGN GRÁFICO</p>
            <p className="texto-categoria">PSICODINÂMICA DAS CORES</p>
            <p className="texto-categoria">DESIGN CENTRADO NO USUÁRIO</p>
          </div>
        </div>

        <div className="portifolio">
          <h3 className="portifolio-titulo">PORTIFÓLIO</h3>
          <p className="portifolio-subtitulo"> MEUS ÚLTIMOS TRABALHOS</p>

          <div className='produtos'>
            <img src={instagram} className="texto-produtos"></img>
            <img src={instagram} className="texto-produtos"></img>
            <img src={instagram} className="texto-produtos"></img>
          </div>
        </div>

        <div className='time-line'>
          <h3 className="experiencia-titulo">EXPERIÊNCIA</h3>

          <div className='experiencias'>
            <div>
              <div className='colunas-experiencias-esquerda-invisivel'>
                {/*espaço vazio*/}
              </div>

              <div className='colunas-experiencias-esquerda-visivel'>
                <p className="experienca-ano">2018 - 2019</p>
                <p className="experienca-empresa">AGÊNCIA CÓSMICA</p>
                <p className="experienca-Cargo">Estágio Design Gráﬁco</p>
                <p className="experienca-descricao">Trabalho focado em Direção de arte, junto com um <br></br> equipe de atendimento e social mídia, tínhamos o <br></br> trabalho de gerenciar as redes sociais, impulsionar <br></br> as mesmas com campanhas publicitárias, <br></br> entre outros.</p>
              </div>

              <div className='colunas-experiencias-esquerda-invisivel'>
                {/*espaço vazio*/}
              </div>

              <div className='colunas-experiencias-esquerda-visivel'>
                <p className="experienca-ano">2019 - 2021</p>
                <p className="experienca-empresa">PROMOVA COMUNICAÇÃO</p>
                <p className="experienca-Cargo">Design</p>
                <p className="experienca-descricao">Uma agência focada em marketing onde  tive <br></br> bastante experiência nessa área, e onde tive a <br></br> oportunidade de ter uma breve experiência como <br></br>UI Designer para desenvolver sites, dês de então <br></br> venho querendo aprender cada vez mais sobre essa <br></br> área de Design de Interface. </p>
              </div>

              <div className='colunas-experiencias-esquerda-invisivel'>
                {/*espaço vazio*/}
              </div>

              <div className='colunas-experiencias-esquerda-visivel'>
                <p className="experienca-ano">2017 - 2018</p>
                <p className="experienca-empresa">ROTA MÍDIA</p>
                <p className="experienca-Cargo">Estágio Design Gráﬁco</p>
                <p className="experienca-descricao">O trabalho tinha como foco a produção de <br></br> templates para mídia exterior como outdoor,<br></br> outbus, backbus, entre outros, porém o trabalho ia <br></br> além, mostrando e ensinando o estagiário a como <br></br> eram as técnicas de impressão do mesmo, para <br></br> melhor resultado do produto final.</p>
              </div>

            </div>

            <div className='traco-meio'> </div>

            <div>
              <div className='colunas-experiencias-direita-visivel'>
                <p className="experienca-ano">2017 - 2018</p>
                <p className="experienca-empresa">ROTA MÍDIA</p>
                <p className="experienca-Cargo">Estágio Design Gráﬁco</p>
                <p className="experienca-descricao">O trabalho tinha como foco a produção de <br></br> templates para mídia exterior como outdoor,<br></br> outbus, backbus, entre outros, porém o trabalho ia <br></br> além, mostrando e ensinando o estagiário a como <br></br> eram as técnicas de impressão do mesmo, para <br></br> melhor resultado do produto final.</p>
              </div>

              <div className='colunas-experiencias-direita-invisivel'>{/*espaço vazio*/}</div>

              <div className='colunas-experiencias-direita-visivel'>
                <p className="experienca-ano">2019 - 2020</p>
                <p className="experienca-empresa">TUCCI+ BRANDING</p>
                <p className="experienca-Cargo">Design Gráﬁco</p>
                <p className="experienca-descricao">Junto com a Diretora de arte, tínhamos que orientar <br></br>novos empreendedores a colocar seu negócio para <br></br>frente, em conjunto criávamos toda sua ID visual, <br></br>branding e gerenciava suas redes sociais.</p>
              </div>

              <div className='colunas-experiencias-direita-invisivel'>{/*espaço vazio*/}</div>

              <div className='colunas-experiencias-direita-visivel'>
                <p className="experienca-ano">2017 - 2018</p>
                <p className="experienca-empresa">ROTA MÍDIA</p>
                <p className="experienca-Cargo">Estágio Design Gráﬁco</p>
                <p className="experienca-descricao">O trabalho tinha como foco a produção de <br></br> templates para mídia exterior como outdoor,<br></br> outbus, backbus, entre outros, porém o trabalho ia <br></br> além, mostrando e ensinando o estagiário a como <br></br> eram as técnicas de impressão do mesmo, para <br></br> melhor resultado do produto final.</p>
              </div>

              <div className='colunas-experiencias-direita-invisivel'></div>

            </div>
          </div>

        </div>

        <Container>
          <Row className="d-flex justify-content-center">
            <Row className="contato d-flex justify-content-center align-content-center">
              <Row className=" d-flex justify-content-center align-content-center">
                <Col className='texto-curriculo'>
                  <div className="coluna">
                    <h5 className='contato-titulo'>Contato</h5>
                    <p className="texto-descricao">Gostou do meu trabalho? <br></br>​entra em contado  e vamos <br></br>mudar o mundo  juntos!</p>
                    <p className='texto-dados'>pedro.machado1108@gmail.com <br></br>Tel: (81) 9 9883-8259</p>
                  </div>
                </Col>
                <Col className='texto-curriculo'>
                  <Form>
                    <Row className='itens-formulario  mb-2'>
                      <Col md={6} className="">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Nome" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="tel" placeholder="Telefone" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className='itens-formulario  mb-2'>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Email" />
                      </Form.Group>
                    </Row>
                    <Row className='itens-formulario mb-2'>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control as="textarea" rows={3} placeholder="Descrição" />
                      </Form.Group>
                    </Row>
                    <Row className='mx-1'>
                      <Button variant="dark" size="lg" type="submit">Enviar</Button>
                    </Row>
                  </Form>
                </Col>
                <Row className="d-flex justify-content-center align-content-center mt-5">
                  <Col md={2} sm={3}>
                    <a target='blank' href="https://www.instagram.com/pedro_antoniomm/"><img src={instagram} className="rede-social" alt="instagram" /></a>
                  </Col>
                  <Col md={2} sm={3}>
                    <a target='blank' href="https://www.linkedin.com/in/pedro-ant%C3%B4nio-0a41621a6/"><img src={linkedin} className="rede-social" alt="linkedin" /></a>
                  </Col >
                  <Col md={2} sm={3}>
                    <a target='blank' href="https://api.whatsapp.com/send/?phone=5581998838259&text&type=phone_number&app_absent=0"><img src={whatsapp} className="rede-social" alt="whatsapp" /></a>
                  </Col>
                </Row>
              </Row>
            </Row>
          </Row>
        </Container>
        {/*
      <div className='contato-formulario'>
        <div className='contato'>
          <div className="coluna">
            <h5 className='contato-titulo'>Contato</h5>
            <p className="texto-descricao">Gostou do meu trabalho? <br></br>​entra em contado  e vamos <br></br>mudar o mundo  juntos!</p>
            <p className='texto-dados'>pedro.machado1108@gmail.com <br></br>Tel: (81) 9 9883-8259</p>
          </div>

          <div className='formulario'>
            <form>
              <div className='itens-formulario'>
                <input placeholder="Nome" type="text" />
                <input placeholder="Número" type="number" />
                <input placeholder="E-mail" type="email" />
                <textarea placeholder="Descrição" />
                <input type="submit" />
              </div>
            </form>
          </div>


          <div className='contato-icone'>

            <a target='blank' href="https://www.instagram.com/pedro_antoniomm/"><img src={instagram} className="rede-social" alt="instagram" /></a>
            <a target='blank' href="https://www.linkedin.com/in/pedro-ant%C3%B4nio-0a41621a6/"><img src={linkedin} className="rede-social" alt="linkedin" /></a>
            <a target='blank' href="https://api.whatsapp.com/send/?phone=5581998838259&text&type=phone_number&app_absent=0"><img src={whatsapp} className="rede-social" alt="whatsapp" /></a>
          </div>

        </div>
      </div>
    */}
        <div className="rodape">
          <p className="direitos">© Direito Pedro Antônio - 2022</p>
        </div>
      </div >
    </Container>
  );
}

export default App;
