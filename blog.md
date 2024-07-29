---
title: Posts
---
{% include head.html %}
{% include navbar.html %}
<main>
  <div class="center">
{% for post in site.posts %}
    <article class="card">
      <a class="post-link" href="{{ post.url }}">
        <div class="thumbnail">
          <p class="center">
            {{ post.thumbnail }}
          </p>
        </div>
        <hgroup>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </hgroup>
      </a>
    </article>
{% endfor %}
  </div>
</main>
{% include footer.html %}

