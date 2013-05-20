<div class="meta_wrapper">
	<time datetime="{{page.date | date: "%m-%Y"}}">
		{{page.date | date: "%B, %Y"}} |
	</time>
		{% for tag in page.tags %}
			<a class="tag_list_link" href="/tag/{{ tag }}">
				{{ tag }}
			</a>
		{% endfor %}
</div>