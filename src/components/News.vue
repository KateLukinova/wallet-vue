<template>
  <div class="swap-page">
    <header class="blue-bg">
      <MHeader></MHeader>
    </header>
    <section class="main-swap main-about">
      <div class="center-block">
        <h2>News</h2>
        <div class="search-wrapper">
          <input type="text" v-model="search" placeholder="Search any news..."/>
          <label>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.78044 33.0696C2.07319 26.3623 2.07319 15.4877 8.78044 8.78044C15.4877 2.07319 26.3623 2.07319 33.0696 8.78044C39.2003 14.9112 39.7273 24.5237 34.6504 31.253L41.427 38.0296L41.4269 38.0297C43.1946 39.7975 40.543 42.449 38.7752 40.6813L32.0797 33.9857C25.3318 39.7615 15.167 39.4561 8.78044 33.0696ZM30.4179 11.4321C25.1751 6.1893 16.6749 6.1893 11.4321 11.4321C6.1893 16.6749 6.1893 25.1751 11.4321 30.4179C16.6749 35.6607 25.1751 35.6607 30.4179 30.4179C35.6607 25.1751 35.6607 16.6749 30.4179 11.4321Z" fill="#CBCBCB"/>
            </svg>
          </label>
        </div>
      </div>
    </section>
    <section>
      <div class="post-box">
        <div class="card" v-for="post in filteredList">
          <a v-bind:href="post.link" target="_blank">
            <div class="card-img">
              <img v-bind:src="post.img"/>
            </div>
            <div class="card-body">
              <span class="post-date">{{ post.postDate }}</span>
              <span class="post-title">{{ post.title }}</span>
              <span class="post-desc">{{ post.desc }}</span>
              <a class="post-link">Continue Reading</a>
            </div>

          </a>
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
  import FeedbackForm from './FeedbackForm.vue';
  import BottomBlockGrey from './BottomBlockGrey.vue';

  class Post {
    constructor(title, link, img, postDate, desc) {
      this.title = title;
      this.link = link;
      this.img = img;
      this.postDate = postDate;
      this.desc = desc;
    }
  }

export default {
  components: {
    MHeader,
    FeedbackForm,
    LinkBox,
    BottomBlockGrey
  },



  data() {
    return {
      search: '',
      postList : [
        new Post(
          'How did we get 1M+ visitors in 30 days without anything!',
          'https://vuejs.org/',
          '../assets/img/blog.jpg',
          'Jan 14, 2020',
          'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. '
        ),
        new Post(
          'How did we get 1M+ visitors in 30 days without anything!',
          'https://vuejs.org/',
          '../assets/img/blog.jpg',
          'Jan 14, 2020',
          'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. '
        ),
        new Post(
          'How did we get 1M+ visitors in 30 days without anything!',
          'https://vuejs.org/',
          '../assets/img/blog.jpg',
          'Jan 14, 2020',
          'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. '
        ),
        new Post(
          'How did we get 1M+ visitors in 30 days without anything!',
          'https://vuejs.org/',
          '../assets/img/blog.jpg',
          'Jan 14, 2020',
          'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. '
        ),
        new Post(
          'How did we get 1M+ visitors in 30 days without anything!',
          'https://vuejs.org/',
          '../assets/img/blog.jpg',
          'Jan 14, 2020',
          'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. '
        ),
        new Post(
          'How did we get 1M+ visitors in 30 days without anything!',
          'https://vuejs.org/',
          '../assets/img/blog.jpg',
          'Jan 14, 2020',
          'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. '
        ),
      ]
    };
  },

  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
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
        margin-top: 80px;

        @media (max-width: 990px) {
          margin-bottom: 15px;
          margin-top: 30px;
        }
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

  .search-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 105px;
    max-width: 1290px;
    background: #FFFFFF;
    box-shadow: 0 4px 100px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-top: 40px;

    @media (max-width: 990px) {
      margin-top: 40px;
      height: 60px;
    }

    input {
      width: 100%;
      height: 100%;
      padding: 0 30px;
      @media (max-width: 990px) {
        padding: 0 15px;
      }

      &::placeholder {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 1.2;
        color: #C9C9DC;
        @media (max-width: 990px) {
          font-size: 14px;
        }
      }
    }

    label {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      @media (max-width: 990px) {
        right: 15px;

        svg {
          width: 30px;
        }
      }
    }
  }

  .post-box {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 90%;
    max-width: 1370px;
    margin: auto;
    transform: translateY(-8vw);
    flex-wrap: wrap;

    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 350px;
      background: #FFFFFF;
      border: 1px solid #EAE9F2;
      box-sizing: border-box;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 120px;

      @media (max-width: 1200px) {
        width: 42%;
        margin-bottom: 80px;
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 40px;
      }

      .card-img {
        width: 100%;
        height: 336px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img {
          min-width: 100%;
          width: auto;
          height: auto;
          min-height: 100%;
          object-fit: cover;
        }
      }

      .card-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 28px;

        @media (max-width: 640px) {
          padding: 15px;
        }


        .post-date {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          letter-spacing: -0.500211px;
          color: #767581;
          margin-bottom: 20px;
        }

        .post-title {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 21px;
          line-height: 1.5;
          letter-spacing: -0.656526px;
          color: #080F1F;
          margin-bottom: 12px;
        }

        .post-desc {
          font-family: 'Golos-regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          letter-spacing: -0.500211px;
          color: #767581;
          margin-bottom: 20px;
        }

        .post-link {
          font-family: 'Golos-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 1.7;
          letter-spacing: -0.500211px;
          color: #0169FE;
        }
      }
    }
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
