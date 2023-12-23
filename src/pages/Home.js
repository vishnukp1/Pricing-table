import React from "react";
import { MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit";
import MainHead from "../components/Header/Header";
import Main from "../components/Main/Main";
import "../styles/Main.css"
import LogoHeader from "../components/Header/LogoHeader";


export default function Home() {
  return (
    <section
      className="h-100 h-custom py-5 home-section"
      style={{ paddingRight: "3rem", backgroundColor: "#E2F0FD" }}
    >
      <LogoHeader />
      <MainHead />

      <MDBRow className="">
        <MDBCol>
          <MDBCard>
            <Main />
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
