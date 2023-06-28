import Card from "react-bootstrap/Card";

function AdminCard() {
  return (
    <div style={{ margin: "auto auto", width: "60%", marginBottom: "12%" }}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          
          <Card.Text style={{ position:"relative" }}>
            <h4 style={{textAlign:"center"}}>
              "We responcsible for the great tast with greate spices"
            </h4>
            <img src=""></img>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminCard;
