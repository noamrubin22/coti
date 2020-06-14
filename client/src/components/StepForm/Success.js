import React, { useEffect, useState } from "react";
import axios from "axios";

const Success = ({ formData }) => {
  const {
    nativeLanguage,
    foreignLanguage,
    level,
    name,
    age,
    country,
    interests,
    bio,
    availability,
    email,
    password,
  } = formData;

  return (
    <div>
      <h2>Thank you for your submission</h2>
      <p>You will receive an email with further instructions</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Success;
