import React from "react";

const myWorks = [
  {
    id: 1,
    title: "Personal Trainer Site",
    class: "__trainer",
    link: "https://matthave.github.io/PersonalTrainer/",
  },
  {
    id: 2,
    title: "KyoKushin Site",
    class: "__kyokushin",
    link: "https://matthave.github.io/Kyokushin/",
  },
  {
    id: 3,
    title: "Christmas Draw",
    class: "__christmas",
    link: "http://www.christmasdraw.pl/",
  },
  {
    id: 4,
    title: "My CvOnline vol.1",
    class: "__cvVol1",
    link: "https://matthave.github.io/cvOnline/",
  },
  {
    id: 5,
    title: "My CvOnline vol.2",
    class: "__cvVol2",
    link: "https://matthave.github.io/lookAtThisAwesomeCv/",
  },
  {
    id: 6,
    title: "To Do App - React",
    class: "__toDoApp",
    link: "https://matthave.github.io/toDoAppReact/",
  },
  {
    id: 7,
    title: "Header - Slider",
    class: "__headerSlider",
    link: "https://matthave.github.io/slider/",
  },
  {
    id: 8,
    title: "Covid-19",
    class: "__covid",
    link: "https://matthave.github.io/covid19/",
  },
  {
    id: 9,
    title: "URL Shorten",
    class: "__url",
    link: "https://url-shortening-api-ten.now.sh/",
  },
  {
    id: 10,
    title: "GAME",
    class: "__game",
    link: "https://paper-rock-scissors-lizard-spock-game.now.sh/",
  },
  {
    id: 11,
    title: "TIMER",
    class: "__timer",
    link: "https://matthave.github.io/Timer/",
  },
];

class Portfolio extends React.Component {
  state = {
    showPortfolio: false,
    hexOnPosition: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showPortfolio: true,
      });
    }, 20);

    setTimeout(() => {
      this.setState({
        hexOnPosition: true,
      });
    }, 100);
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render() {
    const { showPortfolio, hexOnPosition } = this.state;

    let hexClasses = [""];
    if (hexOnPosition) hexClasses = "work--onPosition";

    const works = myWorks.map((work) => (
      <a
        href={work.link}
        key={work.id}
        target="_blank"
        rel="noopener noreferrer"
        className={`work work${work.class} ${hexClasses}`}
      >
        <div className="cover">
          <h2 className="work__text">{work.title}</h2>
        </div>
      </a>
    ));

    return (
      <section
        className={showPortfolio ? "portfolio portfolio--showIt" : "portfolio"}
      >
        <div className="bars__itemPortfolio">
          <div className="bars__textPortfolio">
            Portfolio - Portfolio - Portfolio - Portfolio - Portfolio -
            Portfolio - Portfolio - Portfolio - Portfolio -
          </div>
        </div>
        <section className="worksContainer">{works}</section>
        <div className="bars__itemPortfolio">
          <div className="bars__textPortfolio">
            Portfolio - Portfolio - Portfolio - Portfolio - Portfolio -
            Portfolio - Portfolio - Portfolio - Portfolio -
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
