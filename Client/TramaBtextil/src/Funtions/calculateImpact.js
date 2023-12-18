export function calculateImpact(kilos, composition) {
    let waterImpact;
    let carbonImpact;
  
    switch (composition) {
      case 'algodon':
        waterImpact = kilos * 500; // Suponiendo que cada kilo de algodón reutilizado ahorra 500 litros de agua
        carbonImpact = kilos * 0.31; // Suponiendo que cada kilo de algodón reutilizado ahorra 2 kg de CO2
        break;
      case 'poliester':
        waterImpact = kilos * 600; // Suponiendo que cada kilo de poliéster reutilizado ahorra 600 litros de agua
        carbonImpact = kilos * 2.5; // Suponiendo que cada kilo de poliéster reutilizado ahorra 2.5 kg de CO2
        break;
      case 'lana':
        waterImpact = kilos * 700; // Suponiendo que cada kilo de lana reutilizado ahorra 700 litros de agua
        carbonImpact = kilos * 3; // Suponiendo que cada kilo de lana reutilizado ahorra 3 kg de CO2
        break;
      default:
        waterImpact = kilos * 500; // Valores por defecto
        carbonImpact = kilos * 2; // Valores por defecto
    }
  
    return { waterImpact, carbonImpact };
  }