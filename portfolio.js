



const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to(".intro", { y: "-100%", duration: 1, delay: 1.0, opacity: 1});





var typed = new Typed(".auto-input",
            {
                strings: ['APPLICATION DEVELOPMENT','AND', 'EMERGING TECHNOLOGIES'],
                typeSpeed: 100,
                backSpeed: 100,
                loop:true,
            });



            var links = document.getElementsByClassName("links");
            var linkcontents = document.getElementsByClassName("link-contents");

            function opentab(linksname){
                for(link of links){
                    link.classList.remove("active-link")
                }
                for(linkcontent of linkcontents){
                    linkcontent.classList.remove("active-tab")
                }
                event.currentTarget.classList.add("active-link")
                document.getElementById(linksname).classList.add("active-tab")
            }




const form = document.querySelector('.form');

function sendEmail(e){
    e.preventDefault();
    
    const name = document.querySelector('.name'),
          email = document.querySelector('.email'),
          phone = document.querySelector('.phone'),
          msg = document.querySelector('.msg');
       
    Email.send({
        SecureToken: '38df100d-0053-4fb8-adac-8bbf561e6b0a',
        To : 'daviddutta222@gmail.com',
        Name : name.value ,
        From : email.value,
        Subject : "Contact Form",
        Phone : phone.value,  
        Body : msg.value
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', sendEmail);