---
layout: post
thumbnail: "c[_] Vai um café?"
title: "Simplifiquei o site"
description: "Não estou mais usando nem o Bootstrap, nem o Jekyll."
---
<p>Pois é, essa é mais uma prova do quão indeciso eu consigo ser com
esse site. Eu quase que fiz um refactor completo de como o site
funciona, o motivo? Eu queria deixar esse site mais fácil de ser
editado (ou até mesmo atualizado) pelo Neocities.</p>

<h1>Como ele funciona agora?</h1>

<p>Agora esse site basicamente voltou a sua origem de quando eu tinha
que escrever o HTML de cada post na mão. Claro que eu sempre tinha uma
template para poder agilizar esse trabalho, mas ainda assim era bem
ineficiênte.</p>

<p>A diferença é que agora eu fiz um shell-script que cuida de fazer
todo o processo repetitivo e me deixa por conta de simplesmente
escrever o conteúdo.</p>

<p>O script é tão simples que eu posso tornar ele em um script posix
sem muitas dificuldades.</p>

<h1>Tive que sacrificar algumas coisas</h1>

<p>Como toda mudança, são necessários alguns sacrifícios, e no caso
desse site, foram as tags.</p>

<p>Isso não é lá um grande problema, mas ainda assim é uma feature a
menos aqui.</p>

<p>Como eu vou estudar Javascript, eu acho que eu posso implementar um
sistema de tags simples, no mesmo estilo que o meu antigo sistema de
tabela de conteúdos.</p>

<h1>As dependências do script</h1>

<p>Em termos simples: uma distro Linux ou sistema unix-like.</p>

<p>Tudo o que esse script faz é uma manipulação de arquivos e nada além
disso, e para poder provar isso, aqui está todo o código do script:</p>

```bash
#!/usr/bin/env bash

echo "Nome do post: "
read TMPNAME
echo "Descrição do post: "
read DESCR
echo "Thumbnail: "
read THUMB

POSTNAME="$(echo "$TMPNAME" | tr ' ' '-')"

touch posts/$POSTNAME.html
cat posts/_template.html > posts/$POSTNAME.html

mkdir -p tmp

head --lines=33 blog.html > tmp/top
tail --lines=+34 blog.html > tmp/bottom

cat << EOF > tmp/middle
    <article class="card">
      <a class="post-link" href="/posts/$POSTNAME.html">
        <div class="thumbnail">
          <p class="center">
            $THUMB
          </p>
        </div>
        <hgroup>
          <h3>$TMPNAME</h3>
          <p>$DESCR</p>
        </hgroup>
      </a>
    </article>
EOF

head --lines=27 posts/$POSTNAME.html > tmp/post-top
tail --lines=+28 posts/$POSTNAME.html > tmp/post-bottom

cat << EOF > tmp/post-middle
      <div class="post-thumbnail">
        <p class="center">
          $THUMB
        </p>
      </div>
      <hgroup>
        <h1>$TMPNAME</h1>
        <p>$DESCR</p>
      </hgroup>
      <hr>
      <div class="post-content">

        CONTEÚDO

      </div>
EOF

cp blog.html blog.html.bk
cp posts/$POSTNAME.html $POSTNAME.html.bk

cat tmp/top     >  blog.html
printf "\n"     >> blog.html
cat tmp/middle  >> blog.html
printf "\n"     >> blog.html
cat tmp/bottom  >> blog.html

cat tmp/post-top      >  posts/$POSTNAME.html
printf "\n"           >> posts/$POSTNAME.html
cat tmp/post-middle   >> posts/$POSTNAME.html
printf "\n"           >> posts/$POSTNAME.html
cat tmp/post-bottom   >> posts/$POSTNAME.html

$EDITOR posts/$POSTNAME.html
```

<p>Eu sei que esse código não é o mais eficiênte, mas o importante é
que ele funciona.</p>

<h1><em>Fin</em></h1>
<p>Bem, isso é tudo o que eu tenho a dizer por agora.</p>
<p>Até o próximo post!</p>

