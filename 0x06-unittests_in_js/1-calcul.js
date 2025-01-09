function calculateNumber(type, a, b){
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    let result = 0;

    if (type === "SUM"){
        return roundedA + roundedB;

    }else if (type === "SUBTRACT"){
        return roundedA - roundedB;

    }else if (type === "DIVIDE"){
        if (roundedB === 0){
            return "Error";
        }else {
            return roundedA / roundedB;
        }

    }

    return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;