class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    pesquisarPorMatricula(codigo, matricula) {
        return this.repositorio.localizarAluno(codigo, matricula);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAluno(codigo, aluno) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            disciplinaPesquisada[0].adicionar(aluno);
        } else {
            throw new Error('Disciplina não encontrada!')
        }
    }

    removerAluno(codigo, aluno) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length === 0) {
            disciplinaPesquisada[0].removerAluno(aluno);
        } else {
            throw new Error('Disciplina não encontrada!')
        }
    }

}
