import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("agents.json")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-5">Warehouse Agents{agents.length} </h2>
      <div className="row mb-5">
        {agents.map((agent) => (
          <div className="col-lg-4 col-md-6 cl-sm-12">
            {/* <img src={agent.img} alt="" /> */}
            <Card>
              <Card.Img variant="top" src={agent.img} />
              <Card.Body className="text-center">
                <Card.Text className="bg-info w-100 p-0">
                  <h4>{agent.name}</h4>
                  <p className="description">{agent.says}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
