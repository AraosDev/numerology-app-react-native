import { getBenefits } from "./Common Helpers";
import { sumOfDigits } from './Common Helpers'


export const getLifeNumberFromDOB = (dob)=>{
    const dobStringNum = dob.split("").filter(n=>n!='-').join('');
    const lifePathNum = sumOfDigits(parseInt(dobStringNum));
    return lifePathNum
}

export const getNumberFromLetter = (letter)=>{
    switch(letter){
        case 'A':
        case 'J':
        case 'S':
            return '1'
        case 'B':
        case 'K':
        case 'T':
            return '2'
        case 'C':
        case 'L':
        case 'U':
            return '3'
        case 'D':
        case 'M':
        case 'V':
            return '4'
        case 'E':
        case 'N':
        case 'W':
            return '5'
        case 'F':
        case 'O':
        case 'X':
            return '6'
        case 'G':
        case 'P':
        case 'Y':
            return '7'
        case 'H':
        case 'Q':
        case 'T':
            return '8'
        case 'I':
        case 'R':
            return '9'
        default:
            return '0' 
    }
}

export const getDestinyNumberFromName = (name)=>{
    const nameToArr = name.toUpperCase().split('').filter(letter => letter != ' ');
    const mapNameToNum = nameToArr.map((letter)=>getNumberFromLetter(letter)).join('');
    const destinyNum = sumOfDigits(parseInt(mapNameToNum));
    return destinyNum
}


const CalculatorConfig = (dob="", name="")=>{
    const checkProps = (dob && name) ? true : false;
    const lifePathNumber = checkProps ? getLifeNumberFromDOB(dob): 'Type your Date of Birth and Name to calculate your Life path Number';
    const destinyNumber = checkProps ? getDestinyNumberFromName(name): 'Type your Date of Birth and Name to calculate your Destiny Number';
    const Benefits = checkProps ? getBenefits(lifePathNumber, destinyNumber) : ""
    return [
        {
            "Type": "Life Path Number",
            "Number": lifePathNumber,
            "Benefits": Benefits.life_path_num_benefits
        },
        {
            "Type": "Destiny Number",
            "Number": destinyNumber,
            "Benefits": Benefits.destiny_num_benefits
        }
    ]
}

export default CalculatorConfig;