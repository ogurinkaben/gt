<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h2 class="g-text__h2 g-text--medium g-text--light-grey-2">Media</h2>
      </div>
      <AddItem />
    </div>
    <section class="media__audio w-100 my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Audio</h3><i class="fas fa-microphone-alt g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <div class="d-flex align-items-center my-3">
          <div class="mr-3"><img src="@/assets/ui_assets/play-icon.svg" class="audio-icon" alt=""></div>
          <div class="d-flex  justify-content-between w-100 border-bottom py-3"><a href="#!">
              <div class="d-flex align-items-center">
                <div>
                  <div class="g-text__body g-text--dark-grey-1 g-text--regular">Some Recoding</div>
                  <div class="g-text__extra-small g-text--light-grey-2 g-text--light">7 Rue Livingstone,
                    Paris · 15 Dec,
                    22:06</div>
                </div>
              </div>
            </a>
            <div class="d-flex align-item-center justify-content-between">
              <div class="g-text__extra-small g-text--light-grey-2 g-text--light mr-3">01:12:47 </div>
              <div class="g-text__extra-small  g-text--light"><a href="#!" class="g-text--light-grey-2"><i class="fas fa-ellipsis-h"></i></a></div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center my-3">
          <div class="mr-3"><img src="@/assets/ui_assets/play-icon.svg" class="audio-icon" alt=""></div>
          <div class="d-flex  justify-content-between w-100 border-bottom py-3"><a href="#!">
              <div class="d-flex align-items-center">
                <div>
                  <div class="g-text__body g-text--dark-grey-1 g-text--regular">Rec 4</div>
                  <div class="g-text__extra-small g-text--light-grey-2 g-text--light">7 Rue Livingstone,
                    Paris · 15 Dec,
                    22:06</div>
                </div>
              </div>
            </a>
            <div class="d-flex align-item-center justify-content-between">
              <div class="g-text__extra-small g-text--light-grey-2 g-text--light mr-3">01:12:47 </div>
              <div class="g-text__extra-small  g-text--light"><a href="#!" class="g-text--light-grey-2"><i class="fas fa-ellipsis-h"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="item-divider"></div>
    <section class="media__image w-100 my-5">
      <div class="d-flex align-items-center justify-content-between heading-group mb-2">
        <h3 class="g-text__h3 g-text--dark g-text--medium">Photos</h3><i class="fas fa-camera g-text__h4 g-text--primary"></i>
      </div>
      <div class="py-2">
        <div class="d-flex align-items-center my-3">
          <div class="mr-3"><img src="https://images.pexels.com/photos/548130/pexels-photo-548130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="image-preview" alt=""></div>
          <div class="d-flex  justify-content-between w-100 border-bottom py-3"><a href="#!">
              <div class="d-flex align-items-center">
                <div>
                  <div class="g-text__body g-text--dark-grey-1 g-text--regular">Unnamed</div>
                  <div class="g-text__extra-small g-text--light-grey-2 g-text--light">7 Rue Livingstone,
                    Paris · 15 Dec,
                    22:06</div>
                </div>
              </div>
            </a>
            <div class="d-flex align-item-center justify-content-end">
              <div class="g-text__extra-small  g-text--light"><a href="#!" class="g-text--light-grey-2"><i class="fas fa-ellipsis-h"></i></a></div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center my-3">
          <div class="mr-3"><img src="https://images.pexels.com/photos/11081002/pexels-photo-11081002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="image-preview" alt=""></div>
          <div class="d-flex  justify-content-between w-100 border-bottom py-3"><a href="#!">
              <div class="d-flex align-items-center">
                <div>
                  <div class="g-text__body g-text--dark-grey-1 g-text--regular">Monmartre</div>
                  <div class="g-text__extra-small g-text--light-grey-2 g-text--light">7 Rue Livingstone,
                    Paris · 15 Dec,
                    22:06</div>
                </div>
              </div>
            </a>
            <div class="d-flex align-item-center justify-content-end">
              <div class="g-text__extra-small  g-text--light"><a href="#!" class="g-text--light-grey-2"><i class="fas fa-ellipsis-h"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import AddItem from '@/components/AddItem'
  export default {
    components: {
      AddItem
    }
  }
</script>
<style scoped>
  .audio-icon {
    width: 24px;
  }

  .image-preview {
    width: 52px;
    height: 45px;
    object-fit: cover;
    border-radius: 4px;
  }
</style>