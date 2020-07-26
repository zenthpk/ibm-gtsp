import React from 'react';
import Comment from './comment.js';

class Post5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', message: '', comments: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (localStorage.getItem("comments5") != null && localStorage.getItem("comments5").length > 0) {
       this.state = {comments : JSON.parse(localStorage.getItem("comments5"))};
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
      localStorage.setItem("comments5", JSON.stringify(this.state.comments.concat(comment)));
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
    <h3>What Productivity Systems Won't Solve</h3>
    <h4>By Leo Babauta</h4>

    <p>
    If you're like me, you're always looking for the perfect productivity system. Unfortunately, it doesn't exist.
    </p>

    <p>
    The problem isn't with the productivity system — the problem is that none of them can solve a few really important (and related) problems:
    </p>

    <ol>
    <li>Procrastination</li>
    <li>Fear of uncertainty</li>
    <li>Fear of discomfort</li>
    </ol>

    <p>
    For example, at the top of my to-do list today is "write Zen Habits post" and "write intro to declutter course"... pretty simple, right? Two fairly straightforward tasks. But as I started this post, I went to check and respond to email, sent a message to my wife, checked on my finances, cleaned the kitchen a little. I'm super productive at the little things when I'm putting off the big tasks!
    </p>

    <p>
    No matter how good the productivity system is, <i>it falls apart when I start procrastinating.</i>
    </p>

    <p>
    When a task is uncomfortable, I procrastinate, just like most people. When I'm facing a lot of uncertainty with a task, I procrastinate. Like most of us.
    </p>

    <p>
    Often, we'll work on a new productivity system, try out a new to-do list app, start organizing, or start getting our email inbox to zero, or start reading about a new way to be productive (like you are now)... <i>all as a way to procrastinate on uncertain or uncomfortable tasks.</i>
    </p>

    <p>
    And it's so much easier to follow the path of distractions and little tasks, than to face a big important but scary task. It's easy to go to your bank's website to check your balance, check on your favorite blogs and news sites, pop open your favorite social media network, and so on. These have no barrier to entry, and always give you some reward, while difficult tasks give you negative feedback and have obstacles to getting started. Not a fair fight, huh?
    </p>

    <p>
    So how do we deal with this? A few important methods:
    </p>

    <ol>
    <li>
    <b>Take a step back.</b> You have to get away from the distractions and little tasks. Step away from the computer, and go outside, go for a walk, take a shower, meditate, or just sit doing nothing for one minute. That's all it takes. Step back and think about what you should be doing right now, rather than what's easiest and most tempting.
    </li>

    <li>
    <b>Remember who you're doing this for.</b> As you step back, think about the person who will benefit from you doing this important task. Is it a co-worker, client, customer, loved one? Is it you? How will it make their life better? Maybe it'll make something easier for them, but maybe it'll solve a real pain point or meet an important need. I've found that I procrastinate when I'm focused on my own comfort, but push through procrastination when I'm focused on helping others.
    </li>

    <li>
    <b>Let yourself dive into the discomfort.</b> Clear away distractions, just have what you need to do this one task, and allow yourself to be uncomfortable for a few minutes. Yes, it sucks, but it's actually not that bad once you get started. It's like diving into cold water — just dive in, don't think about it. Once you're in, relax into the discomfort, and see that it's not as bad as you feared.
    </li>

    <li>
    <b>Embrace the uncertainty.</b> A lot of time it's a fear of uncertainty that holds us back. We don't know how to do something, or how things will turn out, and that freaks us out a bit. We don't want to work on something like that, or even think about it. We avoid and procrastinate and rationalize. Instead, see uncertainty as a necessary part of life (who wants a life where you know how everything would turn out? super boring)... and see it as an exciting part of life, one that is filled with wonder, curiosity, learning, exploration and adventure. Instead of looking at uncertainty as a bad thing, embrace it and see if you can get good at exploring it. Like discomfort, dive in and relax into it.
    </li>

    <li>
    <b>Do it in little bits.</b> Yes, uncertainty and discomfort can be difficult. So don't kill yourself trying to master them... just do it in small doses. Work on the task for just a few minutes, then walk around and take a break. Then sit down and focus again, relaxing into the discomfort and uncertainty. Repeat.
    </li>
    </ol>

    <p>
    With this kind of mindful practice, you're training yourself to get good at discomfort and uncertainty. This is a wonderful skill to get good at!
    </p>

    <p>
    And in the end, not only will you be facing down the most difficult aspect of productivity, you'll be doing something good for others in the process.
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

export default Post5;
