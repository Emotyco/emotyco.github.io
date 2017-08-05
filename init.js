var date = new Date();
var hour = date.toLocaleTimeString([], {hour: '2-digit'});

if(hour < 6 || hour > 20) {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#212121";
  var navChilds = document.getElementsByClassName('nav')[0].children;

  navChilds[0].children[0].style.color = "white";
  navChilds[1].children[0].style.color = "white";

  document.getElementsByTagName("footer")[0].children[0].children[0].children[0].style.color = "white";
  document.getElementById("logo").src = "images/logo-white.png";
}

/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
(function (window) {
    {
        var unknown = '-';

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }
    }

    window.jscd = {
        mobile: mobile,
        os: os,
        osVersion: osVersion
    };
}(this));
/******************/

if(jscd.os == "Windows") {
  document.getElementById("dwnl-btn").href = "https://github.com/Emotyco/Emoty-Desktop/releases/download/v0.1.1/EmotySetup.exe";
}
else if (jscd.os == "Linux") {
  document.getElementById("dwnl-btn").href = "https://github.com/Emotyco/Emoty-Desktop/releases/download/v0.1.1/Emoty-x86_64.AppImage";
}
else {
  document.getElementById("dwnl-btn").innerHTML = "Your system is not supported yet";
}

if(!jscd.mobile || jscd.os == "-") {
  var random = Math.floor((Math.random() * 4) + 1);

  if(random == 1) {
    document.getElementById("video-cont").children[0].style.backgroundImage = "url('images/poster.jpg')";
    document.getElementById("video-cont").children[0].src = "videos/Vacation_415.mp4";
  }
  else if(random == 2) {
    document.getElementById("video-cont").children[0].style.backgroundImage = "url('images/video-8758_medium.jpg')";
    document.getElementById("video-cont").children[0].src = "videos/Cumbia_8758.mp4";
  }
  else if(random == 3) {
    document.getElementById("video-cont").children[0].style.backgroundImage = "url('images/video-43_small.jpg')";
    document.getElementById("video-cont").children[0].src = "videos/Fun_Fair_43.mp4";
  }
  else if(random == 4) {
    document.getElementById("video-cont").children[0].style.backgroundImage = "url('images/video-4428_small.jpg')";
    document.getElementById("video-cont").children[0].src = "videos/Dance_4428.mp4";
  }
}

document.querySelector('#toValues').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#values').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#toOpenSource').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#open-source').scrollIntoView({ behavior: 'smooth' });
});
