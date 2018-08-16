# 11 BARRA 11 WEB CLIENT

Este projeto tem como objetivo prover aplicativo front-end para o software **11 BARRA 11**. A estrutura inicial do projeto foi gerada utilizando *Angular CLI* versão 6.0.3.

## Instalação

1. Clonar o repositório na máquina. *git clone https://gitlabcorp.stefanini.com.br/11BARRA11/11barra11web.git*.
2. Acessar a pasta *11barra11web/web-client/*.
3. Instalar as dependências *npm install*.

## Desenvolvimento

O desenvolvimento utilizará o processo *[GIT-FLOW](:https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)* para organização da criação e manutenção de funcionalidades. 

O sistema deverá ser estruturado de forma modular, sendo que cada módulo deverá conter a seguinte estrutura.
- nome-do-módulo
* components
* resources
* services

Componentes, serviços e recursos que atendam mais de um módulo deverão ser adicionados no módulo *shared*, sendo que 
os módulos *core* e *shared* deverão ser importados pelos demais módulos. 

## Servidor de Desenvolvimento

Execute o comando *ng s e local* para subir o servidor de desenvolvimento na url *http://localhost:4200/*. 