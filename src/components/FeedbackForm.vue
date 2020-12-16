<template>
  <section>
    <div class="two-block">
      <div class="column aos-init aos-animate founded" data-aos="fade-up">
<!--        <img src="img/Pics.svg" alt="" class="before">-->
        <div class="text">
          <h2 id="mainCaptionSeven">We are always happy to answer all your questions and reply to your suggestions</h2>
        </div>
        <div class="val-box">
          <div class="val-item">
            <i style="font-style: normal" id="mainUlItemOne">Founded in</i> <span>2019</span>
          </div>
          <div class="val-item">
            <i style="font-style: normal" id="mainUlItemTwo">Number of users</i> <span>40 000+</span>
          </div>
          <div class="val-item">
            <i style="font-style: normal" id="mainUlItemThree">TBCC Token purchases</i> <span>126 726</span>
          </div>
          <div class="val-item">
            <i style="font-style: normal" id="mainUlItemFour">Digital Assets</i> <span>150 +</span>
          </div>
        </div>
      </div>
      <div class="column aos-init aos-animate form-column" data-aos="fade-up">
        <form class="contact-form" action="#" method="post">
          <div class="form-group">
            <input type="text" id="contact-form-f-name" name="your_name" placeholder="Your name">
          </div>

          <div class="form-group">
            <input type="email" id="contact-form-email" name="email" placeholder="Email address">
          </div>

          <div class="form-group">
            <input id="contact-form-message" type='text' name="message" placeholder="Message">
          </div>
          <button type="submit" class="m-btn mt-5 form-button" id="contacts-button">Send</button>
        </form>
      </div>
    </div>
  </section>
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
  .contact-form {
    background: #FFFFFF;
    -webkit-box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.15);
    box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.15);
    border-radius: 8px;
    width: 100%;
    padding: 60px 85px;

    .form-group {
      width: 100%;
      margin-bottom: 12px;
      input, textarea {
        width: 100%;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        background: #FFFFFF;
        border: 2px solid #EAE9F2;
        border-radius: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.4);
        height: 71px;
        padding: 30px 25px;
        font-family: 'Golos-Rgular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 1.2;
        letter-spacing: -0.562737px;
        color: #696871;
        &::-webkit-input-placeholder {
          font-family: 'Golos-Rgular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.562737px;
          color: #696871;
        }
        &::-moz-placeholder {
          font-family: 'Golos-Rgular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.562737px;
          color: #696871;
        }
        &:-ms-input-placeholder {
          font-family: 'Golos-Rgular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.562737px;
          color: #696871;
        }
        &::-ms-input-placeholder {
          font-family: 'Golos-Rgular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.562737px;
          color: #696871;
        }
        &::placeholder {
          font-family: 'Golos-Rgular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.562737px;
          color: #696871;
        }
      }
    }

    button {
      width: 100%;
    }
  }

  @media (max-width: 1440px) {
    .contact-form {
      padding: 25px;
    }
  }
</style>
