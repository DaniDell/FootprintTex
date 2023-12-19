export function calculateImpact(kilos, composition) {
    let waterImpact;
    let carbonImpact;

    switch (composition) {
        case 'algodon':
            waterImpact = (kilos * 1114); // Suponiendo que cada kilo de algodón reutilizado ahorra 500 litros de agua
            carbonImpact = (kilos * (1.43 - 0.08)).toFixed(2); // Suponiendo que cada kilo de algodón ahorra
            break;
        case 'poliester':
            waterImpact = (kilos * 929); // Suponiendo que cada kilo de poliéster reutilizado ahorra 600 litros de agua
            carbonImpact = (kilos * (2.05 - 1.26)).toFixed(2); // Suponiendo que cada kilo de poliéster reutilizado ahorra 2.5 kg de CO2
            break;
        case 'Mix de composiciones':
            waterImpact = (kilos * 1021); // Suponiendo que cada kilo de lana reutilizado ahorra 700 litros de agua
            carbonImpact = (kilos * 1.7).toFixed(2); // Suponiendo que cada kilo de lana reutilizado ahorra 3 kg de CO2
            break;
        default:
            waterImpact = (kilos * 1021); // Valores por defecto
            carbonImpact = (kilos * 1.7).toFixed(2); // Valores por defecto
    }

    return { waterImpact, carbonImpact };
}
