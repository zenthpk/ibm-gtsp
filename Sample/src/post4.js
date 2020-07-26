import React from 'react';
import Comment from './comment.js';

class Post4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', message: '', comments: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (localStorage.getItem("comments4") != null && localStorage.getItem("comments4").length > 0) {
       this.state = {comments : JSON.parse(localStorage.getItem("comments4"))};
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
      localStorage.setItem("comments4", JSON.stringify(this.state.comments.concat(comment)));
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
    <h3>Training to Be a Good Writer</h3>
    <h4>By Leo Babauta</h4>

    <p>
    I'm not going to claim to be the world's greatest writer, but I do think I'm reasonably competent. I've been training for 25 years, and I make a living as a writer.
    </p>

    <p>
    For those who are just starting out as writers, I'd like to share my training. I didn't wake up and suddenly know how to write &mdash; I've been training for most of my life.
    </p>

    <p>
    A short background on my writing career: I started out as a sportswriter, as a senior in high school, and eventually became a full-time reporter and then editor for my local paper on Guam. I went on to do freelance writing for magazines and other publications, worked for awhile as a bill writer for lawmakers and a speechwriter for the Guam governor. Eventually I started my own blog while doing freelance blogging for about 5 different blogs. Finally, I've written my blog for almost 10 years now, and have written numerous books and courses.
    </p>

    <p>
    Here are the most important aspects of my training, in no particular order:
    </p>

    <ul>
    <li>
     <b>Write every day.</b> I write pretty much every single day. Not just once or twice a week, but every day. In various forms: for my blog, for my Sea Change Program, or for a new book or course I might be creating. This is perhaps the most important thing I've done in these 25 years, because constant practice has smoothed out the rough edges a bit, and made the difficult obstacles a lot less scary. I recommend doing a daily or every-other-day blog.
     </li>

    <li>
     <b>Learn to overcome the resistance.</b> Every writer faces the resistance that keeps them from writing, the procrastination urge that pushes them toward distraction and busywork. I'm not immune, but I've learned to face the resistance instead of running from it. I've learned not to be so scared of it. I've learned to just get started without thinking too much about it. If resistance is stopping you from writing every day, face it down and don't back away.
    </li>

    <li>
     <b>See writing as a mindfulness practice.</b> I see writing as a form of meditation, where I can let everything else fall away for a few moments and just stay with this one activity. It means I need to get my mind into the writing space, notice when the urge to go to distraction comes up, and not just automatically follow the urge. I can look within myself and let feelings flow out through the written word, or see the truths within me and try to channel those onto the page.
    </li>

    <li>
     <b>Do timed writing sessions.</b> Just as you might set a timer for meditation, it's beautifully helpful to set a timer for writing sessions. For example, you might do a 10-minute session, just letting the words flow and trying to stay mindful during that 10 minutes. Know it's a limited time allows you to let go of some of your fears and just be present with the writing.
    </li>

    <li>
     <b>Learn to deal with the fears.</b> All writers grapple with fears &mdash; fears of failure and not being good enough, fear of discomfort and uncertainty and going into places that scare us. Some let the fears stop them from starting, or keep them away from the writing, or running to distraction. But I've found it useful to learn to stay with the fears, and write anyway. Yes, you can be very uncomfortable and filled with uncertainty, and still write. You can sit with the fear for a minute, and then start writing. These fears are scary, but they're not so bad when you allow yourself to face them.
    </li>

    <li>
     <b>Care about the craft.</b> A writer crafts words, and so should care about them. That means trying to get good at spelling and grammar, the basics of writing. That doesn't mean you'll never have typos, but it does mean you'll constantly try to get better at the basics. You wouldn't be a carpenter without learning how to hammer and saw, would you? When you're done writing, run it through a spell check and try to learn the words you missed. Look up words often in a dictionary. Let a friend proofread your work and try not to make the same mistakes over and over again. Pick up the AP or Chicago style manual and learn some of the more common styles, and try to be consistent.
    </li>

    <li>
     <b>But get over perfectionism.</b> That said, don't let your lack of knowledge of the basics of writing stop you. Just write. You'll learn as you go, with constant practice and care. In the meantime, you want to let go of any ideals you might be holding for yourself, ideals that might be holding you back. Dive in, and just do it. Publish your first or second drafts, without needing it to be perfect. Typos aren't such a big deal.
    </li>

    <li>
     <b>Learn to type.</b> This isn't required, of course, but knowing how to touch-type is a good skill for a writer. It doesn't take long to master &mdash; there are programs online that will teach you the basics and drill it into you, and within a month you'll be not so horrible. After a year, you'll be a master. It helps you to get the words out of your head faster if you can type at a decent rate.
    </li>

    <li>
     <b>Learn to write on deadline.</b> One of the most valuable skills I learned as a newspaper reporter was how to write on deadline. Every day, we had to submit one or more articles (sometimes five or six of them!), and we had an editor breathing down our necks, trying to meet her own submissions deadlines. There's pressure, but what you learn is that you can get the article done on time, if you focus. You learn not to worry about perfection, not to let the fears get in the way, and just to get the words out. And how to revise quickly. If you don't work for a newspaper, set a deadline for yourself, tell it to someone else, send them your writing by the deadline or suffer a consequence.
    </li>

    <li>
     <b>Read a lot.</b> The best writers (those far better than me) read voraciously. I read all the time &mdash; fiction is my favorite, but I also read non-fiction books and long-form articles online. Reading good writing shapes your own writing, giving you inspiration and expanding your use of language. Read a lot!
    </li>

    <li>
     <b>Steal from others.</b> When you find a writer who does something beautifully, rip them off. Try it in your own writing, mix it in with what you already do, remix it with what you find elsewhere, and make it your own.
    </li>

    <li>
     <b>Keep notes on writing.</b> When you find something worth stealing, add it to a text doc or put it in a writing notebook. When you have ideas for a novel, a blog post, a character, an insight... add it to the notebook. Mine it regularly.
    </li>

    <li>
     <b>Find fellow writers.</b> If you're having trouble sticking to a writing schedule, find other writers in your area or online, and meet with them regularly. Share your writing with each other, discuss problems you're having, read other writers in your genre. A small writing group is a time-tested tool, and helps you see that you're not in this alone.
    </li>

    <li>
    <b>Understand the reader.</b> Another of the most important things I learned as a newspaper reporter was to understand the mindset of the reader. Many beginning writers just write whatever is in their heads, but then it might not be so understandable or interesting to the reader. These days I think in terms of how the reader will understand the article, what context they need, how clear my sentences are, what experience I'm creating for the reader.
    </li>
    </ul>

    <p>
    So that might seem like a lot to take on! It's doable, though, if you just keep churning away, every day, and learn all of this a little at a time.
    </p>

    <p>
    A few points I'd like to make for those who'd like to write:
    </p>

    <ul>
    <li>
     <b>Anyone can write, and everyone should.</b> You don't have to be James Joyce to write. Even if you never want to be a pro, you can write in a journal every day, or write letters to a loved one (and send them or not). You don't have to be polished. And it's a great practice, to learn to focus and overcome fears and procrastination, and learn to allow the words to flow from the mind.
    </li>

    <li>
     <b>Start where you are.</b> Whether you've been writing for a few years or you're just starting out, whether you have a talent for words or you struggle, that is the place to start. It doesn't matter where you are, or how you compare to others &mdash; just write, working with whatever you're struggling with. You'll get better over the course of time, and more comfortable with what you're doing.
    </li>

    <li>
     <b>You get good by doing it a lot, and caring.</b> You'll never be perfect at it &mdash; goodness knows I'm far from perfect &mdash; but the only way to get better is to practice. And to care about what you're doing. Do that every day, and every step of the struggle will be an amazing one.
    </li>
    </ul>

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

export default Post4;
