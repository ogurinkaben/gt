<template>
  <div class="point">
    <div class="d-flex align-items-center justify-content-between">
      <LanguageSwitch />
      <AddItem />
    </div>
    <section class="description__content my-5">
      <h2 class="g-text__h2 g-text--dark g-text--medium"><span class="g-text--light-grey mr-2">1</span>Abbesses Metro Station</h2>
      <p class="g-text__subtitle g-text--light g-text--light-grey my-3">
        Paris’s larger and more well-known cemeteries might be the eternal resting place of many recent famous name, but the Cimetière de Montmartre is home to more than
      </p>
    </section>
    <div class="section-divider"></div>
    <section class="point__content my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Location</h3>
        <i class="fas fa-map-marker-alt g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2 ">
        <div class="g-point__map-area">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5445858940225!2d2.33973801575862!3d48.885957706719225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e43505cb4ad%3A0x31816552b7b289c6!2ssquare%20Nadar!5e0!3m2!1sen!2snl!4v1644867307343!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="w-100 g-point__map"></iframe>
          <address class="p-3 g-text__small g-text--light-grey g-point__map-address d-flex align-items-center mb-0">
            15–19 Place Saint-Pierre, 75018 Paris, France
          </address>
        </div>
      </div>
    </section>
    <section class="point__audio my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Audio</h3>
        <i class="fas fa-microphone-alt g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <div class="d-flex  justify-content-between point__audio-item">
          <div class="">
            <a href="#!">
              <div class="g-text__body g-text--dark-grey-1 g-text--regular">Some recording</div>
              <div class="g-text__extra-small g-text--light-grey-2 g-text--light">7 Rue Livingstone, Paris · 15 Dec, 22:06</div>
            </a>
          </div>
          <div class="d-flex  justify-content-between">
            <div class="g-text__extra-small g-text--light-grey-2 g-text--light mr-3"> 13:24 </div>
            <div class="g-text__extra-small  g-text--light">
              <a href="#!" class="g-text--light-grey-2"> <i class="fas fa-ellipsis-h"></i></a>
            </div>
          </div>
        </div>
        <div class="d-flex  justify-content-between point__audio-item">
          <div class="">
            <a href="#!">
              <div class="g-text__body g-text--dark-grey-1 g-text--regular">Rec 4</div>
              <div class="g-text__extra-small g-text--light-grey-2 g-text--light">7 Rue Livingstone, Paris · 15 Dec, 22:06</div>
            </a>
          </div>
          <div class="d-flex  justify-content-between">
            <div class="g-text__extra-small g-text--light-grey-2 g-text--light mr-3"> 01:12:47 </div>
            <div class="g-text__extra-small  g-text--light">
              <a href="#!" class="g-text--light-grey-2"> <i class="fas fa-ellipsis-h"></i></a>
            </div>
          </div>
        </div>
      </div>

    </section>
    <div class="section-divider"></div>
    <section class="point__photos my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Photos</h3>
        <i class="fas fa-camera g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <carousel :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}" :dots='false' :margin="12">

          <div>
            <img src="https://images.pexels.com/photos/3214975/pexels-photo-3214975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="point__photos-img is--large">
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3073668/pexels-photo-3073668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="point__photos-img is--large">
          </div>
          <div>
            <img src="https://images.pexels.com/photos/9381051/pexels-photo-9381051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="point__photos-img is--small">
            <img src="https://images.pexels.com/photos/548126/pexels-photo-548126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="point__photos-img is--small">
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="point__photos-img is--large">
          </div>

        </carousel>
      </div>
    </section>
    <div class="section-divider"></div>
    <section class="point__tips my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Tips</h3>
        <i class="fas fa-comment-dots g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <ul class="g-text__small g-text--dark pl-0 point__tips-list">
          <li class="point__tips-list-item">• Bring a lot of water</li>
          <li class="point__tips-list-item">• Very crowded on weekends and holidays</li>
          <li class="point__tips-list-item">• Look for ancient carving on the main door</li>
        </ul>
      </div>
    </section>
    <div class="section-divider"></div>
    <section class="point__links my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Links</h3>
        <i class="fas fa-link g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <div class="row">
          <div class="col-md-4">
            <router-link to="#!" class="point__links-item">
              <img src="https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="point__links-item-img">
              <div class="p-2">
                <div class="g-text__extra-small g-text--dark g-text--regular ">MoMA</div>
                <div class="g-text__extra-small g-text--dark-grey-1 g-text--light py-2">MoMA is a place that fuels creativity, ignites minds, and provides inspiration.</div>
                <a href="#" class="g-text__extra-small g-text--dark g-text--regular">moma.org</a>
              </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="#!" class="point__links-item">
              <img src="https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="point__links-item-img">
              <div class="p-2">
                <div class="g-text__extra-small g-text--dark g-text--regular ">MoMA</div>
                <div class="g-text__extra-small g-text--dark-grey-1 g-text--light py-2">MoMA is a place that fuels creativity, ignites minds, and provides inspiration.</div>
                <a href="#" class="g-text__extra-small g-text--dark g-text--regular">moma.org</a>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider"></div>
    <section class="point__events my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Events</h3>
        <i class="fas fa-calendar-day g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <div class="row">
          <div class="col-md-6">
            <router-link to="#!" class="point__event-item">
              <img src="https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="point__event-item-img">
              <div class="p-2">
                <div class="g-text__extra-small g-text--dark-grey-1 g-text--regular text-uppercase">FRI / NOVEMBER 17 10:45–11:45 A.M.</div>
                <div class="g-text__extra-small g-text--dark g-text--semibold ">La mer ton avenir ! Forum des métiers de la mer</div>
                <div class="g-text__extra-small g-text--dark-grey-1 g-text--light py-2">Free with Museum admission</div>
              </div>
            </router-link>
          </div>
          <div class="col-md-6">
            <router-link to="#!" class="point__event-item">
              <img src="https://images.pexels.com/photos/548126/pexels-photo-548126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="point__event-item-img">
              <div class="p-2">
                <div class="g-text__extra-small g-text--dark-grey-1 g-text--regular text-uppercase">FRI / NOVEMBER 17 10:45–11:45 A.M.</div>
                <div class="g-text__extra-small g-text--dark g-text--semibold ">Masterpieces of the Middle Ages</div>
                <div class="g-text__extra-small g-text--dark-grey-1 g-text--light py-2">Free with Museum admission</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider"></div>
    <section class="point__qr my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">QR Code</h3>
        <i class="fas fa-qrcode g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <p class="g-text__body g-text--dark mb-0">This point can be activated by scanning QR code or entering numeric code. Print it or share. </p>
        <div class="col-md-8 mx-auto text-center">
          <img src="@/assets/ui_assets/qr-code.svg" class="point__qr-code" alt="">
          <div class="g-text__h3 g-text--dark g-text--semibold">
            GT 230 500 02
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import carousel from 'vue-owl-carousel'
  import AddItem from '@/components/AddItem'
  import LanguageSwitch from '@/components/LanguageSwitch'
  export default {
    name: 'Point',
    components: {
      carousel,
      AddItem,
      LanguageSwitch
    },
    mounted() {
      document.querySelector('.owl-prev').innerHTML = '<i class="fas fa-arrow-left"></i>';
      document.querySelector('.owl-next').innerHTML = '<i class="fas fa-arrow-right"></i>';
    }
  }
