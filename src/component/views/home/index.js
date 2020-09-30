import React, {Component} from "react";
import './style.css';
import Header from '../../../bagian/header/index';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import greenTea from '../../../images/green-tea.jpg'
import makan from '../../../images/makan.jpg'
import jamu from '../../../images/jamu.jpeg'
import { Carousel } from 'antd';

const { TabPane } = Tabs;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class Home extends Component {
  render() {
    return (
      <div className="Background">
        <div className="Home">
        <Header/>
        <Carousel autoplay>
          <div>
            <div className="header-satu"/>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Minuman" key="1">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Milk tea</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Thai Tea</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Green Tea</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Teh Manis</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/> 
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Coklat</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Lemon Tea</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Jeruk</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Milo</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Soda Susu</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={greenTea} alt="" />
                        <h3 className="title">Kopi Euy Latte</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/><br/><br/><br/>
              </TabPane>
              <TabPane tab="Toping" key="2">
              </TabPane>
              <TabPane tab="Makanan" key="3">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Mendoan</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Tahu Baso</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h4 className="title kentang">Kentang + Otak-otak + Sosis</h4>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Pisang Nuget</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/> 
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Nasi Goreng Euy</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Mie Nyemek Euy</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Roti Bakar</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Spagheti</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Pizza Mie</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h4 className="title mie">Mie Goreng Telur Sosis</h4>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={makan} alt="" />
                        <h3 className="title">Dimsum</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/><br/><br/><br/>
              </TabPane>
              <TabPane tab="Jamu" key="4">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={jamu} alt="" />
                        <h3 className="title">Gula Asem</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={jamu} alt="" />
                        <h3 className="title">Kunyit Asem</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11} offset={1}>
                      <div className="card">
                        <img className="card-gambar" src={jamu} alt="" />
                        <h3 className="title">Tumulawak</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                  <Col className="gutter-row" span={11} offset={-1}>
                      <div className="card">
                        <img className="card-gambar" src={jamu} alt="" />
                        <h3 className="title kunyit">Kunyit Asem + Siri</h3>
                        <p className="harga">Rp.5000,-</p>
                      </div>
                  </Col>
                </Row><br/><br/><br/><br/>
                </TabPane>
            </Tabs>
        </div>
      </div>
    );
  }
}
export default Home;