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

ls('./node_modules/');

onmousemove = function (e) {
    let margincursor = 20;
    let usercusor =  document.getElementById("user-cursor");
    usercusor.style.top = (e.clientY + margincursor) + "px";
    usercusor.style.left = (e.clientX + margincursor) + "px";
}
