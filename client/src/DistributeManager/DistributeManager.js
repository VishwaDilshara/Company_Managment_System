import "../SupplierManager/SupplierManager.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import * as React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";

function DistributeManager() {
  const navigate = useNavigate();

  // function navigateToList() {
  //   navigate("create/SupplierList");
  //   window.print();
  // }

  return (
    <div
      className="mainDiv"
      style={{
        position: "relative",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div>
        <div //background image
          className="background"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            width: "100%",
            height: "100vh",
            backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
            opacity: 0.2,
          }}
        ></div>

        <Header />

        <br />
        <div className="App" style={{ position: "relative" }}>
          <div className="greeting">
            <h2>Distribution Management System</h2>
          </div>

          <Button
            id="addistributer"
            className="navigationbtns me-4"
            onClick={() => navigate("/DistributeManager/createdistributer")}
            // variant="outline-primary"
            variant="success"
          >
            Add Distributer
          </Button>

          <Button
            id="addistributer"
            className="navigationbtns me-4"
            onClick={() => navigate("/DistributeManager/createvehicle")}
            // variant="outline-primary"
            variant="success"
          >
            Add Vehicles
          </Button>

          <Button
            id="DistributeListBtn"
            className="navigationbtn"
            onClick={() =>
              navigate("/DistributeManager/createdistributer/DistributeList")
            }
          >
            Distributers List
          </Button>

          <Button
            id="vehiclelistBtn"
            className="navigationbtn"
            onClick={() =>
              navigate("/DistributeManager/createvehicle/VehicleList")
            }
            style={{
              marginLeft: "1.5%",
            }}
          >
            Vehicles List
          </Button>
        </div>

        <div id="informationCard">
          <Card id="orderheader">
            {" "}
            <h2>Order details of lanka flavour</h2>{" "}
            <Card.Body>
              <h5 className="profileContent"> </h5>
              <Row>
                <div>
                  <Button
                    id="viewlist"
                    className="navigationbtns me-4"
                    onClick={() => navigate("")}
                    // variant="outline-primary"
                    variant="success"
                  >
                    View List
                  </Button>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>

        <Card id="informationCard">
          <Card.Body>
            <h5 className="profileContent"> </h5>
            <Row>
              <div>
                <Button
                  id="today distribute list"
                  className="navigationbtns me-4"
                  onClick={() => navigate("")}
                  // variant="outline-primary"
                  variant="success"
                >
                  Today Distribute List
                </Button>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <div>
        <MDBFooter
          className="text-center footerCard"
          color="white"
          bgColor="dark"
        >
          <MDBContainer className="p-4">
            <section className="mb-4">
              <p></p>
            </section>
          </MDBContainer>
        </MDBFooter>
      </div>
    </div>
  );
}

export default DistributeManager;
