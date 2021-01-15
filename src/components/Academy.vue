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
  import axios from "axios";

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
        { name: "BEP-2",
          desc: "is the technical standard for issuing and selling tokens on the Binance Chain. This standard defines a set of rules that tokens must comply with in order to function in the Binance Chain ecosystem. A comparable token standard for issuing tokens on the Ethereum blockchain is ERC-20. BEP-2 is not a program, but a set of technical specifications. These rules ensure that the tokens in the Binance Chain ecosystem can communicate seamlessly with each other. BEP-2 tokens can represent a wide range of digital assets and tradable goods. The standard ensures that they can all seamlessly integrate with each other and with the surrounding ecosystem. BEP-2 tokens can be traded on the Binance DEX decentralized exchange. Tokens of this standard can be stored in various wallets, for example TBCC Wallet, Trust Wallet.",
          category: "Token",
          open: false
        },
        { name: "Bid price",
          desc: "is the highest price that a particular buyer is willing to pay for the selected token or coin. The trade order book consists of several purchase prices (from buyers 'side) and selling prices (from sellers' side). The highest bid price is always lower than the lowest bid price, and the difference between the two is called the bid / ask spread. Traders or investors looking to sell their assets must either accept one of the bid prices available in the order book (ideally the highest), or set the bid price and wait until the buyer ultimately bids against that value by filling out an order.",
          category: "Blockchain",
          open: false
        },
        { name: "Bid-Ask Spread",
          desc: "is the gap between the lowest bid price (sell order) and the highest bid price (buy order). Basically, the supply and demand spread can be formed in two different ways. First, it can be created by a broker (or reseller) as a way to monetize their services. Second, it can be created simply by the difference between limit orders placed by traders on the open market. With cryptocurrencies, most trading takes place on cryptocurrency exchanges where buy and sell orders are directly placed by users (traders) in the order book. In this case, the exchange does not monetize the spread, but only the trading commission. Typically, high volume markets have lower spreads due to their higher liquidity (more competition between buyers and sellers). On the other hand, markets that are not liquid enough and have low trading volumes tend to have larger spreads.",
          category: "Blockchain",
          open: false
        },
        { name: "Binance Chain",
          desc: "is a blockchain project developed by Binance and its community. Mission is to ensure the creation of a blockchain that will serve as an alternative marketplace for issuing tokens, using and exchanging digital assets in a decentralized manner. Binance Chain's primary use case is Binance DEX, a decentralized exchange (DEX) that aims to bring the best features of Binance to a decentralized environment, along with all the benefits and security.",
          category: "Blockchain",
          open: false
        },
        { name: "Binance Smart Chain",
          desc: "is an innovative project that is designed specifically to work in parallel with the Binance Chain and supports the creation of smart contracts for tokens on the Binance brand blockchain. It also introduces a completely new staking mechanism for BNB, one of the world's leading cryptocurrencies. Through the Proof of Staked Authority (PoSA) consensus mechanism, Binance Smart Chain creates an ecosystem in which validators, token holders, developers and all users can benefit from a promising blockchain with high performance and ample room for further innovation. With the launch of Binance Smart Chain, DeFi projects and the entire blockchain community will be able to take advantage of the best Binance Chain offerings, as well as support for smart contracts, cross-chain compatibility and other BSC benefits.",
          category: "Blockchain",
          open: false
        },
        { name: "Bitcoin",
          desc: "is a digital form of money that works in a distributed network of computers (nodes). Bitcoin was conceptualized by a person (or group) under the pseudonym Satoshi Nakamoto. The idea was to create a unique digital payment system that would allow financial transactions without borders without the need for intermediaries such as banks or governments. The distributed architecture provided by blockchain technology, along with encryption methods, makes Bitcoin very resistant to attacks and fraud. Bitcoin is also considered to be a kind of ancestor of the cryptocurrency.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Block explorer",
          desc: "is a tool that provides detailed analytics of the blockchain network from its first day in the creation phase. The block explorer can be said to act like a search engine and browser where users can find information about individual blocks, public addresses and transactions associated with a particular cryptocurrency. Some block explorers also provide real-time statistics and market charts, as well as data on mining pools, pending transactions, network hash rate, extended list, block validators, hard forks and more. Depending on the type of blockchain, block explorers can also act as a center of general information. For example, there are thousands of ERC-20 tokens running on top of the Ethereum blockchain, and users can find data about them by checking their smart contracts in Etherscan or another Ethereum block explorer. Block researchers are essential in the process of monitoring the current state of the cryptocurrency network. When it comes to Binance Chain, users can check the current status of BNB on Binance Chain Explorer, including burn coins and current total supply.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Block Reward",
          desc: "is the cryptocurrency that a miner receives when he successfully verifies a new block. Block rewards have two components: block subsidies and transaction fees. The block subsidy is made up of newly created coins and represents the majority of the block reward. The other part consists of all the fees paid by the transactions included in the block. Since the block reward consists almost entirely of the block subsidy, it is very common to see people talk about the block subsidy, referring to it as the block subsidy. Thus, in popular terminology, the term “block reward” does not include fees.",
          category: "Blockchain",
          open: false
        },
        { name: "BNB",
          desc: "is a cryptocurrency (token) created by Binance in 2017. BNB was originally issued as an ERC-20 token (on the Ethereum platform) but will soon be transferred to the Binance main chain. The original total supply of BNB was estimated at 200,000,000 coins, but due to regular coin burning events, the supply is gradually decreasing. BNB has several use cases, but in the Binance Exchange ecosystem, it is used as a utility token that allows users to receive discounts on their trading fees. In addition to being used by traders to get discounts on their trading fees, BNB can also be used to pay travel expenses (such as hotel and flight bookings), to buy virtual gifts, to make purchases using a credit card, and etc..",
          category: "Token",
          open: false
        },
        { name: "Bounty",
          desc: "is a reward placed by a group or individual to stimulate a particular job, behavior or development. For example, referral programs can be seen as a kind of reward. In the context of cryptocurrency, a reward program is a marketing strategy used by startups during their Initial Coin Offering (ICO) campaigns. This allows them to allocate a certain percentage of their coins or tokens to promote their project.",
          category: "Blockchain",
          open: false
        },
        { name: "Circulating supply",
          desc: "this term refers to the number of cryptocurrency coins or tokens that are publicly available and traded in the market. The circulating supply of cryptocurrency can increase or decrease over time. For example, Bitcoin turnover will gradually increase until the maximum supply of 21 million coins is reached. This gradual increase is due to the mining process, which generates new coins every 10 minutes on average. Alternatively, coin burn events like those performed by Binance cause circulating supply to decrease, permanently removing coins from the market. Cryptocurrency turnover can be used to calculate its market capitalization, which is generated by multiplying the current market price by the number of coins in circulation. Thus, if a certain cryptocurrency has 1,000,000 coins in circulation, which are traded at $ 5 each, the market cap would be $ 5,000,000.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Coin",
          desc: "is a cryptocurrency or digital money that is independent of any other blockchain or platform. The key feature of coins is currency, and this term can also be used to describe a cryptocurrency asset that is not a token. Unlike cryptocurrency tokens, coins are not designed to perform service functions such as representing voices within a community or denoting storage capacity in a decentralized cloud storage. Instead, the coin runs on its own independent blockchain and acts as its own currency in a particular financial system. Accordingly, the coin is mainly used as a medium of exchange or store of value in the digital economic network. Most blockchains operate as a decentralized distributed ledger that tracks and verifies every transaction, and their own coins can only be transferred between members of that particular network.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Confirmation time",
          desc: "is defined as the time elapsed from the moment the blockchain transaction was sent to the network until it was finally written to the confirmed block. In other words, it represents the total time the user has to wait until his transaction is collected and confirmed by the miner's node. Depending on the type of blockchain and network architecture, this time can be reduced by offering a higher transaction fee, so miners will have an incentive to prioritize your transaction. Confirmation time can be used as a metric to measure the average speed of the blockchain network. However, since the actual time between sending and confirming can vary depending on individual factors and fluctuations in demand, it is more reasonable to calculate the efficiency and speed of the blockchain using the average confirmation time according to its current state and the most recent block.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Cryptocurrency",
          desc: "is a digital currency that is protected by cryptography and is commonly used as a medium of exchange within a peer-to-peer (P2P) digital economic system. The use of cryptographic techniques ensures that these systems are completely safe from fraud and tampering. Most cryptocurrency systems operate through a decentralized structure that is jointly supported by a distributed network of computers. Each computer (or device) that joins the network is called a node. Simply put, a node is any physical device connected to a network and capable of sending, receiving, and forwarding information. Each node is classified according to the functions it performs in the system. Cryptocurrency systems are considered decentralized because they do not rely on a centralized point of control. Network nodes are widespread throughout the world, and the issuance and management of cryptocurrency units is based on pre-programmed algorithms and mathematical proofs.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Custody",
          desc: "is the storage of assets on behalf of the client, usually by some organization. Custodians tend to be different from banks in that they cannot use the assets they hold for their own purposes. For their problems, the institution usually charges a fee for holding the assets. It can also cover selling them as desired by the client. \n" +
            "In cryptocurrency, custody solutions are those in which a third party stores private keys to a user's funds. They are the only ones who can actually send and receive user's coins. Although the owner of the cryptocurrency owns it from a legal point of view, he does not have ownership at the protocol level. Almost all exchanges use a custodian approach as it allows them to improve the user experience.\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Decentralized Applications (DApps)",
          desc: "these are applications those run on a distributed computing system, that is, on a blockchain network. DApps are designed as open source projects that run on top of the blockchain network.\n" +
            "While there are various ways to define a DApp, they are usually described as applications that have the following characteristics:\n" +
            "Open Source - the source code is intentionally made available to the public, which means that someone can check, use, copy and modify the code.\n" +
            "Decentralized - Since DApps operate on blockchain networks, they are not controlled by any one person or body. Instead, they are served by multiple users (or nodes).\n" +
            "Cryptographically secure - the application is protected by cryptography, which means that all data is written and stored on the public blockchain. There is no single point of failure.\n" +
            "\n" +
            "There are many DApps with different use cases. These can include games, social media platforms, cryptocurrency wallets, and financial applications (DeFi).\n" +
            "Decentralized applications feed their activities through a tokenized system (digital tokens created using smart contracts). Tokens can be specific to a particular DApp (for example, the Steem token used on Steemit), or they can be native to the blockchain on which the DApp is hosted, as in the case of CryptoKitties using Ether (ETH).\n",
          category: "Blockchain",
          open: false
        },
        { name: "Decentralized Autonomous Cooperative (DAC) ",
          desc: "is an organization controlled by shareholders and not by management.",
          category: "Blockchain",
          open: false
        },
        { name: "Decentralized Autonomous Organization (DAO) ",
          desc: "is a system of hard-coded rules that determine what actions a decentralized organization will take. However, the term DAO can also refer specifically to an organization called \"DAO\" that was conceptualized on the Ethereum blockchain in 2016. In simpler terms, DAO refers to a specific type of organization that, unlike conventional companies, is open source and is entirely driven by its community. Hence, the underlying structure and working mechanisms of DAOs are not based on any kind of hierarchical governance (which is quite common in traditional enterprises).\n" +
            "In other words, the DAO does not have a single person in charge, nor any bulletin board of any kind, and as the name suggests, there is no centralization of power. DAOs are conducted according to computer-encoded rules (smart contracts) and are governed by the collective work of its members and community members. The financial transaction records of the DAO and the programming rules for such contracts are stored on the transaction blockchain.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Decentralized Exchange (DEX)",
          desc: "is an exchange that does not require users to deposit funds to start trading and does not hold funds for the user. Instead, users trade directly from their wallets.",
          category: "Blockchain",
          open: false
        },
        { name: "Decentralized Finance (DeFi) ",
          desc: "refers to an ecosystem of financial applications that are developed based on blockchain systems. DeFi can be defined as a movement that promotes the use of decentralized networks and open source software to create various types of financial services and products. The idea is to develop and manage financial DApps based on transparent and unreliable infrastructure such as unauthorized blockchains and other peer-to-peer (P2P) protocols.",
          category: "Blockchain",
          open: false
        },
        { name: "Delisting ",
          desc: "is the removal of an asset from the exchange. This can either happen at a request from the project team, or as a result of the asset team or the asset itself no longer meeting the listing requirements put forward by the exchange. There are many factors that can influence an exchange's decision to delist an asset. Some of these factors are listed below:\n" +
            "General attitude of the team to the project\n" +
            "Quality and level of development of activities\n" +
            "Project network and / or stability of a smart contract\n" +
            "Level of public communication from the project team\n" +
            "Responsive to due diligence requests from the exchange\n" +
            "Evidence of unethical or fraudulent behavior\n" +
            "Whether the project contribute to a healthy and sustainable ecosystem of blockchain and cryptocurrency\n" +
            "Other reasons why the exchange considers doing business with the project unacceptable or risky.\n" +
            "\n" +
            "When an asset is removed from the exchange, all of its trading pairs are removed. The asset can still be traded on other exchanges (for example, decentralized exchanges) or through over-the-counter trading (OTC), but trading activity on the exchange that de-listed the asset will cease.\n",
          category: "Blockchain",
          open: false
        },
        { name: "ERC-20 ",
          desc: "is a technical standard used for the issuance and implementation of tokens on the Ethereum blockchain. The standard describes a general set of rules that must be followed for a token to function properly in the Ethereum ecosystem. In other words, ERC-20 gives developers a list of rules to follow to ensure smooth operation within the larger Ethereum platform. Therefore, ERC-20 should not be viewed as a piece of code or software. Instead, it can be described as a technical guide or specification. Numerous decentralized applications (DApps) and services support ERC-20 tokens, making it easier for community members and businesses to adopt and use them in a wide range of applications (such as cryptocurrency wallets, decentralized exchanges, games, etc.). Technically, the ERC-20 standard describes six functions that support some of the functions and features of Ethereum-based digital tokens. These features include the way tokens are transferred between addresses and some important data related to the token smart contract, such as symbol, name, and delivery.\n",
          category: "Blockchain",
          open: false
        },
        { name: "ERC-721 ",
          desc: "ERC stands for Ethereum Request for Comments (Request for a comment on Ethereum). This is not a technology or platform, it is a technical guide to developers for creating tokens.\n" +
            "Developers can create an ERC by submitting an Ethereum Improvement Proposal (EIP). ERC-721 - Non-Fungible Token Standard, was created by William Entriken, Dieter Shirley, Jacob Evans and Nastassia Sachs due to the failure of the ERC-20 interface.\n" +
            "Ethereum's popular decentralized application, Cryptokitties, used ERC-721 to create unique digital kitty collectibles.\n" +
            "Each kitten was worth a different amount on the market depending on the platform users. Each kitten has a different price, so each token must be unique.\n" +
            "The creation of blockchain-based non-fungible tokens allows:\n" +
            "physical property (houses, artworks and cars)\n" +
            "Virtual collectibles (crypto kittens, rare items, collectible cards)\n" +
            "Assets with negative value (loans)\n" +
            "To create an ERC-721 token, the contract must conform to the ERC-721 and ERC-165 interfaces. ERC-721 tokens differ from ERC-20 tokens in the sense that ERC-721 tokens are not fungible. This means that each token is unique and, as a result, is not fungible.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Exchange ",
          desc: "is an organized trading platform where financial instruments such as cryptocurrencies, commodities and securities are traded. The exchange can operate on a real object or on a digital platform. Many traditional exchanges, which were initially limited to physical trading, now provide digitalized services as a way to enable electronic commerce (also known as paperless trading).\n" +
            "There are 2 types of exchanges - centralized and decentralized. Currently, most cryptocurrency exchanges are based on a centralized system maintained by a private company that acts as an intermediary and is responsible for all trades and transactions. Ease of use and liquidity are the main advantages of centralized exchanges.\n" +
            "On the downside, these centralized systems are prone to downtime and cyber-attacks, making security a major concern. Given that users must trust their assets to the company in order to be able to trade, it is important to choose an exchange that has proven its reliability and safety. In contrast, decentralized cryptocurrency exchanges (also known as DEXs) were created as an alternative to centralized exchanges. DEX platforms eliminate the need for intermediaries and execute trades and transactions in an automated trustless environment (based on smart contracts). While these trading platforms are less susceptible to cyber-attacks and infrastructure downtime, decentralized exchanges cannot provide fiat currency services such as fiat / crypto trading or fiat currency withdrawals / deposits.",
          category: "Blockchain",
          open: false
        },
        { name: "Gas ",
          desc: "the term refers to the pricing mechanism used on the Ethereum network. Such a mechanism calculates the costs (commissions) for completing a transaction or performing a smart contract operation. While Ether (ETH) is the currency that powers the Ethereum network, gas is a special unit of measure that is used to measure how much “work” (computing resources) is required to complete a particular task. Naturally, complex tasks will have a higher gas cost than other operations that require less computing resources.\n" +
            "It should be noted that commissions are still paid on air (ETH), but gas and ETH are different things. In simple terms, computational tasks are measured by the \"cost of gas\". On the other hand, each gas unit has a “gas price” which is determined in ether (ETH). Thus, each transaction has a certain \"gas price\" for each unit of gas. \n" +
            "In other words, the cost of gas is the amount of work, and the price of gas is the price paid for “every hour” of work. The relationship between these two parameters, along with the gas limit, determines the total fee for an operation or transaction.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Halving ",
          desc: " is a process that slows down the rate at which new coins are issued. More precisely, the halving is a periodic cut in the block subsidy given to miners. The halving ensures that the crypto asset is issued at a constant rate until the maximum supply is eventually reached.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Initial Coin Offering (ICO) ",
          desc: "is a form of attracting investments in the form of selling to investors a fixed number of new units of cryptocurrencies received by a one-time or accelerated emission. There is also the name \"initial token offering\". The term ICO is often replaced by the word \"crowdsale\". ICO is typical for cryptocurrency start-up projects that have not yet fully developed, or are in the early stages of developing their product, service or platform based on the blockchain and need funds to promote or implement the project. During an ICO, investors do not buy any ownership interest in a company, unlike an IPO (initial public offering).\n" +
            "The most popular examples of ICOs are Ethereum, Stellar, NEM, NEO, Komodo, and Waves.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Mainnet Swap ",
          desc: "consists of switching from one blockchain network to another. In most cases, an exchange occurs when a cryptocurrency project migrates from a third party platform (like Ethereum) to its own blockchain network. At this stage, their tokens are gradually replaced with newly issued ones, and all blockchain activity moves to the new chain. Let's take a look at Mainnet swap using BNB as an example. After the launch of Binance Chain, users were able to migrate from the Ethereum blockchain to the Binance chain. Holders of ERC-20 BNB tokens have started replacing their tokens with the recently released BEP2 BNB coin (the native coin of Binance Chain). The mainnet swap was 1: 1, so 1 ERC-20 BNB had the same value as 1 BEP2 BNB. After the swap, all remaining ERC-20 BNB tokens were burned, so now only BNB of the new chain can be used. Consequently, an exchange on the mainnet occurs when a blockchain project replaces previously issued tokens with its new cryptocurrency, which usually runs on their own blockchain network. This process can also be called \"token migration\". It should be noted that the Mainnet swap is not always associated solely with the launch of a new blockchain. This can also happen when projects are simply moving from one protocol to another. For example, Storj performed an exchange on the mainnet, transferring its tokens from the bitcoin-based protocol to the Ethereum network to avoid scalability issues.",
          category: "Blockchain",
          open: false
        },
        { name: "Market Capitalization ",
          desc: "In the blockchain industry, the term market capitalization (or market cap for short) refers to a metric that measures the relative size of a cryptocurrency. It is calculated using the following formula:\n" +
            "Market Cap = Current Price x Circulating Supply\n" +
            "For example, if each unit of a cryptocurrency is trading at $ 10.00 and the circulating supply is 50,000,000 coins, then the market capitalization of that cryptocurrency would be $ 500,000,000.\n" +
            "While market capitalization can provide some insight into the size and performance of a company or cryptocurrency project, it is important to note that this is not the same as an influx of money. Thus, it does not show how much money is in the market.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Order Book ",
          desc: "is a list of the currently open buy and sell orders for the asset, sorted by price. The Order Book is usually presented in the form of a table, where the orders of the nearest sellers and buyers are marked in red, and in green - buyers. The columns of the table show the number of cryptocurrencies and the cost for which they intend to sell or buy. At the junction of these tables, a spread is formed - the difference in supply and demand prices. The lower the spread, the more liquid the cryptocurrency is. Order Book analysis is a leading indicator of market health because it allows you to predict changes before they happen.\n" +
            "Order books usually contain the same information, but their layout may vary depending on the platform itself. Order books are useful for traders because they help gauge buyer and seller interest at certain price levels.\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Portfolio ",
          desc: "is a set of tokens and / or coins in the user's wallet available for trading on exchanges, receiving and sending. When creating their portfolio of digital assets, users can choose an unlimited number of tokens and coins. Simply put, it is a collection of different digital assets with which users can earn.\n",
          category: "Token",
          open: false
        },
        { name: "Roadmap ",
          desc: "is a business planning method that presents the short-term and long-term goals of a specific project with time intervals. The first point of the \"map\" is the moment of creating a company and announcing an idea. The roadmap displays both completed milestones and planned events. They can be - going public, listing a token, strategic partnerships with large companies. Thanks to the Roadmap, users and investors can see the goals and strategic vision of the project within a certain period of time, as well as assess the prospects. Internally, the Roadmap is used by the team as a blueprint for focusing attention and setting clear goals at a specific point in time. It also allows you to properly prioritize specific tasks while working on a project.\n" +
            "The time interval for Roadmap can be any - from six months to several years.\n",
          category: "Token",
          open: false
        },
        { name: "Smart Contract  ",
          desc: "is a computer program or software that monitors and enforces obligations. The parties prescribe in it the terms of the transaction and sanctions for their failure to comply.\n" +
            "Smart contracts can be used, for example, as digital agreements that mediate the exchange of cryptocurrencies (or any other digital asset) between two parties. After the terms of the agreement are established, the smart contract verifies their fulfillment, and assets are distributed in accordance with them. In other words, smart contracts are basically lines of code that perform a specific function after certain conditions are met. The code usually follows \"if ... then ...\" statements that trigger predefined actions. Smart contracts play an important role in the blockchain space and cryptocurrency markets, especially in relation to ERC-20 tokens, which are a class of tokens created on the Ethereum network and conforming to the ERC-20 standard. These tokens are often distributed through Initial Coin Offering (ICO) events, and the use of smart contracts enables a reliable and cost-effective exchange of funds during sales. Their use can also facilitate payment processing for Decentralized Applications (DApps) or Decentralized Exchanges (DEX).\n",
          category: "Token",
          open: false
        },
        { name: "Stablecoin  ",
          desc: "is a cryptocurrency that has a fixed value, not subject to leaps and bounds like the price of tokens on other networks. This means that stablecoins can act as a unit of account that allows you to buy and sell goods and services, as well as serve as a store of capital. By being pegged to real assets, these coins avoid sharp price fluctuations caused by the high levels of volatility that are very common in cryptocurrency markets. In addition, they provide faster transactions and lower fees compared to traditional fiat currencies, making them very useful for day-to-day payments and international transfers.\n" +
            "Examples of stablecoins are USD Tether (USDT), True USD (TUSD), Paxos Standard (PAX), USD Coin (USDC), and Binance USD (BUSD).\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Staking Pool  ",
          desc: "is a group of coin holders who pool their resources in order to increase the chances of checking blocks and receiving rewards. They pool their computing resources to increase their chances of being rewarded. Participants in the betting pool share the reward in proportion to their contribution to the pool. The general idea of ​​the stake pool model is very similar to the traditional mining pool, which involves combining a hashrate into a Proof of Work (PoW) blockchain. However, stake pool customization is only available on blockchains that use the Proof of Stake (PoS) model, or, in non-POS systems, through protocol design features. In other words, the Staking Pool is a complete analogue of the Mining Pool, only it accumulates not the hashrate of the equipment, but the cryptocurrency on its account. This feature implies the most important drawback of such mining itself - it is the need to trust your cryptocurrency to third-party services, which in this case should be as reliable as possible. This was not particularly required from the classic POW pools, since there was no need to store cryptocurrency in such pools, and it was withdrawn to wallets or exchanges with minimum values ​​for withdrawal.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Token  ",
          desc: "is a unit of value created by a private entity on the blockchain system. In other words, a token is an analogue of shares on the stock exchange. Physically, they exist as ledger entries distributed across the blockchain.\n" +
            "Tokens are used as digital assets for long-term and short-term investments, for trading on centralized and decentralized exchanges for profit, for making purchases in online stores and applications, for participating in voting.\n" +
            "Examples of tokens are TBCC, VOTE (Bep8), ETH.\n",
          category: "Token",
          open: false
        },
        { name: "Token Sale  ",
          desc: "is the issue of tokens in exchange for another cryptocurrency. Also referred to ICO (Initial Coin Offering). In simple words, Token Sale is cryptocurrency crowdfunding, or fundraising for the implementation of a new project. Thanks to the Token Sale, companies raise funds by selling to investors a fixed number of tokens (units of a new cryptocurrency) received by a one-time or accelerated issue. These tokens play the role of a kind of shares of the new platform for investors. With the successful implementation of a new project, the cost of tokens will increase several times.",
          category: "Token",
          open: false
        },
        { name: "Token swap  ",
          desc: "is a process in which one cryptocurrency is exchanged for another at a predetermined rate. Unlike selling one coin to buy another, when replacing tokens, the new coin replaces the old one, which means that this operation is mandatory, otherwise the owner will lose money.\n" +
            "Token migration, coin swap and coin migration are the same as token swap. A swap token is not a trade at a market price, it is a complete replacement of one token with another that did not exist until that moment. The token swap is carried out either by the user himself or by the exchange on which this asset is stored.\n" +
            "Before the start of the swap - all transactions with this token are terminated.\n" +
            "There are 2 risks associated with a token swap - to skip the specified period, or to transfer your tokens to the wrong address. If you missed the swap period, the coin or token in your wallet will simply cease to exist, be traded on exchanges and will not be supported by any application. In case of transfer to an incorrectly specified address, you will also not be able to return your assets back.\n",
          category: "Token",
          open: false
        },
        { name: "Total Supply  ",
          desc: "is the total amount of a specific crypto-asset, consisting of existing and circulating coins or tokens, as well as reserved or blocked. This indicator is calculated as the total amount of coins or tokens that have already been mined (or issued) minus the total number of coins that have been burned or destroyed. Thus, the total supply includes both the circulating supply and coins or tokens that have not yet entered the open market. An example would be coins or tokens that are held in a lockdown or transfer stage that usually follows a private sale or initial coin offering (ICO).\n" +
            "Coins or tokens that eventually burn are excluded from the general supply. This means that when an exchange performs quarterly coin or token burns, the total BNB is reduced forever.\n",
          category: "Token",
          open: false
        },
        { name: "Trading terminal  ",
          desc: "is a special platform, program or script that displays information about the state of the market. With the help of the trading terminal, users and investors can track the graph of changes in the value of a token or coin, view trading volumes and track open orders. The information obtained allows us to predict the further movement of value and conclude profitable deals. Trading terminals allow you to carry out a comprehensive technical analysis of the cryptocurrency market. Thanks to the set of tools presented in the terminal, users can independently choose the tools they need and customize them, which allows them to create an individual algorithm for tracking the market.\n" +
            "Trading terminals allow you to track data on all cryptocurrencies existing on the market, presented on various exchanges, and can be synchronized with one or several exchanges for quick trading operations.\n" +
            "Examples of trading terminals are 3commas, Capico, Traderbox, Margin, Coinigy, TerminalCoin, TabTrader.\n",
          category: "Token",
          open: false
        },
        { name: "Volume  ",
          desc: "is the number of units sold in the market during a given time. This indicator is necessary to determine the level of asset liquidity. The time interval can vary and be calculated within a day, week, month. Each transaction involves a buyer and a seller (asset creator). When a purchase occurs, the transaction is registered in the system. This data is then used to calculate the trading volume.\n" +
            "Thanks to the indicator of the trading volume, users or investors can assess the prospect of an asset - whether its price will rise rapidly, will remain at the same level, or will decrease.\n",
          category: "Token",
          open: false
        },
        { name: "Wallet  ",
          desc: "is a crypto wallet that is used to send and receive cryptocurrencies (tokens, coins). It is used as a tool that allows users to interact with blockchain networks. Unlike traditional wallets that people use in their day to day life, cryptocurrency wallets don't actually store user funds. In fact, your coins or tokens are just part of the blockchain system as chunks of data, and wallets serve as a means of accessing them.\n" +
            "Examples of wallets are TBCC Wallet, Trust Wallet.\n",
          category: "Token",
          open: false
        },
        { name: "WalletConnect  ",
          desc: "is an open source protocol for connecting decentralized applications (DApps) to mobile wallets by scanning a QR code or by clicking on deep links. Users can securely interact with any DApp (Decentralized Application) from their mobile phone, making WalletConnect wallets a safer choice over desktop wallets. A WalletConnect session is started by scanning a QR code (on the desktop) or by clicking on an app deep link (on a mobile device). The user can interact with any DApp without risking their private keys as they will be notified of the approval of all transaction requests directly from their mobile device. WalletConnect is used by over 20 mobile wallets such as Trust Wallet, MetaMask, Coinomi.\n",
          category: "Token",
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
        { name: "BEP-2",
          desc: "это технический стандарт для выпуска и реализации токенов в  Binance Chain . Этот стандарт определяет набор правил, которым должны соответствовать токены для функционирования в экосистеме Binance Chain. Сравнимый стандарт токенов для выпуска токенов в блокчейне Ethereum -  ERC-20. BEP-2 - это не программа, а набор технических характеристик. Эти правила гарантируют, что токены в экосистеме Binance Chain могут беспрепятственно взаимодействовать друг с другом. Токены BEP-2 могут представлять широкий спектр цифровых активов и торгуемых товаров. Стандарт гарантирует, что все они могут плавно интегрироваться друг с другом и с окружающей экосистемой. Токенами, созданными по стандарту ВЕР-2 можно торговать на децентрализованной бирже Binance DEX. Токены данного стандарта могут храниться в различных кошельках, например TBCC Wallet, Trust Wallet.",
          category: "Token",
          open: false
        },
        { name: "Bid price (Цена предложения)",
          desc: "- это самая высокая цена, которую конкретный покупатель готов заплатить за выбранный токен или коин. Книга торговых заказов состоит из нескольких цен покупки (со стороны покупателей) и цен продажи (со стороны продавцов). Наивысшая цена предложения всегда ниже, чем самая низкая цена предложения, и разница между ними называется спредом спроса и предложения. Трейдеры или инвесторы, которые хотят продать свои активы должны либо принять одну из цен предложения, доступных в книге заказов (в идеале, самую высокую), либо установить цену предложения и подождать, пока покупатель в конечном итоге не предложит цену против этой стоимости, заполнив заказ.",
          category: "Blockchain",
          open: false
        },
        { name: "Bid-Ask Spread (спред между спросом и предложением)",
          desc: "Эта концепция известна как спред между ценой покупки и продажи, потому что это разрыв между самой низкой ценой предложения (ордер на продажу) и самой высокой ценой предложения (ордер на покупку). В принципе, спрэд спроса и предложения может формироваться двумя разными способами. Во-первых, он может быть создан брокером (или торговым посредником) как способ монетизации своих услуг. Во-вторых, он может быть создан просто разницей между лимитными ордерами, выставленными трейдерами на открытом рынке. С криптовалютами большинство торговых операций происходит на криптовалютных биржах , где заказы на покупку и продажу напрямую размещаются пользователями (трейдерами) в книге заказов. В этом случае биржа монетизирует не спред, а только комиссию за торговлю. Обычно рынки с большим объемом имеют более низкий спред из-за их более высокой ликвидности (большая конкуренция между покупателями и продавцами). С другой стороны, рынки, которые недостаточно ликвидны и имеют низкий объем торгов, как правило, имеют более значительный спред.",
          category: "Blockchain",
          open: false
        },
        { name: "Binance Chain (цепочка Binance)",
          desc: "это блокчейн-проект, разработанный Binance и ее сообществом. Миссия - обеспечить создание блокчейна, который будет служить альтернативным маркетплейсом для выпуска токенов, использования и обмена цифровыми активами децентрализованным образом. Основной вариант использования Binance Chain - это Binance DEX, децентрализованная биржа (DEX), целью которой является передача лучших функций Binance в децентрализованную среду, а также все преимущества и безопасность.",
          category: "Blockchain",
          open: false
        },
        { name: "Умная цепь Binance",
          desc: "это инновационное проект, который спроектирован специально для параллельной работы с Binance Chain и поддерживает создание смарт-контрактов для токенов на блокчейне бренда Binance. Он также представляет совершенно новый механизм стейкинга для BNB, одной из лидирующих криптовалют в мире.\n" +
            "Благодаря механизму консенсуса Proof of Staked Authority (PoSA), Binance Smart Chain создает экосистему, в которой валидаторы, владельцы токенов, разработчики и все пользователи смогут извлекать выгоду из перспективного блокчейна, обладающего высокой производительностью и достаточным пространством для дальнейших инноваций. \n" +
            "Благодаря запуску Binance Smart Chain, DeFi-проекты и все блокчейн-сообщество смогут воспользоваться лучшими предложениями Binance Chain, а также – поддержкой смарт-контрактов, кроссчейн-совместимостью и другими преимуществами BSC.",
          category: "Blockchain",
          open: false
        },
        { name: "Биткоин",
          desc: "это цифровая форма денег, которая работает в распределенной сети компьютеров ( узлов ). Биткоин был концептуализирован человеком (или группой) под псевдонимом Сатоши Накамото. Идея заключалась в создании уникальной цифровой платежной системы, которая позволила бы совершать финансовые транзакции без границ без необходимости в посредниках, таких как банки или правительства. Распределенная архитектура, обеспечиваемая технологией блокчейн, наряду с методами шифрования, делает Биткоин очень устойчивым к атакам и мошенничеству. Биткоин также считается своего рода родоначальником криптовалюты.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Block explorer (Проводник блоков)",
          desc: "это инструмент, который предоставляет подробную аналитику сети блокчейнов с момента ее первого дня на этапе создания. Можно сказать, что обозреватель блоков действует как поисковая система и браузер, где пользователи могут найти информацию об отдельных блоках, общедоступных адресах и транзакциях, связанных с определенной криптовалютой. Некоторые обозреватели блоков также предоставляют статистику в реальном времени и рыночные диаграммы, а также данные о пулах для майнинга, ожидающих транзакциях, скорости хеширования сети, расширенном списке, валидаторах блоков, хард-форках и многом другом.\n" +
            "В зависимости от типа блокчейна, исследователи блоков также могут выступать в качестве центра общей информации. Например, поверх блокчейна Ethereum работают тысячи токенов ERC-20 , и пользователи могут найти данные о них, проверив свои  смарт-контракты в  Etherscan или другом обозревателе блоков Ethereum.\n" +
            "Исследователи блоков необходимы в процессе мониторинга текущего состояния криптовалютной сети. Когда дело доходит до Binance Chain, пользователи могут проверить текущий статус BNB на Binance Chain Проводнике, в том числе  монеты ожоговых операций и текущие  общие объем поставок.\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Block Reward (Награда за блок)",
          desc: "это криптовалюта, которую получает майнер, когда он успешно проверяет новый блок. Вознаграждение за блок состоит из двух компонентов: субсидии за блок и комиссии за транзакции. Субсидия блока состоит из вновь созданных монет и представляет собой большую часть вознаграждения за блок. Другая часть состоит из всех комиссий, уплачиваемых транзакциями, включенными в блок. Поскольку вознаграждение за блок почти полностью состоит из субсидии за блок, очень часто можно увидеть, как люди говорят о субсидии за блок, называя его вознаграждением за блок. Таким образом, в популярной терминологии термин «вознаграждение за блок» не учитывает комиссии.",
          category: "Blockchain",
          open: false
        },
        { name: "BNB",
          desc: "это криптовалюта (токен), созданная Binance еще в 2017 году. Изначально BNB был выпущен как токен ERC-20 (на платформе Ethereum), но вскоре будет переведен в основную цепочку Binance. Первоначальный общий запас BNB был определен как 200 000 000 монет, но из-за регулярных событий сжигания монет предложение постепенно уменьшается. BNB имеет несколько вариантов использования, но в экосистеме Binance Exchange он используется как служебный токен, который позволяет пользователям получать скидки при оплате своих торговых сборов. Помимо того, что они используются трейдерами для получения скидок на свои торговые сборы, BNB также могут использоваться для оплаты дорожных расходов (например, бронирования отелей и авиабилетов), для покупки виртуальных подарков, для покупок с использованием кредитной карты и многого другого.",
          category: "Token",
          open: false
        },
        { name: "Bounty",
          desc: "это вознаграждение, размещаемое группой или отдельным лицом для стимулирования определенной работы, поведения или развития. Например, реферальные программы можно рассматривать как своего рода вознаграждение.\n" +
            "В контексте криптовалюты программа вознаграждений - это маркетинговая стратегия, используемая стартапами во время их кампаний по первоначальному предложению монет (ICO). Это позволяет им выделять определенный процент от их коинов или токенов для продвижения своего проекта.",
          category: "Blockchain",
          open: false
        },
        { name: "Circulating supply (оборотое предложение)",
          desc: "данный термин относится к количеству криптовалютных коинов или токенов, которые общедоступны и обращаются на рынке. Оборотное предложение криптовалюты может со временем увеличиваться или уменьшаться. Например, оборот биткоинов будет постепенно увеличиваться, пока не будет достигнуто максимальное количество в 21 миллион монет. Такое постепенное увеличение связано с процессом майнинга, который генерирует новые монеты в среднем каждые 10 минут. В качестве альтернативы, события сжигания монет, подобные тем, которые выполняет Binance, вызывают уменьшение циркулирующего предложения, навсегда удаляя монеты с рынка. Оборот криптовалюты можно использовать для расчета ее рыночной капитализации, которая генерируется путем умножения текущей рыночной цены на количество монет в обращении. Таким образом, если определенная криптовалюта имеет в обращении 1 000 000 монет, которые торгуются по 5 долларов каждая, рыночная капитализация будет равна 5 000 000 долларов.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Coin (Монета)",
          desc: "это криптовалюта или цифровые деньги, не зависящие от какой-либо другой цепочки блоков или платформ. Ключевая особенность коинов - это валюта, и этот термин также может использоваться для описания актива криптовалюты, который не является токеном. В отличие от токенов криптовалюты, коины не предназначены для выполнения служебных функций, таких как представление голосов внутри сообщества или обозначение емкости хранилища в децентрализованном облачном хранилище. Вместо этого коин работает на собственном независимом блокчейне и действует как собственная валюта в определенной финансовой системе. Соответственно, коин в основном используется как средство обмена или средства сохранения стоимости в цифровой экономической сети. Большинство блокчейнов работают как децентрализованный распределенный реестр, который отслеживает и проверяет каждую транзакцию, а их собственные коины могут передаваться только между участниками этой конкретной сети.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Confirmation time (Время подтверждения)",
          desc: "определяется как время, прошедшее с момента отправки транзакции блокчейна в сеть до момента ее окончательной записи в подтвержденный блок. Другими словами, он представляет собой общее время, в течение которого пользователь должен ждать, пока его транзакция не будет собрана и подтверждена узлом майнера. В зависимости от типа блокчейна и сетевой архитектуры — это время можно уменьшить, предложив более высокую комиссию за транзакцию, поэтому у майнеров будет стимул уделять более высокий приоритет вашей транзакции. Время подтверждения можно использовать как метрику для измерения средней скорости сети блокчейн. Однако, поскольку фактическое время между отправкой и подтверждением может варьироваться в зависимости от индивидуальных факторов и колебаний спроса, более разумно рассчитывать эффективность и скорость блокчейна, используя усредненное время подтверждения в соответствии с его текущим состоянием и самым последним блоком.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Cryptocurrency (криптовалюта)",
          desc: "цифровая валюта, которая защищена криптографией и обычно используется в качестве средства обмена в рамках одноранговой (P2P) цифровой экономической системы. Использование криптографических методов гарантирует, что эти системы полностью защищены от мошенничества и подделки. Большинство систем криптовалюты работают через децентрализованную структуру, которая совместно поддерживается распределенной сетью компьютеров. Каждый компьютер (или устройство), присоединяющийся к сети, называется узлом. Проще говоря, узел - это любое физическое устройство, подключенное к сети и способное отправлять, получать и пересылать информацию. Каждый узел классифицируется в соответствии с функциями, которые он выполняет в системе. Системы криптовалюты считаются децентрализованными, потому что они не полагаются на централизованную точку управления. Сетевые узлы широко распространены по всему миру, а выпуск криптовалютных единиц и управление ими основаны на заранее запрограммированных алгоритмах и математических доказательствах.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Custody (хранение, опека)",
          desc: "хранение активов от имени клиента, как правило, какой-либо организацией. Хранители, как правило, отличаются от банков, поскольку они не могут использовать активы, которыми они владеют, в своих целях. За их проблемы учреждение обычно взимает плату за хранение активов. Это также может охватывать их продажу по желанию клиента. В криптовалюте кастодиальные решения - это те, в которых третья сторона хранит закрытые ключи к средствам пользователя. Они единственные, кто действительно может отправлять и получать монеты пользователя. Хотя владелец криптовалюты владеет ею с юридической точки зрения, он не имеет права собственности на уровне протокола. Практически все биржи используют кастодиальный подход, так как он позволяет им улучшить взаимодействие с пользователем.",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Децентрализованные приложения",
          desc: "это приложения, которые работают в распределенной вычислительной системе, то есть в сети блокчейн. DApps разработаны как проекты с открытым исходным кодом, которые работают поверх сети блокчейнов. \n" +
            "Хотя существуют различные способы определения DApp, они обычно описываются как приложения, которые имеют следующие характеристики:\n" +
            "\n" +
            "Open Source - исходный код намеренно сделан доступным для общественности, а это означает, что кто-нибудь может проверить, использовать, копировать и изменять код.\n" +
            "\n" +
            "Децентрализованный - поскольку DApps работают в сетях блокчейнов, они не контролируются каким-либо одним лицом или органом. Вместо этого они обслуживаются несколькими пользователями (или узлами).\n" +
            "\n" +
            "Криптографически безопасный - приложение защищено криптографией, что означает, что все данные записываются и хранятся в общедоступной цепочке блоков. Нет единой точки отказа. \n" +
            "Существует множество DApps с разными сценариями использования. Они могут включать игры, платформы социальных сетей, кошельки для криптовалюты и финансовые приложения (DeFi). \n" +
            "Децентрализованные приложения подпитывают свою деятельность через токенизированную систему (цифровые токены, созданные с помощью смарт-контрактов). Токены могут быть специфичными для конкретного DApp (например, токен Steem, используемый на Steemit), или они могут быть родными для блокчейна, на котором размещается DApp, как в случае CryptoKitties, использующего эфир (ETH).\n",
          category: "Blockchain",
          open: false
        },
        { name: "Децентрализованный автономный кооператив ",
          desc: "это организация, которая контролируется акционерами, а не руководящим составом.",
          category: "Blockchain",
          open: false
        },
        { name: "Децентрализованная автономная организация ",
          desc: "это система жестко запрограммированных правил, которые определяют, какие действия будет предпринимать децентрализованная организация. Однако термин DAO может также относиться конкретно к организации под названием «DAO», которая была концептуализирована на блокчейне Ethereum еще в 2016 году.\n" +
            "Проще говоря, DAO относится к определенному типу организации, которая, в отличие от обычных компаний, основана на открытом исходном коде и полностью управляется ее сообществом. Следовательно, базовая структура и рабочие механизмы DAO не основаны на каком-либо иерархическом управлении (которое довольно часто встречается в традиционных предприятиях).\n" +
            "\n" +
            "Другими словами, у DAO нет ни единого ответственного лица, ни какой-либо доски объявлений, и, как следует из названия, нет централизации власти. DAO проводятся в соответствии с закодированными компьютером правилами (смарт-контрактами) и регулируются коллективной работой его участников и членов сообщества. Записи финансовых транзакций ДАО и программные правила таких контрактов хранятся в цепочке блоков транзакций.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Децентрализованная биржа",
          desc: "это биржа, которая не требует от пользователей вносить средства для начала торговли и не удерживает средства для пользователя. Вместо этого пользователи торгуют напрямую со своих кошельков.",
          category: "Blockchain",
          open: false
        },
        { name: "Децентрализованные финансы ",
          desc: "означает «децентрализованное финансирование» и относится к экосистеме, состоящей из финансовых приложений, которые разрабатываются на основе систем блокчейн. DeFi можно определить, как движение, которое продвигает использование децентрализованных сетей и программного обеспечения с открытым исходным кодом для создания различных типов финансовых услуг и продуктов. Идея состоит в том, чтобы разрабатывать и управлять финансовыми DApps на основе прозрачной и ненадежной инфраструктуры, такой как блокчейны без прав доступа и другие протоколы одноранговой сети (P2P) .\n",
          category: "Blockchain",
          open: false
        },
        { name: "Delisting (Исключение из списка) ",
          desc: "это удаление актива с биржи. Это может произойти либо по запросу от команды проекта, либо в результате того, что команда актива или сам актив больше не соответствуют требованиям листинга, выставленным биржей. Существует множество факторов, которые могут повлиять на решение биржи о делистинге актива. Некоторые из этих факторов перечислены ниже:\n" +
            "\n" +
            "Общее отношение команды к проекту\n" +
            "Качество и уровень развития деятельности\n" +
            "Сеть проекта и /или стабильность смарт-контракта\n" +
            "Уровень публичной коммуникации от команды проекта\n" +
            "Отзывчивость на запросы о комплексной проверке от биржи\n" +
            "Доказательства неэтичного или мошеннического поведения\n" +
            "Способствует ли проект здоровой и устойчивой экосистеме блокчейна и криптовалюты\n" +
            "Другие причины, по которым биржа считает ведение бизнеса с проектом неприемлемым или рискованным.\n" +
            "Когда актив удаляется с биржи, все его торговые пары удаляются. Актив все еще может быть продан на других биржах (например, децентрализованных биржах) или посредством внебиржевой торговли (OTC), но торговая деятельность на бирже, которая исключила этот актив из списка, прекратится.\n",
          category: "Blockchain",
          open: false
        },
        { name: "ERC-20 ",
          desc: "это технический стандарт, используемый для выпуска и реализации токенов в блокчейне Ethereum. Стандарт описывает общий набор правил, которым необходимо следовать для правильной работы токена в экосистеме Ethereum. Другими словами, ERC-20 дает разработчикам список правил, которым нужно следовать, что обеспечивает бесперебойную работу в рамках более крупной платформы Ethereum. Следовательно, ERC-20 не следует рассматривать как часть кода или программного обеспечения. Вместо этого его можно описать как техническое руководство или спецификацию. Многочисленные децентрализованные приложения (DApps) и сервисы поддерживают токены ERC-20, что упрощает принятие и использование членами сообщества и предприятиями их в широком спектре приложений (таких как кошельки криптовалюты, децентрализованные биржи, игры и т.д.). Технически стандарт ERC-20 описывает шесть функций, которые поддерживают некоторые функции и особенности цифровых токенов на основе Ethereum. Эти функции включают способ передачи токенов между адресами и некоторые важные данные, относящиеся к смарт-контракту токенов, такие как символ, имя и поставка.",
          category: "Blockchain",
          open: false
        },
        { name: "ERC-721 ",
          desc: "ERC расшифровывается как Ethereum Request for Comments (Запрос на комментарий по Ethereum). Это не технология или платформа, это техническое руководство разработчикам для создания токенов.\n" +
            "Разработчики могут создать ERC, отправив предложение по улучшению Ethereum (EIP).\n" +
            "ERC-721 - Стандарт не взаимозаменяемых токенов, был создан Уильямом Энтрикеном, Дитером Ширли, Джейкобом Эвансом и Настассией Сакс из-за неспособности интерфейса ERC-20.\n" +
            "Популярное децентрализованное приложение Ethereum, Cryptokitties, использовало ERC-721 для создания уникальных цифровых предметов коллекционирования в виде котят.\n" +
            "Каждый котенок стоил на рынке разную сумму в зависимости от пользователей платформы. У каждого котенка разная цена, поэтому каждый токен должен быть уникальным. \n" +
            "\n" +
            "Создание невзаимозаменяемых токенов на основе блокчейна позволяет \n" +
            "\n" +
            "физическая собственность (дома, произведения искусства и автомобили)\n" +
            "Виртуальные предметы коллекционирования (криптокотята, редкие предметы, коллекционные карты)\n" +
            "Активы с отрицательной стоимостью (ссуды)\n" +
            "Чтобы создать токен ERC-721, контракт должен соответствовать интерфейсам ERC-721 и ERC-165. Токены ERC-721 отличаются от токенов ERC-20 в том смысле, что токены ERC-721 не взаимозаменяемы. Это означает, что каждый токен уникален и, как следствие, не является взаимозаменяемым.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Exchange (Биржа) ",
          desc: "это организованная торговая площадка, на которой торгуются финансовые инструменты, такие как криптовалюты, товары и ценные бумаги. Биржа может работать на реальном объекте или на цифровой платформе. Многие традиционные биржи, которые изначально были ограничены физической торговлей, теперь предоставляют оцифрованные услуги как способ включения электронной торговли (также известной как безбумажная торговля).\n" +
            "Существуют 2 типа бирж – централизованные и децентрализованные. В настоящее время большинство обменов криптовалютами основаны на централизованной системе, поддерживаемой частной компанией, которая выступает в качестве посредника и несет ответственность за проведение всех торгов и транзакций. Простота использования и ликвидность - главные преимущества централизованных бирж. Что касается недостатков, то эти централизованные системы подвержены простоям и кибератакам, что делает безопасность серьезной проблемой. Учитывая, что пользователи должны доверять свои активы компании, чтобы иметь возможность торговать, важно выбрать биржу, которая доказала свою надежность и безопасность. \n" +
            "В отличие от этого, децентрализованные биржи криптовалют (также известные как DEX) были созданы в качестве альтернативы централизованным биржам. Платформы DEX устраняют необходимость в посредниках и выполняют сделки и транзакции в автоматизированной среде без доверия (на основе смарт-контрактов). Несмотря на то, что эти торговые платформы менее подвержены кибератакам и простоям инфраструктуры, децентрализованные биржи не могут предоставлять услуги фиатной валюты, такие как фиатная / криптовалютная торговля или снятие / депозит фиатной валюты.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Gas (газ) ",
          desc: "термин газ относится к механизму ценообразования, используемому в сети Ethereum. Такой механизм рассчитывает затраты (комиссии) за выполнение транзакции или выполнение операции смарт-контракта. В то время как эфир (ETH) - это валюта, которая питает сеть Ethereum, газ - это специальная единица измерения, которая используется для измерения того, сколько «работы» (вычислительных ресурсов) требуется для выполнения определенной задачи. Естественно, что сложные задачи будут иметь более высокую стоимость газа, чем другие операции, требующие меньше вычислительных ресурсов.\n" +
            "Следует отметить, что комиссии по-прежнему выплачиваются в эфире (ETH), но газ и ETH - это разные вещи. Проще говоря, вычислительные задачи измеряются «стоимостью газа». С другой стороны, каждая единица газа имеет «цену на газ», которая определяется в эфире (ETH). Таким образом, каждая транзакция имеет определенную «цену на газ» за каждую единицу газа. \n" +
            "Другими словами, стоимость газа - это объем работы, а цена на газ - это цена, уплачиваемая за «каждый час» работы. Связь между этими двумя параметрами, наряду с лимитом газа, определяет общую плату за операцию или транзакцию.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Halving (уменьшение вдвое) ",
          desc: "процесс, который снижает скорость выпуска новых монет. Точнее, сокращение вдвое - это периодическое сокращение субсидии на блок, предоставляемой майнерам. Уменьшение вдвое гарантирует, что криптоактив будет выпускаться с постоянной скоростью до тех пор, пока в конечном итоге не будет достигнуто максимальное предложение.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Initial Coin Offering (ICO) (первичное предложение монет, первичное размещение монет) ",
          desc: "представляют собой форму привлечения инвестиций в виде продажи инвесторам фиксированного количества новых единиц криптовалют, полученных разовой или ускоренной эмиссией. Встречается также название «первичного предложения токенов». Термин ICO не редко заменяется словом «краудсейл». ICO характерен для криптовалютных начинающих проектов, которые еще не полностью разработали, или находятся на ранних стадиях разработки своего продукта, сервиса или платформы на основе блокчейна и нуждаются в средствах для продвижения или реализации проекта.\n" +
            "Во время ICO инвесторы не покупают какую-либо долю владения в компании, в отличии от IPO (первичное публичное размещение).\n" +
            "Наиболее популярные примеры ICO -  Ethereum, Stellar, NEM, NEO, Komodo и Waves.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Mainnet Swap (обмен в основной сети) ",
          desc: "своп в основной сети состоит из переключения с одной сети блокчейнов на другую. В большинстве случаев обмен происходит, когда проект криптовалюты мигрирует со сторонней платформы (например, Ethereum) в свою собственную сеть цепочек блоков. На этом этапе их токены постепенно заменяются вновь выпущенными, и вся деятельность блокчейна перемещается в новую цепочку.\n" +
            "Рассмотрим Mainnet swap на примере BNB. После запуска Binance Chain, пользователи получили возможность мигрировать из Эфириум блокчейн в цепи Binance. Держатели токенов ERC-20 BNB начали заменять свои токены на недавно выпущенную монету BEP2 BNB (родная монета Binance Chain). Своп в основной сети соответствовал соотношению 1:1, так что 1 ERC-20 BNB имел то же значение, что и 1 BEP2 BNB. После свопа все оставшиеся токены ERC-20 BNB были сожжены, поэтому теперь можно использовать только BNB новой цепочки.\n" +
            "Следовательно, обмен в основной сети происходит, когда проект блокчейна заменяет ранее выпущенные токены своей новой криптовалютой, которая обычно работает в их собственной сети блокчейнов. Этот процесс также можно назвать «миграцией токена». Следует отметить, что Mainnet swap не всегда связана исключительно с запуском нового блокчейна. Это также может происходить, когда проекты просто переходят от одного протокола к другому. Например, Storj выполнил обмен в основной сети, перенеся свои токены из протокола на основе биткойнов в сеть Ethereum, чтобы избежать проблем с масштабируемостью.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Market Capitalization (рыночная капитализация) ",
          desc: "в индустрии блокчейнов термин рыночная капитализация (или сокращенно market cap) относится к метрике, которая измеряет относительный размер криптовалюты. Он рассчитывается по следующей формуле:\n" +
            "Рыночная капитализация = Текущая цена x Оборотное предложение\n" +
            "\n" +
            "Например, если каждая единица криптовалюты торгуется по 10,00 долларов, а оборотное предложение равно 50 000 000 коинов, то рыночная капитализация этой криптовалюты будет 500 000 000 долларов.\n" +
            "Хотя рыночная капитализация может дать некоторое представление о размере и производительности компании или криптовалютного проекта, важно отметить, что это не то же самое, что приток денег. Таким образом, это не показывает, сколько денег находится на рынке.\n",
          category: "Blockchain",
          open: false
        },
        { name: "Order Book (книга заказов)) ",
          desc: "это список текущих открытых заказов на покупку и продажу актива, упорядоченный по цене. Order Book обычно представлен в виде таблице, где заявки ближайших продавцов и покупателей отмечены красным цветом, а зеленым — покупателей. Графы таблицы показывают количество криптовалют и стоимость, за которую их намереваются продать или купить. На стыке этих таблиц формируется спред — разница в цене спроса и предложения. Чем ниже спред, тем ликвиднее криптовалюта. Анализ Order Book является опережающим индикатором состояния рынка, поскольку позволяет прогнозировать изменения до того, как они свершились.\n" +
            "Книги заказов обычно содержат одну и ту же информацию, но их макет может различаться в зависимости от самой платформы. Книги заказов полезны для трейдеров, потому что они помогают оценить интерес покупателя и продавца на определенных уровнях цен.\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Portfolio (портфель, папка) ",
          desc: "это набор токенов и/или коинов в кошельке пользователя, доступных для торговли на биржах, получения и отправки. При создании своего портфеля диджитал активов, пользователи могут выбрать неограниченное количество токенов и коинов. Проще говоря, это набор различных цифровых активов, с помощью которых пользователи могут зарабатывать.",
          category: "Token",
          open: false
        },
        { name: "Roadmap (дорожная карта) ",
          desc: "это метод бизнес-планирования, в котором представлены краткосрочные и долгосрочные цели определенного проекта с указанием временных интервалов. Первой точкой «карты» считается момент создании компании и анонса идеи. Roadmap отображает как пройденные этапы, так и запланированные события. Ими могут быть – выход на биржу, листинг токена, стратегические партнерства с крупными компаниями. Благодаря Roadmap пользователи и инвесторы могут увидеть цели и стратегическое видение проекта в рамках определенного промежутка времени, а также оценить перспективы. На внутреннем уровне, Roadmap используется командой как план для концентрации внимания и определения четких целей в конкретный момент времени. Это также позволяет правильно расставить приоритеты для конкретных задач во время работы над проектом.\n" +
            "Временной интервал для Roadmap может быть любой – от полугода до нескольких лет. \n",
          category: "Token",
          open: false
        },
        { name: "Smart Contract (умный контракт)  ",
          desc: "это компьютерная программа или программное обеспечение, которое отслеживает и обеспечивает исполнение обязательств. Стороны прописывают в нем условия сделки и санкции за их невыполнение.\n" +
            "Смарт-контракты могут использоваться, например, в качестве цифровых соглашений, которые служат посредником при обмене криптовалютами (или любыми другими цифровыми активами) между двумя сторонами. После того, как условия соглашения установлены, смарт-контракт проверяет их выполнение, и активы распределяются в соответствии с ними.\n" +
            "Другими словами, смарт-контракты - это в основном строки кода, которые выполняют определенную функцию после выполнения определенных условий. Код обычно следует за операторами «если ... то ...», которые запускают заранее определенные действия. \n" +
            "Смарт-контракты играют важную роль в пространстве блокчейнов и криптовалютных рынках, особенно в отношении токенов ERC-20, которые представляют собой класс токенов, созданных в сети Ethereum и соответствующих стандарту ERC-20. Эти токены часто распределяются посредством мероприятий по первичному размещению монет (ICO), а использование смарт-контрактов обеспечивает надежный и экономичный обмен средств во время продаж. Их использование также может облегчить обработку платежей для децентрализованных приложений (DApps) или децентрализованных бирж (DEX).\n",
          category: "Token",
          open: false
        },
        { name: "Stablecoin (стабильная монета)  ",
          desc: "это криптовалюта, имеющая фиксированную стоимость, не подверженную скачкообразным изменениям подобно цене токенов других сетей. Это значит, что стейблкоины могут выступать в роли расчетной единицы, позволяющей покупать и продавать товары и услуги, а также служить средством сбережения капитала. Будучи привязанными к реальным активам, эти монеты избегают резких колебаний цен, вызванных высоким уровнем волатильности, очень распространенным на рынках криптовалют. Кроме того, по сравнению с традиционными фиатными валютами они обеспечивают более быстрые транзакции и более низкие комиссии, что делает их весьма полезными для повседневных платежей и международных переводов.\n" +
            "Примерами стейблкоинов являются USD Tether (USDT), True USD (TUSD), Paxos Standard (PAX), USD Coin (USDC) и Binance USD (BUSD).\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Staking Pool (пул ставок) ",
          desc: "представляет собой группу держателей коинов, которые объединяют свои ресурсы для того, чтобы увеличить шансы для проверки блоков и получения награды. Они объединяют свои вычислительные ресурсы, чтобы увеличить шансы на вознаграждение. Участники пула ставок делятся наградой пропорционально своему вкладу в пул.\n" +
            "Общая идея модели пула ставок очень похожа на традиционный пул майнинга, который включает объединение хешрейт в блокчейн Proof of Work (PoW, или подтверждение выполненной работы). Однако настройка пула ставок доступна только в блокчейнах, которые используют модель Proof of Stake (PoS, или доказательство доли владения), или, в системах, не относящихся к POS, через особенности конструкции протокола.\n" +
            "\n" +
            "Другими словами, Staking Pool это полный аналог Mining Pool, только аккумулирует он не хешрейт оборудования, а криптовалюту на своем счету. Из этой особенности вытекает собственно самый важный недостаток такого майнинга - это необходимость доверять свою криптовалюту сторонним сервисам, которые в таком случае должны быть максимально надежны. Чего от классических PоW пулов особо и не требовалось, так как криптовалюту на таких пулах хранить не было необходимости, и она выводилась на кошельки или биржи при минимальных значениях для вывода.\n",
          category: "Cryptocurrency",
          open: false
        },
        { name: "Token (знак, символ, жетон) ",
          desc: "это единица стоимости, созданная частной организацией в системе блокчейн. Иными словами, токен – это аналог акций на фондовой бирже. Физически они существуют как записи в реестре, распределённые в блокчейн-цепочке.\n" +
            "Токены используются как цифровые активы для долгосрочных и краткосрочных инвестиций, для торговли на централизованных и децентрализованных биржах с целью получения прибыли, для совершения покупок в онлайн магазинах и приложениях, для участия в голосования.\n" +
            "Примеры токенов – TBCC, VOTE (Bep8), ETH.\n",
          category: "Token",
          open: false
        },
        { name: "Token Sale (продажа токенов) ",
          desc: "выпуск токенов в обмен на другую криптовалюту. Также именуется как ICO (Initial Coin Offering, первичное размещение монет).\n" +
            "Простыми словами Token Sale – это криптовалютный краудфандинг, или сбор денежных средств для реализации какого-либо нового проекта.\n" +
            "Благодаря Token Sale компании привлекают средства путем продажи инвесторам фиксированного количества токенов (единиц новой криптовалюты), полученных разовой или ускоренной эмиссией. Эти токены для инвесторов играют роль своеобразных акций новой платформы. При успешной реализации нового проекта стоимость токенов увеличится в несколько раз.\n",
          category: "Token",
          open: false
        },
        { name: "Token swap (обмен токенами) ",
          desc: "это процесс, в ходе которого одна криптовалюта обменивается на другую по заранее определенной ставке. В отличие от продажи одной монеты для покупки другой, при замене токенов новая монета замещает старую, а значит, эта операция обязательна, в противном случае владелец потеряет деньги.\n" +
            "Миграция токенов (token migration), замена монет (coin swap) и миграция монет (coin migration) — то же самое, что своп токенов (token swap). Токен своп — это не сделка по рыночной цене, это полная замена одного токена другим, которого до этого момента не существовало. Своп токена проводит либо сам пользователь, либо биржа, на которой хранится данный актив.\n" +
            "Перед началом свопа – все сделки с данным токеном прекращаются. \n" +
            "Существует 2 риска связанных со свопом токенов – пропустить указанный срок, либо перевести свои токены на неправильный адрес. Если вы пропустили период для свопа – коин или токен, находящийся в вашем кошельке просто перестанет существовать, торговаться на биржах и не будет поддерживаться ни одним приложением. В случае перевода на неправильно указанный адрес – вы также не сможете вернуть назад ваши активы. \n",
          category: "Token",
          open: false
        },
        { name: "Total Supply (общее предложение) ",
          desc: "это общее количество определенного криптоактива, состоящее из существующих и находящихся в обращении коинов или токенов, а также зарезервированных или заблокированных. Данный показатель считается как общая сумма коинов или токенов, которые уже были добыты (или выпущены) за вычетом общего количества монет, которые были сожжены или уничтожены.\n" +
            "Таким образом, общее предложение включает в себя как оборотное предложение, так и коины или токены, которые еще не вышли на открытый рынок. Примером могут служить коины или токены, которые хранятся в блокировке или на стадии передачи прав, который обычно следует за частной продажей или первичным предложением монет (ICO).\n" +
            "Коины или токены, которые в конечном итоге сгорят, исключаются из общего предложения. Это означает, что когда биржа выполняет ежеквартальные сжигания коинов или токенов, общее количество BNB сокращается навсегда.\n",
          category: "Token",
          open: false
        },
        { name: "Trading terminal (торговый терминал) ",
          desc: "это специальная платформа, программа или скрипт, выводящая на экран информацию о состоянии рынка. С помощью торгового терминала пользователи и инвесторы могут отслеживать график изменения стоимости токена или коина, просматривать объемы торгов и отслеживать открытые ордеры. Полученная информация позволяет прогнозировать дальнейшее движение стоимости и заключать выгодные сделки.\n" +
            "Торговые терминалы позволяют проводить комплексный технический анализ криптовалютного рынка. Благодаря набору инструментов, представленному в терминале, пользователи самостоятельно могут выбирать нужные им инструменты и настраивать их, что позволяет создать индивидуальный алгоритм отслеживания рынка.\n" +
            "Торговые терминалы позволяют отслеживать данные по всем существующим на рынке криптовалютам, представленных на различных биржах, и могут быть синхронизированы с одной или несколькими биржами для проведения быстрых торговых операций.\n" +
            "Примеры торговых терминалов - 3commas, Capico, Traderbox, Margin, Coinigy, TerminalCoin, TabTrader.\n",
          category: "Token",
          open: false
        },
        { name: "Volume (объем) ",
          desc: "это количество единиц, проданных на рынке в течение определенного времени. Этот показатель необходим для определения уровня ликвидности актива. Временной интервал может варьироваться и быть расчитан в рамках суток, недели, месяца. В каждой сделке участвуют покупатель и продавец (создатель актива). Когда происходит покупка – сделка регистрируется в системе. Эти данные затем используются для расчета объема торгов.\n" +
            "Благодаря показателю объема торгов, пользователи или инвесторы могут оценить перспективу актива – будет ли его цена расти быстро, останется на прежнем уровне, или будет уменьшаться.\n",
          category: "Token",
          open: false
        },
        { name: "Wallet (кошелек) ",
          desc: "это крипто-кошелек, который используется для отправки и получения криптовалют (токенов, коинов). Он используется как инструмент, который позволяет пользователям взаимодействовать с сетями блокчейнов. В отличие от традиционных кошельков, которые люди используют в повседневной жизни, кошельки с криптовалютой на самом деле не хранят средства пользователей. Фактически, ваши коины или токены являются просто частью системы блокчейн как фрагменты данных, а кошельки служат средством доступа к ним.\n" +
            "Примеры кошельков – TBCC Wallet, Trust Wallet.\n",
          category: "Token",
          open: false
        },
        { name: "WalletConnect (подключение к кошельку) ",
          desc: "это протокол с открытым исходным кодом для подключения децентрализованных приложений (DApp) к мобильным кошелькам с помощью сканирования QR-кода или за счет клика на глубокие ссылки. Пользователи могут безопасно взаимодействовать с любым DApp (децентрализованным приложениям) со своего мобильного телефона, что делает кошельки WalletConnect более безопасным выбором по сравнению с кошельками для настольных компьютеров. Сеанс WalletConnect запускается сканированием QR-кода (на рабочем столе) или щелчком по глубокой ссылке приложения (на мобильном устройстве). Пользователь может взаимодействовать с любым DApp без риска для своих закрытых ключей, поскольку будет уведомлен об утверждении всех запросов транзакций непосредственно с его мобильного устройства.\n" +
            "WalletConnect используется более чем 20 мобильными кошельками такими как Trust Wallet, MetaMask, Coinomi.\n",
          category: "Token",
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
  },

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
        svg {
          transition: all 0.5s ease;
        }
        &.open {
          svg {
            transform: rotate(-180deg);
          }
        }
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
