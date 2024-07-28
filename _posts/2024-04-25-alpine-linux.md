---
layout: post
thumbnail: "🐧"
title: "Alpine Linux"
description: "Simplesmente incrível"
---
<p>Ontem, eu desinstalei o Arch Linux e instalei o Alpine no lugar, o motivo
não é nada relacionado com o Arch em si, só fiz isso porque eu queria voltar ao
workflow minimalista que eu tinha no Alpine.</p>

<p>Sem pacotes desnecessários,
sem bloatware, sem instabilidades aleatórias.</p>

<p>Porém, eu descobri algo
que me deixou extremamente intrigado, e também me pergunto até agora como não
tinha visto isso antes nos meus últimos 2 anos de experiência com o Alpine.</p>

<h1>$ apk fetch -R</h1>

<p>Isso acima é um comando do gerenciador de pacotes do
Alpine, o APK. Esse comando em si faz a seguinte ação: ele baixa um pacote que
o usuário especifica, junto de suas dependências.</p>

<p>Em suma, isso te dá a
possibilidade de gerir o seu próprio repositório de pacotes apk, sendo esse a
sua intenção.</p>

<p>Porém, eu notei que essa ideia de repositório local me
daria a possibilidade de fazer um backup de todo o meu setup, incluindo todos
os programas/bibliotecas e suas dependências, e poderia restaurar ele por
completo, mesmo sem conexão com a internet. Sendo a única coisa necessária ter
os arquivos comigo.</p>

<h1>E então eu o pus em prática</h1>

<p>No momento, eu
tenho cerca de 680 pacotes guardados em um diretório, e 78 manuais em outro.
Não se deixe enganar pelos números, a soma dos pacotes com os manuais não
chegam nem sequer a 1Gb.</p>

<p>O que além de facilitar no processo de
restauração do meu sistema, também me possibilita ter uma cópia em um pendrive
de até mesmo 4Gb.</p>

<p>Além destes pontos, eu também removo de tabela a
nescessidade de possuir internet para reinstalar o meu sistema do zero, já que
tudo o que eu normalmente precisaria baixar já está pronto em um diretório
local.</p>

<h1>Acidentalmente o pus a prova</h1>

<p>Ontem, antes de desligar o
computador, eu estava testando o comando apk fetch, e então instalei todos os
pacotes que estavam no repositório local. O resultado foi catastrófico.</p>

<p>Eu estava usando diversos pacotes do Alpine Edge, uma versão do Alpine que
se assemelha ao Arch, porém é ainda mais bleeding edge.</p>

<p>No processo de
instalação dos pacotes do repositório local, houveram diversos pacotes que
simplesmente foram removidos (cerca de 400) e os demais sofreram um dowgrade de
versões.</p>

<p>Tudo bem até aí, porém um dos pacotes que foram modificados
(até agora não sei se ele sofreu um downgrade ou se foi removido) foi o kernel
do sistema.</p>

<p>Senhores, o meu sistema operacional eliminou o próprio
kernel que ele estava utilizando.</p>

<p>O que aconteceu no fim, foi um reboot
feito por mim mesmo para poder ter uma nocão do estrago, e fui recebido com um
erro do bootloader dizendo que o kernel não estava sendo encontrado.</p>

<h1>Hora de reinstalar</h1>

<p>Tudo bem, isso foi erro meu, então reinstalei o
sistema. Sorte a minha que eu tinha não só acabado de finalizar o meu script de
backups, como também tinha feito um antes de todo esse desastre acontecer.</p>

<p>O resultado final não poderia ser mais gratificante. Não só o script de
backup funcionou perfeitamente, sendo possível restaurar o meu diretório home,
junto de minhas dotfiles e arquivos sensíveis como minhas chaves, mas também
todos os pacotes foram instalados sem o uso de internet com sucesso.</p>

<p>Em
torno de 15 minutos eu consegui restaurar todo o meu sistema como se nada
tivesse acontecido.</p>

<p>Tudo desde as bibliotecas que uso, como a interface
gráfica que uso (Sway) e todos os meus programas foram restaurados e
configurados da exata forma em que estavam antes da reinstalação (eis a
utilidade de dotfiles e a importância de manter um backup delas).</p>

<h1>Agora estou focado em deixar tudo offline</h1>

<p>O que quero dizer com isso é bem
simples, eu estou fazendo com que todo o meu sistema operacional, junto dos
meus programas/bibliotecas, configurações e arquivos sejam restauráveis com
facilidade e sem a nescessidade de internet ou de ferramentas complicadas.</p>

<p>O que eu usei para fazer backup dos meus arquivos e dotfiles foi um
shell-script posix feito por mim. Ele simplesmente lê 4 arquivos localizados em
$XDG_CONFIG_HOME/backup, esses arquivos são: config, share, bin e home. Esses
arquivos contém caminhos para diretórios e arquivos para os diretórios
~/.config, ~/.local/share, ~/.local/bin, ~/, respectivamente.</p>

<p>Todos os
arquivos/diretórios contidos nas listas são copiados para um diretório criado
na executação do script, ele se chama backup e fica localizado em
~/.local/backup.</p>

<p>Após todos os arquivos/diretórios serem copiados, o
diretório backup é transformado em uma tarball comprimida com gzip, sendo essa
tarball posta no diretório home (~/backup.tar.gz).</p>

<p>Ao finalizar a
criação da tarball, o diretório backup é excluído.</p>

<p>E é basicamente assim
que eu faço backups do meu sistema atualmente. É um processo simples e
prático.</p>

<h1><em>Fin</em></h1>

<p>Enfim, isso é tudo o que eu tenho para
falar por hoje.</p>

<p>Até o próximo post!</p>
