let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

    for (var i in pronoun) {
      for (var j in adj){
         for (var k in noun){
    console.log(pronoun[i]+adj[j]+noun[k]+'.com')
      }
    }
  }
