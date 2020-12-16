<template>
  <div class="swap-page">
    <header class="blue-bg">
      <MHeader></MHeader>
    </header>
    <section class="main-swap">
      <div class="place">
        <div class="column">
          <h2>TBCC Swap</h2>
          <h3>Swap & Stake ERC20 assets</h3>
          <p>
            TBCC SWAP provides users with the ability to quickly exchange their cryptoassets quickly on the base of UNISWAP protocol. Any user can add or remove liquidity using the easy-to-use TBCC SWAP interface. The main mission of TBCC SWAP is to provide users from all over the world with the ability of quick and easy seamless trading.
          </p>
          <a href="https://tbcc.exchange/#/swap" class="m-btn">Try Now</a>
        </div>
        <div class="column justify-content-center align-items-center">
          <img src="../assets/img/swap-img.svg" alt="">
        </div>
      </div>
    </section>
    <vue-tabs type="pills" active-text-color="#016AFD">
      <v-tab title="Token Users">
        <div class="tab_item">
          <div class="text">
            <i style="font-style: normal" id="swapTextOne">Make instant swap transactions within the wallet, send assets to other wallet addresses at market prices</i>

            <a href="https://tbccswap.com/" class="m-btn" id="textButton">Try Now</a>
          </div>
        </div>
      </v-tab>
      <v-tab title="Token Holders">
        <div class="tab_item">
          <div class="text">
            <div class="item">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#17A5E1" fill-opacity="0.1"/>
                <g clip-path="url(#clip0)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2515 8.40603C24.6382 8.01928 25.2653 8.01928 25.652 8.40603L29.6134 12.3674C30.0001 12.7541 30.0001 13.3812 29.6134 13.7679L25.652 17.7293C25.2653 18.116 24.6382 18.116 24.2515 17.7293C23.8647 17.3425 23.8647 16.7155 24.2515 16.3287L27.5126 13.0677L24.2515 9.80658C23.8647 9.41983 23.8647 8.79278 24.2515 8.40603Z" fill="#17A5E1"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0484 14.058C14.2604 14.058 13.5047 14.371 12.9475 14.9282C12.3904 15.4854 12.0774 16.241 12.0774 17.029V19.0097C12.0774 19.5566 11.634 20 11.087 20C10.5401 20 10.0967 19.5566 10.0967 19.0097V17.029C10.0967 15.7157 10.6184 14.4563 11.547 13.5276C12.4756 12.599 13.7351 12.0773 15.0484 12.0773H28.9131C29.4601 12.0773 29.9034 12.5207 29.9034 13.0677C29.9034 13.6146 29.4601 14.058 28.9131 14.058H15.0484Z" fill="#17A5E1"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7486 22.2708C16.1354 22.6575 16.1354 23.2846 15.7486 23.6713L12.4876 26.9324L15.7486 30.1935C16.1354 30.5802 16.1354 31.2073 15.7486 31.594C15.3619 31.9808 14.7348 31.9808 14.3481 31.594L10.3867 27.6327C9.99999 27.2459 9.99999 26.6189 10.3867 26.2321L14.3481 22.2708C14.7348 21.884 15.3619 21.884 15.7486 22.2708Z" fill="#17A5E1"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9131 20C29.4601 20 29.9034 20.4434 29.9034 20.9904V22.971C29.9034 24.2843 29.3817 25.5438 28.4531 26.4724C27.5245 27.401 26.265 27.9227 24.9518 27.9227H11.087C10.5401 27.9227 10.0967 27.4793 10.0967 26.9324C10.0967 26.3854 10.5401 25.9421 11.087 25.9421H24.9518C25.7397 25.9421 26.4954 25.629 27.0526 25.0719C27.6097 24.5147 27.9228 23.759 27.9228 22.971V20.9904C27.9228 20.4434 28.3662 20 28.9131 20Z" fill="#17A5E1"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="23.7681" height="23.7681" fill="white" transform="translate(8.11621 8.11597)"/>
                  </clipPath>
                </defs>
              </svg>
              <i style="font-style: normal">Create your own liquidity pools</i>
            </div>
            <div class="item">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#FEDC5A" fill-opacity="0.1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12 13.0009 12 13.0052 12.0031 13.0153C12.0064 13.0264 12.0148 13.0485 12.0351 13.0814C12.0775 13.1506 12.1641 13.2545 12.3262 13.3823C12.6564 13.6425 13.1962 13.9206 13.9523 14.1726C15.454 14.6732 17.5923 15 20 15C22.4077 15 24.546 14.6732 26.0477 14.1726C26.8038 13.9206 27.3436 13.6425 27.6738 13.3823C27.8359 13.2545 27.9225 13.1506 27.9649 13.0814C27.9852 13.0485 27.9935 13.0264 27.9969 13.0153C28 13.0052 28 13.001 28 13.0001C28 12.9993 28.0001 12.9951 27.9969 12.9847C27.9935 12.9736 27.9852 12.9515 27.9649 12.9186C27.9225 12.8494 27.8359 12.7455 27.6738 12.6177C27.3436 12.3575 26.8038 12.0794 26.0477 11.8274C24.546 11.3268 22.4077 11 20 11C17.5923 11 15.454 11.3268 13.9523 11.8274C13.1962 12.0794 12.6564 12.3575 12.3262 12.6177C12.1641 12.7455 12.0775 12.8494 12.0351 12.9186C12.0148 12.9515 12.0064 12.9736 12.0031 12.9847C12 12.9948 12 12.9991 12 13ZM13.3198 9.93C15.0754 9.3448 17.4371 9 20 9C22.5629 9 24.9246 9.3448 26.6802 9.93C27.5528 10.2209 28.331 10.5892 28.9117 11.0469C29.4811 11.4956 30 12.1481 30 13C30 13.8519 29.4811 14.5044 28.9117 14.9531C28.331 15.4108 27.5528 15.7791 26.6802 16.07C24.9246 16.6552 22.5629 17 20 17C17.4371 17 15.0754 16.6552 13.3198 16.07C12.4472 15.7791 11.669 15.4108 11.0883 14.9531C10.5189 14.5044 10 13.8519 10 13C10 12.1481 10.5189 11.4956 11.0883 11.0469C11.669 10.5892 12.4472 10.2209 13.3198 9.93Z" fill="#FEDC5A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 19C11.5523 19 12 19.4477 12 20C12 20.0019 12.0001 20.007 12.0034 20.018C12.0069 20.0298 12.0154 20.0521 12.0356 20.0851C12.0777 20.1543 12.1635 20.258 12.3242 20.3853C12.6516 20.6447 13.1879 20.9223 13.9417 21.174C15.4389 21.6738 17.5768 22 20 22C22.4232 22 24.5611 21.6738 26.0583 21.174C26.8121 20.9223 27.3484 20.6447 27.6758 20.3853C27.8365 20.258 27.9223 20.1543 27.9644 20.0851C27.9846 20.0521 27.993 20.0298 27.9966 20.018C27.9999 20.007 28 20.0019 28 20C28 19.4477 28.4477 19 29 19C29.5523 19 30 19.4477 30 20C30 20.8494 29.4868 21.502 28.9179 21.9528C28.3391 22.4115 27.5629 22.7802 26.6917 23.071C24.9389 23.6562 22.5768 24 20 24C17.4232 24 15.0611 23.6562 13.3083 23.071C12.4371 22.7802 11.6609 22.4115 11.0821 21.9528C10.5132 21.502 10 20.8494 10 20C10 19.4477 10.4477 19 11 19Z" fill="#FEDC5A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 12C11.5523 12 12 12.4477 12 13V27C12 27.0019 12.0001 27.007 12.0034 27.018C12.0069 27.0298 12.0154 27.0521 12.0356 27.0851C12.0777 27.1543 12.1635 27.258 12.3242 27.3853C12.6516 27.6447 13.1879 27.9223 13.9417 28.174C15.4389 28.6738 17.5768 29 20 29C22.4232 29 24.5611 28.6738 26.0583 28.174C26.8121 27.9223 27.3484 27.6447 27.6758 27.3853C27.8365 27.258 27.9223 27.1543 27.9644 27.0851C27.9846 27.0521 27.993 27.0298 27.9966 27.018C27.9999 27.007 28 27.0019 28 27V13.0001C28 12.4478 28.4477 12 29 12C29.5523 12 30 12.4477 30 13V27C30 27.8494 29.4868 28.502 28.9179 28.9528C28.3391 29.4115 27.5629 29.7802 26.6917 30.071C24.9389 30.6562 22.5768 31 20 31C17.4232 31 15.0611 30.6562 13.3083 30.071C12.4371 29.7802 11.6609 29.4115 11.0821 28.9528C10.5132 28.502 10 27.8494 10 27V13C10 12.4477 10.4477 12 11 12Z" fill="#FEDC5A"/>
              </svg>
              <i style="font-style: normal">Add new tokens in 3 easy steps</i>
            </div>
            <div class="item">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#2BD7C0" fill-opacity="0.1"/>
                <path d="M29.165 11.58C29.125 11.18 28.825 10.88 28.425 10.84C23.365 10.44 19.745 12.9 17.485 15.98C16.245 15.58 14.905 15.72 13.685 16.4C12.505 17.06 11.525 18.18 10.885 19.54C10.745 19.86 10.805 20.22 11.065 20.46C11.305 20.7 11.685 20.74 11.985 20.58C13.265 19.9 14.705 20.04 15.565 20.9L19.085 24.42L19.105 24.44C19.965 25.3 20.105 26.74 19.425 28.02C19.265 28.32 19.325 28.7 19.545 28.94C19.705 29.1 19.905 29.18 20.125 29.18C20.245 29.18 20.365 29.16 20.465 29.1C21.825 28.46 22.945 27.46 23.605 26.3C24.305 25.08 24.445 23.74 24.025 22.48C24.925 21.82 25.745 21.1 26.425 20.3C28.525 17.88 29.445 14.94 29.165 11.58ZM13.485 18.56C14.345 17.72 15.425 17.2 16.565 17.4C16.245 17.96 15.985 18.52 15.745 19.08C15.065 18.7 14.285 18.52 13.485 18.56ZM21.465 26.52C21.485 25.7 21.305 24.92 20.945 24.24C21.525 24 22.085 23.72 22.625 23.42C22.825 24.56 22.325 25.66 21.465 26.52ZM19.865 22.94L17.045 20.12C18.465 16.34 21.965 12.28 27.585 12.4C27.785 19.1 22.265 22 19.865 22.94ZM25.045 14.96C25.285 15.2 25.425 15.54 25.425 15.88C25.425 16.22 25.285 16.56 25.045 16.8C24.805 17.04 24.465 17.18 24.125 17.18C23.785 17.18 23.445 17.04 23.205 16.8C22.965 16.56 22.825 16.22 22.825 15.88C22.825 15.54 22.965 15.2 23.205 14.96C23.445 14.72 23.785 14.58 24.125 14.58C24.465 14.58 24.805 14.72 25.045 14.96ZM13.785 23.28C12.865 24.2 12.825 26.04 12.825 26.4C12.825 26.84 13.185 27.2 13.625 27.2H13.645C14.065 27.2 15.825 27.14 16.725 26.24C17.285 25.68 17.405 25.1 17.405 24.72C17.405 24.18 17.185 23.66 16.765 23.24C15.765 22.22 14.505 22.54 13.785 23.28ZM15.605 25.1C15.405 25.3 14.965 25.44 14.505 25.5C14.585 25.04 14.725 24.6 14.905 24.42C15.045 24.28 15.165 24.2 15.305 24.2C15.405 24.2 15.525 24.26 15.645 24.38C15.765 24.5 15.825 24.62 15.825 24.72C15.805 24.84 15.705 25 15.605 25.1Z" fill="#2BD7C0"/>
              </svg>
              <i style="font-style: normal">All you need is to connect your wallet, choose token, set a price and start trading</i>
            </div>
            <a href="https://tbcc.exchange/#/swap" class="m-btn">Try Now</a>
          </div>
        </div>
      </v-tab>
      <v-tab title="Stake & Earn">
        <div class="tab_item">
          <div class="text">
            <i style="font-style: normal" id="swapTextTwo">Put your TBCC or USDT tokens in liquidity pools and receive a commission of 0.3% on each transaction.</i>
            <a href="https://tbcc.exchange/#/swap" class="m-btn">Try Now</a>
          </div>
        </div>
      </v-tab>
    </vue-tabs>
    <bottom-block></bottom-block>
    <m-footer></m-footer>

  </div>
