<form action="/" method="get" class="form form__search">
  <input placeholder="Search" type="text" name="s" id="search" value="<?php the_search_query(); ?>" />
  <button><span class="icon icon--s path-fill--white">@include('patterns.icon__search')</span></button>
</form>
