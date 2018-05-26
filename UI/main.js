'use strict';

let users = [
    {
        username: 'admin',
        password: '123123123',
        liked: []
    },
    {
        username: 'Hlib',
        password: '123',
        liked: []
    },
    {
        username: 'Trururump',
        password: "abacaba",
        liked: []
    },
    {
        username: 'aspelled',
        password: 'myxtap',
        liked: []
    },
    {
        username: 'Nova',
        password: 'lolkekmlg',
        liked: []
    },
    {
        username: 'Kiddy',
        password: 'qwerty',
        liked: []
    }
];

let currentUser = {
    username: 'guest',
    password: ''
};

function validateUser() {
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;

    username = username || null;
    password = password || null;
    
    users.forEach((element) => {
        if (username === element.username && password === element.password) {
            currentUser.username = username;
            currentUser.password = password;
        }
    });
    document.querySelector('.wrapper').style.display = 'none';
    document.querySelector('.user-info').style.display = 'flex';
    console.log(currentUser);
}

function logout() {
    currentUser.username = 'guest';
    currentUser.password = '';
    document.querySelector('.wrapper').style.display = 'flex';
    document.querySelector('.user-info').style.display = 'none';
}

(function(){

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
        },
        {
            id: '7',
            description: 'FAMCS IS DA BEST! BUT U NOU DE WEY?..',
            nickName: 'Kiddy',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/YKiviMHC8NI.jpg'
        },
        {
            id: '8',
            description: 'FAMCS IS DA BEST! BUT U NOU DE WEY?..',
            nickName: 'Kiddy',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/YKiviMHC8NI.jpg'
        }
    ];
    
    function takePhotoPosts() {
        var posts = JSON.parse(localStorage.getItem('posts'));
        posts.forEach(function (value) {
            value.createdAt = new Date(value.createdAt);
        });
        return posts;
    }

    articles.forEach(element => {
        appendPost(element);
    });

}());
// Get the image and insert it inside the modal - use its "alt" text as a caption

function tempor() {
    let modals = document.querySelectorAll('.modal');
    let imgs = document.querySelectorAll('.dank');
    let modalImgs = document.querySelectorAll('.modal-content');
    let spans = document.querySelectorAll('.close');

    for (let i = 0; i < modals.length; i++) {
        imgs[i].onclick = function () {
            modals[i].style.display = 'block';
            modalImgs[i].src = this.src;
        };
        spans[i].onclick = function () {
            modals[i].style.display = 'none';
        };
    }

}

let modal = document.querySelector('.modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector('.dank');
var modalImg = document.querySelector(".modal-content");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
};

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

function like() {
    if (currentUser.username === 'guest') {
        console.log('nope')
    } else {
        document.querySelector()
    }
}

function createPost(post) {
    let postTemplate = document.createElement('div');
    postTemplate.innerHTML = `
            <div class="card-content1">
                <img class="dank" id="myImg" src="${post.imgSrc}" alt="${post.nickName}">
                <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img src="" class="modal-content" id="img01">
                    <div class="caption" style="background-color: white">
                        <img class="like-btn" src="res/Like.png" onclick="like()"/>
                        <p class="img-description">${post.description}</p>
                        <p class="nickname">${post.nickName}</p>
                        <div class="upload-date">${post.createdAt}</div>
                    </div>
                </div>
            </div>
        `;
    return postTemplate.firstElementChild;
}

function appendPost(post) {
    let temp = createPost(post);
    document.querySelector('.card').appendChild(temp);
    tempor();
}