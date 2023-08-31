class Disciplina {

    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novocodigo) {
        this._codigo = novocodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(alunos) {
        this._alunos = alunos;
    }

    localizar (nome) {
        this._alunos.forEach(aluno => {
            if (aluno.nome === nome) {
                return aluno
            }
        })
        throw new Error('Aluno não encontrado!');
    }

    adicionar (aluno) {
        this._alunos.push(aluno);
    }

    remover (matricula) {
        let aux = {};
        this._alunos.forEach(aluno => {
            if (aluno.matricula === matricula) {
                aux = aluno;
            }
        })
        try {
            this._alunos.pop(aux);
        } catch {
            throw new Error('Aluno não encontrado!')
        };
    }

    toString () {
        return `{Codigo : ${this._codigo} | Nome : ${this._nome} | Alunos : ${this._alunos}}`
    }
}
