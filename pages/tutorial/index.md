---
layout: default
title: Tutoriais
---
<div class="center">
    <hgroup>
        <h1>Tutoriais</h1>
        <p>Alguns tutoriais sobre coisas que uso, feitos por mim.</p>
    </hgroup>
    <a href="/pages/tutorial/rss.xml">
        <img style="border-radius:3px" width="16px" src="/assets/img/rss.webp" />
    </a>
</div>
<div class="center">
{% for tutorial in site.tutorial %}
    <article class="card">
      <a title="{{ tutorial.date | date: '%d/%m/%Y' }}" class="post-link" href="{{ tutorial.url }}">
        <div class="thumbnail">
          <p class="center">
            {{ tutorial.thumbnail }}
          </p>
        </div>
        <hgroup>
          <h3>{{ tutorial.title }}</h3>
          <p>{{ tutorial.description }}</p>
        </hgroup>
      </a>
    </article>
{% endfor %}
</div>

