import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavigationBar from '../navigation_bar/navigation_bar.jsx';
import Footer from '../footer/footer.jsx';
import Loading from '../loading/loading.jsx';

class StoryShow extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        story: this.props.story
      };
      this.convertDateTime = this.convertDateTime.bind(this);
  }

  componentDidMount(){
    if (this.props.location.state) {
      localStorage.story = JSON.stringify(this.props.story);
      // this.props.fetchStory(this.props.story);
    }
  }

  convertDateTime(){
    let date = this.state.story.publishedAt.split(/-|T|Z|:|\./);
    let month = date[1];
    let day = date[2];
    let year = date[0].slice(2);
    let hours = date[3];
    let minutes = date[4];

    let hourConversion = hours%12;
    let time;
    if(hourConversion === 0){
      time = `${12}:${minutes} am`;
    } else if (hourConversion === 12) {
      time = `${12}:${minutes} pm`;
    } else if (hours > 12) {
      if (hourConversion < 10) {
        time = `0${hourConversion}:${minutes} pm`;
      } else {
        time = `${hourConversion}:${minutes} pm`;
      }
    } else {
      time = `${hours}:${minutes} am`;
    }

    return ({date: `${month}.${day}.${year}`, time: time});
  }

  render(){
    debugger
    let dateTime = this.convertDateTime();
    return (
      <div>
        <NavigationBar
          header={this.props.location.pathname === "/" ? "" : this.state.story.title}
          />
        <div className="story-show-background">
          <div className="story-show">
            <div className="horizontal">
              <div className="story-show-share">
              </div>
              <div className="story-show-article">
                <div className="story-show-article-author horizontal">
                  <h2><u>{this.state.story.author}</u></h2>&nbsp;
                  <h2>{this.state.story.source.name}</h2>&nbsp;
                  <h2>{dateTime.date}</h2>&nbsp;
                  <h2>{dateTime.time}</h2>
                </div>
                <div className="story-show-article-title">
                  <h3><a href={this.state.story.url}>{this.state.story.title}</a></h3>
                </div>
                <div className="story-show-article-description">
                  <p>{this.state.story.description}</p>
                </div>
                {
                  this.state.story.urlToImage &&
                  <div className="story-show-article-img">
                    <img src={this.state.story.urlToImage}></img>
                  </div>
                }
                <div className="story-show-article-text">
                  <div>
                    <p>
                      <span>Alohamora wand elf</span> parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
                    </p>
                    <p>
                      Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.
                    </p>
                    <p>
                      Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.
                    </p>
                    <p>
                      Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!
                    </p>
                    <p>
                      Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.
                    </p>
                  </div>
                </div>
              </div>
              <div className="story-show-popular">
              </div>
            </div>
          </div>
          <Footer
            pathname={this.props.location.pathname}
            />
        </div>
      </div>
    );
  }
}

export default withRouter(StoryShow);

















// comment
