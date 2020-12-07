# Jogo da Velha

Um jogo da velha desenvolvido com React.

## Como instalar

### Dependências

Antes de instalar o projeto, você precisa ter as seguintes dependências instaladas no seu computador:

- node.js v12.18.3 
- git

### Instruções

- Baixar repositório (`git clone https://github.com/marizambarda/jogo-da-velha.git`)
- Rodar `npm install`

## Como executar

Na pasta do projeto, execute `npm start`

## Como funciona

### Estados

O jogo da velha é composto por um único componente (App).

É composto pelos estados:

- `tabuleiro`: o tabuleiro é uma array de 9 posições, onde cada índice representa uma casa no tabuleiro, os índices vão de 0 (zero) a 8 (oito) , sendo zero a casa superior mais a esquerda e 8 a casa inferior mais a direita.  
- `jogadorDaVez`:  o jogador da vez pode ser representado por “X” ou “O”.
- `placarX`: pontos do jogador X
- `placarO`: pontos do jogador O
- `empates`: quantidade de empates

### Lógica do jogo

Ao clicar em uma casa do tabuleiro, é chamada a função `jogou` que executa as seguintes regras:

1. Verifica se a casa já está ocupada, lendo o estado `tabuleiro` no índice clicado. Caso já esteja ocupado, para por aqui.
2. Modifica o `tabuleiro`, preenchendo o índice clicado com o jogador da vez, que está armazenado em um estado (`jogadorDaVez`).
3. Alterna o `jogadorDaVez` de “X” para “O” ou vice-versa.
4. Verifica se um dos jogadores ganhou, caso tenha ganhado soma um ponto para o ganhador alterando o estado `placarX` ou `placarO`. Limpa o `tabuleiro`.
5. Caso não tenha ganhado verifica se há empate, que é quando o tabuleiro esta completamente preenchido. Se há empate é somado um ponto ao estado `empates`.
