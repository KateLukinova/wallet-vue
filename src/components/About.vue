<template>
  <div class="swap-page">
    <header class="blue-bg">
      <MHeader></MHeader>
    </header>
    <section class="main-swap main-about">
      <div class="center-block">
        <h2>About TBCC</h2>
        <p>
          TBCC token, as a utility token, facilitates the adoption, use, and distribution of stablecoins, Open Finance, cryptocurrencies, and DeFi solutions. TBCC token - a token is a new type of digital
          asset issued by the TBCC WALLET service
        </p>
      </div>
    </section>
    <section>
      <div class="two-block">
        <div class="column w-60" data-aos="fade-up">
          <h2 class="big-h2">TBCC Wallet</h2>
          <p class="black-p">
            TBCC Wallet is a non-custodial mobile cryptocurrency wallet managed by a team of developers in 2019. The wallet allows users to access, store, send or receive BTC, ETH and all DeFi-project coins. Users manage their accounts through their smartphones.
            We are constantly adapting our wallet to the growing needs of cryptocurrency users. TBCC wallet has
            a great interface that makes it easy to use.
          </p>
          <p class="black-p">
            The TBCC wallet will give you complete control over your funds
          </p>
          <p class="black-p">
            The security architecture of the blockchain wallet has been improved with advanced authentication methods to prevent unauthorized access.
          </p>
        </div>
        <div class="column w-40" data-aos="fade-up">
          <img src="img/ab.svg" alt="" style="max-width: 540px; width: 100%">
        </div>
      </div>
    </section>
    <feedback-form></feedback-form>
    <bottom-block></bottom-block>
    <m-footer></m-footer>

  </div>
</template>

<script>

  import MHeader from './MHeader.vue';
  import LinkBox from './LinkBox.vue';
  import FeedbackForm from './FeedbackForm.vue';
  import BottomBlock from './BottomBlock.vue';

export default {
  components: {
    MHeader,
    FeedbackForm,
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

<style lang="scss">

  .main-about {
    height: auto;
    padding: 100px 0 90px 0;
    background-size: cover;
    background-position: top left;

    .center-block {
      width: 90%;
      h2 {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 1.2;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 30px;
      }

      p {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 1.5;
        text-align: center;
        color: #FFFFFF;
        max-width: 750px;
      }
    }
  }


  .black-p {
    font-family: 'Golos-Medium', sans-serif;
    font-size: 32px;
    line-height: 1.5;
    color: #080F1F;
    margin-bottom: 60px;
  }

  .big-h2 {
    font-family: 'Golos-Regular', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 1.2;
    color: #0169FE;
    margin-bottom: 40px;
  }


  @media (max-width: 1200px) {
    .big-h2 {
      font-size: 44px;
      margin-bottom: 20px;
    }

    .black-p {
      font-size: 22px;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    .main-about .center-block h2 {
      font-size: 24px;
    }

    .main-about .center-block p {
      font-size: 16px;
    }
  }



</style>
