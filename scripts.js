const first_number = parseFloat(prompt('Enter a number: '))
const second_number = parseFloat(prompt('Enter a second number: '))

const dict = {
    add: '+',
    substract: '-',
    division: '/',
    multply: '*',
    modulusOfOperators: '%',
};
const {add, substract, division, multply, modulusOfOperators} = dict
const operator = alert(`Enter ${add} to add, ${substract} to substract, ${division} to divide, ${multply} to multply, ${modulusOfOperators} to perform Modulus`)
const userFeedback = prompt('Kindly enter which mode of operation that you want to perform: ')
class Calculator{
    constructor(first_num= first_number, second_num=second_number){
        this.first_num = first_num;
        this.second_num = second_num;
    };
    Performadd(){
        var addition = this.first_num + this.second_num;
        return(addition);
    };
    Performsubstract(){
        var substraction = this.first_num - this.second_num;
        return(substraction);
    };
    Performmultply(){
        var multiplication = this.first_num * this.second_num;
        return(multiplication);
    };
    Performdivision(){
        var dividing = this.first_num / this.second_num;
        return(dividing);
    };
    PerformModulus(){
        var modulus = this.first_num % this.second_num;
        return(modulus);
    };
};
const calc = new Calculator();
let response = ''
switch(true){
    case userFeedback == '+':
        response = calc.Performadd()
        alert(`Your total result is ${response}`)
    break;
    case userFeedback == '-':
        response = calc.Performsubstract()
        alert(`Your total result is ${response}`)
    break; 
    case userFeedback == '/':
        response = calc.Performdivision()
        alert(`Your total result is ${response}`)
    break; 
    case userFeedback == '*':
        response = calc.Performmultply()
        alert(`Your total result is ${response}`)
    break; 
    case userFeedback == '%':
        response = calc.PerformModulus()
        alert(`Your total result is ${response}`)
    break;
    default: alert('An Error has Occured!! Kindly, enter a confirmed mode of operation'); 
};