</template>

<script>

  import MHeader from './MHeader.vue';
  import LinkBox from './LinkBox.vue';
  import SponsorsList from './SponsorsList.vue';
  import BottomBlock from './BottomBlock.vue';
  import Tabs from 'vue-nav-tabs/dist/vue-tabs.js'
  import 'vue-nav-tabs/themes/vue-tabs.css'

export default {
  components: {
    MHeader,
    Tabs,
    LinkBox,
    SponsorsList,
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

  .swap-page {
    .vue-tabs {
      width: 90%;
      max-width: 1460px;
      margin: auto;
      display: flex;
      flex-direction: column;
      transition: all 0.5s ease;

      .nav-tabs-navigation .nav-pills {
        width: 100%;
        display: flex!important;
        transition: all 0.5s ease;
        margin: 0;

        .tab {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 48px;
          line-height: 1.2;
          color: #9CA3B3;
          -webkit-transition: all 0.5s ease;
          -o-transition: all 0.5s ease;
          transition: all 0.5s ease;
          margin-right: 100px;
          cursor: pointer;

          &:hover {
            color: #016AFD;
          }

          &.active {
            a {
              background-color: transparent;
            }
          }
        }
      }
      section {
        padding: 0;
      }
    }

    .tab_item {
      width: 100%;
      height: 770px;
      padding-top: 70px;

      .text {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 1.4;
        color: #070F1F;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-width: 700px;

        .item {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          margin-bottom: 18px;

          svg {
            margin-right: 16px;
            min-width: 40px;
            margin-top: 12px;
          }
        }

        a.m-btn {
          min-width: 230px;
        }
      }

      &:nth-child(1) {
        background-image: url("../assets/img/s1.svg");
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: contain;
      }

      &:nth-child(2) {
        background-image: url("../assets/img/s2.svg");
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: contain;
      }

      &:nth-child(3) {
        background-image: url("../assets/img/s3.svg");
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: contain;
      }
    }
  }

  @media (max-width: 1440px) {
    .vue-tabs .nav>li span.title {
      font-size: 36px;
    }

    .swap-page .tab_item .text {
      font-size: 32px;
    }
  }

  @media (max-width: 990px) {
    .vue-tabs .nav>li span.title {
      font-size: 16px;
    }

    .swap-page .tab_item {
      height: 380px;
    }

    .swap-page .tab_item .text {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    .swap-page .vue-tabs .nav-tabs-navigation .nav-pills {
      flex-direction: column;

      .tab {
        margin-right: 0;

        a {
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: max-content;
        }
      }
    }
  }



</style>
