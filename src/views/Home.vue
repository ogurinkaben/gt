<template>
  <div class="wrapper">
    <div class="container p-0">
      <div class="row">
        <TourSidebar />
        <div class="col-lg-7">
          <div class="container">
          <router-view />
          </div>
        </div>
        <Checklist/>
      </div>
    </div>
  </div>
</template>

<script>
  import TourSidebar from '@/components/TourSidebar'
  import Checklist from '@/components/Checklist'
  export default {
    name: 'Home',
    components: {
      TourSidebar,
      Checklist
      
    }
  }
</script>