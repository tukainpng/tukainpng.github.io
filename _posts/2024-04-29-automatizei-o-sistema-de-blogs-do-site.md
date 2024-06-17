---
layout: post
created: 29/04/2024
title: Automatizei o sistema de blogs do site
tags:
    - web
    - projetos
description: Agora a criação de posts é semelhante ao Hugo.
---
<p>Bom, isso é uma coisa um pouco difícil de explicar (nem tanto na verdade),
mas ainda assim, é algo bacana de ser comentado.</p> <h1>Como assim
"Automatizei"?</h1> <p>Se você já usou o Hugo framework, então você sabe como
que funciona o sistema de geração de posts para blogs. E pra quem nunca usou,
aqui vai uma explicação simples de como que funciona o processo (supondo que
você já tenha uma pasta do site gerada e um tema configurado)</p>

<ol> <li>Você digita <code>hugo new [pasta dos posts]/[nome do
arquivo].md</code></li> <li>Você abre o arquivo criado</li> <li>Você escreve o
post usando Mardown</li> <li>Você digita <code>hugo</code></li> <li>Pronto. O
post foi gerado.</li> </ol>

<p>A forma como o meu sistema de criação de posts funciona se assemelha um
pouco com esse processo. A diferença fica nas ferramentas usadas e em como é a
estrutura das coisas.</p>

<h1>As ferramentas e estrutura</h1> <p>O que eu estou usando para a geração de
posts (e futuramente o rss deles), é um programa chamado <a
href="https://git.codemadness.org/saait">saait</a>. A forma como ele funciona
lembra um pouco como o Hugo opera, mas a estrutura de pastas é bem mais simples
e o próprio programa não faz muito além de criar uma página com uma indexação
de outras páginas.</p> <p>Basicamente, o saait serve apenas para criar uma
página que lista outras páginas. Porém, ele possui um sistema de templates, e
isso é o que muda tudo.</p> <p>Todo e qualquer arquivo que você deseja criar
utilizando as templates, tem que ser previamente montado na pasta de templates.
A pasta de templates contém pastas com o nome dos arquivos que você quer gerar
(por exemplo: atom.xml), dentro delas, você cria 3 arquivos com a mesma
extensão do arquivo (seguindo o exemplo acima: header.xml, footer.xml e
item.xml).</p> <p>Existem nomes de pastas que são reservadas, como por exemplo
a pasta page, que contém as informações de como que um post deve ser
estruturado.</p> <p>Outra pasta que faz parte da estruturação da geração feita
pelo saait é a pages. Nela, você coloca seus posts, não tendo a necessidade de
escrever um arquivo html por completo, já que essa parte fica a cargo da
template page.</p> <p>Ainda dentro dessa pasta é necessária atenção com uma
coisa: cada post precisa de um arquivo de configuração ([nome do arquivo].cfg),
o nome do arquivo de configuração precisa ter o mesmo nome que o arquivo html.
Dentro desse arquivo de configuração você coloca coisas como o nome do arquivo
que será gerado, o título da página, descrição, data de criação e de
modificação.</p> <p>Uma prática que eu recomendo é a de dar um prefixo numérico
aos dois arquivos (por exemplo: 000-), isso fará com que você consiga ordenar
os posts por ordem numérica.</p> <p>Outro programa que uso é o <a
  href="https://git.codemadness.org/smu">smu</a>, esse é bem mais simples de
explicar.</p> <p>Basicamente, o smu é um programa que gera html a partir de um
arquivo de markup similar ao markdown, sendo assim, é possível usa-lo como
parte da geração dos posts, eliminando a necessidade de escrever html
diretamente.</p> <p>Por fim, o último programa que uso é o <a
href="https://git.codemadness.org/stagit">stagit</a>. Neste caso, eu o
modifiquei para que a página gerada por ele se integrasse ao meu site, mas a
funcionalidade dele é a mesma.</p> <p>O stagit é dividido em duas partes:
stagit e stagit-index. O stagit-index é o responsável por gerar a página
inicial com a lista dos repositórios (essa sendo a parte que eu modifiquei para
meu uso) e o stagit sendo o responsável de gerar as páginas de um repositório
específico.</p> <p>A forma como você usa os dois é bem similar, mas existe uma
diferença. No caso do stagit-index, você digita <code>stagit-index
[repositórios]</code>, fazendo isso, ele criará um site que irá indexar os
repositórios que você especificou com o comando na pasta atual.</p> <p>Agora
para que os repositórios listados tenham algum conteúdo, é necessário que você
crie pastas com os mesmos nomes dos repositórios que você indexou.</p> <p>E é
aí que o stagit entra em ação. A cada uma das pastas, você deve digitar o
comando <code>stagit [nome do repositório respectivo]</code>.</p> <p>Tendo
feito essas duas etapas, você terá um site que te deixa visualizar
repositórios.</p> <h1>Certo, mas onde está a automação nisso?</h1> <p>Agora é
que vem a parte boa.</p> <p>Todo esse processo gera apenas arquivos html, você
deve providenciar um arquivo CSS. Tendo isso feito, você pode scriptar todo o
resto.</p> <p>A forma que eu faço todo esse processo é a partir de Makefiles e
1 script. As Makefiles ficam em cada pasta onde uma etapa do processo é feita
(a index dos posts, a index do stagit e cada repositório), e o script que eu
fiz serve para criar novos posts e em seguida atualizar o site.</p> <p>Na
criação de um novo post, você deve providenciar um nome para o post e uma
descrição, depois disso o seu editor de texto definido pela variável $EDITOR
será aberto em um arquivo temporário, onde será escrito o post usando o markup
do smu. Ao salvar e sair do arquivo, o post é convertivo para html e posto na
pasta pages, depois disso as Makefiles entram em ação.</p> <p>Os posts são
criados, ordenados e por fim, postos na pasta output, junto com o site git
gerado pelo stagit-index+stagit.</p> <p>Quando todo esse processo é realizado,
os arquivos dentro da pasta output são movidos para o repositório do meu site e
em seguida são postos no repositório remoto do site, atualizando assim o site
com um post novo.</p> <h1><em>Fin</em></h1> <p>Enfim, isso é tudo o que eu
tenho para falar hoje, agora eu vou preparar a geração do rss do site.</p>
<p>Até o próximo post!</p>
