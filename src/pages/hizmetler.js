import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import KatekNavbar from "../components/KatekNavbar";
import SEO from "../components/SEO";

export default function Hizmetler() {
  return (
    <>
      <SEO
        title={
          "Hizmetler Sayfası | Elektrik taahhüt, Veri merkezi kurulumu ve proje yönetimi ve daha nice konularda bizden alabileceğiniz hizmetler."
        }
        description={`Elektrik taahhüt işleri, 
          verimerkezi kurulumları, 
          yapısal kablolama sistemleri, 
          enerji altyapı sistemleri, 
          tesis işletim hizmetleri, 
          teknik servis ve bakım hizmetleri gibi alanlar KA Teknoloji'nin ana faaliyet alanlarıdır.`}
        name={"KA Teknoloji İletişim Sayfası"}
        type={"article"}
      />
      <Container>
        <Row>
          <Col>
            <KatekNavbar />
          </Col>
        </Row>

        <Row className="mt-5">
          <div className="mb-5 text-center">
            <h1 className="display-5 fw-bold lh-1 mt-3 text-center">
              Hizmet Verdiğimiz Başlıca Alanlar
            </h1>
            <span className="text-center">
              Bir çok alanda kurulum hizmeti sunduğumuz gibi, ev ve
              işyerlerinizin bakım ve onarımını da üstlenmekteyiz.
            </span>
          </div>
          <Col md className="d-flex align-items-center">
            <div className="">
              <h1>Teknolojik İnşai İşler</h1>
              <ul className="lead">
                <li> Yangına Dayanıklı Kapı Uygulamaları</li>
                <li> Yanmaz Epoxy ve Boya Uygulamaları</li>
                <li> Yükseltilmiş Döşeme Uygulamaları</li>
                <li> Yangın Durdurucu Malzeme Uygulamaları</li>
              </ul>
            </div>
          </Col>
          <Col md>
            <img
              src="../assets/img/insai.png"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md>
            <img
              src="../assets/img/cctv.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
          <Col md className="d-flex align-items-center">
            <div>
              <h1 className="">CCTV Sistemleri</h1>
              <span className="lead mb-2">
                İşletmenizin ihtiyaçları için özel olarak dizayn edilmiş
                güvenlik kameraları ile izlenmekte ve bu görüntüler kayıt altına
                alınmaktadır.
              </span>
              <ul className="lead">
                <li>Analog Kamera Sistemleri</li>
                <li>IP Kamera Sistemleri</li>
                <li>Kayıt Cihazları</li>
              </ul>
            </div>
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md className="d-flex align-items-center">
            <div className="">
              <h1>Yükseltilmiş Döşeme Sistemleri</h1>
              <ul className="lead">
                <li>Lamine Kaplı Paneller</li>
                <li>Folyo Kaplı Paneller</li>
                <li>PVC Kaplı Paneller</li>
                <li>Kalsiyum Sülfat Seçenekleri</li>
                <li>Deprem Gergileri</li>
              </ul>
            </div>
          </Col>
          <Col md>
            <img
              src="../assets/img/yukseldoseme.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md>
            <img
              src="../assets/img/yangın.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
          <Col md className="d-flex align-items-center">
            <div>
              <h1 className="">Yangın Algılama ve Söndürme Sistemleri</h1>
              <span className="lead mb-2">
                Yangın bir işletmenin başına gelebilecek en kötü senaryolardan
                biridir. Bu nedenle yangın algılama ve söndürme sistemi bir
                işletmede bulunması zorunlu olan bir sistemdir. Yangın söndürme
                ve algılama sistemleri bir işletmede bulunan canlılara ve
                elektronik cihazlara zarar vermeyecek şekilde olmalıdır.
              </span>
              <ul className="lead">
                <li>FM200 Söndürme Sistemleri</li>
                <li>Novec1230 Söndürme Sistemleri</li>
                <li>Konvansiyonel / Adresli Yangın Algılama Sistemleri</li>
                <li>Hava Örneklemeli Duman Algılama Sistemleri</li>
                <li>Oda Sızdırmazlık Testleri</li>
              </ul>
            </div>
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md className="d-flex align-items-center">
            <div className="">
              <h1>Hassas Kontrollü Klima Sistemleri</h1>
              <span className="lead mb-2">
                24 saat kesintisiz soğutma ve nem kontrolü, Hassas Kontrollü
                Klima Sistemleri ile gerçekleştirilmektedir. Hassas Kontrollü
                Klima Sistemleri; Bilgi İşlem Merkezlerinde, Sistem Odalarında,
                Telekomünikasyon Odalarında, Ups Odalarında, Güç Merkezlerinde
                kullanılmaktadır.
              </span>
              <ul className="lead">
                <li>Air To Air Sistemler</li>
                <li>Freecooling Chiller Sistemleri</li>
                <li>DX Sistemler</li>
                <li>Split Klima Sistemleri</li>
                <li>Drycooler Uygulamaları</li>
              </ul>
            </div>
          </Col>
          <Col md>
            <img
              src="../assets/img/hassas.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md>
            <img
              src="../assets/img/altyapi.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
          <Col md className="d-flex align-items-center">
            <div>
              <h1 className="">Kabinet ve Koridor Kapama Sistemleri</h1>
              <span className="lead mb-2">
                Sistem odası donanımlarının fiziksel muhafazası ve aynı zamanda
                da kolay şartlarda hizmet vermesini sağlaması, server
                kabinetlerinin gerekliliğini sağlayan en öncelikli
                sebeplerdendir.
              </span>
              <ul className="lead">
                <li>Server / Network Kabinleri</li>
                <li>Kapalı Sıcak ve Soğuk Koridor Kurulumları</li>
                <li>PDU Temini ve Kurulumları</li>
              </ul>
            </div>
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md className="d-flex align-items-center">
            <div className="">
              <h1>Enerji Altyapı Çözümleri</h1>

              <ul className="lead">
                <li>Tek Hat Şemalarının Hazırlanması</li>
                <li>Kablo Kesitlerinin Belirlenmesi</li>
                <li>Jeneratör, UPS ve Trafo Seçimi</li>
                <li>OG/AG Pano Dizaynı</li>
                <li>Aydınlatma Sistemleri</li>
                <li>Busbar Sistemleri</li>
                <li>Kompanzasyon Panoları</li>
                <li>Jeneratör Dağıtım Sistemleri</li>
                <li>Anahtar Teslim Çözümler</li>
                <li>Aydınlatma Kontrol Sistemleri</li>
                <li>Akıllı Bina Çözümleri</li>
                <li>Çevre Aydınlatma tesisatı</li>
                <li>Paratoner ve Topraklama Sistemleri</li>
              </ul>
            </div>
          </Col>
          <Col md>
            <img
              src="../assets/img/altyapi-iki.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md>
            <img
              src="../assets/img/chip.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
          <Col md className="d-flex align-items-center">
            <div>
              <h1 className="">Data Altyapı Hizmetleri</h1>
              <span className="lead mb-2">
                Sistem odası donanımlarının fiziksel muhafazası ve aynı zamanda
                da kolay şartlarda hizmet vermesini sağlaması, server
                kabinetlerinin gerekliliğini sağlayan en öncelikli
                sebeplerdendir.
              </span>
              <ul className="lead">
                <li>
                  OM3, OM4, CAT6, CAT6A, CAT7 kablo ve patchpanel ürünleri
                </li>
                <li>Yapısal kablolama hizmet</li>
                <li>Fiber kablo testi (OTDR) ve Bakır kablo testleriniz</li>
                <li>Kablo etiket hizmeti</li>
                <li>Fiber runner ve Tel Sepet sistemleri</li>
              </ul>
            </div>
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md className="d-flex align-items-center">
            <div className="">
              <h1>Network Kurulum Hizmetleri</h1>
              <span className="lead mb-2">
                Kurumsal çözüm ortağımız Albicom ile Network ve Cihaz kurulum
                desteği vermekteyiz. Türkiye’nin en büyük bilişim firmalarında
                kariyer sahibi uzman ekibimiz ile şu hizmetleri vermekteyiz;
              </span>
              <ul className="lead">
                <li>Cisco, Juniper, HP, Huawei Switch/Router kurulumları</li>
                <li>Dahili Tesisat çözümleri</li>
                <li>IP Telefon kurulumu, desteği</li>
                <li>Network Altyapı Desteği</li>
                <li>IP tabanlı sistemlerinizin yönetimi, bakımı</li>
                <li>ISP ve Network bazında danışmanlık</li>
              </ul>
            </div>
          </Col>
          <Col md>
            <img
              src="../assets/img/network.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
        </Row>

        <div
          style={{ width: "50vw" }}
          className="mx-auto border-bottom border-dark m-5"
        ></div>

        <Row className="mt-5">
          <Col md>
            <img
              src="../assets/img/altyapi-iki.jpg"
              className="d-md-block serviceImg mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
          <Col md className="d-flex align-items-center">
            <div>
              <h1 className="">Altyapı Hizmetleri</h1>
              <span className="lead mb-2">
                7 / 24 kesintisiz hizmet veren, alanında uzman teknik
                ekiplerimizle siz değerli müşterilerimize teknik servis hizmeti
                veriyoruz. Ayrıca uzman kadromuzla bakım ve işletme hizmeti
                vermekteyiz. Bu kapsamda; tüm işletmelerin periyodik
                bakımlarını, çağrı bazlı bakımlarını ve arıza giderme
                hizmetlerini sunmaktayız.
              </span>
              <ul className="lead">
                <li>Enerji Alt Yapı bakım hizmetleri</li>
                <li>UPS, Jeneratör, ATS, Pano bakım hizmetleri</li>
                <li>Hassas Kontrollü Klima bakım hizmetleri</li>
                <li>Split Klima bakım hizmetleri</li>
                <li>Yangın algılama ve söndürme sistemleri bakım hizmetleri</li>
                <li>CCTV Sistemleri bakım hizmetleri</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <CTA />
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}
