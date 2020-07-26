import React from 'react';
import Comment from './comment.js';

class Post1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', message: '', comments: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (localStorage.getItem("comments1") != null && localStorage.getItem("comments1").length > 0) {
       this.state = {comments : JSON.parse(localStorage.getItem("comments1"))};
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
      localStorage.setItem("comments1", JSON.stringify(this.state.comments.concat(comment)));
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
    <h3>8 Experiments in Motivation</h3>
    <h4>By Leo Babauta</h4>

    <p>
    I was talking to a 19-year-old recently and he has been struggling with motivation.
    </p>

    <p>
    His problem goes like this: he gets excited about starting a project or plan, and is very motivated at the start... but after a few days, that feeling dies down, and he starts procrastinating.
    </p>

    <p>
    He really does want to do the project or follow through on the plan, but the motivation inevitably drops away.
    </p>

    <p>
    I told him this is something he should devote some effort to figuring out, because <b>very few problems are as important to solve as this one.</b>
    </p>

    <p>
    I suggested <b>experiments in motivation.</b> Every person is motivated differently (and in fact, that can shift), so finding methods that motivate you personally is a matter of experimenting.
    </p>

    <p>
    I'm writing this post for him, and anyone else who might want to try these experiments.
    </p>

    <p>
    How does it work? You <b>try each experiment for a week, and note the results.</b> After a couple months of doing this, you know more about your personal motivation style than ever before.
    </p>

    <p>
    Here are eight motivation methods you could try:
    </p>

    <ol>
    <li>
    <b>Un-ignorable Consequences.</b> Set a deadline for the task(s) you want to complete, and a consequence you won't be able to ignore. It's best to share this deadline and consequence with an accountability partner or publicly. Example: I post on Facebook I'm going to write 1,000 words in my book every day this week, or I can't watch TV for a week. (That only works if you really care about the consequence.) Another example: if I don't write my first chapter by Saturday at midnight, I have to donate $200 to Donald Trump (or whichever candidate you don't like) and post about it publicly. The idea is that the consequence should be embarrassing and something you can't just ignore.
    </li>

    <li>
    <b>Completion Compulsion.</b> Many people, myself included, have a strong desire to complete a list. For example, if you've watched 15 out of 20 episodes of a show, you might really want to finish watching the show. This is "completion compulsion," and I think everyone experiences it sometime — especially if finishing the list seems doable. So the method is this: make a list of 10 small actions (10 minutes or less to complete) that you want to finish this week on a certain project, or 5 small actions you want to finish each day, and make it your goal to finish the list. You could combine this with the un-ignorable consequences method (if I don't finish my list each day, I can't have wine).
    </li>

    <li>
    <b>A Powerful "Why".</b> Understand the deeper reasons you want to complete this goal or accomplish this task. It should be a reason that really resonates with you, that you deeply want to achieve. Now write your "Why" in a phrase (like, "compassion for myself" or "to help others in pain"), and post it somewhere visible, so you won't forget it.
    </li>

    <li>
    <b>Get Excited Daily.</b> It's easy to be excited about a project or goal when you first start, but that dies out. So renew it! Each day, start by setting a goal for the day that you can accomplish and that you care about. Find inspiration, visualize your accomplishment, find some music that motivates you, find an inspirational quote or video … anything to get you excited to accomplish your goal for the day!
    </li>

    <li>
    <b>Focus on Being True to Your Word.</b> One of the most important things in life is to be trusted, to have people believe that when you say you're going to do something, you'll do it. If people don't trust in that, you won't have good relationships, romantically, with friends, or at work. Imagine hiring someone and not knowing if they're going to show up, or do the work if they do show up. So you should make it one of your priorities in life to live the motto, "Be True to Your Word." That starts with small things: tell someone you're going to do a small task that will only take 10-30 minutes. Then do it. Repeat this several times a day, building other people's trust in you and your own trust in yourself. Post the motto somewhere you won't forget it.
    </li>

    <li>
    <b>Find a Group.</b> Humans are social animals, and you can use that to your advantage. Create an accountability group of friends or colleagues who want to achieve a goal or finish a project. Agree to set daily or weekly targets, and check in with each other daily or weekly (form a Facebook group or subreddit, perhaps). Set rewards and/or embarrassing consequences for hitting or missing the targets. Have weekly "winners" for those who did the best at their targets. Encourage each other and help each other when someone is faltering.
    </li>

    <li>
    <b>Focus on a Sense of Achievement.</b> With every task you complete, pause at the end of it to savor your feeling of accomplishment. This is a great feeling! Share your victory with others. Savor the feeling of building trust in yourself. As you start a task, think about how good you'll feel when you accomplish it.
    </li>

    <li>
    <b>Small Starts, Quick Rewards.</b> Create a system where you have to do short tasks (just 10 minutes) and you get a small reward at the end of it. For example, I just need to write for 10 minutes, then I get to have my first coffee of the day. Or I clear my email inbox for 10 minutes, and then I get to check my favorite sites for 5 minutes. Don't let yourself have the reward unless you do the task! The smaller the task, the better, so you won't delay starting.
    </li>
    </ol>

    <p>
    OK, these are eight experiments, but you might think of others, like the Seinfeld Method or the Pomodoro Technique. All that matters is that you try the experiments, and note the results. At the end of each weekly experiment, write a brief review of how it went. Rate your productivity on a scale of 10. Then try another experiment.
    </p>

    <p>
    At the end of these, you'll have tried a bunch of great methods, and figured out what helps you most. You might combine methods, or use different ones at different times. And maybe after all of this, you'll have a trust in yourself that's so strong, you don't need any methods!
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

export default Post1;
