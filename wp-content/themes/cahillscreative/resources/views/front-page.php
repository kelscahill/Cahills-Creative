<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['is_front_page'] = 'true';

$featured_posts_args = array(
  'post_type' => 'post',
  'posts_per_page' => 4,
  'post_status' => 'publish',
  'order' => 'DESC',
);
$context['featured_posts'] = Timber::query_posts($featured_posts_args);

$featured_work_args = array(
  'post_type' => 'work',
  'posts_per_page' => 2,
  'post_status' => 'publish',
  'order' => 'DESC',
  'tax_query' => array(
    array(
      'taxonomy' => 'post_tag',
      'field' => 'slug',
      'terms' => 'featured',
    )
  )
);
$context['featured_work'] = Timber::query_posts($featured_work_args);

Timber::render(array('04-pages/page-' . $post->post_name . '.twig', '04-pages/front-page.twig'), $context);
