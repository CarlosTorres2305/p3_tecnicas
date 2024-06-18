import Funcionario from './Funcionario';

class Mensalista extends Funcionario {
    public faltas: number;
    public cargo: string;

    constructor(matricula: number, nome: string, idade: number, email: string, salario: number, faltas: number, cargo: string) {
        super(matricula, nome, idade, email, salario);
        this.faltas = faltas;
        this.cargo = cargo;
    }

    validaEmail(): boolean {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(this.email);
    }

    calcSalario(): number {
        let sb = this.salario;
        let fts = this.calcFaltas();
        let inss = this.calcINSS();

        const salarioLiquido = sb - fts - inss;
        return salarioLiquido;
    }

    calcINSS(): number {
        let contribuicao = this.salario;
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
            salarioContrib = contribuicao * 14 / 100; // Acima de 7786.02, a alíquota é 14%
        }

        return salarioContrib;
    }

    calcFaltas(): number {
        let sb = this.salario;
        let faltas = this.faltas;
        let fts = sb / 30 * faltas;
        return fts;
    }
}

export default Mensalista;
