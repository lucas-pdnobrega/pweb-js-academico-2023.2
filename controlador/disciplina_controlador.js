class DisciplinaControlador {

    constructor() {
        this.disciplinaServico = new DisciplinaService();
        this.alunoServico = new AlunoService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo_disciplina");
        const nomeElemento = document.querySelector("#nome_disciplina");
        const disciplinaInserida = this.disciplinaServico.inserir(Number(codigoElemento.value),nomeElemento.value);
        const listaDisciplinaElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento);
        }
    }

    inserirAlunoNaDisciplina() {
        const codigoDisciplina = Number(document.querySelector("#codigo_cd_aluno").value);
        const nomeElemento = document.querySelector("#nome_aluno");
        const idadeElemento = Number(document.querySelector("#idade_aluno").value);
        const matriculoElemento = document.querySelector("#matricula_aluno");
        const alunoInserido = this.alunoServico.inserir(nomeElemento.value, idadeElemento,
                matriculoElemento.value);
            if (alunoInserido) {
                this.disciplinaServico.inserirAluno(codigoDisciplina, alunoInserido);
                this.atualizarDisciplinaNoHtml(codigoDisciplina);
            }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const DisciplinaElemento = document.createElement("li");
        DisciplinaElemento.id = `d${disciplina.codigo}`;
        DisciplinaElemento.textContent = `Codigo: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(DisciplinaElemento);
    }

    atualizarDisciplinaNoHtml(codigo) {
        const disciplinaElemento = document.getElementById(`d${codigo}`);
        const disciplinaAlvo = this.disciplinaServico.pesquisarPorCodigo(codigo)[0];
        if (disciplinaElemento && disciplinaAlvo) {
            disciplinaElemento.textContent = `Codigo: ${disciplinaAlvo.codigo} - Nome: ${disciplinaAlvo.nome} - Alunos: ${disciplinaAlvo.alunos}`;
        }
    }

}
