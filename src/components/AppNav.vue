<template>
  <header class="g-nav-header">
    <nav class="g-nav container">
      <a href="#!" class="g-nav-toggle"><i class="ti-menu"></i></a>
      <router-link to="/" class="g-nav__brand">
        <img src="@/assets/brand/geotourists_logo.png" alt="">
      </router-link>
      <ul class="g-nav__menu">
        <li class="g-nav__menu-item">
          <router-link class="g-nav__menu-link" to="#!"> Discover</router-link>
        </li>
        <li class="g-nav__menu-item">
          <router-link class="g-nav__menu-link" to="/create"> Create</router-link>
        </li>
        <li class="g-nav__menu-item">
          <router-link class="g-button is--disabled " to="#!"> Download</router-link>
        </li>
      </ul>
      <ul class="g-nav__actions">
        <li class="g-nav__actions-item">
          <BookmarkDropdown/>
        </li>
        <li class="g-nav__actions-item">
          <NotificationDropdown/>
        </li>
        <li class="g-nav__actions-item">
          <ProfileDropdown/>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ProfileDropdown from '@/components/ProfileDropdown'
import NotificationDropdown from '@/components/NotificationDropdown'
import BookmarkDropdown from '@/components/BookmarkDropdown'
  export default {
    name: 'AppNav',
    components: {
      ProfileDropdown,
      NotificationDropdown,
      BookmarkDropdown
    }
  }
</script>

<style scoped>
  
</style>