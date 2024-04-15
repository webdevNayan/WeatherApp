import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
  &:hover {
    background-color: #f5f5f5; /* Change background color on hover */
  }
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

interface CityTableRowProps {
  city: {
    id: number;
    name: string;
    country: string;
    timezone: string;
    // Add more properties as needed
  };
}

const CityTableRow: React.FC<CityTableRowProps> = ({ city }) => {
  return (
    <Tr>
      <Td>{city.name}</Td>
      <Td>{city.country}</Td>
      <Td>{city.timezone}</Td>
      {/* Render more city information as needed */}
    </Tr>
  );
};

export default CityTableRow;
