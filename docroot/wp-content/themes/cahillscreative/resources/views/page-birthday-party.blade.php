<!doctype html>
<html @php language_attributes() @endphp>
  @include('partials.head')
  <body id="top" @php body_class('body-party page-birthday-party') @endphp>
    @php do_action('get_header') @endphp
    <main class="main" role="document">
      <div class="layout-container">
        @while(have_posts()) @php the_post() @endphp
          <article @php post_class('article spacing--double') @endphp>
            <div class="article__title">
              @if (get_field('display_title'))
                <h1 class="page-title color--white">{{ get_field('display_title') }}</h1>
              @endif
            </div>
            <div class="article__buttons spacing">
              <a href="/birthday-party/invite" class="btn btn--red">Of Course!</a>
              <a href="/birthday-party/decline" class="btn btn--outline">Nah, secrets don&rsquo;t make friends</a>
            </div>
          </article>
        @endwhile
      </div>
    </main>
    @php do_action('get_footer') @endphp
    @php wp_footer() @endphp
  </body>
</html>
