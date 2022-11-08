import { ContainerDesktopFooter, ContainerFooter } from "./footer.styled";
import logoImg from "../../assets/images/logo.png";
import ytImg from "../../assets/images/yt-amarilo-ico.png";
import igImg from "../../assets/images/Amarilo-Instagram.png";
import fbImg from "../../assets/images/fb-amarilo-ico.png";
import ldImg from "../../assets/images/linkedld-amarilo.png";


export const Footer = () => {
  return (
    <ContainerFooter>
      <div className="logofoot">
        <a href="#id" title="Inicio" className="inicio">
          <img src={logoImg} alt="Inicio" />
        </a>

        <div className="telephone-lines">
          <p>Contact Center 601 634 0000</p>
          <p>Línea Gratuita 01 8000 122442</p>
        </div>

        <div className="contact">
          <p className="contact-p"><a href="mailto:servicioalcliente@amarilo.com">servicioalcliente@amarilo.com</a></p>
        </div>

        <div className="address">
          <p>Calle 90 # 11A - 27, Bogotá - Colombia</p>
          <p className="copyright-texto">© Amarilo 2022</p>
        </div>

        <div className="wrapper-redes-sociales">
          <span className="red-item"><a href="https://www.youtube.com/channel/UCat4XO8ArAzhczeuk2qN_uw/videos" alt="YouTube Amarilo" title="YouTube Amarilo" target="_blank" rel="noreferrer"><img src={ytImg} alt="Amarilo" /></a></span>
          <span className="red-item"><a href="https://www.facebook.com/AmariloSA/" alt="Facebook Amarilo" title="Facebook Amarilo" target="_blank" rel="noreferrer"><img src={fbImg} alt="Amarilo" /></a></span>
          <span className="red-item"><a href="https://www.instagram.com/amarilo_constructora/" alt="Instagram Amarilo" title="Instagram Amarilo" target="_blank" rel="noreferrer"><img src={igImg} alt="Amarilo" /></a></span>
          <span className="red-item"><a href="https://www.linkedin.com/company/amarilo-s.a" alt="linkedin Amarilo" title="linkedin Amarilo" target="_blank" rel="noreferrer"><img src={ldImg} alt="Amarilo" /></a></span>
        </div>

      </div>
      <ContainerDesktopFooter>
        <ul className="nav">
          <li className="nav-menu"><p className="leaf-title">Sobre Amarilo</p>
            <ul className="menu">
              <li className="leaf"><a href="/contenido/quienes-somos">Quíenes Somos</a></li>
              <li className="leaf"><a href="https://landing.amarilo.com.co/refiere-a-tus-vecinos#formulario">Vecinos</a></li>
              <li className="leaf"><a className="text-transform" href="/contenido/informes-de-sostenibilidad ">Informes de Sostenibilidad</a></li>
              <li className="leaf"><a className="text-transform" href="/contenido/programa-acompanamiento-social-pas" target="_blank">Programa de Acompañamiento Social (P.A.S)</a></li>
              <li className="leaf"><a href="https://amarilo.com.co/linea-etica">Línea Ética</a></li>
              <li className="leaf"><a className="text-transform" href="https://mkt.casapropiacolombia.com/feria-de-vivienda-febrero-marzo-virtual-2022-amarilo">Compra de vivienda desde el exterior</a></li>
              <li className="leaf"><a href="https://amarilo.com.co/sites/default/files/talento_amarilo.pdf">Talento Amarilo</a></li>
            </ul>
          </li>
          <li className="nav-menu"><p className="leaf-title">Acceso</p>
            <ul className="menu">
              <li className="leaf"><a href="http://proveedores.amarilo.com:8088/aswProv/">Proveedores</a></li>
              <li className="leaf"><a href="https://amarilo.com.co/contenido/desarrollo-terrenos">Registrar Predios</a></li>
            </ul>
          </li>
          <li className="nav-menu"><p className="leaf-title">Legal</p>
            <ul className="menu"><li className="first leaf"><a className="text-transform" href="/contenido/politica-tratamiento-datos">Política de tratamiento de datos personales</a></li>
              <li className="leaf"><a href="/reglamentos">Reglamentos</a></li>
              <li className="leaf"><a href="/contenido/manual-ssta" className="active-trail active">Manual SSTA</a></li>
              <li className="leaf"><a href="https://amarilo.com.co/contenido/politica-ssta">Política SSTA</a></li>
              <li className="leaf"><a href="https://amarilo.com.co/protocolos-de-seguridad-colaboradores-Amarilo">Protocolo Retoma de Labores</a></li>
              <li className="leaf"><a href="https://amarilo.com.co/informes/protocolo-general-de-bioseguridad.pdf">Cartilla Protocolo</a></li>
            </ul>
          </li>
          <li className="nav-menu"><p className="leaf-title">Contáctenos</p>
            <ul className="menu"><li className="first leaf"><a href="https://amarilo.com.co/servicio-al-cliente">Servicio al Cliente</a></li>
              <li className="leaf"><a href="http://apps.amarilo.com/preview/web">Posventa</a></li>
              <li className="leaf"><a href="https://servicioalclienteamarilo.custhelp.com/app/ask/">Peticiones, Quejas y Reclamos</a></li>
            </ul>
          </li>
        </ul>
      </ContainerDesktopFooter>
    </ContainerFooter>
  )
}