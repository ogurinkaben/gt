<template>
  <div class="dropdown show g-nav__actions-dropdown">
    <a class="dropdown-toggle g-nav__actions-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="ti-bookmark"></i>
    </a>
    <div class="dropdown-menu dropdown-menu-right  bookmark-dropdown" aria-labelledby="dropdownMenuLink">
      <div class="p-3 py-2">
        <h3 class="g-text__h3 g-text--dark mb-0">Recently taken</h3>
      </div>
      <div class="bookmark-dropdown__item px-3 py-2">
        <router-link to="#!">
          <div class="d-flex align-items-start">
            <div class="mr-3">
              <img src="https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="bookmark-dropdown__item-image" alt="">
            </div>
            <div class="">
              <p class="g-text__small  g-text--dark g-text--medium mb-0">
                Pandora – The World of Avatar
              </p>
              <span class="g-text__extra-small g-text--light-grey g-text--light">2 hours ago</span>
              <div class="d-flex align-items-center justify-content-between py-1 w-100">
                <router-link to="#!" class="g-action-btn is--complete">Write a review</router-link>
                <div class="text-right">
                  <router-link to="#!" class="g-link p-1 g-text--light-grey"><i class="ti-upload"></i></router-link>
                  <router-link to="#!" class="g-link p-1 g-text--light-grey"><i class="fas fa-bookmark"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="px-3">
        <div class="dropdown-divider"></div>
      </div>
      <div class="p-3 py-2">
        <h3 class="g-text__h3 g-text--dark mb-0">Unfinished tours</h3>
      </div>
      <div class="bookmark-dropdown__item px-3 py-2">
        <router-link to="#!">
          <div class="d-flex align-items-start">
            <div class="mr-3">
              <img src="https://images.pexels.com/photos/343469/pexels-photo-343469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="bookmark-dropdown__item-image" alt="">
            </div>
            <div class="">
              <p class="g-text__small  g-text--dark g-text--medium mb-0">
                A Walking Trail of Times square New York
              </p>
              <span class="g-text__extra-small g-text--light-grey g-text--light">12 days ago</span>
              <div class="d-flex align-items-center justify-content-between py-1 w-100">
                <div class="d-flex align-items-center ">
                  <span class="g-text__extra-small g-text--medium g-text--yellow mr-1">70%</span>
                  <router-link to="#!" class="g-action-btn is--pending">Resume</router-link>
                </div>
                <div class="text-right">
                  <router-link to="#!" class="g-link p-1 g-text--light-grey"><i class="ti-upload"></i></router-link>
                  <router-link to="#!" class="g-link p-1 g-text--light-grey"><i class="fas fa-bookmark"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookmarkDropdown',
  }
</script>