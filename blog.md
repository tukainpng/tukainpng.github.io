---
layout: list
title: Blog
description: Meu blog pessoal
---
{% for post in site.posts %}
<div class="card" style="width:16em; margin:0.5em">
  <a style="text-decoration: none" class="text-body" href="{{ post.url }}">
  {% if post.thumb == null %}
    <img
      class="card-img-top"
      src="/assets/img/posts/thumbnail/placeholder.webp"
    >
  {% else %}
    <img
      class="card-img-top"
      src="/assets/img/posts/thumbnail/{{ post.thumb }}"
    >
  {% endif %}
  <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <p>{{ post.description }}</p>
  </div>
  </a>
</div>
{% endfor %}
