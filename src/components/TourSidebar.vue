<template>
  <div class="col-lg-3 p">
    <div class="g-sidebar ">
      <ul class="g-sidebar__menu">
        <li class="g-sidebar__menu-item">
          <router-link to="/" class="g-sidebar__menu-link">Description</router-link>
        </li>
        <li class="g-sidebar__menu-item g-sidebar__menu-link">
          <a href="#!" class="g-sidebar__menu-link">Points </a>
        </li>
        <li class="g-sidebar__menu-item">
          <router-link to="/tour/points/item" class="g-sidebar__menu-point">
            <div><span>1</span></div> Abbesses Metro Station
          </router-link>
        </li>
        <li class="g-sidebar__menu-item">
          <a href="#!" class="g-sidebar__menu-point">
            <div><span>2</span></div> Pigalle and the Moulin R...
          </a>
        </li>
        <li class="g-sidebar__menu-item">
          <a href="#!" class="g-sidebar__menu-point">
            <div><span><i class="ti-plus"></i></span></div> Create new point
          </a>
        </li>
        <li class="g-sidebar__menu-item">
          <router-link to="/tour/media" class="g-sidebar__menu-link">Media</router-link>
        </li>
        <li class="g-sidebar__menu-item">
          <a href="#!!" class="g-sidebar__menu-link">Settings </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TourSidebar',
  }
</script>

<style scoped>
  .g-sidebar {
    position: sticky;
    top: 8rem;
    left: 0;
    background: var(--white-2);
  }

  .g-sidebar__menu {
    padding-left: 0;
    min-height: 100vh;
    list-style: none;
  }
  @media screen and (max-width:768px) {
      .g-sidebar__menu {
        min-height: auto;
      }
  }

  .g-sidebar__menu-item .g-sidebar__menu-link {
    display: block;
    padding: 1rem;
    color: var(--primary-dark);
    transition: 0.4s ease-in-out;
    border-bottom: 2px solid transparent;
    font-size: 1.1rem;
    font-weight: var(--font-medium);
  }

  .g-sidebar__menu-point {
    display: flex;
    min-height: 20px;
    align-items: center;
    padding: 1rem;
    color: var(--grey-dark-3);
    transition: 0.4s ease-in-out;
    border-bottom: 2px solid transparent;
    font-size: 1rem;
    font-weight: var(--font-medium);
  }

  .g-sidebar__menu-point span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    border-radius: 100%;
    background: var(--white);
    border: 0.5px solid rgba(212, 214, 216, 0.5);
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.05);
    margin-right: 2rem;
  }

  .g-sidebar__menu-point:hover,
  .g-sidebar__menu-point.router-link-exact-active,
  .g-sidebar__menu-item .g-sidebar__menu-link.router-link-exact-active,
  .g-sidebar__menu-item .g-sidebar__menu-link:hover {
    background: var(--white);
    border-color: var(--primary-blue);
  }
</style>