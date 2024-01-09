import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/Security.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h3> Gizlilik Politikası</h3>
          <h3> ISO 10002 Politikası</h3>
          <h3> Kalite Politikası</h3>
          <h3> Çevre Politikası</h3>
          <h3> Enerji Politikası</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
