let {remote} = require('electron');
let dialog = remote.dialog;
let mainWindow = remote.getCurrentWindow();
musicselect = document.getElementById("musicselect");


musicselect.onclick = async() =>{
    let file = await dialog.showOpenDialog(mainWindow, {
        filters:[{
            name:"music files",
            extensions: ['mp3','wav','flac']
        }
        ]
    });
    console.log(file)
}
