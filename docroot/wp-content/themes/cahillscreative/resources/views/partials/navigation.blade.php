<div class="header__nav main-nav background-color--white">
  <div class="nav__toggle toggle js-toggle-parent">
    <span class="nav__toggle-span nav__toggle-span--1"></span>
    <span class="nav__toggle-span nav__toggle-span--2"></span>
    <span class="nav__toggle-span nav__toggle-span--3"></span>
    <span class="nav__toggle-span nav__toggle-span--4"></span>
  </div>
  <nav class="nav__primary-mobile" role="navigation">
    @php
      $menu_args_left = array(
        'echo' => false,
        'menu_class' => 'primary-nav__list',
        'container' => false,
        'depth' => 2,
        'theme_location' => 'primary_navigation_left',
      );

      $menu_args_right = array(
        'echo' => false,
        'menu_class' => 'primary-nav__list',
        'container' => false,
        'depth' => 2,
        'theme_location' => 'primary_navigation_right',
      );

      // Native WordPress menu classes to be replaced.
      $replace = array(
        'menu-item ',
        'sub-menu',
        'menu-item-has-children',
        '<a',
      );
      // Custom ALPS classes to replace.
      $replace_with = array(
        'primary-nav__list-item rel ',
        'primary-nav__subnav-list',
        'primary-nav--with-subnav js-toggle',
        '<a class="primary-nav__link" ',
      );
    @endphp
    @if (has_nav_menu('primary_navigation_left') || has_nav_menu('primary_navigation_right'))
      @php echo str_replace($replace, $replace_with, wp_nav_menu($menu_args_left)); @endphp
      @php echo str_replace($replace, $replace_with, wp_nav_menu($menu_args_right)); @endphp
    @endif
  </nav>
  @if (has_nav_menu('primary_navigation_left'))
    <nav class="nav__primary background-color--primary" role="navigation">
      @php
        $menu_args_left = array(
          'echo' => false,
          'menu_class' => 'primary-nav__list',
          'container' => false,
          'depth' => 2,
          'theme_location' => 'primary_navigation_left',
        );

        $menu_args_right = array(
          'echo' => false,
          'menu_class' => 'primary-nav__list',
          'container' => false,
          'depth' => 2,
          'theme_location' => 'primary_navigation_right',
        );

        // Native WordPress menu classes to be replaced.
        $replace = array(
          'menu-item ',
          'sub-menu',
          'menu-item-has-children',
          '<a',
        );
        // Custom ALPS classes to replace.
        $replace_with = array(
          'primary-nav__list-item rel ',
          'primary-nav__subnav-list',
          'primary-nav--with-subnav js-hover',
          '<a class="primary-nav__link" ',
        );
      @endphp
      @if (has_nav_menu('primary_navigation_left'))
        @php echo str_replace($replace, $replace_with, wp_nav_menu($menu_args_left)); @endphp
      @endif
      <div class="header__logo-wrap">
        <a href="{{ home_url('/') }}" class="header__logo-link">
          <div class="header__logo">@include('patterns.logo')</div>
        </a>
      </div>
      @if (has_nav_menu('primary_navigation_right'))
        @php echo str_replace($replace, $replace_with, wp_nav_menu($menu_args_right)); @endphp
      @endif
    </nav>
  @endif
</div>
