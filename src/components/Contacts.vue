<template>
  <div>
    <header>
      <MHeader></MHeader>
    </header>
    <section class="bg-img contacts-page">
      <h1>
        Contacts Us
      </h1>
      <p>
        Fill in the form if you want to contact us.
        We won’t send you spam, promise :)
      </p>
      <div class="min-place">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 31C24.0604 31 31 24.0604 31 15.5C31 6.93959 24.0604 0 15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31Z" fill="#30D6BC"/>
          <path d="M12.7143 22L7 16.375L8.90476 14.5L12.7143 18.25L21.0952 10L23 11.875L12.7143 22Z" fill="white"/>
        </svg>
        Buy crypto assets in several seconds
      </div>
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
    </section>
    <bottom-block></bottom-block>
    <m-footer></m-footer>
  </div>
</template>

<script>

  import MHeader from './MHeader.vue';
  import BottomBlock from './BottomBlock.vue';
  import MFooter from './MFooter.vue';

export default {
  components: {
    MHeader,
    BottomBlock,
    MFooter
  }
};
</script>

<style lang="scss" scoped>

  .contacts-page {
    position: relative;
    min-height: 80vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 120px;

    h1 {
      font-family: 'Golos-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 1.2;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 34px;
    }

    p {
      font-family: 'Golos-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      color: #A3ADB9;
      margin-bottom: 35px;
      max-width: 350px;
    }

    .min-place {
      background: #0169FE;
      box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.15);
      border-radius: 8px;
      width: 90%;
      max-width: 305px;
      display: flex;
      align-items: center;
      padding: 15px;
      font-family: 'Golos-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.500211px;
      color: #FFFFFF;
      margin: auto;
      margin-bottom: 35px;

      svg {
        margin-right: 16px;
      }
    }
  }

  .contact-form {
    background: #FFFFFF;
    -webkit-box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.15);
    box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.15);
    border-radius: 8px;
    width: 90%;
    max-width: 710px;
    padding: 30px;
    transform: translateY(30%);

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
