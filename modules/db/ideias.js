"use strict";

export const ideias = [
  {
    title: "Definir o objetivo do site",
    stat: 1,
    content: `
As minhas ideias para este site sempre mudam. Uma hora eu quero fazer algo que
sirva como uma "vitrine" para meus projetos/habilidades, outra hora só quero
um lugar onde posso jogar pensamentos ao vento.

Sinto que preciso ter um objetivo definitivo para este site se eu quiser
que ele tenha uma longividade maior e que eu tenha mais vontade de atualizar-lo.
`,
  },
  {
    title: "Limpar o código",
    stat: 1,
    content: `
O código desse site atualmente é uma bagunça. Tem muita coisa aqui que eu
simplesmente necessito mudar.
- definições/funções que fazem coisas muito parecidas, senão, idênticas
- alguns arquivos são enormes ([[/assets/css/styles.css][o CSS]] já passa das 700 linhas, por exemplo)

Hoje em dia eu uso algumas ferramentas para me ajudar a escrever melhor
([[https://helix-editor.com][Helix]], [[https://deno.com][deno]] lint+fmt,
typescript-language-server e às vezes um prompt em alguma IA), mas eu criei
esse site antes disso.
    `,
  },
  {
    title: "Botão para trocar entre tema claro e escuro",
    stat: 2,
    content: `
Um botão clicável/tocável para alternar entre tema claro e escuro.

Atualmente, é possível alternar entre temas com a tecla <code>T</code>.
    `,
  },
  {
    title: "Melhorar a <code>markup()</code>",
    stat: 2,
    content: `
A função <code>markup()</code> é a responsável por gerar strings HTML a partir
de uma sintaxe para texto, inspirada na sintaxe do
[[https://orgmode.org][Org Mode]] e
[[https://www.markdownguide.org/cheat-sheet/][Markdown]].

No momento, estas são as opções de formatação disponíveis:

- listas desordenadas (''-&nbsp;'')
- citações (''&#35;+begin_quote'' e ''&#35;+end_quote'')
- exemplos (''&#35;+begin_example'' e ''&#35;+end_example'')
- blocos de código (''&#35;+begin_src'' e ''&#35;+end_src'')
- heading de nível 1 (''&#42;&nbsp;'')
- links (''&#91;&#91;https://google.com&#93;&#91;Google&#93;&#93;'')
- texto com cores diferentes (''&#44;&#44;cor&#58;texto&#44;&#44;'')
- texto em negrito (''&#42;texto&#42;'')
- texto itálico (''&#42;&#42;texto&#42;&#42;'')
- texto negrito e itálico (''&#42;&#42;&#42;texto&#42;&#42;&#42;'')
- texto pré-formatado/código (''&#39;&#39;texto&#39;&#39;'')
- tabelas ([[https://www.markdownguide.org/extended-syntax/#tables][Que nem no Markdown]])
- images (''&#123;&#91;imagem&#93;&#125;'')
`,
  },
  {
    title: "Botão para enviar feedback de um post",
    stat: 2,
    content: `
Ao final de cada post deve haver um botão de feedback com um link para e-mail
pre-preenchido com algumas informações sobre o post.

O formato do link é o seguinte:
#+begin_src
mailto:email@example.com?subject=ASSUNTO
#+end_src
`,
  },
  {
    title: "Avaliações para os livros",
    stat: 2,
    content: `
Notas para os livros/mangás que eu li, com a nota variando de 0 a 10.

Para cada "range" de uma nota, deve haver um emote estilo Twitch para ilustrar
a nota.

Por exemplo:

#+begin_src
entre 9 e 10 => Senhor cinema
entre 8 e 9  => pogchamp
entre 0 e 1  => It's Joever
#+end_src
    `,
  },
  {
    title: "Uma página de ideias",
    stat: 2,
    content: `
Uma página contendo todas as minhas ideias para o site
`,
  },
  {
    title: "Página de introdução com uma animação 3D",
    stat: 1,
    content: `
Quando alguém entrar no site, uma página de introdução deve aparecer (isso é
bem comúm no Neocities).

A página deve ter uma animação em 3D, um cubo que ao ter o mouse encima se
desmancha e faz alguma outra forma geométrica com os dizeres "Bem-vindo!" ou
algo do gênero.

Para mobile, essa abertura pode ser uma animação que rode sozinha e mostre a
home logo em seguida.
    `,
  },
];
export default ideias;
