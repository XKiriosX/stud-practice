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
    let username = document.querySelector('.username-input').value;
    let password = document.querySelector('.password').value;
    console.log(username, password);

    if (username === undefined && password === '') {
        alert('Input required');
        return;
    }
    
    users.forEach((element) => {
        if (username === element.username && password === element.password) {
            currentUser.username = username;
            currentUser.password = password;
        }
    });
    if (currentUser.username === 'guest' && currentUser.password === '') {
        alert('User not found');
        return;
    }
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
            imgSrc: 'res/Hlib-Paper.jpg',
            likedBy: []
        },
        {
            id: '2',
            description: 'Da best Wild West cowboys',
            nickName: 'Nova',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/filmy-pro-kovboev_jpg_770x430_crop_q70.jpg',
            likedBy: []
        },
        {
            id: '3',
            description: 'May our best pilots win dis war!',
            nickName: 'aspelled',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/Nikita-Max.jpg',
            likedBy: []
        },
        {
            id: '4',
            description: 'Landscapes of America N1',
            nickName: 'Trururump',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/quebrada-de-umahuaca.jpg',
            likedBy: []
        },
        {
            id: '5',
            description: 'Landscapes of America N2',
            nickName: 'Trururump',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/surreal-landscapes-cristales.jpg',
            likedBy: []
        },
        {
            id: '6',
            description: 'FAMCS IS DA BEST! BUT U NOU DE WEY?..',
            nickName: 'Kiddy',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/YKiviMHC8NI.jpg',
            likedBy: []
        },
        {
            id: '7',
            description: 'FAMCS IS DA BEST! BUT U NOU DE WEY?..',
            nickName: 'Kiddy',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/YKiviMHC8NI.jpg',
            likedBy: []
        },
        {
            id: '8',
            description: 'FAMCS IS DA BEST! BUT U NOU DE WEY?..',
            nickName: 'Kiddy',
            createdAt: new Date('2018-02-23T23:00:00'),
            imgSrc: 'res/YKiviMHC8NI.jpg',
            likedBy: []
        }
    ];

    function getPhotoPost(id) {
        return articles.find(el => el.id === id);
    }

    articles.forEach(element => {
        appendPost(element);
    });

    document.addEventListener('click', eventProcessing, false);

    function eventProcessing(event) {
        const ESC_KEYCODE = 27;
        let current = event.target.closest('.card-content1');
        let currentId = current.id;
        if (event.target.className === 'dank') {
            let res = getPhotoPost(currentId);
            let holder = document.createElement('div');
            holder.innerHTML = `
                <div class="modal" style="display: block">
                    <span class="close">&times;</span>
                    <img src="${res.imgSrc}" class="modal-content">
                    <div class="caption" style="background-color: white">
                        <img class="like-btn" src="res/Like.png"/>
                        <i class="edit-btn far fa-edit"></i>
                        <p class="img-description">${res.description}</p>
                        <p class="nickname">${res.nickName}</p>
                        <div class="upload-date">${res.createdAt.getDay()}-${res.createdAt.getMonth()}-${res.createdAt.getFullYear()}</div>
                    </div>
                </div>
            `;
            current.appendChild(holder.firstElementChild);
            window.addEventListener('keydown', closeModalByEsc, false);
        }
        if (event.target.className === "close") {
            current.removeChild(event.target.closest('.modal'));
        }
        if (event.target.className === 'like-btn') {
            if (currentUser.username === 'guest') {
                alert('U must be logged in to like posts');
            } else {
                event.target.src = './res/Liked.png';
                articles.forEach(el => {
                    if (el.id === currentId) {
                        el.likedBy.push(currentUser.username);
                    }
                });
            }
        }
        function closeModalByEsc(ev) {
            if (ev.keyCode === ESC_KEYCODE) {
                window.removeEventListener('keydown', closeModalByEsc);
                current.removeChild(document.querySelector('.modal'));
            }
        }
    }

}());

function createPost(post) {
    let postTemplate = document.createElement('div');
    postTemplate.innerHTML = `
            <div class="card-content1" id="${post.id}">
                <img class="dank" src="${post.imgSrc}" alt="${post.nickName}">
                
            </div>
        `;
    return postTemplate.firstElementChild;
}

function appendPost(post) {
    let temp = createPost(post);
    document.querySelector('.card').appendChild(temp);
}