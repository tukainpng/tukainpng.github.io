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

cat << EOF | wl-copy
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

cat tmp/top     >  blog.html
printf "\n"     >> blog.html
cat tmp/middle  >> blog.html
printf "\n"     >> blog.html
cat tmp/bottom  >> blog.html

$EDITOR posts/$POSTNAME.html
