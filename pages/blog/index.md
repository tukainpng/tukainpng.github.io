---
layout: default
title: Posts
---
<div class="center">
    <hgroup>
        <h1>Meu blog</h1>
        <p>Aqui, eu falo sobre coisas do meu cotidiano ou sobre assuntos que me
        interessam.</p>
    </hgroup>
    <a href="/pages/blog/rss.xml">
        <img style="border-radius:3px" width="16px" src="/assets/img/rss.webp" />
    </a>
</div>
<div class="center">
{% for post in site.posts %}
    <article class="card">
      <a title="{{ post.date | date: '%d/%m/%Y' }}" class="post-link" href="{{ post.url }}">
      <div class="center">
        <div class="thumbnail">
          <p class="center">
            {{ post.thumbnail }}
          </p>
        </div>
      </div>
        <hgroup>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </hgroup>
      </a>
    </article>
{% endfor %}
</div>

