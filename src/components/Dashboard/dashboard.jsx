import React, { Component } from 'react';
import './dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgBimbo: "/images/Logo_Bimbo_Gris.png",
      imgMarinela: "/images/Logo_Marinela_Gris.png",
      imgBarcel: "/images/Logo_Barcel_Gris.png",
      imgTiaRosa: "/images/Logo_TiaRosa_Gris.png",
      alertBimbo: "",
      alertMarinela: "",
      alertBarcel: "",
      alertTiaRosa: "",
      date: new Date().toLocaleDateString('es-MX'),
      serviceBimbo: [],
      serviceMarinela: [],
      serviceBarcel: [],
      serviceTiaRosa: []
    }
  }

  changeImg = (e, num) => {
    e.preventDefault()
    let alert = "/images/icon-alert.gif"
    let data = { time: new Date().toLocaleTimeString('es-MX'), shop: "Tienda Estrella", address: "Tejocote 23, Bosques de ixtacala 52919, Atizapan de Zaragoza, Edo. México" }
    switch(num != null) {
      case num === 1 :
        this.state.serviceBimbo.push(data)
        this.setState({
          imgBimbo: "/images/Logo_Bimbo.png",
          alertBimbo: alert
        });
      break;
      
      case num === 2 :
        this.state.serviceMarinela.push(data)
        this.setState({
          imgMarinela: "/images/Logo_Marinela.png",
          alertMarinela: alert
        });
      break;

      case num === 3 :
        this.state.serviceBarcel.push(data)
        this.setState({
          imgBarcel: "/images/Logo_Barcel.png",
          alertBarcel: alert
        });
      break;

      case num === 4 :
        this.state.serviceTiaRosa.push(data)
        this.setState({
          imgTiaRosa: "/images/Logo_TiaRosa.png",
          alertTiaRosa: alert
        });
      break;

      default :
        alert = ""
      break;
    }
  }

  getServicesBimbo = () => {
    if (this.state.serviceBimbo[0]) {
      let data = this.state.serviceBimbo.map( serv => {
        return(
          <tr>
            <th scope="row">{serv.time}</th>
            <td>{serv.shop}</td>
            <td>{serv.address}</td>
          </tr>
        )
      })

      return data
    } else {
      return(
        <tr>
          <th scope="row"></th>
          <td>Sin servicios</td>
          <td></td>
        </tr>
      )
    }
  }

  getServicesMarinela = () => {
    if (this.state.serviceMarinela[0]) {
      let data = this.state.serviceMarinela.map( serv => {
        return(
          <tr>
            <th scope="row">{serv.time}</th>
            <td>{serv.shop}</td>
            <td>{serv.address}</td>
          </tr>
        )
      })

      return data
    } else {
      return(
        <tr>
          <th scope="row"></th>
          <td>Sin servicios</td>
          <td></td>
        </tr>
      )
    }
  }

  getServicesBarcel = () => {
    if (this.state.serviceBarcel[0]) {
      let data = this.state.serviceBarcel.map( serv => {
        return(
          <tr>
            <th scope="row">{serv.time}</th>
            <td>{serv.shop}</td>
            <td>{serv.address}</td>
          </tr>
        )
      })

      return data
    } else {
      return(
        <tr>
          <th scope="row"></th>
          <td>Sin servicios</td>
          <td></td>
        </tr>
      )
    }
  }

  getServicesTiaRosa = () => {
    if (this.state.serviceTiaRosa[0]) {
      let data = this.state.serviceTiaRosa.map( serv => {
        return(
          <tr>
            <th scope="row">{serv.time}</th>
            <td>{serv.shop}</td>
            <td>{serv.address}</td>
          </tr>
        )
      })

      return data
    } else {
      return(
        <tr>
          <th scope="row"></th>
          <td>Sin servicios</td>
          <td></td>
        </tr>
      )
    }
  }

  render() {
    return ( 
      <React.Fragment>
        <div className="container-fluid background_dashboard">
          <div className="row justify-content-center text-center">
            <h1 className="text_title_dashboard mt-5">{this.state.date}</h1>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-3"><button className="btn btn-success" onClick={(e) => this.changeImg(e, 1)}>Change!</button></div>
            <div className="col-md-3"><button className="btn btn-success" onClick={(e) => this.changeImg(e, 2)}>Change!</button></div>
            <div className="col-md-3"><button className="btn btn-success" onClick={(e) => this.changeImg(e, 3)}>Change!</button></div>
            <div className="col-md-3"><button className="btn btn-success" onClick={(e) => this.changeImg(e, 4)}>Change!</button></div>
          </div>
          <div className="row justify-content-center mt-5 text-center">
            <div className="col-md-3"><img src={this.state.alertBimbo} className="mt-5" width="50" alt=""/><br/></div>
            <div className="col-md-3"><img src={this.state.alertMarinela} className="mt-5" width="50" alt=""/><br/></div>
            <div className="col-md-3"><img src={this.state.alertBarcel} className="mt-5" width="50" alt=""/><br/></div>
            <div className="col-md-3"><img src={this.state.alertTiaRosa} className="mt-5" width="50" alt=""/><br/></div>
          </div>
          <div className="row justify-content-center mt-5 text-center">
            <div className="col-md-3">
              <img src={this.state.imgBimbo} className="mt-4" alt="" />
            </div>
            <div className="col-md-3">
              <img src={this.state.imgMarinela} className="mt-5" alt="" />
            </div>
            <div className="col-md-3">
              <img src={this.state.imgBarcel} width="200" alt="" />
            </div>
            <div className="col-md-3">
              <img src={this.state.imgTiaRosa} width="200" className="mt-3" alt="" />
            </div>
          </div>
          <div className="row justify-content-center mt-5 text-center">
            <div className="col-md-3 tbody table-responsive">
              <table className="table table-striped">
                <thead className="thead_color_dashboard">
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Tienda</th>
                    <th scope="col">Dirección</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getServicesBimbo()}
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <table className="table table-striped">
                <thead className="thead_color_dashboard">
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Tienda</th>
                    <th scope="col">Dirección</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getServicesMarinela()}
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <table className="table table-striped">
                <thead className="thead_color_dashboard">
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Tienda</th>
                    <th scope="col">Dirección</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getServicesBarcel()}
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <table className="table table-striped">
                <thead className="thead_color_dashboard">
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Tienda</th>
                    <th scope="col">Dirección</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getServicesTiaRosa()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default Dashboard;