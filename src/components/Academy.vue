<template>
  <div>
    <header class="blue-bg">
      <MHeader></MHeader>
    </header>
    <section class="main-swap main-token">
      <div class="two-block two-academy">
        <div class="column">
          <div class="text-block">
            <h2>{{ $t('academyH1') }}</h2>
            <h3>{{ $t('academyText') }}</h3>
          </div>
        </div>
        <div class="column">
          <div class="img">
            <img src="../assets/img/cos.png" alt="">
          </div>
        </div>
      </div>
      <div class="academy-box">
        <div class="filter">
          <label>
            <input
              style="visibility: hidden"
              type="radio"
              v-model="selectedCategory"
              value="All" /> {{ $t('radioAll') }}
          </label>
          <label>
            <input
              style="visibility: hidden"
              type="radio"
              v-model="selectedCategory"
              value="Token" />{{ $t('radioToken') }}
          </label>
          <label>
            <input
              style="visibility: hidden"
              type="radio"
              v-model="selectedCategory"
              value="Blockchain" />{{ $t('radioBlockchain') }}
          </label>
          <label>
            <input
              style="visibility: hidden"
              type="radio"
              v-model="selectedCategory"
              value="Cryptocurrency" />{{ $t('radioCryptoCurrency') }}
          </label>
        </div>
        <ul class="academy-list" v-if="this.lang == 'en'">
          <li v-for="term in filteredAcademyEn">
            <h5 @click="(term.open = !term.open)">
              {{ term.name }}
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#0169FE"/>
                <path d="M25.486 29.0021L19.7846 22.6672C19.6109 22.4741 19.7479 22.1665 20.0076 22.1665H31.4104C31.6701 22.1665 31.8071 22.4741 31.6334 22.6672L25.932 29.0021C25.8128 29.1345 25.6052 29.1345 25.486 29.0021Z" fill="white"/>
              </svg>
            </h5>
            <p class="term-desc" v-if="term.open">{{ term.desc }}</p>
          </li>
        </ul>
        <ul class="academy-list" v-if="this.lang == 'ru'">
          <li v-for="term in filteredAcademyRu">
            <h5 @click="(term.open = !term.open)">
              {{ term.name }}
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#0169FE"/>
                <path d="M25.486 29.0021L19.7846 22.6672C19.6109 22.4741 19.7479 22.1665 20.0076 22.1665H31.4104C31.6701 22.1665 31.8071 22.4741 31.6334 22.6672L25.932 29.0021C25.8128 29.1345 25.6052 29.1345 25.486 29.0021Z" fill="white"/>
              </svg>
            </h5>
            <p class="term-desc" v-if="term.open">{{ term.desc }}</p>
          </li>
        </ul>
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
      lang: 'en',
      academyEn: [
        { name: "Airdrop",
          desc: "is a free distribution of tokens or coins to numerous wallet addresses. Airdrops are often used as a marketing tool to raise awareness of the coin or token that is being distributed and as a method to diversify the number of holders of that asset. The way that airdrops usually work is that in order to participate in an airdrop, a user must keep a certain amount of assets in a public wallet during a snapshot, which is used as a representation of the current state of the blockchain at a particular point in time. For example, OmiseGo carried out an airdrop for holders of Ethereum on the Ethereum blockchain in July 2017, distributing 5% of the total supply of OmiseGo tokens in a ratio of 0.075 OMG per ETH to all wallets with more than 0.1 ETH at the time of the snapshot.",
          category: "Token",
          open: false
        },
        { name: "Altcoin",
          desc: "is a term used to describe alternative digital assets such as a coin or token that are not bitcoins. This nomenclature comes from the idea that bitcoin is the original cryptocurrency and all others are considered \"alternative\" or \"alternative\" coins. The term \"altcoin\" is also used quite widely to present digital assets, which could technically be called \"tokens\" rather than coins. The most famous examples are ERC-20 tokens that exist on the Ethereum blockchain. Since Bitcoin's inception in 2008, over 2,000 alternative cryptocurrencies have been deployed. In fact, many of these altcoins were created as modified copies of bitcoin through a process known as the Hard Fork. Despite some similarities, each altcoin has its own functions.",
          category: "Token",
          open: false
        },
        { name: "Automated market makers (AMMs)",
          desc: "are smart contracts those create a pool of liquidity tokens which are automatically traded using an algorithm, not an Order book. In other words, automated market makers are a class of decentralized exchanges that rely on mathematical formulas to determine the price of a token. Just like regular exchanges, they have different trading pairs: for example, Ether (ETH) on Dai. But there is no buy or sell orders, and traders don't need to look for someone else to sell their coins or tokens. Instead, the smart contract acts as a producer in the exchange transaction. The concept is similar to quick-swap services like ShapeShift and Changelly, but the difference is that the company's reserves are replaced by smart contract-based liquidity pools. The liquidity pool consists of two assets in a trading pair. The relative percentage of each token in this pool determines the theoretical price of a particular asset. The first live AMM was Bancor, launched in 2017, but by far the most popular platforms are Uniswap, Curve, Kyber and Balancer.",
          category: "Token",
          open: false
        },
        { name: "Application analytics",
          desc: "is an app analytics that helps you to track key metrics those are needed for both app owners and third-party sources like new exchanges. Thanks to analytics, app creators get a complete picture of consumer behavior. Analytics include such indicators as:\n" +
            "\n" +
            "DAU (Daily Active Users) is how many (unique) customers used your service (usually logged in) on a particular day.\n" +
            "MAU (Monthly Active Users) is how many (unique) customers have used your service in the last month (or last 30 days).\n" +
            "DAU / MAU is what % of (unique) customers have re-used your service over the period. This is what is called \"stickiness\".\n" +
            "Sources of application installation. It is needed to assess the effectiveness of your marketing channels.\n" +
            "Metrics of user retention and engagement. Shows how many customers launched your application after downloading. For example, PCU (Peak Concurrent User or \"peak online users\") shows the maximum number of users at one time in the application. ACU (Average Concurrent User) is a measure of the average number of users who are in the application at a time for a specific period.\n" +
            "Session-metric. A measure of how long the user has been in the application. \n" +
            "A / B tests. They inform which buttons and in what sequence the user pressed. \n" +
            "Financial metrics. Calculate the effectiveness of the application and its profitability. The main financial metrics are ARPPU (revenue per paying user) and ARPU (average revenue per user).\n" +
            "CPI (Cost per Install) is the cost of installing an application. Thanks to him, you can find out how much money was spent on attracting new customers.\n" +
            "LTV Index (Lifetime Value) - an indicator of profitability for the average period of use of the application by one client.\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Arbitrage",
          desc: "is the practice of buying and selling assets in two or more markets for the purpose of using different prices. For example, a trader can buy a certain asset in one market and quickly sell the same asset in another market at a higher price. The reason arbitrage exists is due to the inefficiency of markets. This means that a particular asset can have different trading prices in different locations, even if both markets offer the same asset (or very similar ones). In cryptocurrency markets, the best way to get profit from arbitrage opportunities is to avoid dependence on blockchain transactions. For example, if a trader wants to arbitrate with bitcoins on two different exchanges, it would be better for that trader to have an account on both platforms. In addition, both accounts must have sufficient funds to be able to buy and sell immediately without having to rely on confirmation of deposits and withdrawals (which can take thirty minutes or more depending on network traffic).",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Ask Price",
          desc: "is the selling price of a token or coin set by those who own the asset and intend to sell. Thus, the asking price is the minimum price for which a person would be willing to sell his asset, or the minimum amount he wants to receive in exchange for a unit from which he parted. In the Exchange Order Book, the highest bid price and lowest bid price are filled first when a trader uses a market order. The gap between the lowest bid price and the highest bid price is called the market spread.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Atomic swap",
          desc: "is a technology based on smart contracts that allows the exchange of various cryptocurrencies without the need for a centralized market or other intermediaries. Atomic swaps, also known as atomic cross-chain trading, involve exchanging one cryptocurrency for another, even if they operate on different blockchain networks. The atomic swap concept was first described in 2013 by Taer Nolan. It was presented as an innovative method that would allow independent parties to exchange units of cryptocurrency directly from their addresses (or cryptocurrency wallets). One of the main advantages of using atomic swaps is security, as users are not required to provide or use their private keys at any time. Another advantage of this technology is that there is no need for centralized exchanges, that results in much lower costs (no deposit, withdrawal or trading fees).",
          category: "Blockchain",
          open: false
        },
      ],
      academyRu: [
        { name: "Airdrop (Раздача)",
          desc: " – это бесплатная раздача токенов или коинов по многочисленным адресам кошелька. \n" +
            "Airdrops часто используются в качестве маркетингового инструмента для повышения осведомленности о монете или токене, которые распространяются, а также в качестве метода диверсификации количества держателей этого актива. Способ, при помощи которого обычно работают airdrops, заключается в том, что для участия в airdrop, пользователь должен держать определенное количество актива в общедоступном кошельке во время snapshot (моментального снимка), который используется в качестве представления текущего состояния блокчейна в конкретный момент времени. Например, OmiseGo провела аирдроп для держателей эфира на блокчейне Ethereum в июле 2017 года, распределяя 5% от общего количества токенов OmiseGo в соотношении 0,075 OMG на ETH всем кошелькам, имеющим более 0,1 ETH на момент snapshot.",
          category: "Token",
          open: false
        },
        { name: "Altcoin (Альткоин)",
          desc: " - это термин, используемый для описания альтернативных цифровых активов, таких как коин или токен, которые не являются биткоинами. Эта номенклатура исходит из идеи, что биткоин является исходной криптовалютой, а все остальные считаются «альтернативными» или «альтернативными» монетами (коинами). Термин «альткоин» также используется довольно широко для обозначения цифровых активов, которые технически могут называться «токенами», а не коинами. Самыми известными примерами являются токены стандарта ERC-20, которые существуют на блокчейне Ethereum. С момента создания биткоина в 2008 году было развернуто более 2000 альтернативных криптовалют. Фактически, многие из этих альткоинов были созданы как модифицированные копии биткоина с помощью процесса, известного как Hard Fork . Несмотря на некоторые общие черты, каждый альткоин имеет свои собственные функции.",
          category: "Token",
          open: false
        },
        { name: "Автоматизированный рыночный мейкер (AMMs)",
          desc: " - это смарт-контракты, которые создают пул ликвидности токенов, которые автоматически торгуются с помощью алгоритма, а не книги заказов (Order book). Иными словами, автоматизированные маркет-мейкеры, - это класс децентрализованных бирж, которые полагаются на математические формулы для определения цены токена. Как и обычные биржи, у них есть разные торговые пары: например, Ether (ETH) на Dai. Но нет ордеров на покупку или продажу, и трейдерам не нужно искать кого-то еще, чтобы продать свои коины или токены. Вместо этого смарт-контракт действует как производитель в транзакции обмена. Концепция аналогична сервисам быстрой замены, таким как ShapeShift и Changelly, но разница в том, что резервы компании заменяются пулами ликвидности на основе смарт-контрактов. Пул ликвидности состоит из двух активов в торговой паре. Относительный процент каждого токена в этом пуле определяет теоретическую цену конкретного актива. Первым живым AMM был Bancor, запущенный в 2017 году, но на сегодняшний день наиболее популярными платформами являются Uniswap, Curve, Kyber и Balancer.",
          category: "Token",
          open: false
        },
        { name: "Aналитика приложения",
          desc: "  - это аналитика приложения, которая помогает отслеживать основные показатели, необходимое как для владельцев приложения, так и для сторонних источников, например, для новых бирж. Благодаря аналитике, создатели приложения получают полную картину потребительского поведения. К аналитике относятся такие показатели как:\n" +
            "DAU (Daily Active Users) это сколько (уникальных) клиентов воспользовались вашим сервисом (обычно - залогинились) в конкретный день.\n" +
            "MAU (Monthly Active Users) это сколько (уникальных) клиентов воспользовались вашим сервисом за последний месяц (или последние 30 дней).\n" +
            "DAU / MAU это какой % наших (уникальных) клиентов повторно воспользовались вашим сервисом за период. Это так называемый \"stickiness\".\n" +
            "Источники установки приложения. Нужны для оценки эффективности используемых вами каналов маркетинга.\n" +
            "Метрики удержания и вовлеченности пользователей. Показывают, какое количество клиентов запустило ваше приложение после скачивания. К примеру, PCU (Peak Concurrent User или «пик пользователей онлайн») показывает максимальное количество пользователей, единовременно находящихся в приложении. ACU (Average Concurrent User или «среднее число пользователей онлайн»)— это показатель среднего количества пользователей, единовременно находящихся в приложении, за конкретный период.\n" +
            "Сессия – метрика. Показатель продолжительности пребывания пользователя в приложении.\n" +
            "A/B тесты. Информируют, какие кнопки и в какой последовательности нажимал пользователь.\n" +
            "Финансовые метрики. Вычисляют эффективность приложения и его прибыльность. Основные финансовые метрики, это ARPPU (доход с одного платящего пользователя) и ARPU (средний доход с пользователя).\n" +
            " CPI (Cost per Install) – это стоимость установки приложения. Благодаря ему можно узнать, сколько денег было потрачено на привлечение новых клиентов. \n" +
            "Индекс LTV (Lifetime Value) —  показатель прибыльности за средний период использования приложения одним клиентом.\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Arbitrage (Арбитраж)",
          desc: " - это практика покупки и продажи активов на двух или более рынках с целью использования различных цен. Например, трейдер может купить определенный актив на одном рынке и быстро продать тот же актив на другом рынке по более высокой цене. Причина, по которой существует арбитраж, связана с неэффективностью рынков. Это означает, что конкретный актив может иметь разные торговые цены в разных местах, даже если оба рынка предлагают один и тот же актив (или очень похожие). На рынках криптовалют лучший способ получить прибыль от возможностей арбитража - избегать зависимости от транзакций блокчейна. Например, если трейдер хочет провести арбитраж с биткоинами на двух разных биржах, для этого трейдера будет лучше иметь учетную запись на обеих платформах. Кроме того, на обоих счетах должно быть достаточно средств, чтобы они могли покупать и продавать немедленно, без необходимости полагаться на подтверждения о внесении и снятии средств (что может занять тридцать минут или более в зависимости от сетевого трафика).",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Ask Price (Спроси цену)",
          desc: " - это цена продажи токена или коина, устанавливаемая теми, кто владеет активом и собирается продать. Таким образом, запрашиваемая цена - это минимальная цена, за которую человек был бы готов продать свой актив, или минимальную сумму, которую он хочет получить в обмен на единицу, с которой расстается. В книге заказов (Order Book) биржи самая высокая цена предложения и самая низкая цена предложения заполняются первыми, когда трейдер использует рыночный ордер. Разрыв между самой низкой ценой предложения и самой высокой ценой предложения называется спредом рынка.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Atomic swap (Атомный своп)",
          desc: " - это технология, основанная на смарт-контрактах, которая позволяет обменивать различные криптовалюты без необходимости использования централизованного рынка или других посредников. Атомные свопы, также известные как атомная кросс-цепная торговля, включают обмен одной криптовалюты на другую, даже если они работают в разных сетях блокчейнов. Концепция атомного свопа была впервые описана в 2013 году Таером Ноланом. Он был представлен как инновационный метод, который позволит независимым сторонам обменивать единицы криптовалюты непосредственно со своих адресов (или кошельков криптовалюты). Одним из основных преимуществ использования атомарных свопов является безопасность, поскольку пользователям не требуется предоставлять или использовать свои закрытые ключи в любой момент. Еще одно преимущество такой технологии связано с тем, что нет необходимости в централизованных обменах, что приводит к гораздо более низким затратам (отсутствие комиссий за депозит, снятие средств или торговлю).",
          category: "Blockchain",
          open: false
        },
      ],
      selectedCategory: "All"
    };
  },

  computed: {
    filteredAcademyEn: function() {
      var vm = this;
      var category = vm.selectedCategory;

      if(category === "All") {
        return vm.academyEn;
      } else {
        return vm.academyEn.filter(function(person) {
          return person.category === category;
        });
      }
    },
    filteredAcademyRu: function() {
      var vm = this;
      var category = vm.selectedCategory;

      if(category === "All") {
        return vm.academyRu;
      } else {
        return vm.academyRu.filter(function(person) {
          return person.category === category;
        });
      }
    }
  },

  created () {
    eventBus.$on('langChanged', data => {
      this.lang = data.lang;
    })
  }
};
</script>

