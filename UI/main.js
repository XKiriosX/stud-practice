//==========================MODAL BOX===================================
'use strict';
(function() {
    var audio = new Audio('res/DIMOON.mp3');
    function handleInsta() {
        audio.volume = 0.04;
        audio.play();
        document.body.style.background = 'url(res/DANK_GIF.gif)';
    }
    function undoHandleInsta() {
        document.body.style.background = '';
        audio.pause();
    }
    var insta = document.querySelector('.instagram');
    insta.addEventListener('mouseover', handleInsta);
    insta.addEventListener('mouseout', undoHandleInsta);
}());
(function(){
    var modal = document.getElementById('myModal');
    console.log(modal);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    /*var artile = {
        img: [ {
                imgSrc: ,
                description: ,
                valueOfLucas: ,
            }
        ]
    };*/
    var articles = [
        {
            id: '1',
            description: 'OMAGAD WTF BBQ?!?!?!',
            nickName: 'Hlib',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/Hlib-Paper.jpg'
        },
        {
            id: '2',
            description: 'Da best Wild West cowboys',
            nickName: 'Nova',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/filmy-pro-kovboev_jpg_770x430_crop_q70.jpg'
        },
        {
            id: '3',
            description: 'May our best pilots win dis war!',
            nickName: 'aspelled',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/Nikita-Max.jpg'
        },
        {
            id: '4',
            description: 'Landscapes of America N1',
            nickName: 'Trururump',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/quebrada-de-umahuaca.jpg'
        },
        {
            id: '5',
            description: 'Landscapes of America N2',
            nickName: 'Trururump',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/surreal-landscapes-cristales.jpg'
        },
        {
            id: '6',
            description: 'FAMCS IS DA BEST! BUT U NOU DE WEY?..',
            nickName: 'Kiddy',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/YKiviMHC8NI.jpg'
        }
    ];


    function getPhotoPosts(skip, top, filterConfig) {
        if (skip < 0 || top < 0) {
            return undefined;
        }
        var posts = takePhotoPosts();
        skip = skip || 0;
        top = top || 0;
    }
    
    function takePhotoPosts() {
        var posts = JSON.parse(localStorage.getItem('posts'));
        posts.forEach(function (value) {
            value.createdAt = new Date(value.createdAt);
        });
        return posts;
    }
    
    document.getElementById('myImg').addEventListener('click', aa);
    /*artile.img.forEach(item, i => {

    });
    function createArtile( ){

    }*/
    function aa(e) {
        modal.style.display = "block";
        var nickName = document.createTextNode(this.alt);
        nickName.style.color = "#0ff";
        captionText.appendChild(nickName);
        modalImg.src = this.src;
        captionText.style.font = "italic bold 20px arial";
        captionText.style.color = "#000";
        var lukas = new Image();
        lukas.src = 'res/Like.png';
        lukas.id = "like-btn";
    }



// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}());
// Get the image and insert it inside the modal - use its "alt" text as a caption

//==========================LIKE BUTTON=================================