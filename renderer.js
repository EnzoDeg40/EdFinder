// Liste et affiche les fichiers d'un dossier
function ls(folderPath){
    // Modifie le dossier courant
    currentFolder = folderPath;

    // Liste les fichiers du dossier
    fs.readdir(folderPath, (err, files) => {

        // Vide l'affichage
        const result = document.getElementById("result");
        result.innerHTML = "";

        // Si il y a une erreur
        if(err != null){
            result.innerHTML = err;
            return;
        }

        // Verifie que le template est charger
        if (itemTemplate == null) {
            result.innerHTML = "itemTemplate is not loaded";
            return;
        }

        let nFolder = 0;
        let nFile = 0;

        // Pour chaque fichier
        files.forEach(file => {
            
            // Verifie que le chemin du fichier est valide
            if(!(fs.existsSync(folderPath + "/" + file))){
                return;
            }

            // Verifie que le fichier est un dossier
            isDirectory = fs.lstatSync(folderPath + "/" + file).isDirectory();

            // Créé un nouveau template temportaire
            let currentItemTemplate = itemTemplate;

            // Si c'est un dossier
            if(isDirectory){
                currentItemTemplate = currentItemTemplate.replace("{path}", "assets/SVG/Folder.svg");
                currentItemTemplate = currentItemTemplate.replace("{type}", "folder");
                nFolder++;
            }
            else{
                nFile++;

                // Récupère l'extension du fichier
                let extension = file.split(".").pop();

                // Si le fichie extension existe
                if(fs.existsSync("ressources/material-icon/" + extension + ".svg")){
                    currentItemTemplate = currentItemTemplate.replace("{path}", "ressources/material-icon/" + extension + ".svg");
                    currentItemTemplate = currentItemTemplate.replace("{type}", extension);
                }
                // Si c'est une image
                else if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "gif" || extension == "webp" || extension == "img"){
                    currentItemTemplate = currentItemTemplate.replace("{path}", "ressources/material-icon/image.svg");
                    currentItemTemplate = currentItemTemplate.replace("{type}", "image");
                }
                // Si c'est un fichier javascript
                else if(extension == "js"){
                    currentItemTemplate = currentItemTemplate.replace("{path}", "ressources/material-icon/javascript.svg");
                    currentItemTemplate = currentItemTemplate.replace("{type}", "js");
                }
                // Si c'est un fichier markdown
                else if(extension == "md"){
                    currentItemTemplate = currentItemTemplate.replace("{path}", "ressources/material-icon/markdown.svg");
                    currentItemTemplate = currentItemTemplate.replace("{type}", "md");
                }
                // Si c'est une vidéo
                else if(extension == "mp4" || extension == "webm" || extension == "ogg"){
                    currentItemTemplate = currentItemTemplate.replace("{path}", "ressources/material-icon/video.svg");
                    currentItemTemplate = currentItemTemplate.replace("{type}", "video");
                }
                // Si c'est une musique
                else if(extension == "mp3" || extension == "wav"){
                    currentItemTemplate = currentItemTemplate.replace("{path}", "ressources/material-icon/audio.svg");
                    currentItemTemplate = currentItemTemplate.replace("{type}", "music");
                }
                else{
                    currentItemTemplate = currentItemTemplate.replace("{path}", "assets/SVG/File.svg");
                    currentItemTemplate = currentItemTemplate.replace("{type}", "file");
                    console.log(extension);
                }



            }

            currentItemTemplate = currentItemTemplate.replace("{name}", file);

            result.innerHTML += currentItemTemplate;

            
            //console.log(folderPath + file);
            //console.log(fs.existsSync(folderPath + file) && fs.lstatSync(folderPath + files).isDirectory());
        })

        document.getElementById('folderInfo').innerHTML = "Fichiers : " + nFile + " | Dossiers : " + nFolder;
    });
}

const fs = require('fs')

// Charge les templates HTML
try {
    var itemTemplate = fs.readFileSync('./templates/item.html', 'utf8')
} catch (err) {
    console.error(err)
}

var currentFolder = "./";
ls(currentFolder);

onmousemove = function (e) {
    let margincursor = 20;
    let usercusor =  document.getElementById("user-cursor");
    usercusor.style.top = (e.clientY + margincursor) + "px";
    usercusor.style.left = (e.clientX + margincursor) + "px";
}

var menu = document.getElementById('menu');
var result = document.getElementById('result');

menu.addEventListener('click', event => {
    // Check if it’s the list element, we want the clicks only from them
    //if (event.target.classList.contains('list--item')) {
        //console.log('The item ' + event.target.innerHTML + ' was just clicked')
    //}

    switch (event.target.innerHTML) {
        case 'Enzo': ls('C:\\Users\\enzod'); break;
        case 'Bureau': ls('C:\\Users\\enzod\\Desktop'); break;
        case 'Téléchargements': ls('C:\\Users\\enzod\\Downloads'); break;
        case 'Racine /': ls('C:\\'); break;
        case 'Disque C': ls('C:\\'); break;
        case 'Disque D': ls('D:\\'); break;
        case 'Disque E': ls('E:\\'); break;
        case 'Disque F': ls('F:\\'); break;


        default:
            console.log('Nothing was just clicked')
    }
})

result.addEventListener('click', event => {
    //console.log(event.target.classList);

    // Check the class of the clicked element
    if (event.target.classList.contains('item')
        // || event.target.classList.contains('icon')
        // || event.target.classList.contains('name')
    ) {
        itemName = event.target.innerText;
        itemPath = currentFolder + '\\' + itemName;

        console.log(itemPath);



        // To do : check if is a folder or a file

        
        console.log();

    }

})



//ls('C:\\Users\\enzod')