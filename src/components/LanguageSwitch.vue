<template>
  <div class="languages">
    <div class="d-flex align-items-center languages__menu">
      <a href="#!" class="languages__menu-link is--active">English</a>
      <a href="#!" class="languages__menu-link">French</a>
      <a href="#!" class="languages__menu-link">Deutch</a>
      <a href="#!" class="languages__menu-link">Spanish</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LanguageSwitch',
  }
</script>

<style scoped>
  .languages__menu {
    padding: 0.5rem 0;
  }
@media screen and (max-width:768px) {
  .languages__menu {
    max-width: 260px;
    overflow-x:auto ;
  }
}
  .languages__menu .languages__menu-link {
    display: block;
    padding: 1rem;
    color: var(--grey-dark-1);
    font-size: 0.85rem;
    font-weight: var(--font-medium);
    opacity: 0.7;
    transition: 0.5s ease-in-out;
    border-bottom: 2px solid transparent;
    margin-right: 0.4rem;
  }

  .languages__menu .languages__menu-link:hover,
  .languages__menu .languages__menu-link.is--active {
    opacity: 1;
    color: var(--primary-blue);
    border-color: var(--primary-blue);
  }
</style>