import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchCities } from '../../services/api';

// Define styled components for the table
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

// Define interface for city data
interface City {
  id: number;
  name: string;
  country: string;
  timezone: string;
}

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: City[] = await fetchCities();
        setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>City Table</h2>
      <Table>
        <thead>
          <tr>
            <Th>City Name</Th>
            <Th>Country</Th>
            <Th>Timezone</Th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city.id}>
              <Td>{city.name}</Td>
              <Td>{city.country}</Td>
              <Td>{city.timezone}</Td>
              {/* Render more city information as needed */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CityTable;
