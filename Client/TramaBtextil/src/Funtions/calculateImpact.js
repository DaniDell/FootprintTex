export function calculateImpact(kilograms, composition) {
   

    if (isNaN(kilograms) || typeof composition !== 'string') {
        throw new Error('Invalid input');
    }
    let waterImpactLandfill;
    let waterImpactCloseloop;
    let carbonImpactLandfill;
    let carbonImpactCloseloop;

    switch (composition) {
        case 'algodon':
            waterImpactLandfill = (kilograms * 1114); 
            waterImpactCloseloop = (kilograms * 500); 
            carbonImpactLandfill = (kilograms * 1.19);
            carbonImpactCloseloop = (kilograms * 0.08);
            break;
        case 'poliester':
            waterImpactLandfill = (kilograms * 929); 
            waterImpactCloseloop = (kilograms * 600); 
            carbonImpactLandfill = (kilograms * 2.05);
            carbonImpactCloseloop = (kilograms * 1.26);
            break;
        case 'Mix de composiciones':
            waterImpactLandfill = (kilograms * 1021); 
            waterImpactCloseloop = (kilograms * 700); 
            carbonImpactLandfill = (kilograms * 1.7);
            carbonImpactCloseloop = (kilograms * 3);
            break;
        default:
            waterImpactLandfill = (kilograms * 1021);
            waterImpactCloseloop = (kilograms * 700);
            carbonImpactLandfill = (kilograms * 1.7);
            carbonImpactCloseloop = (kilograms * 3);
    }


    return { waterImpactLandfill, waterImpactCloseloop, carbonImpactLandfill, carbonImpactCloseloop };
}