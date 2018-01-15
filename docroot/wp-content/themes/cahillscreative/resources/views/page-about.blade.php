@extends('layouts.app')
@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-page')
    @php($process = get_field('process_steps'))
    @if ($process)
      <section class="section section__process padding--double-bottom">
        <div class="section--inner layout-container narrow narrow--m spacing--double">
          <div class="step">
            @foreach ($process as $item)
              <div class="step-item sticky-parent">
                <div class="step-item__number sticky"><span class="font--primary--xs color--gray">Step</span></div>
                <div class="step-item__content spacing">
                  <h2 class="font--primary--s">{{ $item['process_title'] }}</h2>
                  @php echo wpautop($item['process_body']); @endphp
                </div>
              </div>
            @endforeach
          </div>
          <p class="text-align--center">This is how I do what I do. Now, take a look at some of the end results.</p>
          <a href="/work" class="btn btn--center">See Work</a>
        </div>
      </section>
    @endif
    <section class="section section__faqs padding--double-top padding--double-bottom background-color--white">
      <div class="section--inner layout-container narrow narrow--l spacing--double">
        <div class="section__header text-align--center">
          <h3 class="font--primary--s">FAQ's</h3>
          <hr class="divider" />
          <h2 class="font--primary--xl">You have questions. I have answers.</h2>
        </div>
        @php($accordion = get_field('accordion'))
        @if ($accordion)
          <div class="accordion spacing">
            <div class="accordion--inner space--half-bottom">
              @foreach ($accordion as $item)
                <div class="accordion-item">
                  <div class="accordion-item__title js-toggle-parent">
                    <h4 class="font--primary--m">{{ $item['accordion_title'] }}</h4>
                    <span class="accordion-item__toggle spacing--zero"></span>
                  </div>
                  <div class="accordion-item__body article__body spacing padding--zero">
                    @php echo wpautop($item['accordion_body']); @endphp
                  </div>
                </div>
              @endforeach
            </div>
          </div>
        @endif
        <p class="text-align--center">Don't hesitate to reach out with any other questions or just to say hi.</p>
        <a href="/contact" class="btn btn--center">Contact</a>
      </div>
    </section>
  @endwhile
@endsection
