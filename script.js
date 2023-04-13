document.addEventListener('DOMContentLoaded', () => {
    const discordButton = document.getElementById('discord-button');
    discordButton.addEventListener('click', () => {
      try {
        window.open('https://discord.com/users/bobaguard%1001');
      } catch(e) {
        window.location.href = 'https://discord.com';
        console.log(e);
      }
    });

    const githubbutton = document.getElementById('github-button');
    githubbutton.addEventListener('click', () => {
      try {
          window.open('https://github.com/Lel020');
          }catch (e) {
          window.location.href = 'https://github.com/';
          console.log(e);
      }
  });
});
  
