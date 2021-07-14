async function getRandomDog(){
    console.log('click')
    const url = 'https://random.dog/woof.json';
    displayLoading();
    try{
        const res = await axios.get(url);
        displayImage(res.data.url);
    } catch {
        alert('Could not reach the Dog API. Try again later.')
    }
}

async function getRandomCat(){
    console.log('click')
    const url = 'https://aws.random.cat/meow';
    displayLoading();
    try{
        const res = await axios.get(url);
        displayImage(res.data.url);
    } catch {
        alert('Could not reach the Cat API. Try again later.')
    }
}

function displayLoading(){
    const img = document.querySelector('img');
    const vid = document.querySelector('video');
    img.src = 'tenor.gif';
    img.classList.remove('hidden');
    vid.classList.add('hidden');
}

function displayImage(url){
    const splitURL = url.split('.');
    const vid = document.querySelector('video');
    const img = document.querySelector('img');
    const fileExt = splitURL[splitURL.length-1];
    if (fileExt === 'mp4' || fileExt === 'webm'){
        vid.children[0].remove();
        const newSrc = document.createElement('source');
        newSrc.type = `video/${fileExt}`;
        newSrc.src = url;
        vid.append(newSrc);
        img.classList.add('hidden');
        vid.classList.remove('hidden');

    } else {
        img.src = url;
        img.classList.remove('hidden');
        vid.classList.add('hidden');
    }
}



document.querySelector('#dog').addEventListener('click', getRandomDog);
document.querySelector('#cat').addEventListener('click', getRandomCat);