class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nome");
        const disciplinaInserida = this.servico.inserir(Number(codigoElemento.value),nomeElemento.value);
        const listaDisciplinaElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const DisciplinaElemento = document.createElement("li");
        DisciplinaElemento.textContent = `Codigo: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(DisciplinaElemento);
    }

}
