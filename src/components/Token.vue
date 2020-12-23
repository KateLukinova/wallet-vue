<template>
  <div>
    <header class="blue-bg">
      <MHeader></MHeader>
    </header>
    <section class="main-swap main-token">
      <div class="place">
        <div class="column">
          <h2>{{ $t('tokenH1') }}</h2>
          <h3>{{ $t('tokenH3') }}</h3>
          <p>
            {{ $t('tokenPBlockOne') }}
          </p>
          <a href="https://www.binance.org/en/trade/mini/TBCC-BA1M_BNB"
             class="m-btn mb-3">{{ $t('textButtonOne') }}</a>
        </div>
        <div class="column justify-content-center align-items-center">
          <img src="../assets/img/token.svg" alt="">
        </div>
      </div>
    </section>
    <section>
      <div class="token-icons">
        <div class="token-item">
          <svg width="44" height="70" viewBox="0 0 44 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9934 0L21.5244 1.5953V47.88L21.9934 48.3483L43.4771 35.6496L21.9934 0Z" fill="#4F565F"/>
            <path d="M21.9934 0L0.509766 35.6496L21.9934 48.349V0Z" fill="#0F243F"/>
            <path d="M21.9931 52.4175L21.7285 52.7402V69.2301L21.9931 70.0001L43.4894 39.7251L21.9931 52.4175Z" fill="#4F565F"/>
            <path d="M21.9934 70.0001V52.4168L0.509766 39.7251L21.9934 70.0001Z" fill="#0F243F"/>
          </svg>
          <i style="font-style: normal">{{ $t('tokenItemOne') }}</i>
        </div>
        <div class="token-item">
          <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z" fill="#0169FE"/>
            <path d="M29.2089 49.6773L16.3057 36.9757L20.6067 32.7419L29.2089 41.2096L48.1336 22.5806L52.4347 26.8144L29.2089 49.6773Z" fill="white"/>
          </svg>
          <i style="font-style: normal">{{ $t('tokenItemTwo') }}</i>
        </div>
        <div class="token-item">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z" fill="#29C0FF" fill-opacity="0.1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5628 41.0628C18.2038 39.4219 20.4294 38.5 22.75 38.5H35C37.3206 38.5 39.5462 39.4219 41.1872 41.0628C42.8281 42.7038 43.75 44.9294 43.75 47.25V50.75C43.75 51.7165 42.9665 52.5 42 52.5C41.0335 52.5 40.25 51.7165 40.25 50.75V47.25C40.25 45.8576 39.6969 44.5223 38.7123 43.5377C37.7277 42.5531 36.3924 42 35 42H22.75C21.3576 42 20.0223 42.5531 19.0377 43.5377C18.0531 44.5223 17.5 45.8576 17.5 47.25V50.75C17.5 51.7165 16.7165 52.5 15.75 52.5C14.7835 52.5 14 51.7165 14 50.75V47.25C14 44.9294 14.9219 42.7038 16.5628 41.0628Z" fill="#29C0FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.875 21C25.9755 21 23.625 23.3505 23.625 26.25C23.625 29.1495 25.9755 31.5 28.875 31.5C31.7745 31.5 34.125 29.1495 34.125 26.25C34.125 23.3505 31.7745 21 28.875 21ZM20.125 26.25C20.125 21.4175 24.0425 17.5 28.875 17.5C33.7075 17.5 37.625 21.4175 37.625 26.25C37.625 31.0825 33.7075 35 28.875 35C24.0425 35 20.125 31.0825 20.125 26.25Z" fill="#29C0FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.4874 28.5126C56.1709 29.196 56.1709 30.304 55.4874 30.9874L48.4874 37.9874C47.804 38.6709 46.696 38.6709 46.0126 37.9874L42.5126 34.4874C41.8291 33.804 41.8291 32.696 42.5126 32.0126C43.196 31.3291 44.304 31.3291 44.9874 32.0126L47.25 34.2751L53.0126 28.5126C53.696 27.8291 54.804 27.8291 55.4874 28.5126Z" fill="#29C0FF"/>
          </svg>
          <i style="font-style: normal">{{ $t('tokenItemThree') }}</i>
        </div>
        <div class="token-item">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z" fill="#FEDC5A" fill-opacity="0.1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7374 16.2626C54.4209 16.946 54.4209 18.0541 53.7374 18.7375L34.4874 37.9875C33.804 38.6709 32.696 38.6709 32.0126 37.9875C31.3292 37.3041 31.3292 36.196 32.0126 35.5126L51.2626 16.2626C51.946 15.5792 53.054 15.5792 53.7374 16.2626Z" fill="#FEDC5A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7374 16.2626C54.2128 16.738 54.3738 17.4436 54.1518 18.0782L41.9018 53.0782C41.6647 53.7554 41.0383 54.2193 40.3213 54.2486C39.6044 54.2778 38.9423 53.8665 38.6508 53.2108L31.9242 38.0759L16.7893 31.3492C16.1336 31.0578 15.7222 30.3957 15.7515 29.6787C15.7807 28.9618 16.2446 28.3353 16.9219 28.0983L51.9219 15.8483C52.5564 15.6262 53.2621 15.7872 53.7374 16.2626ZM22.2444 29.9436L33.9608 35.1509C34.3567 35.3268 34.6732 35.6434 34.8492 36.0393L40.0564 47.7557L49.6476 20.3525L22.2444 29.9436Z" fill="#FEDC5A"/>
          </svg>
          <div class="flex-column">Contract:<br> <span>0x2Ecb95eB932DfBBb71545f4D23CA303700aC855F</span></div>
        </div>
      </div>
    </section>
    <section>
      <div class="center-block">
        <div class="aos-init aos-animate" data-aos="fade-up">
          <div class="text">
            <h2 style="color: #070F1F" id="tokenH2One">{{ $t('tokenH2One') }}</h2>
          </div>
        </div>
        <div class="advantages-block justify-content-around">
          <div class="advantages-item">
            <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#0169FE" fill-opacity="0.1"/>
              <path d="M50.1566 20.116C50.0883 19.4327 49.5758 18.9203 48.8925 18.8519C40.2483 18.1686 34.0641 22.371 30.2033 27.6327C28.085 26.9493 25.7958 27.1885 23.7116 28.3502C21.6958 29.4777 20.0216 31.3911 18.9283 33.7144C18.6891 34.2611 18.7916 34.876 19.2358 35.286C19.6458 35.696 20.295 35.7643 20.8075 35.491C22.9941 34.3293 25.4541 34.5685 26.9233 36.0377L32.9366 42.0511L32.9708 42.0853C34.44 43.5544 34.6791 46.0144 33.5175 48.201C33.2441 48.7136 33.3466 49.3627 33.7225 49.7727C33.9958 50.0461 34.3375 50.1826 34.7133 50.1826C34.9183 50.1826 35.1233 50.1485 35.2941 50.046C37.6175 48.9527 39.5308 47.2444 40.6583 45.2627C41.8541 43.1785 42.0933 40.8893 41.3758 38.7368C42.9133 37.6093 44.3141 36.3794 45.4758 35.0127C49.0633 30.8785 50.635 25.856 50.1566 20.116ZM23.37 32.0401C24.8391 30.6051 26.6841 29.7169 28.6316 30.0585C28.085 31.0152 27.6408 31.9718 27.2308 32.9285C26.0691 32.2793 24.7366 31.9718 23.37 32.0401ZM37.0025 45.6385C37.0366 44.2377 36.7291 42.9053 36.1141 41.7436C37.105 41.3336 38.0616 40.8552 38.9841 40.3427C39.3258 42.2902 38.4716 44.1694 37.0025 45.6385ZM34.2691 39.5228L29.4516 34.7052C31.8775 28.2477 37.8566 21.3119 47.4575 21.5169C47.7991 32.9627 38.3691 37.9169 34.2691 39.5228ZM43.1183 25.8901C43.5283 26.3001 43.7675 26.881 43.7675 27.4618C43.7675 28.0427 43.5283 28.6235 43.1183 29.0335C42.7083 29.4435 42.1275 29.6827 41.5466 29.6827C40.9658 29.6827 40.385 29.4435 39.975 29.0335C39.565 28.6235 39.3258 28.0427 39.3258 27.4618C39.3258 26.881 39.565 26.3001 39.975 25.8901C40.385 25.4801 40.9658 25.241 41.5466 25.241C42.1275 25.241 42.7083 25.4801 43.1183 25.8901ZM23.8825 40.1035C22.3108 41.6751 22.2425 44.8185 22.2425 45.4335C22.2425 46.1852 22.8575 46.8002 23.6091 46.8002H23.6433C24.3608 46.8002 27.3675 46.6978 28.905 45.1602C29.8616 44.2036 30.0666 43.2127 30.0666 42.5636C30.0666 41.6411 29.6908 40.7528 28.9733 40.0352C27.265 38.2928 25.1125 38.8393 23.8825 40.1035ZM26.9916 43.2127C26.65 43.5543 25.8983 43.7935 25.1125 43.896C25.2491 43.1102 25.4883 42.3586 25.7958 42.0511C26.035 41.8119 26.24 41.6752 26.4791 41.6752C26.65 41.6752 26.855 41.7777 27.06 41.9827C27.265 42.1877 27.3675 42.3927 27.3675 42.5636C27.3333 42.7686 27.1625 43.0419 26.9916 43.2127Z" fill="#0169FE"/>
            </svg>
            <span style="color: #070F1F" class="mt-5">
              {{ $t('tokenPBlockTwo') }}
            </span>
          </div>
          <div class="advantages-item">
            <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#17A5E1" fill-opacity="0.1"/>
              <path d="M43.4946 35.6277C43.9388 36.0718 44.178 36.6868 44.178 37.336C44.178 37.951 43.9388 38.566 43.4946 39.0101C43.0505 39.4543 42.4355 39.7277 41.7863 39.7277C41.1713 39.7277 40.5563 39.4543 40.078 39.0101C39.6338 38.566 39.3946 37.951 39.3946 37.336C39.3946 36.6868 39.668 36.106 40.078 35.6277C40.5221 35.1835 41.1371 34.9443 41.7863 34.9443C42.4355 34.9443 43.0505 35.1835 43.4946 35.6277ZM49.8838 30.2976V45.3993C49.8838 46.9368 48.6538 48.1668 47.1163 48.1668H22.3796C20.5688 48.1668 19.1338 46.6977 19.1338 44.921V32.621V29.751V24.9335C19.1338 22.6785 20.9788 20.8335 23.2338 20.8335H42.128C44.0071 20.8335 45.4421 22.371 45.4421 24.2502V26.3002H46.0571C48.1755 26.3002 49.8838 28.1793 49.8838 30.2976ZM21.6621 24.9335C21.6621 25.6852 22.2771 26.3002 23.0288 26.3002H42.7088V24.1818C42.7088 23.8402 42.4354 23.5668 42.0938 23.5668H23.0288C22.2771 23.5668 21.6621 24.1818 21.6621 24.9335ZM47.1505 30.2976C47.1505 29.7168 46.6721 29.0335 46.0571 29.0335H22.4138C22.1063 29.0335 21.8671 29.4435 21.8671 29.751V32.621V44.921C21.8671 45.1943 22.1063 45.4335 22.3796 45.4335H47.1163C47.1505 45.4335 47.1505 45.3993 47.1505 45.3993V30.2976Z" fill="#17A5E1"/>
            </svg>
            <span style="color: #070F1F" class="mt-5">
              {{ $t('tokenPBlockThree') }}
            </span>
          </div>
          <div class="advantages-item">
            <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#2BDDC6" fill-opacity="0.1"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7503 29.375C45.6938 29.375 46.4587 30.1398 46.4587 31.0833V48.1667C46.4587 49.1102 45.6938 49.875 44.7503 49.875C43.8068 49.875 43.042 49.1102 43.042 48.1667V31.0833C43.042 30.1398 43.8068 29.375 44.7503 29.375Z" fill="#2BDDC6"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5003 19.125C35.4438 19.125 36.2087 19.8898 36.2087 20.8333V48.1667C36.2087 49.1102 35.4438 49.875 34.5003 49.875C33.5568 49.875 32.792 49.1102 32.792 48.1667V20.8333C32.792 19.8898 33.5568 19.125 34.5003 19.125Z" fill="#2BDDC6"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2503 36.2085C25.1938 36.2085 25.9587 36.9733 25.9587 37.9168V48.1668C25.9587 49.1103 25.1938 49.8752 24.2503 49.8752C23.3068 49.8752 22.542 49.1103 22.542 48.1668V37.9168C22.542 36.9733 23.3068 36.2085 24.2503 36.2085Z" fill="#2BDDC6"/>
            </svg>
            <span style="color: #070F1F" class="mt-5" id="tokenPBlockFour">
              {{ $t('tokenPBlockFour') }}
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-before">
      <div class="two-block">
        <div class="column token-info w-45">
          <h4 style="margin-bottom: 25px"><i style="font-style: normal">{{ $t('tokenH4') }}</i><br>
            <span style="color: #ffbd0d; text-transform: uppercase; font-weight: 600">Binance DEX</span>
          </h4>
          <h5><i style="font-style: normal">{{ $t('tokenLiOne') }}</i> <span>TBCC-BA1M</span></h5>
          <h5><i style="font-style: normal">{{ $t('tokenLiTwo') }}</i> <span>1,000,000</span></h5>
          <h5><i style="font-style: normal">{{ $t('tokenLiThree') }}</i> <span id="total-market"></span></h5>
          <h5><i style="font-style: normal">{{ $t('tokenLiFour') }}</i><span id="price"></span></h5>
          <h5><i style="font-style: normal">{{ $t('tokenLiFive') }}</i> <span id="quote-volume"></span></h5>
          <h5><span>{{ $t('tokenLiSix') }}</span></h5>
        </div>
        <div class="column w-55">
          <div class="img">
              <img src="../assets/img/idea.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="center-block">
        <h6>{{ $t('tokenH6') }} ⚡️</h6>
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

  .m-navbar .nav-item .nav-link {
    color: #DCDFE6;
  }

  .main-token {
    background-image: url("../assets/img/bg-token.jpg");
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }


  .token-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 90%;
    max-width: 1464px;
    margin: auto;
  }

  .token-item {
    width: 49%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 30px;
    background: #FFFFFF;
    -webkit-box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.1);
    box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.1);
    border-radius: 8px;
    font-family: 'Golos-Regular', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 1.2;
    color: #070E1E;
    margin-bottom: 50px;
    max-width: 670px;

    span {
      display: block;
      width: 26vw;
      font-size: 20px;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }

    svg {
      margin-right: 30px;
      min-width: 70px;
    }
  }

  .advantages-item svg {
    margin-bottom: 30px;
  }

  .token-info {
    h4 {
      font-family: 'Golos-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 34px;
      line-height: 1.2;
      color: #070F1F;
      text-align: left;
      svg {
        margin-left: 14px;
      }
    }

    h5 {
      font-family: 'Golos-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 1.2;
      color: #444A53;
      margin-bottom: 15px;

      span {
        margin-left: 8px;
        font-weight: 600;
      }

    }
  }

  @media (max-width: 990px) {

    .token-icons {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .token-item {
      width: 100%;
      font-size: 24px;
      margin-bottom: 25px;
      align-items: center;

      span {
        width: 65vw;
      }

      svg {
        width: 35px;
        min-width: 35px;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    .token-info h4 {
      font-size: 28px;
    }

    .token-info h5 {
      font-size: 20px;
    }
  }


</style>
