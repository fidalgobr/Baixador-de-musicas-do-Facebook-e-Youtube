const exec = require('node-exec-promise').exec;
const links = require('./links.json');
const sleep = (time) => new Promise(res => setTimeout(res, time));

async function main() {
    let count = 466;
    for (let link of links) {
        let delay = Math.random() * 1000 * 3;
        await sleep(delay);
        console.log(`Baixando... ${link}`);

        try {
            let comando = await exec(`yt-dlp -x --audio-format mp3 "${link}" --cookies-from-browser brave -o "./musicas/Musica facebook ${count}.mp3"`);
            console.log('Sucesso! \n\n' + comando.stdout);
            count++;
        } catch (e) {
            console.log('Erro ao baixar música!');
        }
    }
}

main();