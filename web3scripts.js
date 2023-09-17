


const contractAddress = "0xade928aa806021119Fb204367B30E53b7E44e98E";
            
            
    var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_artist","type":"string"},{"internalType":"string","name":"_img","type":"string"},{"internalType":"uint256","name":"_songs","type":"uint256"},{"internalType":"uint256","name":"_video","type":"uint256"},{"internalType":"uint256","name":"_art","type":"uint256"},{"internalType":"string","name":"_desc","type":"string"}],"name":"addAlbum","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"_names","type":"string[]"},{"internalType":"uint256","name":"_albumID","type":"uint256"}],"name":"setSongName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_album","outputs":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"artist","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"uint256","name":"songs","type":"uint256"},{"internalType":"uint256","name":"video","type":"uint256"},{"internalType":"uint256","name":"art","type":"uint256"},{"internalType":"string","name":"desc","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_nftAllowsAlbum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_songsToNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_albumID","type":"uint256"}],"name":"canAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAlbums","outputs":[{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"artist","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"uint256","name":"songs","type":"uint256"},{"internalType":"uint256","name":"video","type":"uint256"},{"internalType":"uint256","name":"art","type":"uint256"},{"internalType":"string","name":"desc","type":"string"}],"internalType":"struct NFT.Album[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_albumID","type":"uint256"}],"name":"getNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAlbums","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
            
     var accounts = null;
     var provider = null;
     var myContract = null; 
     var signer = null;
     var music_list = [];
     var curr_album;
     var track_index = 0;
     let isPlaying = [];
     var urlPath ="https://auroncrow.lol/media_player/project/assets/";
     var video_num = 0;
     var curr_video = 0;

     
    
    
    
    
        async function connect() {
        if(window.ethereum) {
            if(window.ethereum.isMetaMask){
        provider = new ethers.providers.Web3Provider(window.ethereum);
    
        accounts = await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        myContract = new ethers.Contract(contractAddress, abi, signer);
        location.replace("https://auroncrow.lol/Media_Player/project/index1.html");
        } else {
            location.replace("https://metamask.io/download/");
        }} else {
            location.replace("https://metamask.io/download/");
        }}


        async function getAlbums() {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            accounts = await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            myContract = new ethers.Contract(contractAddress, abi, signer);

            var array = [];
            array = await myContract.getAlbums();
            var container = document.getElementById("coll");
            for(i = 0; i < array.length; i++) {
                var a = document.createElement('a');
                a.innerHTML = array[i][1];
                a.setAttribute('onclick', '_album(' + i + ')');
                container.appendChild(a);
            }

        }

        async function getAlbums2() {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            accounts = await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            myContract = new ethers.Contract(contractAddress, abi, signer);

            var array = [];
            array = await myContract.getAlbums();
            var container = document.getElementById("coll");
            for(i = 0; i < array.length; i++) {
                var a = document.createElement('a');
                a.innerHTML = array[i][1];
                a.setAttribute('onclick', '_video(' + i + ')');
                container.appendChild(a);
            }

        }

        async function _album(i) {

            const contentBody = document.getElementById("singleSong");

			while (contentBody.hasChildNodes()) {
  			contentBody.removeChild(contentBody.firstChild);
            
		}

            var isAllowed = await myContract.canAccess(i);
            music_list.length = 0;
            curr_album = i;
            var arr = await myContract._album(i);
            
            if(isAllowed){
                var names = await myContract.getNames(i);
                var songs = Number(arr[4]);

                    for(k = 0; k < songs; k++) 
                    {
                        music_list[k] = names[k];
                    }

                    

                   loadTrack(track_index, curr_album);
                   getSingleSong(i, songs, names);
                   getInfo(arr, i);
                   
            } else {
                document.getElementById("descri").innerHTML = "";
                document.getElementById("artistImage").src = "./assets/" + i + "/" + arr.img + ".png";
                document.getElementById("titl").innerHTML = arr.title;
                document.getElementById("artis").innerHTML = arr.artist;
                var container = document.getElementById("singleSong")
                var text = document.createElement("h1");
                var text2 = document.createElement("h2");
                var text3 = document.createElement("p");
                var text4 = document.createElement("p");
                var text5 = document.createElement("p");
                var button = document.createElement("button");

                text.innerHTML = "You do not have access to this content yet";
                text.style = "margin-top: 5%; margin-bottom: 5%;"
                text2.innerHTML = "This album contains: ;"
                text3.innerHTML = "Songs: " + Number(arr.songs);
                text4.innerHTML = "Video: " + Number(arr.video);
                text5.innerHTML = "Art: " + Number(arr.art);
                button.setAttribute("onClick", "buy(" + i + ")");
                button.setAttribute("class", "btn");
                button.style = "width: 40%; margin-top:5%;"
                button.innerHTML = "UNLOCK FOR " + Number(arr.price) + " ETH";

                container.appendChild(text);
                container.appendChild(text2);
                container.appendChild(text3);
                container.appendChild(text4);
                container.appendChild(text5);
                container.appendChild(button);
            }
              
            
            

        }


        async function _video(i) {


            var isAllowed = await myContract.canAccess(i);
            curr_album = i;
            var arr = await myContract._album(i);

            document.getElementById("title").innerHTML = arr[1];
            
            if(isAllowed){
                video_num = Number(arr[5]);
                var container = document.getElementById("video");
                container.style.display = "block";
                var video = document.getElementById("videoPlay");
                video.src = urlPath + i + "/0.mp4";
            }
            else {
                var container = document.getElementById("video");
                container.style.display = "none";
                alert("Go Back on the main page and buy this content to view it!");
                
            }
    }

        async function nextVideo() {
                if(curr_video < video_num - 1) {
                    curr_video += 1;
                    var video = document.getElementById("videoPlay");
                    video.src = urlPath + curr_album + "/" + curr_video + ".mp4";
                }
                else {
                    alert("Last video reached!");
                }
                
        }

        async function prevVideo() {
            if(curr_video > 0) {
                curr_video -= 1;
                var video = document.getElementById("videoPlay");
                video.src = urlPath + curr_album + "/" + curr_video + ".mp4";
            }
            else {
                alert("First video reached!");
            }
        }


        async function getInfo(arr, i) {


            document.getElementById("artistImage").src = "./assets/" + i + "/" + arr.img + ".png";
            document.getElementById("titl").innerHTML = arr.title;
            document.getElementById("artis").innerHTML = arr.artist;
            document.getElementById("descri").innerHTML = arr.desc;
            
        }

        async function getSingleSong(i, songs, names){
            console.log(names);
            var container = document.getElementById("singleSong");
            for (j = 0; j < songs; j++) {
                var div = document.createElement("div");
                var audio = document.createElement("audio");
                var p = document.createElement("p");
                var a = document.createElement("a");
                var itag = document.createElement("i");

                div.setAttribute("id","content");
                audio.setAttribute("id", "myAudio" + j);
                audio.src = "./assets/" + i + "/" + names[j] + ".mp3";
                audio.preload = "auto";
                p.innerHTML = names[j];
                a.setAttribute("onClick", "togglePlay(" + j +  ")");
                a.setAttribute("id", "play" + j);
                itag.setAttribute("class", "fas fa-play-circle");

                a.appendChild(itag);
                div.appendChild(audio);
                div.appendChild(p);
                div.appendChild(a);

                container.appendChild(div);

                isPlaying[j] = false;

            }
        }

        async function buy(i) {
            var info = await myContract._album(i);
            var price = info.price;
            try{
                const request = await myContract.mint(i,
                    {
                         from: accounts[0],
                         value: price 
                    });
            } catch(err) {
                console.log(err.data.message);
            }
        }


