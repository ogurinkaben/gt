<template>
  <div class="dropdown show g-nav__actions-dropdown">
    <a class="dropdown-toggle g-nav__actions-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="ti-bell"></i>
    </a>
    <div class="dropdown-menu dropdown-menu-right notif-dropdown" aria-labelledby="dropdownMenuLink">
      <div class="p-3 py-2">
        <h3 class="g-text__h3 g-text--dark mb-0">Today</h3>
      </div>
      <div class="notif-dropdown__item is--new p-3">
        <router-link to="#!">
          <div class="d-flex align-items-start">
            <div class="mr-3">
              <img src="https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="notif-dropdown__item-image" alt="">
            </div>
            <div class="">
              <p class="g-text__small  g-text--dark g-text--light mb-0">
                <router-link to="#!" class="g-text--medium  g-text--dark">Walt Disney World </router-link> sent you 2 tickets to Pandora - The World of…
              </p>
              <span class="g-text__extra-small g-text--light-grey g-text--light">2 hours ago</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="p-3 py-2">
        <h3 class="g-text__h3 g-text--dark mb-0">2 days ago</h3>
      </div>
      <div class="notif-dropdown__item px-3 py-2">
        <router-link to="#!">
          <div class="d-flex align-items-start">
            <div class="mr-3">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="notif-dropdown__item-image" alt="">
            </div>
            <div class="">
              <p class="g-text__small  g-text--dark g-text--light mb-0">
                <router-link to="#!" class="g-text--medium  g-text--dark">Bran Koggler </router-link> followed you and 2 other people
              </p>
              <span class="g-text__extra-small g-text--light-grey g-text--light">2 hours ago</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="px-3">
        <div class="dropdown-divider"></div>
      </div>
      <div class="notif-dropdown__item px-3 py-2">
        <router-link to="#!">
          <div class="d-flex align-items-start">
            <div class="mr-3">
              <img src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="notif-dropdown__item-image" alt="">
            </div>
            <div class="">
              <p class="g-text__small  g-text--dark g-text--light mb-0">
                Your tour <router-link to="#!" class="g-text--medium  g-text--dark"> A walking trail of Montmartre, Paris </router-link> has been published
              </p>
              <span class="g-text__extra-small g-text--light-grey g-text--light">2 hours ago</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="px-3">
        <div class="dropdown-divider"></div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'NotificationDropdown',
  }
</script>