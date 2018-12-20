## Validação de nota fiscal eletrônica [Protótipo JS]

Protótipo de 2015 que valida NF-e em javaScript, com o objetivo de pesquisa/estudo.

### Conceito - como é construida a NF-e:

O pensamento aqui foi estudar o conceito e pensar em uma solução de validação. A NF-e Brasileira tem 44 dígitos: 

- UF do emitente: 2 _dígitos_
- Ano e mês de emissão: 4 
- CNPJ do emitente: 14 
- Modelo do documento fiscal: 2 (“55”) 
- Série: 3 
- Número da NF-e: 9 
- Forma de emissão: 1 
- Código numérico: 8 
- Dígito verificador: 1   

Esta versão valida os campos: UF, ano, mês e modelo.

