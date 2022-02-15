<template>
  <div class="wrapper">
    <div class="container">
      <section class=" page-section pt-0 align-items-start">
        <div class="w-100">
          <div class="col-md-10 p-0 mx-auto">
            <div class="page-header">
              <img src="@/assets/ui_assets/header.svg" class="w-100 page-header__img" alt="">
              <div class="page-header__content">
                <div class="col-md-8 text-center text-md-left p-0">
                  <h3 class="g-text__h3 g-text--light-grey-2 g-text--medium mb-0">Create your own immersive experience</h3>
                  <div class="my-3">
                    <router-link to="/tour/create-new" class="g-button is--primary">Create new tour</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="col-md-10 mx-auto my-5 page-section">
        <div class="w-100">
          <div class="py-5">
            <h2 class="g-text__h2 g-text--light-grey-2 g-text--medium mb-0">Draft</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="tour-card">
                <div class="tour-card__cover">
                  <img src="https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&dpr=1&w=500" class="tour-card__cover-img">
                  <div class="tour-card__cover-overlay">
                    <div class="d-flex justify-content-between align-items-end w-100">
                      <div class="rating">
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star"></i>
                      </div>
                      <div class="">
                        <div class="map my-3 d-flex justify-content-end">
                          <img src="@/assets/ui_assets/mini-map.svg" alt="">
                        </div>
                        <div class="d-flex">
                          <div class="g-text__extra-small text-white g-text--medium"> 2.2 km · 45 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tour-card__content p-1">
                  <div class="py-2">
                    <router-link to="/" class="tour-card__content-title">
                      A Walking Trail of Montmartre, Paris
                    </router-link>
                  </div>
                  <div class="">
                    <p class="tour-card__content-desc">
                      Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the leafy
                    </p>
                  </div>
                </div>
                <div class="tour-card__footer d-flex align-items-center justify-content-between p-1 g-text--light-grey-2">
                  <div class="g-text__extra-small">Geotourist Presents</div>
                  <div class="g-text__extra-small"> <i class="fas fa-eye"></i> 645</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="col-md-10 mx-auto my-5 page-section">
        <div class="w-100">
          <div class="py-5">
            <h2 class="g-text__h2 g-text--light-grey-2 g-text--medium mb-0">Published tours</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="tour-card">
                <div class="tour-card__cover">
                  <img src="https://images.pexels.com/photos/5544036/pexels-photo-5544036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="tour-card__cover-img">
                  <div class="tour-card__cover-overlay">
                    <div class="d-flex justify-content-between align-items-end w-100">
                      <div class="rating">
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                      </div>
                      <div class="tour-card__cover-preview">
                        <a href="#"><img src="@/assets/ui_assets/Preview.png" class="d-block mr-2" alt=""> Preview</a>
                      </div>
                      <div class="">
                        <div class="map my-3 d-flex justify-content-end">
                          <img src="@/assets/ui_assets/mini-map2.svg" alt="">
                        </div>
                        <div class="d-flex">
                          <div class="g-text__extra-small text-white g-text--medium"> 7 km · 2 hrs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tour-card__content p-1">
                  <div class="py-2">
                    <router-link to="/" class="tour-card__content-title">
                      Mysteries, Oddities & Scary Stories of Florence
                    </router-link>
                  </div>
                  <div class="">
                    <p class="tour-card__content-desc">
                      Did you know that one of the oldest churches in Florence has a stone head 
                    </p>
                  </div>
                </div>
                <div class="tour-card__footer d-flex align-items-center justify-content-between p-1 g-text--light-grey-2">
                  <div class="g-text__extra-small">Geotourist Presents</div>
                  <div class="g-text__extra-small"> <i class="fas fa-eye"></i> 645</div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="tour-card">
                <div class="tour-card__cover">
                  <img src="https://images.pexels.com/photos/5626410/pexels-photo-5626410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="tour-card__cover-img">
                  <div class="tour-card__cover-overlay">
                    <div class="d-flex justify-content-between align-items-end w-100">
                      <div class="rating">
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star"></i>
                      </div>
                      <div class="">
                        <div class="map my-3 d-flex justify-content-end">
                          <img src="@/assets/ui_assets/mini-map3.svg" alt="">
                        </div>
                        <div class="d-flex">
                          <div class="g-text__extra-small text-white g-text--medium"> 2.2 km · 45 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tour-card__content p-1">
                  <div class="py-2">
                    <router-link to="/" class="tour-card__content-title">
                      A Walking Trail of Montmartre, Paris
                    </router-link>
                  </div>
                  <div class="">
                    <p class="tour-card__content-desc">
                      Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the leafy
                    </p>
                  </div>
                </div>
                <div class="tour-card__footer d-flex align-items-center justify-content-between p-1 g-text--light-grey-2">
                  <div class="g-text__extra-small">Geotourist Presents</div>
                  <div class="g-text__extra-small"> <i class="fas fa-eye"></i> 645</div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="tour-card">
                <div class="tour-card__cover">
                  <img src="https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&dpr=1&w=500" class="tour-card__cover-img">
                  <div class="tour-card__cover-overlay">
                    <div class="d-flex justify-content-between align-items-end w-100">
                      <div class="rating">
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star has--rating"></i>
                        <i class="fas fa-star star"></i>
                      </div>
                      <div class="">
                        <div class="map my-3 d-flex justify-content-end">
                          <img src="@/assets/ui_assets/mini-map4.svg" alt="">
                        </div>
                        <div class="d-flex">
                          <div class="g-text__extra-small text-white g-text--medium"> 2.2 km · 45 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tour-card__content p-1">
                  <div class="py-2">
                    <router-link to="/" class="tour-card__content-title">
                      A Walking Trail of Montmartre, Paris
                    </router-link>
                  </div>
                  <div class="">
                    <p class="tour-card__content-desc">
                      Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the leafy
                    </p>
                  </div>
                </div>
                <div class="tour-card__footer d-flex align-items-center justify-content-between p-1 g-text--light-grey-2">
                  <div class="g-text__extra-small">Geotourist Presents</div>
                  <div class="g-text__extra-small"> <i class="fas fa-eye"></i> 645</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .page-header {
    position: relative;
    padding: 1rem;
    min-height: 200px;
    display: flex;
    align-items: center;
  }

  .page-header .page-header__img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }

  @media screen and (max-width:1100px) {
    .page-header .page-header__img {
      opacity: 0;
    }
  }

  .page-header .page-header__content {
    position: relative;
    z-index: 10;
  }

  .page-section {
    min-height: 20vh;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tour-card {
    margin: 2rem auto;
  }
  .tour-card__cover {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
  }

  .tour-card__cover .tour-card__cover-img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .tour-card__cover .tour-card__cover-overlay {
    height: 200px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(238, 238, 238, 0) 0%, #2DAEE1 100%);
    display: flex;
    align-items: flex-end;
    padding: 1rem;
  }

  .tour-card__cover .tour-card__cover-overlay .rating .star {
    font-size: 0.75rem;
    color: var(--grey-light-3);
  }

  .tour-card__cover .tour-card__cover-overlay .rating .star.has--rating {
    color: var(--primary-yellow);
  }

  .tour-card__cover .tour-card__cover-overlay .map img {
    max-width: 80px;
  }

  .tour-card__content .tour-card__content {
    padding: 0.5rem;
  }

  .tour-card__content .tour-card__content-title {
    font-size: 1.3rem;
    font-weight: var(--font-semibold);
    letter-spacing: 0;
    line-height: 30px;
    color: var(--grey-dark-1);
  }

  .tour-card__content .tour-card__content-desc {
    font-size: 0.85rem;
    font-weight: var(--font-regular);
    letter-spacing: 0;
    line-height: 24px;
    color: var(--grey-dark-2);
  }
  .tour-card__cover-preview a {
    display: flex;
    align-items: center;
    color: var(--white);
    font-size: 0.875rem;
  }
</style>