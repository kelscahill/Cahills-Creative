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

/* Template Name: Work Template */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['post_type'] = 'work';
$context['category'] = 'Work';

$args = array(
  'post_type' => 'work',
  'posts_per_page' => 12,
  'post_status' => 'publish',
  'order' => 'DESC',
);
$context['posts'] = Timber::query_posts($args);

Timber::render('04-pages/page.twig', $context);
