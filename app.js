movList = [{
        title: "The Trial of the Chicago 7",
        img: "ahf5cVdooMAlDRiJOZQNuLqa1Is.jpg",
        eng: "r61x55a68kajngn/1.mkv",
        year: 2020
    },
    {
        title: "Borat Subsequent Moviefilm",
        img: "6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg",
        eng: "5qnwyucra7najv7/2.mkv",
        year: 2020
    },
    {
        title: "Ludo",
        img: "frB57nMDmu4NnSzjmrq0lEx5iod.jpg",
        hin: "2qreqleihzcx33u/3.mkv",
        year: 2020
    },
    {
        title: "The New Mutants",
        img: "xrI4EnZWftpo1B7tTvlMUXVOikd.jpg",
        eng: "4jkzldkfm60r5tm/4.mkv",
        year: 2020
    },
    {
        title: "Love and Monsters",
        img: "r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg",
        eng: "d6yrbjcjqg6ejij/5.mkv",
        year: 2020
    },
    {
        title: "Enola Holmes",
        img: "riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
        eng: "76fpc2fd89bxnso/6.mkv",
        hin: "rl1a8w0jzsq1m03/6h.mkv",
        year: 2020
    },
    {
        title: "The SpongeBob Movie: Sponge on the Run",
        img: "gxK2lB1w8an5ViPXzisDsRsyHr0.jpg",
        eng: "m1dt1xdxsciofr4/7.mkv",
        year: 2020
    },
    {
        title: "Rogue City",
        img: "9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
        eng: "immggpu4lt15wl7/8.mkv",
        year: 2020
    },
    {
        title: "Over the Moon",
        img: "lQfdytwN7eh0tXWjIiMceFdBBvD.jpg",
        eng: "tvuj7grb4ad80du/9.mkv",
        hin: "9hleh5b06zr3x1a/9h.mkv",
        year: 2020
    },
    {
        title: "Hubie Halloween",
        img: "tFwmK42ze3gCUkGfk18vXxKPfL8.jpg",
        eng: "wb9vidvalihg18d/10.mkv",
        hin: "xzj9xzjms7majm4/10h.mkv",
        year: 2020
    },
    {
        title: "Mulan",
        img: "aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        eng: "h159ito3kfcpt9q/11.mkv",
        year: 2020
    },
    {
        title: "A Babysitter's Guide to Monster Hunting",
        img: "bkld8Me0WiLWipLORRNfF1yIPHu.jpg",
        eng: "i7nqzomri1mo90o/12.mkv",
        hin: "btgggbzkyleaxdk/12h.mkv",
        year: 2020
    },
    {
        title: "Extraction",
        img: "wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
        eng: "sv4c4e16sik3snj/13.mkv",
        hin: "qaeoa1lk2javn14/13h.mkv",
        year: 2020
    },
    {
        title: "Scoob!",
        img: "jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
        eng: "pyz8b7mmbetcrdm/14.mkv",
        year: 2020
    },
    {
        title: "Bloodshot",
        img: "esA8T2ymKDtEjA8PWATg5iXRpXM.jpg",
        eng: "xxrymgzfra5kiq6/15.mkv",
        year: 2020
    },
    {
        title: "Harley Quinn: Birds of Prey",
        img: "h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
        eng: "bex3xkp5nqtpp27/16.mkv",
        hin: "s4si3f4uuov82t7/16h.mkv",
        year: 2020
    },
    {
        title: "The Willoughbys",
        img: "9WrMmjdZvpxLQh1tCQ9tOd1asOb.jpg",
        eng: "au77mekgkn1zjvb/17.mkv",
        year: 2020
    },
    {
        title: "Fantasy Island",
        img: "8ZMrZGGW65ePWIgRn1260nA1uUm.jpg",
        eng: "p8okifcpw34ie50/18.mkv",
        hin: "29xmdmcjw0ddpqz/18h.mkv",
        year: 2020
    },
    {
        title: "Spenser Confidential",
        img: "E0qWrxmk7agKV7yVfwiYzy4Ulj.jpg",
        eng: "pxirteg5il9u94g/19.mkv",
        year: 2020
    },
    {
        title: "Project Power",
        img: "TnOeov4w0sTtV2gqICqIxVi74V.jpg",
        eng: "t00ff8l1lhh3di4/20.mkv",
        hin: "yrwxkcl582bzdde/20h.mkv",
        year: 2020
    }
]




for (let x = 0; x < movList.length; x++) {
    document.querySelector('main').innerHTML += `
    <div>
        <span onclick="runVideo(${x})">
            <img src="https://image.tmdb.org/t/p/w300/${movList[x].img}" alt="#">
        </span>
    </div>
    `;
}


let videoClickCount = 0;

function runVideo(slotNumber) {
    if (movList[slotNumber].eng) {
        document.querySelector('header').innerHTML = `
            <b class="selected" onclick="videoEmbed('${'https://www.dropbox.com/s/'+movList[slotNumber].eng+'?raw=1'}')">ENGLISH</b>
        `;
        document.querySelector('aside>div').innerHTML = `
        <video id="dv${videoClickCount}" class="video-js vjs-fluid" controls preload="auto" width="640" height="264"
        data-setup='{}'>
            <source src="https://www.dropbox.com/s/${movList[slotNumber].eng}?raw=1" type="video/mp4">
        </video>
        `;


        videojs(`dv${videoClickCount}`);
        videoClickCount += 1;

        if (movList[slotNumber].hin) {
            document.querySelector('header').innerHTML += `
            <b onclick="videoEmbed('${'https://www.dropbox.com/s/'+movList[slotNumber].hin+'?raw=1'}')">HINDI</b>
        `;
        }
    } else {
        document.querySelector('header').innerHTML = `
            <b class="selected" onclick="videoEmbed('${'https://www.dropbox.com/s/'+movList[slotNumber].hin+'?raw=1'}')">HINDI</b>
        `;
        document.querySelector('aside>div').innerHTML = `
        <video id="dv${videoClickCount}" class="video-js vjs-fluid" controls preload="auto" width="640" height="264"
        data-setup='{}'>
            <source src="https://www.dropbox.com/s/${movList[slotNumber].hin}?raw=1" type="video/mp4">
        </video>
        `;


        videojs(`dv${videoClickCount}`);
        videoClickCount += 1;
    }

    document.querySelector('aside').style.display = 'flex';
}



function videoEmbed(url) {
    document.querySelectorAll('header>b').forEach(function (lang) {
        lang.classList.toggle('selected');
    });

    document.querySelector('aside>div').innerHTML = `
        <video id="dv${videoClickCount}" class="video-js vjs-fluid" controls preload="auto" width="640" height="264"
        data-setup='{}'>
            <source src="${url}" type="video/mp4">
        </video>
    `;

    videojs(`dv${videoClickCount}`);
    videoClickCount += 1;
}



function exitVideo() {
    document.querySelector('aside').style.display = 'none';
    document.querySelector('video').pause();
}