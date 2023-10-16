//Variables
const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');

const generateLink = (e) => {
    e.preventDefault();
    

    const gLinkValue = gLink.value;
    const confirmLink = gLinkValue.includes('https://drive.google.com/file/d/');

    if(confirmLink == true){
        const getDownloadLink = gLink.value
        .replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?export=download&id=')
        .replace('/view?usp=drive_link', '')

        downloadLink.value = getDownloadLink;

        //This function allows us to copy the download link
        function copyText(target) {
            if(target.value == ''){
                alert("Please generate a download link.")
            }else{
                navigator.clipboard.writeText(target.value)
                .then(() => {
                    alert("link has been copied to clipboard")
                })
            }
        }
        const copy = document.querySelector('.copy')
        copy.addEventListener('click', () => {
            return copyText(downloadLink)
        })

        //Embed Audio function
        //The audio variable creates the code snippet needed to use the audio file on your webpage
        //The embedAudio will then be set to show the code snippet on the webpage so it can be copied by the user
        const audio = `<audio width="300" height="32" controls="controls" src="${getDownloadLink}" type="audio/mp3"></audio>`;
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value = audio;

        const copyAudio = document.querySelector('.copy-audio')
        copyAudio.addEventListener('click', () => {
            return copyText(embedAudio)
        })

        //Embed Video/Documents
        const getVideoLink = gLink.value.replace("/view?usp=drive_link", "");

        const videoDocument = `<iframe src="${getVideoLink}/preview" width="560" height="315"></iframe>`;
        const embedVideo = document.getElementById("embed-video");
        embedVideo.value = videoDocument;

        const copyVideo = document.querySelector('.copy-video')
        copyVideo.addEventListener('click', () => {
            return copyText(embedVideo);
        })

    }else {
        alert("Please enter a correct google drive file link.")
    }
}


btn.addEventListener("click", generateLink)