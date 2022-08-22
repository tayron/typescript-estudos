var StatusProcessamento;
(function (StatusProcessamento) {
    StatusProcessamento["PENDENTE"] = "Pendente";
    StatusProcessamento["INICIADO"] = "Iniciado";
    StatusProcessamento["PROCESSANDO"] = "Processando";
    StatusProcessamento["FINALIZADO"] = "Finalizado";
    StatusProcessamento["ERRO"] = "Erro";
})(StatusProcessamento || (StatusProcessamento = {}));
var statusAtual = StatusProcessamento.PROCESSANDO;
console.log(statusAtual);
