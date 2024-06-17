---
layout: list
title: categorias
---
{% for cat in site.categories %}
<article class="card">
<h1>{{ cat[0] }}</h1>
    <div class="more">
    {% for post in cat[1] %}
      <a href="{{ post.url }}"><article class="categories" style="margin: 5px">{{ post.title }}</article></a>
    {% endfor %}
    </div>
</article>
{% endfor %}

