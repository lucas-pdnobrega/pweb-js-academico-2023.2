class Disciplina {

    constructor(codigo, nome, alunos) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = alunos;
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
        this._alunos.array.forEach(aluno => {
            if (aluno.nome === nome) {
                return aluno
            }
        })
        throw new Error('Aluno não encontrado!');
    }

    adicionar (aluno) {
        this._alunos.array.push(aluno);
    }

    remover (matricula) {
        let aux = {};
        this._alunos.array.forEach(aluno => {
            if (aluno.matricula === matricula) {
                aux = aluno;
            }
        })
        try {
            this._alunos.array.pop(aux);
        } catch {
            throw new Error('Aluno não encontrado!')
        };
    }
}
