<!doctype html>
<html @php(language_attributes())>
  @include('partials.head')
  <div class="overlay"></div>
  <body id="top" @php(body_class())>
    @php(do_action('get_header'))
    @include('partials.header')
    <main class="main" role="document">
      @yield('content')
    </main>
    @php(do_action('get_footer'))
    @include('partials.footer')
    @php(wp_footer())
  </body>
</html>
