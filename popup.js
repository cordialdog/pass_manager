document.addEventListener('DOMContentLoaded', function() {
    var url;
    var encrypted = "";
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        url = tabs[0].url;
        let p = url.indexOf("//");
        url = url.substring(p + 2);
        p = url.indexOf("/");
        url = url.substring(0, p);
        if (url.startsWith("www.")) {
            url = url.substring(4);
        }
        document.getElementById('url').value = url;
    });

    chrome.storage.local.get(url).then((result) => {
        console.log("website: " + url);
        if(result[url] === undefined) {
            return;
        }
        encrypted = result[url][0];
        let memo = result[url][1];
        (document.getElementById('memo')).value = memo;
    });

    let randomize = document.getElementById('randomize');
    randomize.addEventListener('click', function() {
        var password = document.getElementById('password');
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = "";
        password += chars.charAt(Math.floor(Math.random() * 10)); //number
        password += chars.charAt(10 + Math.floor(Math.random() * 26)); //lower
        password += chars.charAt(36 + Math.floor(Math.random() * 10)); //symbol
        password += chars.charAt(46 + Math.floor(Math.random() * 26)); //upper
        for (var i = 0; i < passwordLength - 4; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.charAt(randomNumber);
        }
        document.getElementById("password").value = password;
    });

    let save = document.getElementById('save');
    save.addEventListener('click', function() {
        console.log("input: " + url);
        let password = (document.getElementById('password')).value;
        let memo = (document.getElementById('memo')).value;
        console.log("password: " + password);
        obj = {};
        let master = document.getElementById('master').value;
        if(master == "") {
            alert("Error: No key provided");
            return;
        }  
        if(password == "") {
            alert("Error: No password provided");
            return;
        }
        encrypted = encrypt(password, master);
        obj[url] = [encrypted, memo];
        chrome.storage.local.set(obj);
    });

    let copy = document.getElementById('copy');
    copy.addEventListener('click', function() {
        let passwordText = document.getElementById('password').value;
        let master = document.getElementById('master').value;
        if(master == "") {
            alert("Error: No key provided");
        }
        console.log(encrypted);
        if(encrypted == "") {
            // new site
            if(passwordText == "") {
                alert("Please create a password first");
            }
            else {
                alert("Please save first");
            }
            return;
        } 
        let passwordDecrypt = decrypt(encrypted, master);
        if(passwordText == "") {
            // loaded but not decrypted
            document.getElementById('password').value = passwordDecrypt;
        }
        else if(passwordDecrypt != passwordText) {
            // edited password
            alert("Please save first");
            return;
        }
        copyTextToClipboard(passwordDecrypt);
    });

    function copyTextToClipboard(text) {
        var copyFrom = document.createElement("textarea");
        copyFrom.textContent = text;
        document.body.appendChild(copyFrom);
        copyFrom.select();
        document.execCommand('copy');
        copyFrom.blur();
        document.body.removeChild(copyFrom);
    }
    
    let show_pass = document.getElementById('show_pass');
    show_pass.addEventListener('click', function() {
        eyefile = document.getElementById('eye').src;
        console.log(document.getElementById('eye').src);
        if(eyefile.endsWith('/closeeye.png')) {
            document.getElementById('password').setAttribute('type', 'text');
            document.getElementById('eye').src = "icons/openeye.png";
        }
        else {
            document.getElementById('password').setAttribute('type', 'password');
            document.getElementById('eye').src = "icons/closeeye.png";
        }
    });

});
