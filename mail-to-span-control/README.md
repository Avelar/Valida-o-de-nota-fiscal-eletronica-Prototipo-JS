# Mailto span control

Função para prevenir que robôs capturem o email, é bem simples mas funciona super mega bem

Fique a vontade para usar ou ajudar com melhorias mande um Pull Request :D


### Como usar
1 - Chame a função `spamControl` no atributo href da sua link tag, com 2 argumentos: o primeiro é o usuário e o seguinte o dominio. Exemplo:
`<a href=‘javascript:spamControl(“fortunato.avelar”, “gmail.com”)’>`

2 - Adicione ao seu bundle JS, na view ou como preferir o a  declaração:
```
function spamControl(usuario,domino) {
	getString = ‘mailto:’ + usuario + ‘@‘ + domino;
	window.location = getString;
}
```

3 - Faça um teste, isso vai montar: usuario@dominio.com no TO do seu cliente de email