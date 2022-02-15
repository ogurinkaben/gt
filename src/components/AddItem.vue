<template>
  <div class="add-item">
    <div class="dropdown">
      <a href="#!" class="g-button is--outline is--outline-alt is--small dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="ti-plus mr-2"></i> Add...
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <div class="row">
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-microphone-alt"></i>
                </div>
                <div class="my-2">
                  <span>Record</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="my-2">
                  <span>Location</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-camera"></i>
                </div>
                <div class="my-2">
                  <span>Photo</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-language"></i>
                </div>
                <div class="my-2">
                  <span>Language</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-link"></i>
                </div>
                <div class="my-2">
                  <span>Link</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-question"></i>
                </div>
                <div class="my-2">
                  <span>Quiz</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-comment-alt"></i>
                </div>
                <div class="my-2">
                  <span>Hint</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <div class="my-2">
                  <span>Event</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-upload"></i>
                </div>
                <div class="my-2">
                  <span>Upload map</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-6">
            <a class="add-item__link" href="#!">
              <div class="text-center">
                <div class="add-item__link-icon">
                  <i class="fas fa-certificate"></i>
                </div>
                <div class="my-2">
                  <span>Badge</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddItem',
  }
</script>

<style>
  .add-item .show>.dropdown-menu {
    top: 3rem !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    min-width: 310px !important;
    padding: 2rem 1rem;
  }
  @media screen and (max-width:768px){
     .add-item .show>.dropdown-menu {
    top: 0px !important;
    left: 0px !important;
    transform: unset !important;
    transform: translate3d(-220px, 40px, 0px) !important;
  } 
  }

  .add-item__link:hover,
  .add-item__link {
    display: flex;
    justify-content: center;
    font-size: 0.85rem;
    color: var(--grey-light-2);
    font-weight: var(--font-regular);
    margin: 1rem auto;
  }

  .add-item__link .add-item__link-icon {
    height: 64px;
    width: 64px;
    border: 0.5px solid #BCDEE8;
    background-color: #F8FBFC;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--primary-blue);
    margin: 0.6rem auto;
  }
</style>