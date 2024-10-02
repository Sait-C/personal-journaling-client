import CustomSelectInputComponent from '@/components/custom/form/CustomSelectInputComponent.vue';
import CustomTextInputComponent from '@/components/custom/form/CustomTextInputComponent.vue';
import { RiArrowDownSLine, RiArrowDropLeftLine, RiArrowDropRightLine, RiArrowRightLine, RiArrowUpLine, RiBardFill, RiCircleFill, RiCloseLargeFill, RiInstagramFill, RiMapPinUserLine, RiTwitterFill, RiUserHeartFill, RiYoutubeFill } from '@remixicon/vue'

const remixIcons = [
  { name: 'ri-arrow-down-s', component: RiArrowDownSLine },
  { name: 'ri-circle-fill', component: RiCircleFill },
  { name: 'ri-bard-fill', component: RiBardFill },
  { name: 'ri-instagram-fill', component: RiInstagramFill },
  { name: 'ri-youtube-fill', component: RiYoutubeFill },
  { name: 'ri-twitter-fill', component: RiTwitterFill },
  { name: 'ri-arrow-right-line', component: RiArrowRightLine },
  { name: 'ri-arrow-drop-right-line', component: RiArrowDropRightLine },
  { name: 'ri-arrow-drop-left-line', component: RiArrowDropLeftLine },
  { name: 'ri-user-heart-fill', component: RiUserHeartFill },
  { name: 'ri-close-large', component: RiCloseLargeFill },
  { name: 'ri-map-pin-user', component: RiMapPinUserLine },
  { name: 'ri-arrow-up', component: RiArrowUpLine }
]

const customFormControls = [
  { name: 'custom-select-input', component: CustomSelectInputComponent },
  { name: 'custom-text-input', component: CustomTextInputComponent }
]

export default {
    install: (app) => {  
      // Brand Components
      app.component('brand-logo', require('@/components/custom/logo/BrandLogo').default);
      app.component('brand-name', require('@/components/custom/logo/BrandName').default);
      app.component('in-content-laoder', require('@/components/custom/loader/InContentLoaderComponent.vue').default),
      remixIcons.forEach((icon) => {
        app.component(icon.name, icon.component);
      });
      customFormControls.forEach((control) => {
        app.component(control.name, control.component);
      })
    }
  }