import React from 'react';
import { BarChart, Bar, XAxis, Legend, ResponsiveContainer, LabelList } from 'recharts';

const COLORS = ['#747373', '#5E7A64', '#ffffff'];


const CarbonChartGrafic = ({ data , carbonReductionPercentage, formatNumber }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" />
        <Legend formatter={(value, entry) => entry.dataKey === 'difference' ? <span style={{ color: '#4a4a46', fontWeight: 'bold' }}>{value}</span> : value} />
        <Bar dataKey="landfill" fill={COLORS[0]} name="Huella vertedero">
          <LabelList dataKey="landfill" position="bottom" />
        </Bar>
        <Bar dataKey="closeloop" stackId="stack" fill={COLORS[1]} name="Gestión y reciclaje">
          <LabelList dataKey="closeloop" position="bottom" />
        </Bar>
        <Bar dataKey="difference" stackId="stack" fill={COLORS[2]} name={`CO2: Se reduce en ${formatNumber(carbonReductionPercentage)}%`}>
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CarbonChartGrafic;
