# Password Manager
#### Video Demo:  [https://youtu.be/ffy9dZDl1dg](https://youtu.be/kPCJvrieeS4)
## Description:
This is a password management extension to store all your passwords in one place! I wanted to create one place to store all your passwords, because everyone uses hundreds of passwords, and it can be hard to remember them all. Only one password is needed to access all of your other passwords.

## Files
In the file folder, a subfolder called [icons](icons), [manifest.json](manifest.json), [popup.html](popup.html), [popup.js](popup.js), [popup.css](popup.css), and [encrypt.js](encrypt.js) can be found. The icons folder simply holds the files for various images used in the program. manifest.json is a file required by Chrome to provide information about the extension like its name, description, permissions, and of course, linking it to the rest of the code. popup.html provides the elements of the popup screen. popup.js is the code for the popup screen. It provides functionality to the buttons by adding eventListeners for a click. 

## Functionality
* Website - The program detects the current website the user is on, and displays it in a text box. Only the domain name is shown because the domain name, not the full login URL, is used to retrieve the password, reason being the login URL may change in the future.
* Key - The program uses encryption to ensure extra security, so there will have to be one key the user has to remember in order to decrypt the encrypted password successfully.
* Site Password - Here's the place where users can set/view their password. On the sides are icons that show/hide the password, and there's also a random password generator, acting as a suggestion. The passwords generated will always have a number, lowercase letter, special characters, and uppercase letters. They are also 12 characters in length, so it should surpass any password requirements.
* Memo Box - This is a plain text box for users to save anything else they need to remember, such as a username or security questions.
* Save - This button encrypts, then saves the password to the program and stores it in local storage. The downside of using local storage would be that the program only stores it for one device, and using the cloud could be a future enhancement. The code for the encryption was sourced externally.
* Clipboard - This copies the password to the user's clipboard. It will load and decrypt the password from storage into the Site Password textbox if the password is not in the textbox yet.

## Installing the Extension
1. Go to chrome://extensions/
2. Toggle the Developer Mode switch, located on the top right corner.
3. A bar will appear on the top with three buttons. Click on "Load unpacked" and select the *pass_manager* folder in your file manager.
4. Success! You have installed the extension to your browser!

## Saving Your Password on a New Page
1. Go to the website you want to store your password in.
2. Click on the extension icon (a green key).
3. Enter your key (make sure you always remember it!).
4. Enter your password as you wish (or randomize it by clicking the dice icon).
5. Click on the "Save" button.
6. Click on the "Clipboard" button to copy your password to your clipboard.
7. Paste your password into the page.

## Returning to a Page
1. Go to the website you want to sign into.
2. Click on the extension icon (a green key).
3. Enter your key.
4. Click on the "Clipboard" button to copy your password to your clipboard.
7. Paste your password into the page.

## Changing Your Password
1. Go to the website you want to change your password on.
2. Click on the extension icon (a green key).
3. Enter your key.
4. Click on the "Clipboard" button to load your password.
5. Change your password.
6. Click on the "Save" button to save your changes.
7. Click on the "Clipboard" button to copy your password to your clipboard.
8. Paste your password into the page.
