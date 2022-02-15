<template>
  <div class="description">
    <div class="d-flex align-items-center justify-content-between">
      <LanguageSwitch />
      <AddItem />
    </div>
    <section class="description__cover my-5" v-bind:style="{background:'#00091b',background: ' linear-gradient(180deg, rgba(238,238,238,0) 0%, rgba(29,35,37,0.8) 100%),url(' + backgroundImg + ')  no-repeat center center / cover' }">
      <a href="#" class="description__cover-set">
        <i class="ti-camera icon"></i> Set Cover
      </a>
    </section>
    <section class="description__content my-5">
      <h2 class="g-text__h2 g-text--dark g-text--bold">A walking trail of Montmartre, Paris</h2>
      <div class="section-divider"></div>
      <p class="g-text__subtitle g-text--light g-text--light-grey my-5">
        Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the leafy hilltop village of Montmartre was once the play area of Paris’s most famous artists, bohemians and creatures of the night. These days, the winding cobbled streets host chic cafes, retro boutiques and fine French dining but, if you look closely enough, those in search of historical secrets can still find traces of the old La Bohème hidden between the tourist traps…
      </p>
    </section>
    <div class="section-divider"></div>
    <section class="description__tags my-5">
      <h3 class="g-text__h3 g-text--dark g-text--bold">Tags</h3>
      <div class="py-3">
        <a href="#!" class="description__tag add"><i class="ti-plus"></i></a>
        <span class="description__tag">Montmartre <a href="#!" class="action"><i class="ti-close"></i></a></span>
        <span class="description__tag">Paris <a href="#!" class="action"><i class="ti-close"></i></a></span>
      </div>
    </section>
    <section class="description__tags my-5">
      <h3 class="g-text__h3 g-text--dark g-text--bold">Categories</h3>
      <div class="py-3 row">
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card is--selected">
            <i class="fas fa-vihara icon"></i>
            <span>Architecture</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-bus-alt icon"></i>
            <span>City tours</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-biking icon"></i>
            <span>Cycling</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-car icon"></i>
            <span>Driving</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-book-open icon"></i>
            <span>Educational</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-ghost icon"></i>
            <span>Haunted</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-hamburger icon"></i>
            <span>Food</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card is--selected">
            <i class="fas fa-fan icon"></i>
            <span>Heritage</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fab fa-pagelines icon"></i>
            <span>Nature</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-shopping-bag icon"></i>
            <span>Shopping</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card is--selected">
            <i class="fas fa-walking icon"></i>
            <span>Walking</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fab fa-accessible-icon icon"></i>
            <span>Accessible</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-baby icon"></i>
            <span>For kids</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-water icon"></i>
            <span>Rivers</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-hotel icon"></i>
            <span>Hotels</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-train icon"></i>
            <span>Trains</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-directions icon"></i>
            <span>Described</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-egg icon"></i>
            <span>Easter hunt</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-palette icon"></i>
            <span>Arts & Culture</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-photo-video icon"></i>
            <span>Entertainment</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-dna icon"></i>
            <span>Life journey</span>
          </router-link>
        </div>
        <div class="col-md-3 col-6">
          <router-link to="#!" class="category-card">
            <i class="fas fa-praying-hands icon"></i>
            <span>Religious</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import AddItem from '@/components/AddItem'
  import LanguageSwitch from '@/components/LanguageSwitch'
  export default {
    name: 'TourDescription',
    components: {
      AddItem,
      LanguageSwitch
    },
    data() {
      return {
        backgroundImg: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
    }
  }
</script>
<style scoped>
  .description__cover {
    position: relative;
    height: 220px;
    border-radius: 6px;
  }

  .description__cover-set {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    font-size: 1rem;
    color: var(--white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .description__cover-set .icon {
    display: block;
    margin-right: 0.75rem;
    font-size: 1.5rem;
  }

  .description__tag {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    min-width: 108px;
    padding: 0.8rem;
    color: var(--grey-dark-1);
    font-size: 1rem;
    font-weight: var(--font-light);
    border: 1px solid #BCDEE8;
    border-radius: 32px;
    background-color: #F8FBFC;
    margin-right: 0.9rem;
  }

  .description__tag .action {
    font-size: 0.65rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    opacity: 0.7;
    height: 18px;
    width: 18px;
    background: var(--grey-dark-1);
    color: var(--white);
    margin-left: 0.4rem;
  }

  .description__tag.add {
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    min-width: unset;
    height: 32px;
    width: 32px;
    color: var(--grey-dark-1);
  }

  .category-card {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    margin: 1rem auto;
    border: 0.5px solid #D3DCE0;
    border-radius: 8px;
    background-color: #FFFFFF;
    font-size: 0.75rem;
    color: var(--grey-dark-2);
    transition: 0.5s ease-in-out;
  }

  .category-card .icon {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-blue);
    transition: 0.5s ease-in-out;
  }

  .category-card.is--selected,
  .category-card:hover {
    background: var(--primary-blue);
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.05),
      0 2px 2px 0 rgba(0, 0, 0, 0.08), 0 0 8px 0 rgba(45, 174, 225, 0.12), 0 8px 8px 0 rgba(45, 174, 225, 0.24);
    color: var(--white);
  }

  .category-card.is--selected .icon,
  .category-card:hover .icon {
    color: var(--white);
  }
</style>