<a id="readme-top"></a>

[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  ![logo](https://github.com/user-attachments/assets/204f648b-f3f7-49c2-ab93-51cb537d14d4)
  <h3 align="center">Soldiary</h3>

  <p align="center">
    If you haven't written your diary today, write it now on Soldiary and keep it secret and permanent
    <br />
    <a href="/"><strong>View Live Site Demo</strong></a>
    ·
    <a href="/"><strong>View Video Demonstration</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
Powered by Solana..We developed the Program with Anchor on [beta.solpg.io](https://beta.solpg.io/) and deployed it to the Solana Blockchain. Then we used [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/) for Connection and [@project-serum/anchor](https://www.npmjs.com/package/@project-serum/anchor) to interact with the program. (later we will use [ZK Compression](https://www.zkcompression.com/))
<br />
<br />
![diaries](https://github.com/user-attachments/assets/d9b26f68-ec0f-4682-8a13-14cab9131ae4)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Vue][Vue.js]][Vue-url]
- [![Anchor][Anchor]][Anchor]
- Solana web3 packages

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started
Soldiary is a Solana dApp. Anyone can connect with their web3 wallet, sign up and start to write a diary. It is easy to use, highly secure , fast and cheap.

This project was developed within the scope of Superteam Turkey Hacksolana and Solana Global Radar Hackathon. The project was created with love and attention to security, efficiency and user experience.

### Installation

1. Get a Pinata API Key at [https://pinata.cloud/](https://pinata.cloud/)

2. Clone the repo
   ```sh
   git clone https://github.com/Sait-C/soldiary.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create ".env", ".env.devnet" and ".env.mainnet" files inside of "frontend" and enter your API keys
   ```js
   VUE_APP_NODE_ENV=development
   VUE_APP_BASE_URL=/
   VUE_APP_CLUSTER_URL=https://api.devnet.solana.com (WARNING: change it to mainnet rpc url for .env.mainnet!!!!!!!!!!!!!!!)
   VUE_APP_PINATA_JWT='ENTER YOUR PINATA JWT'
   VUE_APP_PINATA_GATEWAY='ENTER YOUR PINATA GATEWAY'
   VUE_APP_DEFAULT_DIARY_IMAGE_URL=''
   VUE_APP_PROGRAM_ID=''
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

SOLDIARY - [@soldiaryy](https://twitter.com/soldiaryy) - soldiary@hotmail.com

Project Link: [https://github.com/Sait-C/soldiary](https://github.com/Sait-C/soldiary)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Anchor]:  https://img.shields.io/badge/ANCHOR%20-%20blue
