class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorcodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

}
