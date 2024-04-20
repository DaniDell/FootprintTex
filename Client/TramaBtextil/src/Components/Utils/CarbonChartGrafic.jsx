import React from 'react';
import { BarChart, Bar, XAxis, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { useMediaQuery } from '@mui/material';

const COLORS = ['#747373', '#00947a', 'transparent'];


const CustomizedLabel = ({ x, y, width, height, value, unit, icon, fill, name }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const valueWithOneDecimal = Math.floor(value * 10) / 10;
const valueWithComma = String(valueWithOneDecimal).replace('.', ',');
  return (
    <text x={x + width / 1} y={y + height / 1} textAnchor="middle" dominantBaseline="middle" fontSize={matches ? "xsmall" : "middle"} fontWeight="bold"  fill={fill} name={name}>

      <tspan x={x + width / 2} dy="-1.2em">{value > 0.00 ? `${name}` : ''}</tspan>
      <tspan x={x + width / 2} dy="-1.1em">{value > 0.00 ? `Huella ` : ''}</tspan> 
      <tspan x={x + width / 2} dy="3.4em"> {value > 0.00 ? `${icon} ${valueWithComma} ${unit}` : ''}</tspan>
    </text>
  );
};


const CarbonChartGrafic = ({ data , carbonReductionPercentage, formatNumber }) => {
  
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom:0 }}>
        <XAxis dataKey="name" />
        <Legend formatter={(value, entry) => entry.dataKey === 'mitiga' ? <span style={{ color: '#4a4a46', fontWeight: 'bold' }}>{value}</span> : <span style={{ fontWeight: 'bold' }}>{value}</span>} />
        <Bar dataKey="landfill" fill={COLORS[0]} name="Fin de vida en vertedero">
        <LabelList dataKey="landfill" position="center" content={(props) => <CustomizedLabel {...props} unit="CO₂" icon="🗑️" name="vertedero" />}/>
        </Bar>
        <Bar dataKey="closeloop" stackId="stack" fill={COLORS[1]} name="Reciclaje">
        <LabelList dataKey="closeloop" position="bottom" content={(props) => <CustomizedLabel {...props} unit="CO₂" icon="♻️" name="reciclaje" />} />
        </Bar>
        <Bar 
  dataKey="mitiga" 
  stackId="stack" 
  fill={COLORS[2]} 
  name={isNaN(carbonReductionPercentage) ? '(El costo ambiental🌎 se medirá en CO₂☁ eq. = gases de efecto invernadero)' : `♻️ Evitaría la emisión de ${formatNumber(data[0]?.mitiga)} Kg. de gases CO₂☁eq. en el 🌎.`}
/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CarbonChartGrafic;
