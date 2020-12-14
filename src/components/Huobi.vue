<template>
  <div>
    <header>
      <MHeader></MHeader>
    </header>
    <div class="gradient-color main-go">
      <section class="main-page huobi-main">
        <div class="center-block go-center">
          <h1>Huobi Listing Event </h1>
          <h2>Participate in voting and make TBCC tokens more profitable. Help us to list TBCC token on Huobi Exchange</h2>
        </div>
        <div class="two-block">
          <div class="column">
            <h3>What is Huobi Exchange?</h3>
            <p>Huobi Global is a centralized cryptocurrency exchange founded in 2013. Currently it is in the TOP-3 in terms of trading volume and in the TOP-10 in reliability, according to Coingecko. The 24-hour trading volume is 2,061,704,572$. The number of trade coins is 296.</p>
          </div>

          <div class="column">
            <div class="img">
              <img src="../assets/img/huobi-main.png" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="huobi-body">
      <div class="center-block">
        <h2>3 step to voting</h2>
      </div>
      <div class="two-block">
        <div class="column">
          <div class="img">
            <img src="../assets/img/idea.png" alt="">
          </div>
        </div>
        <div class="column">
          <div class="text-block">
            <h2>Exchange</h2>
            <p>Enter the Huobi exchange official website https://www.huobi.com with the help of your smartphone or laptop.
            </p>
            <a href="#" class="m-btn">Go Huobi.com</a>
          </div>
        </div>
      </div>
      <div class="two-block">
        <div class="column">
          <div class="text-block">
            <h2>Huobi Tokens</h2>
            <p>Buy Huobi tokens (HT) via official website in order to participate in voting. Only HT owners can vote. You can buy them with your credit/debit card (or change for another cryptoassets)
            </p>
            <a href="#" class="m-btn">Buy HT Tokens</a>
          </div>
        </div>
        <div class="column">
          <div class="img">
            <img src="../assets/img/h2.png" alt="">
          </div>
        </div>
      </div>
      <div class="two-block">
        <div class="column">
          <div class="img">
            <img src="../assets/img/h3.png" alt="">
          </div>
        </div>
        <div class="column">
          <div class="text-block">
            <h2>Send HT</h2>
            <p> Send you Huobi tokens (HT) to the following address to make your vote be considered. You can send as many votes as you want. The maximum number of votes is not limited.Send you Huobi tokens (HT) to the following address to make your vote be considered. You can send as many votes as you want. The maximum number of votes is not limited.
            </p>
            <a href="#" class="m-btn">Send HT Tokens</a>
          </div>
        </div>
      </div>
      <div class="center-block">
        <h2>
          After the operation is confirmed - your vote will be registed in system. We take into consideration each vote. After the voting is finished - the most active participants will receive bonuses. We need your voice!
        </h2>
      </div>
      <div class="two-block">
        <div class="column w-60">
          <div class="text-block">
            <p class="dark-text">Note!<br>
              We have developed a special awards program to encourage you to vote.<br>
              We have different types of bonuses, that each user can get:
            </p>
            <div class="ticket-block">
              <div class="ticket-top">
                <span>TOP 3</span>
              </div>
              <div class="ticket-text">
                <div class="ticket-item">
                  <span>Who gave the maximum number of:</span>
                  <p>Votes during the whole voting</p>
                </div>
                <div class="ticket-item week">
                  <span>Who voted the maximum number of times in:</span>
                  <p>
                    <i>Week 1</i>
                    <i>Week 2</i>
                    <i>Week 3</i>
                  </p>
                </div>
              </div>
            </div>
            <p class="dark-text">As you see, 12 people will get a benefit for their endeavors and participation in the destiny of TBCC token. Don’t miss a day and get your reward by sending votes!</p>
          </div>
        </div>
        <div class="column w-40">
          <div class="img">
            <img src="../assets/img/priz.png" alt="">
          </div>
        </div>
      </div>
    </section>
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
    min-height: 600px;
  }

  .bg-img.go-bg {
    &:before {
      display: none;
    }
  }

  .main-go {
    position: relative;
    &:before {
      /*content: url("../img/go-main-oval.svg");*/
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }

  .m-btn.text-black {
    margin-bottom: 56px;
  }

  .go-center {
    margin-top: 30px;
  }

  .huobi-main {
    flex-direction: column;

    h1 {
      font-size: 80px;
    }

    h2 {
      font-size: 44px;
      max-width: 950px;
      line-height: 1.36;
    }

    .two-block {
      align-items: center;
      h3 {
        font-size: 36px;
        margin-bottom: 23px;
        text-align: left;
      }

      p {
        font-size: 20px;
        line-height: 1.8;
        margin-bottom: 100px;
      }
    }
  }

  .huobi-body {
    .center-block {
      margin-top: 60px;
      width: 90%;
      h2 {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 1.56;
        text-align: center;
        color: #000000;

      }
    }
    .two-block {
      align-items: center;

      .text-block {
        h2 {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 64px;
          line-height: 1.2;
          color: #070E1E;
          margin-bottom: 20px;
          text-align: left;
        }

        p {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 1.5;
          color: #535353;

          &.dark-text {
            color: #070E1E;
            max-width: 740px;
          }
        }
        a.m-btn {
          min-width: 230px;
          font-size: 18px;
        }
      }
    }
  }

  .ticket-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid #0066FF;
    min-height: 220px;
    height: auto;
    max-width: 500px;
    margin: 60px 0;

    .ticket-top {
      background: linear-gradient(100.22deg, #0066FF 0%, #2CE0C5 100%);
      height: 100%;
      min-height: 220px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        transform: rotate(-90deg);
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 1;
        color: #FFFFFF;
        height: auto;
        white-space: nowrap;
      }
    }

    .ticket-text {
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: 100%;

      .ticket-item {
        span {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 1.2;
          color: #070F1F;
          margin-bottom: 15px;
          display: block;
        }
        p {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 1.1px;
          color: #070F1F;
        }
        &.week {
          margin-top: 60px;
          p {
            width: 100%;
            display: flex;
            justify-content: space-between;
            i {
              font-style: normal;
            }
          }
        }
      }
    }
  }




  @media (max-width: 1300px) {

  }


  @media (max-width: 1200px) {

  }

  @media (max-width: 990px) {

  }

  @media (max-width: 768px) {

  }



</style>
