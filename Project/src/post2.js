import React from 'react';
import Comment from './comment.js';

class Post2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', message: '', comments: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (localStorage.getItem("comments2") != null && localStorage.getItem("comments2").length > 0) {
       this.state = {comments : JSON.parse(localStorage.getItem("comments2"))};
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
      localStorage.setItem("comments2", JSON.stringify(this.state.comments.concat(comment)));
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
    <h3>A Mindful Shift of Focus</h3>
    <h4>By Leo Babauta</h4>

    <p>
    Throughout the day, we get frustrated, irritated, angry.
    </p>

    <p>
    We are frustrated in traffic, when a loved one doesn't behave the way we like, when someone tells us we're wrong, when technology doesn't work the way we want, when dinner is ruined, among many other daily stresses.
    </p>

    <p>
    These frustrations can build up into unhappiness, relationship problems, work problems, built up stress, blowing your top at someone when you lose your cool. Not always helpful stuff!
    </p>

    <p>
    I'm going to suggest a mindful shift in focus to deal with frustrations.
    </p>

    <p>
    It's a mindfulness practice, and I highly recommend it. We'll start by talking about where frustration comes from, then how to mindfully shift.
    </p>

    <h5>Mindfulness of Frustration</h5>

    <p>
    The next time you experience frustration, just notice it. Just be mindful that you're unhappy with something or someone, that you're feeling frustration in your body somehow.
    </p>

    <p>
    Pay attention to your breathing, to tightness in your chest or shoulders, to how it feels in your body. Stay with the feeling for just a couple moments, if you have the courage to do so. Normally, we run like hell from paying attention to this feeling, and try to resolve it by fixing the situation, making people behave differently, distracting ourselves, etc. But stay with it if you can.
    </p>

    <p>
    Now notice what it is in this moment that you wish were different. What is missing from this moment that is frustrating you? <b>Frustration stems from what you don't have.</b>
    </p>

    <p>
    What do I mean by this? There's something you don't have right now, that you wish you had, and that lack of what you want is frustrating you. A few examples:
    </p>

      <ul>
      <li> My child isn't behaving the way I want her to... what I don't have is "ideal" behavior from her. (Actually, it's my ideal, not hers.)</li>
      <li> My computer keeps crashing, and I'm frustrated... what I don't have is a computer that behaves ideally.</li>
      <li> People are saying things online that irritate me... what I don't have is a bunch of people who agree with me or behave in the way I want.</li>
      <li> Traffic backed up and stressing me out... what I don't have is a stress-free, peaceful drive home.</li>
      <li> My spouse criticized me... what I don't have is someone who thinks I'm an awesome husband right now, or their praise.</li>
      </ul>

    <p>
    Those are just examples, but in all cases, there's something that's missing that I want. Usually it's an ideal.
    </p>

    <p>
    To start with, just be mindful that you're frustrated, try to experience the feeling in your body, and then notice what it is you're missing that's frustrating you.
    </p>

    <h5>Mindfulness of Your Story</h5>

    <p>
    When we're missing something we want, and we're frustrated, irritated, angry... we often spin the story around in our heads for awhile. "It's so irritating when he acts this way," or "Why can't she just be more..."
    </p>

    <p>
    We get caught up in this story, stuck on it, attached to it. We wish things were different, wish other people would behave differently, wish people could see that we're right.
    </p>

    <p>
    It's easy to get caught up. It's not so easy to notice that we're caught up, when it happens. But if you can notice it, just notice that you're telling yourself a story about this situation. It's a story about how you wish things were different, how things aren't how you want them to be.
    </p>

    <p>
    Sit and watch yourself get caught up in this story. Sit and stay with the feelings it produces.
    </p>

    <p>
    Then see if you can notice that the story isn't so solid. It's not so real. It's more of a dream that you're in. Can things lighten up if you notice the dreamlike nature of this story?
    </p>

    <h5> Mindfulness of What Is Already Here</h5>

    <p>
    If we're focusing on what we don't have, and it's frustrating us... then the opposite just might help us.
    </p>

    <p>
    The antidote to frustration is appreciating what's already here, in this moment.
    </p>

    <p>
    That might not seem true when frustration arises, because the truth is, we just want things to be our way. We just want other people to act the way we think they should act, or want life to go the way we want it to go.
    </p>

    <p>
    Unfortunately, that is usually not going to be the case. Sometimes we can force people to act the way we want, if we have power over them, but that will create a bad relationship with them, and in the end, neither person will be happy.
    </p>

    <p>
    What I've found to work is focusing on what I can appreciate about this moment. Let's take the examples from above:
    </p>

      <ul>
      <li> I'm frustrated by my child's behavior... I can breathe, and appreciate things about this moment: my child is actually a wonderful person, who might not behave perfectly all the time (who does?), who is alive! And in my life! And I love her deeply.</li>
      <li>  My computer keeps crashing... I can breathe, and appreciate the fact that I have a computer at all, that all my needs are met, that I have people in my life who love me. I can appreciate the break from the computer and stretch, notice the awesome things around me.</li>
      <li>  People say irritating things online... I can breathe, and appreciate: I get to read amazing things online! I'm alive! People are diverse and interesting and messy, and I love humanity for that precious fact.</li>
      <li>  Traffic is backed up... I can breathe, and appreciate the fact that I can listen to some beautiful music in the car, or that I have some transition time between work and home when I can reflect on life, or that I have a home to come back to, or that I'm driving past some beautiful scenery.</li>
      <li> My spouse criticized me... I can breathe, and appreciate: she's a great spouse, and a person with a different way of doing things, and I'm happy to have her in my life. And maybe she's frustrated herself, and could use a hug.</li>
      </ul>

    <p>
    This doesn't mean we should only "think positive thoughts"... quite the contrary, noticing our negative thoughts and staying present with them is important. We can't avoid the frustration, but we can be mindful of it, and this mindful shift to appreciation of what is can be helpful.
    </p>

    <h5> Frustration in the Midst of Injustice</h5>

    <p>
    I should note that none of this means we should accept abuse or injustice as "OK." I know that there are incredibly frustrating things about the world today, and that violence, protests, anger, and strife are all around us.
    </p>

    <p>
    This mindful shift I'm suggesting isn't a solution to all of that. It isn't a suggestion that you should just be happy with your lot, or accept the world as it is without wanting change.
    </p>

    <p>
    No, I think if there is abuse or injustice, we should compassionately try to correct these tragedies. But learning to deal with our frustrations, in the midst of all this, can actually help the situation. If we can't deal with our frustrations, then we're increasingly likely to act in anger and violence, and that isn't useful.
    </p>

    <p>
    There's another way: recognize the injustice, be mindful of your frustrations, appreciate life in the present moment to calm your frustrations... then compassionately engage with everyone else to work on righting the injustice. Have a love-driven dialogue with everyone else, rather than fear-based or anger-driven interactions. Stand up to abuse, but that doesn't mean throw a brick in anger.
    </p>

    <p>
    I don't have the answers, and my heart goes out to all who are grieving, afraid, hurt, feeling helpless, fed up, frustrated or angry. My only hope is that in the middle of all this sorrow, we can appreciate the gift of life that we've been given, and find love for our fellow human beings despite all their flaws and messiness.
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

export default Post2;
