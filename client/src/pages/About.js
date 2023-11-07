import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - RoseGlow"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/hakkında1.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Türkiye'nin RoseGlow'u olarak, 30’dan fazla kategoride, 200 milyona
            yakın ürün çeşidini müşterilerimizle buluşturuyoruz. Veri ile
            tecrübeyi harmanlayan ekiplerimizle, aylık yaklaşık on milyon
            siparişi müşterilerimize ulaştırıyoruz.
            <p> </p>
            Müşteri deneyimini merkeze alan bir felsefeyle, on binlerce
            işletmeyi bir araya getiren pazaryeri modelimizle, Türkiye'nin ve
            bölgenin en büyüğü olan Akıllı Operasyon Merkezimizle, sektörün
            çıtasını yükselten teknolojik çalışmalar yürüttüğümüz Ar-Ge
            Merkezimizle sektörün gelişimine ve dijital dönüşüme liderlik
            ediyoruz.
            <p> </p>
            Bir teknoloji şirketi olarak; teknolojinin yıkıcı değil, yapıcı
            gücüne odaklanıyoruz.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
