<template>
  <div class="col-lg-2 py-0 py-md-5">
    <div class="py-2 d-none d-md-block"></div>
    <div class="checklist my-0 my-md-5">
      <div class="">
        <h3 class="g-text__h3 g-text--dark">Check List</h3>
      </div>
      <div class="py-2">
        <ul class="checklist__list">
          <li class="checklist__list-item d-flex align-items-center justify-content-between g-text__small g-text--dark g-text--medium is--completed py-2">
            <div>Name</div>
            <div class="icon"><i class="fas fa-check-circle "></i></div>
          </li>
          <li class="checklist__list-item d-flex align-items-center justify-content-between g-text__small g-text--dark g-text--medium is--completed py-2">
            <div>Description</div>
            <div class="icon"><i class="fas fa-check-circle "></i></div>
          </li>
          <li class="checklist__list-item d-flex align-items-center justify-content-between g-text__small g-text--dark g-text--medium is--completed py-2">
            <div>Cover photo</div>
            <div class="icon"><i class="fas fa-check-circle "></i></div>
          </li>
          <li class="checklist__list-item d-flex align-items-center justify-content-between g-text__small g-text--dark g-text--medium is--completed py-2">
            <div>At least 1 point</div>
            <div class="icon"><i class="fas fa-check-circle "></i></div>
          </li>
          <li class="checklist__list-item d-flex align-items-center justify-content-between g-text__small g-text--dark g-text--medium  py-2">
            <div>Narration</div>
            <div class="icon"><i class="fas fa-check-circle "></i></div>
          </li>
          <li class="checklist__list-item d-flex align-items-center justify-content-between g-text__small g-text--dark g-text--medium  py-2">
            <div>Category</div>
            <div class="icon"><i class="fas fa-check-circle "></i></div>
          </li>
        </ul>
        <div class="py-3">
          <div class="my-3">
            <a href="#!" class="g-button is--outline w-100">Preview</a>
          </div>
          <div class="my-3">
            <a href="#!" class="g-button is--primary w-100">Publish</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Checklist',
  }
</script>

<style scoped>
  .checklist {
    position: sticky;
    top: 8rem;
    left: 0;
    min-height: 80px;
    width: 100%;
    border: 0.5px solid rgba(212, 214, 216, 0.5);
    border-radius: 6px;
    background-color: #FFFFFF;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }

  .checklist__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .checklist__list .checklist__list-item {
    padding: 1rem 0;
    opacity: 0.7;
  }

  .checklist__list .checklist__list-item.is--completed {
    opacity: 1;
  }

  .checklist__list-item .icon {
    display: none;
    font-size: 1.3rem;
    color: var(--primary-green);
  }

  .checklist__list-item.is--completed .icon {

    display: block;
  }
</style>