import React from 'react';
import { BarChart, Bar, XAxis, Legend, ResponsiveContainer, LabelList } from 'recharts';

const COLORS = ['#747373', '#00947a', '#ffffff'];


const CarbonChartGrafic = ({ data , carbonReductionPercentage, formatNumber }) => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" />
        <Legend formatter={(value, entry) => entry.dataKey === 'mitiga' ? <span style={{ color: '#4a4a46', fontWeight: 'bold' }}>{value}</span> : value} />
        <Bar dataKey="landfill" fill={COLORS[0]} name="Huella vertedero">
          <LabelList dataKey="landfill" position="bottom" />
        </Bar>
        <Bar dataKey="closeloop" stackId="stack" fill={COLORS[1]} name="Huella reproceso**">
          <LabelList dataKey="closeloop" position="bottom" />
        </Bar>
        <Bar 
  dataKey="mitiga" 
  stackId="stack" 
  fill={COLORS[2]} 
  name={isNaN(carbonReductionPercentage) ? 'Mitigación' : `CO2: Se reduce en ${formatNumber(carbonReductionPercentage)}%`}
/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CarbonChartGrafic;
