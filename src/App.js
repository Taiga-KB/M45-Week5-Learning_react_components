import './App.css';

import bob from "./images/bob.jpg";

import fate from "./images/netflixFate.png";
import gambit from "./images/netflixGambit.png";
import outside from "./images/netflixOutside.png";
import starTrek from "./images/netflixStarTrek.png";
import witcher from "./images/netflixWitcher.png";

import cabin from "./images/airbnbCabin.png";
import home from "./images/airbnbHome.png";
import pets from "./images/airbnbPets.png";
import unique from "./images/airbnbUnique.png";

import morgan from "./images/bbcMorgan.png";
import pandemic from "./images/bbcPandemic.png";
import pay from "./images/bbcPay.png";
import unilever from "./images/bbcUnilever.png";


function App() {
  return (
    <div className="App">
      <div className="Frix">
        <h1>NETFLIX</h1>
        <Netflix image={fate} />
        <Netflix image={gambit} />
        <Netflix image={outside} />
        <Netflix image={starTrek} />
        <Netflix image={witcher} />
      </div>

      <h1>Hello World</h1>

    <div className="BNB">
      <Airbnb place="Cabins and cottages" image={cabin}/>
      <Airbnb place="Entire homes" image={home}/>
      <Airbnb place="Checkout this dog" image={pets}/>
      <Airbnb place="Unique stays" image={unique}/>
    </div>

    <div className="BBC">
      <BbcPics image={morgan} news="Morgan being dramatic about something" content="Angry old man is now angry at royals. Look into this exclusive interview that is a total waste of time" />
      <BbcPics image={pandemic} news="People not very clean" content="Blah blah blah something about washing hands and masks" />
      <BbcPics image={pay} news="Does vaccinations conspiracy? More at 10" content="Oh no, some with weak grip on reality succumb to fear. Some guy makes a documentary about it" /> 
      <BbcPics image={unilever} news="Woman, 36, can't get enough moisturizer" content="Woman from leeds, in effort to become the world's softest human being, buys a heck-ton of Dove and Nivea which practically bankrupts her"/>
    </div>

      <h2>I am a root component</h2>
      <Person name="Dan" age="34" title="Chef" />
      <Person name="Stuart" age="36" title="Lawyer"/>
      <Person name="Ben" age="28" title="Developer" image={bob} />

    </div>
  );
}

const Person = (props) => {
  return (
    <div>
      <h3>I am a functional child component</h3>
      <img src={props.image} alt=""></img>
      <p>I am an addition and sibling to the above because we have the same parent</p>
      <p>My name is {props.name} and my age is {props.age}</p>
      <Job jobtitle={props.title} />
    </div>
  )
}

const Job = (props) => {
  return (
    <p>I am a {props.jobtitle}</p>
  )
}

const Netflix = (props) => {
  return (
    <img src={props.image} alt="Netflix"></img>
  )
}

const Airbnb = (props) => {
  return (
    <div>
    <img src={props.image} alt="airbnb"></img>
    <h3>{props.place}</h3>
    </div>
  )
}

const BbcPics = (props) => {
  return (
    <div>
      <img src={props.image} alt="bbcnews"></img>
      <h4>{props.news}</h4>
      <p className="news">{props.content}</p>
    </div>
  )
}

export default App;
