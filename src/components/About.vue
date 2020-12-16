<template>
  <div class="swap-page">
    <header class="blue-bg">
      <MHeader></MHeader>
    </header>
    <section class="main-swap main-about">
      <div class="center-block">
        <h2>About TBCC</h2>
        <p>
          TBCC token is a digital asset that was issued by TBCC Wallet team. You can invest in TBCC tokens, trade them on different exchanges, send them to other users. TBCC tokens work smoothly with BEP8 and ERC-20 protocols.
        </p>
      </div>
    </section>
    <section>
      <div class="two-block">
        <div class="column w-60" data-aos="fade-up">
          <h2 class="big-h2">TBCC Wallet</h2>
          <p class="black-p">
            TBCC Wallet is a modern mobile app developed for cryptoassets management. It was created by a group of developers with extensive experience in blockchain in 2019. Our wallet allows users from all over the world to make various operations with their cryptoassets. You can store your savings, trade them on various exchanges, send them to other wallet addresses, receive tokens from other users. TBCC Wallet supports leading cryptocurrencies based on BEP2, BEP8, ERC-20 protocols. In addition to the classic wallet functions, TBCC Wallet allows its users to participate in DeFi projects, SWAP, OTC. We are constantly updating our mobile application and expanding its capabilities in order to make it as convenient and beneficial to use as possible. Our main goal is to empower millions of people to use and work with cryptoassets. Even a beginner can easily get started with crypto thanks to our easy-to-use application with a user-friendly interface.
          </p>
          <p class="black-p">
            TBCC Wallet is completely secure.
          </p>
          <p class="black-p">
            The security architecture of the blockchain wallet has been improved with advanced authentication methods to prevent unauthorized access. Only you have control over your cryptoassets.
          </p>
        </div>
        <div class="column w-40" data-aos="fade-up">
          <img src="img/ab.svg" alt="" style="max-width: 540px; width: 100%">
        </div>
      </div>
    </section>
    <feedback-form></feedback-form>
    <bottom-block-grey></bottom-block-grey>
    <m-footer></m-footer>

  </div>
</template>

<script>

  import MHeader from './MHeader.vue';
  import LinkBox from './LinkBox.vue';
  import FeedbackForm from './FeedbackForm.vue';
  import BottomBlockGrey from './BottomBlockGrey.vue';

export default {
  components: {
    MHeader,
    FeedbackForm,
    LinkBox,
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
