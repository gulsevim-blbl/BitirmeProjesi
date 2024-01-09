import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - RoseGlow"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/whoweare.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            RoseGlow olarak 2005 yılında Türk modasına taze bir bakış açısı
            getirmek, kaliteli ve özgün tasarımlarımızı dünyanın dört bir
            yanındaki tüketicilerle buluşturmak için yola çıktık. Kurulduğumuz
            günden bu yana heyecanımızı hep canlı tutarak önemli işlere ve
            başarılara imza attık.
            <p> </p>
            Global bir Türk markası olma amacıyla yeniliği ve yenilenmeyi kurum
            kültürümüz olarak benimsedik.
            <p></p>
            15 binden fazla ferdi bulunan RoseGlow Ailesi olarak 'önce kendini
            sevmelisin' mottosuyla kendimizi, herkesin rahat ve iyi hissedeceği
            bir moda konsepti sunmaya adadık. Çünkü; herkesin önce kendini
            sevmesinin ne kadar önemli olduğunu biliyoruz. Bizi biz yapan
            şeylerden biri de stilimiz. Giydiklerimizi kendimize yakıştırmanın
            en kolay yolu ise içimizden geldiği gibi görünmemiz.
            <p></p>
            <h3>
              Şimdi herkesi içinden geldiği gibi görünmeye ve iyi hissetmeye
              davet ediyoruz.
            </h3>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
