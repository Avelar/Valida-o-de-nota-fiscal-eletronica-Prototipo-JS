# Mailto span control

Função para prevenir que robôs capturem o email
Fique a vontade para usar e contribuir com melhorias


### Uso Básico
1 - Chame a função `spamControl` no atributo href da sua link tag, com 2 argumentos: o primeiro é o usuário e o seguinte o dominio. Exemplo:
`<a href=‘javascript:spamControl(“fortunato.avelar”, “gmail.com”)’>`

2 - Adicione ao seu bundle JS, na view, etc… a declaração:
```
function spamControl(usuario,domino) {
	getString = ‘mailto:’ + usuario + ‘@‘ + domino;
	window.location = getString;
}
```

3 - Faça um teste, isso vai montar: usuario@dominio.com no TO do cliente de email