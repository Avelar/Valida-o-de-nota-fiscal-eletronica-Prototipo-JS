---
layout: post
title:  "Infográfico animado com SVG"
date:   2013-05-17 18:55:19
categories: jekyll update svg css jquery
tags:
- jekyll
- update
- svg
- css
- jquery
---

Infográficos

Como fica o arquivo .css:

{% highlight css %}
	/* Primeira div */
	#div {
		widht: 100px;
		color: #ddd;
	}
{% endhighlight %}

Como fica o arquivo .js:
{% highlight javascript %}
$("#div").click(function(){
	$(this).fadeOut();
});
{% endhighlight %}