<style lang="scss" scoped>

  header {
    background-color: #0169FE;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  }


  .main-token {
    background-image: url("../assets/img/bg-token.jpg");
    padding-top: 120px;
  }

  .two-academy {
    align-items: center;
    .text-block {
      h2 {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 1.2;
        color: #080F1F;
        margin-bottom: 30px;

        @media (max-width: 1200px) {
          font-size: 40px;
        }
      }

      h3 {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 1.5;
        color: #080F1F;
        text-align: left;
        @media (max-width: 1200px) {
          font-size: 28px;
        }
      }
    }
  }

  .academy-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    max-width: 1464px;
    margin: auto;
    margin-top: 70px;

    label {
      margin-left: -15px;
      font-family: 'Golos-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 1.2;
      color: #9CA3B3;
      margin-right: 90px;

      @media (max-width: 1200px) {
        font-size: 22px;
        margin-right: 30px;
      }
      @media (max-width: 640px) {
        font-size: 15px;
        margin-right: 10px;
      }
    }
  }

  .academy-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      width: 47%;
      border-radius: 8px;
      overflow: hidden;
      background: #FFFFFF;
      box-shadow: 0 32px 34px rgba(28, 27, 32, 0.1);
      margin-top: 70px;
      margin-bottom: 20px;

      @media (max-width: 1200px) {
        width: 100%;
      }

      @media (max-width: 768px) {
        margin-top: 40px;
        margin-bottom: 0;
      }

      &:before {
        min-width: 100%;
        height: 123px;
        content: '';
        background-image: url("../assets/img/rec.svg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        @media (max-width: 1200px) {
          height: 70px;
        }
      }

      h5 {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 1.2;
        color: #070E1E;
        padding: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        @media (max-width: 1200px) {
          padding: 15px;
          font-size: 26px;
        }
      }

      p.term-desc {
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 1.2;
        color: #070E1E;
        padding: 32px;
        width: 100%;
        box-sizing: border-box;
        @media (max-width: 1200px) {
          padding: 15px;
          font-size: 16px;
        }
      }
    }
  }


</style>
