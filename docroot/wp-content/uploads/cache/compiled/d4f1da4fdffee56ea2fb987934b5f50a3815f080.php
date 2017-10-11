<?php 
  // Display news post by date
  if (is_category('diy')) {
    $category = 'diy';
  } elseif (is_category('health')) {
    $category = 'health';
  } else {
    $category = 'uncategorized';
  }
  $posts = new WP_Query(array(
    'post_type' => 'post',
    'category_name' => $category,
    'posts_per_page' => 12,
    'post_status' => 'publish',
    'order' => 'DESC',
  ));
 ?>

<?php $__env->startSection('content'); ?>
  <?php //@include('patterns.hero-image') ?>
  <section class="section section__main">
    <div class="layout-container">
      <div class="filter">
        <?php if(is_category('diy')): ?>
          <?php  echo do_shortcode( '[searchandfilter fields="projects, rooms, skill, cost" types="select" hide_empty="1" submit_label="Filter"]' );  ?>
          <?php  echo do_shortcode( '[searchandfilter fields="cost" types="select" hide_empty="1" submit_label="Filter"]' );  ?>
        <?php else: ?>
          <?php echo do_shortcode( '[searchandfilter taxonomies="category"]' ); ?>
        <?php endif; ?>
      </div>
    </div>
      <?php if($posts->have_posts()): ?>
        <div class="narrow--xl center-block spacing--double">
          <?php while($posts->have_posts()): ?> <?php ($posts->the_post()); ?>
            <div class="grid grid--3-col">
              <?php 
                $id = get_the_ID();
                $title = get_the_title($id);
                $excerpt = get_the_excerpt($id);
                $thumb_id = get_post_thumbnail_id($id);
                $thumb_size = 'horiz__4x3';
                $kicker = get_the_category($id);
                $link = get_permalink($id);
                $date = date('F j, Y', strtotime(get_the_date()));
               ?>
              <div class="grid-item">
                <?php echo $__env->make('patterns.block', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
              </div>
            <?php endwhile; ?>
          </div>
          <?php (wp_reset_query()); ?>
          <?php  echo do_shortcode('[ajax_load_more container_type="div" css_classes="spacing--double" post_type="post" scroll="false" transition_container="false" button_label="Load More" posts_per_page="12" offset="12"]');  ?>
        </div>
      <?php else: ?>
        <p><?php echo e(__('Sorry, no results were found.', 'sage')); ?></p>
        <?php echo get_search_form(false); ?>

      <?php endif; ?>
    </div>
  </section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>