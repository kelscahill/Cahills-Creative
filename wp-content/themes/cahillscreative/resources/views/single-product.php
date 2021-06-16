<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$id = get_queried_object_id();
$context = Timber::context();
$post = new TimberPost();
$context['post'] = $post;
$context['product'] = wc_get_product($id);

$related_products_args = array(
  'post__not_in' => array($id),
  'post_type' => 'product',
  'posts_per_page' => 8,
  'post_status' => 'publish',
  'tax_query' => array(
    array(
      'taxonomy' => 'affiliate_category',
      'field' => 'slug',
      'terms' => get_the_terms($id ,'affiliate_category')[0]->name,
    )
  )
);
$context['related_products'] = Timber::query_posts($related_products_args);

Timber::render(array('05-pages/post-types/single-product.twig'), $context);
