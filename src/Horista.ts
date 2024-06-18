import Funcionario from './Funcionario';

class Horista extends Funcionario {
    public horas: number;
    public funcao: string;

    constructor(matricula: number, nome: string, idade: number, email: string, salario: number, horas: number, funcao: string) {
        super(matricula, nome, idade, email, salario);
        this.horas = horas;
        this.funcao = funcao;
    }

    validaEmail(): boolean {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(this.email);
    }

    calcSalario(): number {
        let sb = this.calcSalarioBruto();
        let inss = this.calcINSS();
        let salarioLiquido = sb - inss;
        return salarioLiquido;
    }

    calcINSS(): number {
        let contribuicao = this.calcSalarioBruto();
        let salarioContrib = 0;

        if (contribuicao <= 1412) {
            salarioContrib = contribuicao * 7.5 / 100;
        } else if (contribuicao > 1412 && contribuicao <= 2666.68) {
            salarioContrib = contribuicao * 9 / 100;
        } else if (contribuicao > 2666.68 && contribuicao <= 4000.03) {
            salarioContrib = contribuicao * 12 / 100;
        } else if (contribuicao > 4000.03 && contribuicao <= 7786.02) {
            salarioContrib = contribuicao * 14 / 100;
        } else {
            salarioContrib = contribuicao * 14 / 100; 
        }

        return salarioContrib;
    }

    calcSalarioBruto(): number {
        let sh = this.salario;
        let horas = this.horas;
        let sb = sh * horas;
        return sb;
    }

    calcDsr(): number {
        let sb = this.calcSalarioBruto();
        let dsr = sb / 25 * 4; 
        return dsr;
    }
}

export default Horista;
