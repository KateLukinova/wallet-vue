<template>
  <div>
    <header>
      <MHeader></MHeader>
    </header>
    <div class="gradient-color main-go">
      <section class="main-page">
        <div class="center-block">
          <h1>{{ $t('teamH1') }}</h1>
          <p>
            {{ $t('teamPBlockOne') }}
          </p>
        </div>
        <div class="team-box">
          <div class="team-item">
            <div class="team-img">
              <img src="../assets/img/team1.svg" alt="">
            </div>
            <div class="team-name">
              Anatoly
              Aleksandrovsky
            </div>
            <div class="team-pos">
              Chief Executive
              Officer
            </div>
          </div>
          <div class="team-item">
            <div class="team-img">
              <img src="../assets/img/team2.svg" alt="">
            </div>
            <div class="team-name">
              Evgeniy<br>
              Butyaev
            </div>
            <div class="team-pos">
              Chief Technology
              Officer
            </div>
          </div>
          <div class="team-item">
            <div class="team-img">
              <img src="../assets/img/team3.svg" alt="">
            </div>
            <div class="team-name">
              Maria<br>
              Bulanaeva
            </div>
            <div class="team-pos">
              Chief Marketing Officer
            </div>
          </div>
          <div class="team-item">
            <div class="team-img">
              <img src="../assets/img/team4.svg" alt="">
            </div>
            <div class="team-name">
              Andrey<br>
              Voronkov
            </div>
            <div class="team-pos">
              Advisor
            </div>
          </div>
        </div>
      </section>
    </div>
    <bottom-block></bottom-block>
    <m-footer></m-footer>
  </div>
</template>

<script>

  import MHeader from './MHeader.vue';
  import LinkBox from './LinkBox.vue';
  import BottomBlock from './BottomBlock.vue';

  export default {
    components: {
      MHeader,
      LinkBox,
      BottomBlock
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


  .main-go .main-page {
    height: auto;
    min-height: 700px;
    margin-bottom: 600px;
    padding-bottom: 250px;

    @media (max-width: 1200px) {
      margin-bottom: 900px;
    }

    @media (max-width: 640px) {
      margin-bottom: 2000px;
      padding-top: 100px;
    }

    .center-block {
      p {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.5;
        color: #A3ADB9;
        text-align: center;
      }
    }
  }

  .bg-img.go-bg {
    &:before {
      display: none;
    }
  }

  .main-go {
    position: relative;
    &:before {
      content: url("../assets/img/go-main-oval.svg");
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }

  .team-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 80%);
    width: 90%;
    max-width: 1464px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      transform: translate(-50%, 90%);
    }

    .team-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 20%;

      @media (max-width: 1200px) {
        width: 45%;
        max-width: 250px;
      }

      @media (max-width: 640px) {
        width: 100%;
      }

      .team-img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 360px;
        overflow: hidden;
        border-radius: 20px;

        img {
          min-width: 175%;
          width: 100%;
          min-height: 100%;
          object-fit: cover;
        }
      }

      .team-name {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 1.2;
        color: #151D28;
        margin-bottom: 16px;
        margin-top: 30px;
      }

      .team-pos {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 1.4;
        color: #A5ADB9;
      }
    }
  }


  @media (max-width: 1200px) {
    .main-go:before {
      display: none;
    }
    .go-center h1 {
      font-size: 50px!important;
    }
  }

  @media (max-width: 990px) {

  }

  @media (max-width: 768px) {
    .main-go .main-page {
      min-height: 470px;

      .go-center {
        padding-bottom: 0;
      }
    }

    .main-go .main-page {
      min-height: 470px;

      .go-center {
        padding-bottom: 0;
      }
    }
  }
</style>
