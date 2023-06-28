import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; //deleted the (, useEffect )
import axios from "axios";
import "../components/cssForComponents/headerStyles.css";
import SystemHeader from "../components/SystemHeader";

function AddManagers() {
  const [validated, setValidated] = useState(false);
  const [selectedValue, setSelectedValue] = useState(""); // Add this state variable
  const [selectedName, setSelectedName] = useState(""); // Add this state variable

  const navigate = useNavigate();
  const [post, setPost] = useState({
    JobTitle: "",
    Email: "",
    FullName: "",
    NIC: "",
    Gender: "",
    Telephone_No: "",
    Address: "",
    Password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "JobTitle") {
      setSelectedValue(value); // Add this line to capture the selected value
      setSelectedName(event.target.options[event.target.selectedIndex].text); // Add this line to capture the selected name
    }

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const checkEmptyFields = (post) => {
      for (let prop in post) {
        if (post[prop] === "") {
          return true;
        }
      }
      return false;
    };

    if (checkEmptyFields(post) === true) {
      setValidated(true);
    } else {
      setValidated(true);
      // AXIOS
      await axios
        .post("/AddManagers", {
          ...post,
          UserType: selectedValue, // Replace 'selectedValue' with the actual variable holding the selected value
          JobTitle: selectedName, // Replace 'selectedName' with the actual variable holding the selected name
        })
        .then((res) => {
          console.log(res);
          navigate("/AdminManager/AddManagers/ManagerList");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <SystemHeader />

      <br />
      <div style={{ width: "40%", margin: "auto auto", textAlign: "center" }}>
        <h2 id="headerS">Add Manager</h2>
        <Form className="Sform" noValidate validated={validated}>
          <Form.Group>
            <Form.Group>
              {/* <Form.Control
                as="select"
                name="JobTitle"
                value={post.JobTitle}
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
                onChange={handleChange}
                required
              > */}
              <select
                className="select_bar"
                as="select"
                name="JobTitle"
                value={post.JobTitle}
                style={{
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
                onChange={handleChange}
                required
              >
                <option value="">Select The Job Title</option>
                <option value="/Man">Customer Management System</option>
                <option value="/SupplierManager">
                  Supplier Management System
                </option>
                <option value="/AdminManager">Admin Management System</option>
                <option value="/DistributeDash">
                  Distribution Management System
                </option>
                <option value="/finance">Financial Management System</option>
                <option value="/ProductManager/ProductList">
                  Product Management System
                </option>
                <option value="/storage">Storage Management System</option>
                <option value="/employeemanager">
                  Employee Management System
                </option>
              </select>
              {/* </Form.Control> */}
              <Form.Control.Feedback type="invalid">
                Please provide Job Title
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Control
              name="UserName"
              value={post.UserName} //according to CreatePost state
              placeholder="User Name"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide User Name
            </Form.Control.Feedback>
            <Form.Control
              name="Email"
              value={post.Email} //according to CreatePost state
              placeholder="Email"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide Email
            </Form.Control.Feedback>

            <Form.Control
              name="FullName"
              value={post.FullName} //according to CreatePost state
              placeholder="Full Name"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide Full Name
            </Form.Control.Feedback>

            <Form.Control
              name="NIC"
              value={post.NIC} //according to CreatePost state
              placeholder="NIC"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide NIC
            </Form.Control.Feedback>

            <Form.Control
              name="Gender"
              value={post.Gender} //according to CreatePost state
              placeholder="Geneder"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide Gender
            </Form.Control.Feedback>

            <Form.Control
              name="Telephone_No"
              value={post.Telephone_No} //according to CreatePost state
              placeholder="Telephone_No"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide Telephone_No
            </Form.Control.Feedback>

            <Form.Control
              name="Address"
              value={post.Address}
              placeholder="Address"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide Address
            </Form.Control.Feedback>
            <Form.Control
              name="Password"
              value={post.Password}
              placeholder="Password"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Plrese provide Password
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            style={{ width: "100%", marginBottom: "1rem" }}
            variant="outline-success"
            onClick={() => handleSubmit()}
          >
            ADD
          </Button>
        </Form>
        <Button
          style={{ width: "100%" }}
          variant="outline-dark"
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>{" "}
        {/* For go to backward*/}
      </div>
    </div> //to navigate backward
  );
}

export default AddManagers;
