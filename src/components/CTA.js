import React from "react";

export default function CTA() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold">
          Bizi tercih etmeniz için çok fazla nedenimiz var…
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Yaşanabilecek herhangi bir teknik arızayı nasıl mı çözeceksiniz?
            Kaliteli bir hizmet mi talep etmektesiniz? Ve tüm bunların bütçenize
            uygun mu olmasını beklemektesiniz? Doğru adrestesiniz…​
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
              href="/iletisim"
            >
              Teklif İste!
            </a>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "35vh" }}>
          <div className="container px-5">
            <img
              src="../assets/img/chip.jpg"
              className="img-fluid border rounded-3 mb-4"
              alt="örnek görsel"
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
