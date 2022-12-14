//Q3. Give 3 real world examples where async/await has been used?
/* Ans :  

*/

async function showAvatar() {
    
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/iliakan`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    return githubUser;
  }
  
  showAvatar();



