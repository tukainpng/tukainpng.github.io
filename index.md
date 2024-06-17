---
layout: list
title: Meu blog
description: Meu blog pessoal
---
{% for post in site.posts %}
<article class="card">
    <a href="{{ post.url }}">
        <time>{{ post.created }}</time>
        <hgroup class="post-card">
            <h3>
                {{ post.title }}
            </h3>
            <p>
                {{ post.description }}
            </p>
        </hgroup>
    </a>
    <div style="overflow: scroll">
    {% for tag in post.tags %}
        <p class="tag">
            {{ tag }}
        </p>
    {% endfor %}
    </div>
</article>
{% endfor %}
