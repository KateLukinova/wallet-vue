<template>
 <div>
   <section class="align-end">
     <h4>We create a universal decentralized cryptocurrency solution for everyone - no matter how familiar you are with the world of cryptocurrency.</h4>
     <h4 class="green">Super simple. Super safe. Decentralized</h4>
   </section>
   <section class="bottom-block">
     <div class="pro-block">
       <div class="description">
         <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5257 0L100 20.5263V76.3174L51.529 100L24.6049 87.6189L24.5921 87.613L0 76.3986V20.4547L51.5257 0ZM8.82353 29.9233L22.0588 35.5277V76.9429L8.82353 70.9074V29.9233ZM30.8824 80.9764L47.0588 88.4152V45.0053L30.8824 38.9613V80.9764ZM55.8824 44.8685V61.5372L91.1765 47.7416V29.9233L55.8824 44.8685ZM84.4925 23.3566L51.3665 37.3837L28.1362 28.7042L15.8104 23.4849L51.4155 9.3503L84.4925 23.3566ZM91.1765 57.028L55.8824 70.8236V88.233L91.1765 70.9886V57.028Z" fill="white"/>
         </svg>
         <div class="text-block">
           <h5>Go PRO to 2 BNB Annualy ⚡️</h5>
           <p>
             Access to multi-account; OTC transactions;<br>
             No hidden fees; Special offers from the company
           </p>
         </div>
       </div>
       <router-link to="/go-pro" class="black-button">Purchase PRO ⚡️</router-link>
     </div>
     <h4>
       Buy, Trade, Manage, and Exchange cryptocurrency on your mobile phone in any time
     </h4>
     <link-box></link-box>
   </section>
 </div>
</template>

<script>

  export default {

    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

  .align-end {
    min-height: 620px;
    height: auto;
    background-image: url("../assets/img/gr.jpg");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    padding-bottom: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;

    h4 {
      margin-top: 40px;
      max-width: 1045px;
      width: 90%;
      color: #070E1E;

      &.green {
        color: #0169FE;
      }
    }
  }

  .bottom-block {
    background-color: #F1F1F5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &:after {
      position: absolute;
      //content: url("../img/oval-right.svg");
      right: 0;
      bottom: -10px;
      z-index: 1;
    }

    h4 {
      font-size: 48px;
      width: 90%;
      max-width: 1110px;
      color: #070E1E;
    }

    .link-box {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin: 60px auto 50px auto;
      position: relative;
      z-index: 5;

      a {
        margin-right: 12px;
        &:nth-last-child(1) {
          margin-right: 0;
        }
      }
    }

    &.grey {
      background: -o-linear-gradient(top, rgba(241, 241, 245, 0.7) 0%, #F1F1F5 100%);
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(241, 241, 245, 0.7)), to(#F1F1F5));
      background: linear-gradient(180deg, rgba(241, 241, 245, 0.7) 0%, #F1F1F5 100%);

      h4 {
        color: #070E1E;
      }
    }

  }

  .pro-block {
    background: #0169FE;
    -webkit-box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.296766);
    box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.296766);
    border-radius: 10px;
    padding: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 90%;
    max-width: 1110px;
    margin: auto;
    margin-bottom: 82px;

    .description {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;

      .text-block {
        p {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 14px;
        }
      }

      svg {
        margin-right: 45px;
      }
    }
  }

  .black-button {
    width: 230px;
    height: 61px;
    background: #14213A;
    border-radius: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: 'Golos-Regular', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 1.2;
    text-align: center;
    color: #FFFFFF;
  }

  @media (max-width: 1200px) {
    .bottom-block h4 {
      font-size: 30px;
    }
  }


  @media (max-width: 768px) {
    .align-end {
      min-height: 450px;
    }

    .pro-block {
      padding: 25px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;

      .description {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 20px;

        svg {
          margin-right: 0;
          margin-bottom: 20px;
        }

        h5 {
          font-size: 20px;
          text-align: center;
        }

        p {
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
</style>
