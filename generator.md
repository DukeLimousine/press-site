---
layout: home
permalink: /generator
main_title: '{{site.title}}'
---

<div class="generator-wrapper">
  <h2>Click Ye Below to Summon a Random Hagsname</h2>
  <form id="generator-form">
    <p class="generator-result js-generator-result"></p>
    <button class="button-main">Summon</button>
  </form>
</div>

{% include generator_data.html %}
<script src="/assets/js/generator.js" type="text/javascript"></script> 