---
layout: list
title: tags
---
{% for tag in site.tags %}
<article id="{{ tag[0] }}" class="card">
<h1>{{ tag[0] }}</h1>
    <div class="more">
    {% for post in tag[1] %}
        <a href="{{ post.url }}">
            <article class="tag" style="margin: 5px">
                {{ post.title }}
            </article>
        </a>
    {% endfor %}
    </div>
</article>
{% endfor %}

