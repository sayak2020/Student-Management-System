import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Row, Col, Card, CardTitle } from "reactstrap";
import axios from "axios";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import "./ShowExam.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { green } from "@material-ui/core/colors";

function ShowExam() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Exam :");

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:9000/test/test/live");
      if (result.data.testDetails.length == 0) {
        setMessage("No Ongoing Exam");
      } else {
        setAllData(result.data.testDetails);
      }

      console.log(result.data.testDetails);
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Exam :")) {
      return "";
    } else {
      let headerElement = ["Code", "Name", "status", "test"];

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
            <td className="live-code">{subject}</td>
            <td>{name}</td>
            <td className="live-name">
              <FiberManualRecordIcon
                className="live-icon"
                style={{ color: green[600] }}
              />
              {status.toUpperCase()}
            </td>

            <td>
              <Link
                to={{
                  pathname: `/user_test/${testID}`,
                }}
              >
                <Button className="details-btn" color="default" size="sm">
                  Give Test
                  <ArrowForwardIosIcon className="arrow-icon" />
                </Button>
              </Link>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <Jumbotron className="user-exam">
        <h1 className="display-3 user-text2 ">{message}</h1>
      </Jumbotron>
      <Row className="row-all">
        <Col lg-6 className="col-table">
          <table id="user-exam">
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>{renderBody()}</tbody>
          </table>
        </Col>
        <Col lg-6>
          <Card body className="create-exam">
            <CardTitle tag="h5" className="exam-card-title">
              Notes
              <Link to="/fileslist">
                {" "}
                <ArrowForwardIosIcon className="arrow-icn" />
              </Link>
            </CardTitle>
          </Card>
          <Card body className="create-exam">
            <CardTitle tag="h5" className="exam-card-title">
              View Results
              <Link to="/result">
                {" "}
                <ArrowForwardIosIcon className="arrow-icn" />
              </Link>
            </CardTitle>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ShowExam;
