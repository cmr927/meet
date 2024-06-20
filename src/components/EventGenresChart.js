import { useState, useEffect, PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

//working on the functions below. Based on CityEventsChart, but different
const EventGenresChart = ({ }) => {
    const [] = useState([]);

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = allLocations.map((location) => {
            const count = events.filter((event) => event.location === location).length
            const city = location.split((/, | - /))[0]
            return { city, count };
        })
        return data;
    };
}
export default EventGenresChart;