// WEB2 PART STARTS HERE
// MEDIA PLAYER LOGIC


function togglePlay(id) {
    var audio = document.getElementById("myAudio" + id);
    if (isPlaying[id]) {
        audio.pause()
        isPlaying[id] = false;
        console.log("ciao");
        
    } else {
        audio.play();
        isPlaying[id] = true;
        console.log("ciao1");
    }
}


function loadTrack(track_index, curr_album) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = "./assets/" + curr_album + "/" + music_list[track_index] + ".mp3";
    curr_track.load();

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    // random_bg_color();
}

function handlediv() {
    link.style = "opacity:0"
    collect.style = "opacity:1"
    hide.style = 'opacity:0'
}
function handlebtn() {
    link.style = "opacity:1"
    collect.style = "opacity:0"
    hide.style = 'opacity:1'
}
function handleleft() {
    leftdiv.style = 'opacity:0'
    hideleft.style = 'opacity:0'
    collectleft.style = 'opacity:1'

}
function handleleftbtn() {
    leftdiv.style = 'opacity:1'
    hideleft.style = 'opacity:1'
    collectleft.style = 'opacity:0'

}

function clickedbtn() {
    link.style = "left:3rem;"
    menu.style = 'opacity:0'
    cross.style = 'opacity:1'
}
function clickedcross() {
    link.style = "left: -50rem;"
    menu.style = 'opacity:1'
    cross.style = 'opacity:0'
}
// function random_bg_color() {
//     let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
//     let a;

//     function populate(a) {
//         for (let i = 0; i < 6; i++) {
//             let x = Math.round(Math.random() * 14);
//             let y = hex[x];
//             a += y;
//         }
//         return a;
//     }
//     let Color1 = populate('#');
//     let Color2 = populate('#');
//     var angle = 'to right';

//     let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
//     document.body.style.background = gradient;
// }
function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}
function playRandom() {
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom() {
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index, curr_album);
    playTrack();
}
function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
    console.log(playpause_btn.innerHTML)
    curr_track.play();
    isPlaying = true;
    // track_art.classList.add('rotate');
    // wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';

}
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    // track_art.classList.remove('rotate');
    // wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
    if (track_index < music_list.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index, curr_album);
    playTrack();
}
function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index, curr_album);
    playTrack();
}
function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}






        


        