import React from "react";
import './SpinnerComponent.css'
import { Spinner } from 'react-bootstrap'

const SpinnerComponent = () => (
  <div className="spinner-container">
    <Spinner animation="border" variant="light" />
  </div>
);

export default SpinnerComponent
