#!/usr/bin/env bash

printf "Título do post: "
read TITLE
printf "Descrição do post: "
read DESCRIPTION

touch _posts/"$(date +%Y-%m-%d)-$TITLE.md"
cat << EOF > _posts/"$(date +%Y-%m-%d)-$TITLE.md"
---
layout: post
created: $(date +%d/%m/%Y)
title: $TITLE
thumb: placeholder.webp
tags:
description: $DESCRIPTION
---
EOF

$EDITOR _posts/"$(date +%Y-%m-%d)-$TITLE.md"
