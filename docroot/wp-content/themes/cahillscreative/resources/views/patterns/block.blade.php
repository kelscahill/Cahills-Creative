@php
  $image_small = wp_get_attachment_image_src($thumb_id, $thumb_size . '--s')[0];
  $image_medium = wp_get_attachment_image_src($thumb_id, $thumb_size . '--m')[0];
  $alt = get_post_meta($thumb_id, '_wp_attachment_image_alt', true);
@endphp
<div class="block block__post background-color--white">
  <a href="{{ $link }}" class="block__link spacing">
    @if (!empty($thumb_id))
      <picture class="block__thumb">
        <source srcset="{{ $image_medium }}" media="(min-width:500px)">
        <img src="{{ $image_small }}" alt="{{ $alt }}">
      </picture>
    @endif
    <div class="block__content spacing--half">
      @if (!empty($kicker))
        <div class="block__kicker font--primary--xs color--gray">
          {{ $kicker}}
        </div>
      @endif
      <div class="block__title font--primary--m color--black">
        {{ $title }}
      </div>
      @if (!empty($date))
        <div class="block__meta color--gray">
          @include('partials.entry-meta')
        </div>
      @endif
    </div>
  </a>
  <div class="block__toolbar">
    <div class="block__toolbar--left">
      <div class="block__toolbar-item block__toolbar-like space--right">
        @if(function_exists('wp_ulike'))
          @php wp_ulike('get'); @endphp
        @endif
      </div>
      @if (comments_open())
        <a href="{{ $link }}#comments" class="block__toolbar-item block__toolbar-comment space--right">
          <span class="icon icon--s space--half-right">@include('patterns/icon__comment')</span>
          <span class="font--sans-serif font--sans-serif--small color--gray">
            @php
              comments_number('0', '1', '%');
            @endphp
          </span>
        </a>
      @endif
    </div>
    <div class="block__toolbar--right tooltip">
      <div class="block__toolbar-item block__toolbar-share tooltip-toggle js-toggle-parent">
        <span class="font--primary--xs color--gray">Share</span>
        <span class="icon icon--s space--half-left">@include('patterns/icon__share')</span>
      </div>
      @include('patterns/share-tooltip')
    </div>
  </div>
</div>
