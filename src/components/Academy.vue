<template>
  <div>
    <header class="blue-bg">
      <MHeader></MHeader>
    </header>
    <section class="main-swap main-token">
      <div class="two-block two-academy">
        <div class="column">
          <div class="text-block">
            <h2>TBCC Academy</h2>
            <h3>Start learning about crypto & make your first steps 🔥</h3>
          </div>
        </div>
        <div class="column">
          <div class="img">
            <img src="../assets/img/cos.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <bottom-block-grey></bottom-block-grey>
    <m-footer></m-footer>

  </div>
</template>

<script>

  import MHeader from './MHeader.vue';
  import LinkBox from './LinkBox.vue';
  import SponsorsList from './SponsorsList.vue';
  import BottomBlockGrey from './BottomBlockGrey.vue';
  import Tabs from 'vue-nav-tabs/dist/vue-tabs.js'
  import 'vue-nav-tabs/themes/vue-tabs.css'

export default {
  components: {
    MHeader,
    Tabs,
    LinkBox,
    SponsorsList,
    BottomBlockGrey
  },

  data() {
    return {

    };
  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>

  header {
    background-color: #0169FE;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  }


  .main-token {
    background-image: url("../assets/img/bg-token.jpg");
  }

  .two-academy {
    .text-block {
      h2 {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 1.2;
        color: #080F1F;
        margin-bottom: 30px;
      }

      h3 {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 1.5;
        color: #080F1F;
      }
    }
  }


</style>
