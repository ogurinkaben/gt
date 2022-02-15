<template>
  <div class="wrapper">
    <div class="col-md-6 mx-auto">
      <div class="text-center">
        <h2 class="g-text__h2 g-text--dark g-text--medium">Select tour type</h2>
        <p class="g-text__body g-text--light-grey-2">You can change it later in tour settings</p>
      </div>
      <div class="py-3">
        <div class="col-md-8 mx-auto p-0">
          <router-link to="/">
            <div class="tc-card d-flex align-items-center">
              <div class="tc-card__icon p-3">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="tc-card__info">
                <h3 class="g-text__h4 mb-0 g-text--medium">Map positioning tour</h3>
                <p class="g-text__body mb-0 g-text--light">Outdoor or indoor with gps tracking</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-8 mx-auto p-0">
          <router-link to="/">
            <div class="tc-card d-flex align-items-center">
              <div class="tc-card__icon p-3">
                <i class="fas fa-subway"></i>
              </div>
              <div class="tc-card__info">
                <h3 class="g-text__h4 mb-0 g-text--medium">No positioning tour</h3>
                <p class="g-text__body mb-0 g-text--light">Trains, boats and planes</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-8 mx-auto p-0">
          <router-link to="/">
            <div class="tc-card d-flex align-items-center">
              <div class="tc-card__icon p-3">
                <i class="fas fa-archive"></i>
              </div>
              <div class="tc-card__info">
                <h3 class="g-text__h4 mb-0 g-text--medium">Catalogue tour</h3>
                <p class="g-text__body mb-0 g-text--light">Artefacts catalogues, etc.</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="my-5 text-center">
            <a href="#!" @click="$router.go(-1)" class="g-button is--outline">Cancel</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateNew',
  }
</script>

<style scoped>
  .tc-card {
    min-height: 96px;
    color: var(--grey-dark-1);
    border: 0.5px solid #D3DCE0;
    border-radius: 6px;
    background-color: #FFFFFF;
    padding: 1rem;
    transition: 0.5s ease-in-out;
    margin: 1rem auto;
  }

  .tc-card .tc-card__icon {
    font-size: 1.5rem;
  }

  .tc-card:hover {
    background-color: var(--primary-blue);
    color: var(--white);
    box-shadow: 0 6px 9px 0 rgba(45, 174, 225, 0.24);
  }
  .tc-card__info p {
   opacity: 0.7;
  }
</style>