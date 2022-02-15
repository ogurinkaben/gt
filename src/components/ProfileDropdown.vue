<template>
  <div class="dropdown show g-nav__actions-dropdown">
    <a class="dropdown-toggle g-nav__actions-link " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src="https://images.pexels.com/photos/7562179/pexels-photo-7562179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="g-nav__actions-avatar" alt="">
    </a>
    <div class="dropdown-menu dropdown-menu-right profile-dropdown" aria-labelledby="dropdownMenuLink">
      <div class="d-flex align-items-center justify-content-between profile-dropdown__user">
        <div class="d-flex align-items-center">
          <div class="mr-3">
            <img src="https://images.pexels.com/photos/7562179/pexels-photo-7562179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="g-nav__actions-avatar" alt="">
          </div>
          <div class="">
            <div class="g-text__small g-text--medium g-text--dark">Lawrence Powers</div>
            <div class="g-text__extra-small g-text--light-grey">My page</div>
          </div>
        </div>
        <div class="">
          <img src="@/assets/ui_assets/qr-code.svg" class="profile-dropdown__bitmap" alt="">
        </div>
      </div>
      <router-link class="dropdown-item" to="#"> <i class="ti-user mr-3 icon"></i> Edit profile</router-link>
      <router-link class="dropdown-item" to="#"><i class="ti-settings mr-3 icon"></i> Settings</router-link>
      <router-link class="dropdown-item" to="#"><i class="ti-power-off mr-3 icon"></i> Log out</router-link>
      <router-link class="dropdown-item d-flex justify-content-between align-items-center g-text--light-grey" to="#">English <i class="ti-angle-right"></i></router-link>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'ProfileDropdown',
  }
</script>