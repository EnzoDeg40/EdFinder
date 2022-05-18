// Liste et affiche les fichiers d'un dossier
function ls(folderPath){
    const directory = folderPath;

    fs.readdir(directory, (err, files) => {
        const result = document.getElementById("result");
        result.innerHTML = "";

        files.forEach(file => {
            if(itemTemplate == null){
                console.error("itemTemplate is null");
            }
            
            result.innerHTML += itemTemplate.replace("{name}", file);
        })
    });
}

const fs = require('fs')

// Charge les templates HTML
try {
    var itemTemplate = fs.readFileSync('./templates/item.html', 'utf8')
} catch (err) {
    console.error(err)
}

ls('./');

onmousemove = function (e) {
    let margincursor = 20;
    let usercusor =  document.getElementById("user-cursor");
    usercusor.style.top = (e.clientY + margincursor) + "px";
    usercusor.style.left = (e.clientX + margincursor) + "px";
}

var menu = document.getElementById('menu');

menu.addEventListener('click', event => {
    // Check if it’s the list element, we want the clicks only from them
    //if (event.target.classList.contains('list--item')) {
        console.log('The item ' + event.target.innerHTML + ' was just clicked')
    //}

    switch (event.target.innerHTML) {
        case 'Enzo': ls('C:\\Users\\enzod'); break;
        case 'Racine /': ls('C:\\'); break;
        case 'Disque C': ls('C:\\'); break;
        case 'Disque D': ls('D:\\'); break;
        case 'Disque E': ls('E:\\'); break;
        case 'Disque F': ls('F:\\'); break;


        default:
            console.log('Nothing was just clicked')
    }
})



//ls('C:\\Users\\enzod')