</script>
<style>
  .g-point__map-area {
    border: 0.5px solid #D3DCE0;
    border-radius: 6px;
    background-color: #FFFFFF;
  }

  .g-point__map {
    height: 220px;
    box-shadow: 0 4px 12px 0 rgba(45, 174, 225, 0.05);
  }

  .point__audio-item {
    border-bottom: 0.5px solid var(--grey-light-3);
    margin: 0.5rem auto;
    padding: 0.65rem 0;
  }

  .owl-theme .owl-nav {
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .owl-prev,
  .owl-next {
    position: relative;
    opacity: 1;
    height: 56px;
    width: 56px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: var(--primary-dark) !important;
    border-radius: 100% !important;
    background-color: #FFFFFF !important;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.07);
  }

  .owl-prev {
    left: -2rem;
  }

  .owl-next {
    right: -2rem;
  }

  .point__photos-img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.3);
    margin: 0.5rem auto;
  }

  .point__photos-img.is--large {
    height: 230px;
  }

  .point__photos-img.is--small {
    height: calc(220px/2);
  }

  .point__tips-list {
    list-style: none;
  }

  .point__tips-list .point__tips-list-item {
    margin: 1rem 0;
  }

  .point__event-item,
  .point__links-item {
    display: block;
    border: 0.5px solid #D3DCE0;
    border-radius: 8px;
    background-color: #FFFFFF;
    overflow: hidden;
    min-height: 150px;
    margin: 1rem auto;
  }

  .point__event-item {
    display: flex;
    align-items: center;
  }

  .point__links-item-img {
    height: 80px;
    width: 100%;
    object-fit: cover;
  }

  .point__event-item .point__event-item-img {
    height: 100%;
    min-height: 150px;
    width: 80px;
    object-fit: cover;
  }

  .point__qr-code {
    display: block;
    max-width: 200px;
    margin: 1rem auto;
  }
</style>