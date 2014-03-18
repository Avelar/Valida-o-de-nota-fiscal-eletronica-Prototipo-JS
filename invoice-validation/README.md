#Validação de nota fiscal eletrônica, a chave de 44 dígitos (Invoice Validation)

No ano passado precisamos validar a chave de 44 dígitos da NE-e Brasileira. Então resolvi criar uma função JS para validação baseado na estrutura da nf-e.

Primeiramente desenvolvemos uma função bem verbosa em Javascript para testarmos nossas hispóteses, e mais tarde um algorítimo escalável em Ruby.

### Conceito - como é construida a NF-e:
… 

Claro que a função que criei para teste com JS é super fácil para alguém que compreenda como funciona a NF-e agir de má fé e colocar uma chave falsa, então pegávamos cada nota e conferíamos   se ela era verdadeira, mas para efeito de teste o resultado foi bem válido uma _feature_ de 1 dia :D

Thanks: Daniel Hatkoff e Lucas Húngaro
