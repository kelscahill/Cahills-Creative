@php
  global $post;
  $id = get_queried_object_id();
  if (is_tax()) {
    $term = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy'));
    $thumb_id = get_field('category_featured_image', 'category_' . get_cat_ID(get_cat_name($id)))['ID'];
    $title = get_cat_name($id);
    $excerpt = category_description($id);
    $category = get_taxonomy($term->taxonomy)->label;
  } else if (is_tag()) {
    $thumb_id = get_field('category_featured_image', 'category_' . get_queried_object()->term_id);
    $title = get_queried_object()->slug;
    $excerpt = get_queried_object()->description;
    $category = 'tag';
  } else if (is_category()) {
    $thumb_id = get_field('category_featured_image', 'category_' . get_cat_ID(get_cat_name($id)))['ID'];
    $title = get_cat_name($id);
    $excerpt = category_description($id);
    $category = 'blog';
  } elseif (is_archive('work')) {
    $title = get_the_title(36);
    $excerpt = get_field('intro', 36, false);
    $category = get_field('display_title', 36);
  } else if (is_home()) {
    $title = get_the_title(6);
    $excerpt = get_the_excerpt(6);
    $category = get_cat_name($id);
  } else if (is_front_page()) {
    $thumb_id = get_post_thumbnail_id();
    $title = 'We Create';
    $excerpt = get_the_excerpt();
  } else if ($post->post_parent == '146') {
    $thumb_id = get_post_thumbnail_id();
    $excerpt = get_the_excerpt();
    if (get_field('display_title')) {
      $title = get_field('display_title');
    } else {
      $title = get_the_title();
    }
    $category = 'Shop';
  } else {
    $thumb_id = get_post_thumbnail_id();
    $excerpt = get_the_excerpt();
    if (get_field('display_title')) {
      $title = get_field('display_title');
    } else {
      $title = get_the_title();
    }
    if ($post->post_parent == '0') {
      $category = get_the_title();
    } else {
      $category = get_the_title($post->post_parent);
    }
  }
  if (empty($thumb_id)) {
    $thumb_id = 'default';
  }
@endphp
<section class="section section__hero background--cover background-image--{{ $thumb_id }}">
  @if (!empty($thumb_id) || $thumb_id != 'default')
    <style>
      .background-image--{{ $thumb_id }} {
        background-image: url({{ wp_get_attachment_image_src($thumb_id, "featured__hero--s")[0] }});
      }
      @media (min-width: 800px) {
        .background-image--{{ $thumb_id }} {
          background-image: url({{ wp_get_attachment_image_src($thumb_id, "featured__hero--m")[0] }});
        }
      }
      @media (min-width: 1100px) {
        .background-image--{{ $thumb_id }} {
          background-image: url({{ wp_get_attachment_image_src($thumb_id, "featured__hero--l")[0] }});
        }
      }
      @media (min-width: 1600px) {
        .background-image--{{ $thumb_id }} {
          background-image: url({{ wp_get_attachment_image_src($thumb_id, "featured__hero--xl")[0] }});
        }
      }
    </style>
  @endif
  <div class="section__hero--inner spacing">
    @if (!empty($category))
      <div class="kicker font--primary--s color--white">{{ $category }}</div>
      <hr class="divider background-color--white" />
    @endif
    <h1 class="section__hero-title font--secondary--xl color--white">{{ $title }}</h1>
    @if (is_front_page())
      <section class="rw-wrapper">
				<div class="rw-words">
					<span class="font--primary--m color--white">websites that kick ass</span>
					<span class="font--primary--m color--white">logos that mean something</span>
					<span class="font--primary--m color--white">brands to stand out from the crowd</span>
					<span class="font--primary--m color--white">messaging that tells a story</span>
					<span class="font--primary--m color--white">print that makes people take notice</span>
				</div>
			</section>
    @endif
    @if (!empty($excerpt))
      <p class="section__hero-excerpt color--white">{{ $excerpt }}</p>
    @endif
  </div>
</section>
