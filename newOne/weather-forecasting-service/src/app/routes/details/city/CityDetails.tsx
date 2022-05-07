import React from 'react';
import { useParams } from 'react-router-dom';

export default function CityDetails() {
  const { city } = useParams();
  return <div>{city}</div>;
}
