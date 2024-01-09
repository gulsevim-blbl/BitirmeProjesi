import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">BİZE ULAŞIN</h1>
          <h4 className="text-justify mt-2">
            Ürünle ilgili her türlü soru ve bilgi için 7/24 müsait ve her zaman
            aramaktan çekinmeyin
          </h4>
          <h5 className="mt-3">
            <BiMailSend /> : www.help@roseglow.com
          </h5>
          <h5 className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </h5>
          <h5 className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Ücretsiz)
          </h5>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
