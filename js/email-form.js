let getEmails = (email) => {
    return {
      "email": email,
    }
  }
  
  // class Comment {
  //   constructor (name, message) {
  //     this.name = name
  //     this.message = message
  //   }
  //   setName (name) {
  //     this.name = name
  //   }
  //   getName () {
  //     return this.name
  //   }
  //   setMessage (message) {
  //     this.message = message
  //   }
  //   getMessage () {
  //     return this.message
  //   }
  // }
  
  // let addComment = (list_of_comments, comment) => {
  //   list_of_comments.push(comment)
  //   return list_of_comments
  // }
  
function checkForm(form) {
    if(form.email.value == "") {
        alert("Please enter your email address.");
    } else {
        alert("You've been added to our mailing list!");
        let storage = {email: form.email.value};
        localStorage.emails = JSON.stringify(storage) //serialization
        let emails = JSON.parse(localStorage.emails) //deserialization
        console.table(emails)
    }
    return false;
}