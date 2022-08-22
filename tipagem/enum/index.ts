enum StatusProcessamento {
    PENDENTE = 'Pendente',
    INICIADO = 'Iniciado',
    PROCESSANDO = 'Processando',
    FINALIZADO = 'Finalizado',
    ERRO = 'Erro'
}

const statusAtual = StatusProcessamento.PROCESSANDO
console.log(statusAtual)