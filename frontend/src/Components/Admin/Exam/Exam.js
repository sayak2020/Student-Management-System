import React, { useState, useEffect } from "react";

import {
  Jumbotron,
  Button,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
} from "reactstrap";
import axios from "axios";
import "./Exam.css";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { green } from "@material-ui/core/colors";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Exam() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Live Exam :");

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:9000/test/test/live");
      if (result.data.testDetails.length == 0) {
        setMessage("No Live Exam");
      } else {
        setAllData(result.data.testDetails);
      }

      console.log(result.data.testDetails);
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Live Exam :")) {
      return "";
    } else {
      let headerElement = ["Code", "Name", "status", "controls", "details"];

      return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  };

  const renderBody = () => {
    return (
      allData &&
      allData.map(({ id, subject, name, status, testID }) => {
        return (
          <tr key={id}>
            <td>{subject}</td>
            <td>{name}</td>
            <td>{status}</td>

            <td className="operation">
              <button className="button" onClick={() => endTest(testID)}>
                End Test
              </button>
            </td>
            <td>
              <Link
                to={{
                  pathname: `/test/${testID}`,
                }}
              >
                <Button
                  className="float-right details-btn"
                  color="default"
                  size="sm"
                >
                  View Details
                </Button>
              </Link>
            </td>
          </tr>
        );
      })
    );
  };

  const endTest = (ID) => {
    axios.get(`http://localhost:9000/test/endTest/${ID}`).then((res) => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <Jumbotron className="live-exam">
        <h1 className="display-3 live-text ">{message}</h1>
      </Jumbotron>
      <Row className="row-all">
        <Col lg-6 className="col-table">
          <table id="live-exam">
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>{renderBody()}</tbody>
          </table>
        </Col>
        <Col lg-6>
          <Card body className="create-exam">
            <CardTitle tag="h5" className="exam-card-title">
              Create New Exam
              <Link to="/create_exam">
                {" "}
                <ArrowForwardIosIcon className="arrow-icn" />
              </Link>
            </CardTitle>
          </Card>
          <Card body className="create-exam">
            <CardTitle tag="h5" className="exam-card-title">
              Show Ended Exam
              <Link to="/ended_exam">
                {" "}
                <ArrowForwardIosIcon className="arrow-icn" />
              </Link>
            </CardTitle>
            {/* <Button classname="btn-secondary-icon" href="/ended_exam"></Button> */}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Exam;
