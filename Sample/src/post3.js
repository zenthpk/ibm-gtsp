import React from 'react';
import Comment from './comment.js';

class Post3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', message: '', comments: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (localStorage.getItem("comments3") != null && localStorage.getItem("comments3").length > 0) {
       this.state = {comments : JSON.parse(localStorage.getItem("comments3"))};
    }
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name != '' && this.state.message != '') {
      let comment = {name: this.state.name, message: this.state.message};
      this.setState({comments: this.state.comments.concat(comment)});
      localStorage.setItem("comments3", JSON.stringify(this.state.comments.concat(comment)));
      this.setState({name: '', message: ''});
    } else if (this.state.name == '' && this.state.message != '') {
      alert("Missing 'name' field, cannot post comment. :(")
    } else if (this.state.name != '' && this.state.message == '') {
      alert("Missing 'message' field, cannot post comment. :(")
    } else {
      alert("Missing 'name' and 'message' field, cannot post comment. :(");
    }
  }

  render() {

  return (
    <React.Fragment>
    <article className="post">
    <h3>How to Develop an Awesome Sense of Direction</h3>
    <h4>By Leo Babauta</h4>

    <p>
    It's strange, but I've discovered I have a better sense of direction than many people &mdash; when I travel, it doesn't take that long for me to figure out the lay of the land, and soon I'm walking around almost like a local.
    </p>

    <p>
    But I've also found out that many other people don't have this good sense of direction, and it can make things difficult for them when they travel to a new place.
    </p>

    <p>
    I used to think maybe it was something you were born with or not, but I'm now convinced that it's a set of skills you can learn. For me, it always seemed instinctive, until a friend asked me what i do when I get to a new place. I've done a lot of analyzing of what I do since then, and I've broken the skill into a series of steps.
    </p>

    <p>
    I hope this helps those who feel lost.
    </p>

    <p>
    Here's what I recommend, whenever you get to a new city or area you're not totally familiar with:
    </p>

    <ol>
    <li>
    <b>First, look at a map for a few minutes.</b> I will open Google Maps and look at the city and its major landmarks and features. Is there a river, lake, harbor, sea shore? Is there a big central park, or several big parks? Where is the downtown area? What are the major neighborhoods? Major roads? Famous buildings, like the Sydney Opera house? What's to the north or south?
    </li>

    <li>
    <b>Walk around a lot.</b> When I first get to a city, I like to walk around a lot. This is the best way to get to know a city, to wander and start to develop a sense of where things are and how the city looks. But read on to understand how you need to walk around &mdash; it's not just aimless.
    </li>

    <li>
    <b>Orient to some landmarks.</b> I like to find a major building, mountain, hill, bridge, that I can keep in view as I walk around. That way when I turn left, I can say, "Oh, the Empire State Building is now over there." This helps me have a point of reference, so I always know where I am relative to that point. Sometimes I have two or more landmarks.
    </li>

    <li>
    <b>Form a mental map.</b> This is the key. When you look at a map for a few minutes, then walk around, what you're doing is forming a mental map of the city. At first, it's real vague, but as you walk, you're adding to the map. See how the streets line up in reality compared to how you thought they line up after you first looked at the map.
    </li>

    <li>
    <b>Look at a map a lot in the beginning, but don't rely on it completely.</b> As you form your mental map, get in the habit of looking at the paper map in your hand, or the map on your phone, so you can fill in your mental map... but then put away the map and walk without it. Then look at the map again after a little while to fill in your mental map some more. It's a process of learning the map by looking at it every now and then, but not relying on it. If you just follow the map all the time, you don't ever rely on your mental map.
    </li>

    <li>
    <b>Keep your orientation as you walk around.</b> When you walk to a destination, or even wander aimlessly, it's easy to forget where you are or what direction you're facing. This is not useful. Instead, if you make a left turn, think, "Oh, now I'm going west," and also remember where your landmark is in relation to where you are. For example, if I start out heading straight for the Eiffel Tower, but then turn left, that means the Eiffel Tower is now on my right. Your mental map should rotate a bit too so you're now facing south instead of west (for example). In this way, you should always know which way to go to get home (to your apartment or hotel).
    </li>

    <li>
    <b>Don't just follow someone else or rely on taxis &mdash; figure it out yourself.</b> One of the biggest mistakes a lot of people make is to just follow their spouse or a guide or let taxis take them places. You will never figure out the lay of the land this way. Instead, figure out how to get places yourself. Yes, you'll make mistakes, but you'll eventually get it. Get lost, then check a map, and figure out how to get where you want to go. It's the only way.
    </li>

    <li>
    <b>Continually work on your mental map, and test it.</b> As you walk around, continually update the mental map. Look at the map again, close it, and test out how well you know the city. It's a constant process.
    </li>

    <li>
    <b>Keep an eye on the names of streets.</b> I like to look at street names as I walk around. Then I'll look at the street names on a map. Eventually, I get to know which streets head east and west, and which go north and south, and what order they're in.
    </li>

    <li>
    <b>Mark the major streets in your mental map.</b> Every neighborhood has its major streets, with shopping and restaurants and the like. Get to know where those are, and put them prominently on your mental map. You should get to the point where you can point the direction of these major streets, and even know generally how many blocks to get to them. Same with major parks and marketplaces and water features like rivers. And metro stops.
    That might seem like a lot, but after awhile, this all becomes second nature. Navigate. Use but don't rely on a map. Walk around a lot, but know where you are when you walk around. Form a mental map and make it better and better as you walk around.
    </li>
    </ol>

    <p>
    I find that people can develop this with practice, and it's also something to teach your kids as you travel. Let them navigate even if it takes a bit longer &mdash; it's a great skill for them to learn. If you have a spouse, take turns navigating so one person doesn't have an underdeveloped sense of direction.
    </p>

    <p>
    In my experience, this is a key skill for traveling, and it makes every trip so much more fun when you can really figure out a city and start to understand it like a local does. Happy wandering, my friends.
    </p>

    <div>
      <div className="attention-catcher-body-about mt-5"><p>Comments Section</p></div>

      <form onSubmit={this.handleSubmit}>
        Name <br/>
        <textarea onChange={this.handleChange} value={this.state.name} rows="1" cols="20" name="name"></textarea><br/><br/>
        Message <br/>
        <textarea onChange={this.handleChange} value={this.state.message} rows="4" cols="50" name="message"></textarea><br/><br/>
        <input type="submit"></input>
      </form>
    </div>

    <div id="comments" className="mt-4">
      {this.state.comments.map((c,k)=>(<Comment key={k} name={c.name} message={c.message}/>))}
    </div>

    </article>
    </React.Fragment>
  );
}
}

export default Post3;
