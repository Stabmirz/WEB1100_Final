const dog_api = 'https://dog.ceo/api/'
const selectBreed = document.querySelector("#selectBreed");
const viewDog = document.querySelector("#viewDog");
const breedImage = document.querySelector("#breedImage");

function getDogBreeds() {
    $.ajax({
        url: `${dog_api}breeds/list`,
        dataType: 'json',
        success: (data => {
            // console.log(data);
            for (let i=0; i<data.message.length; i++) {
                selectBreed.innerHTML += `
            <option value= "${data.message[i]}">${data.message[i]}</option>
            `
            }
        }),
        error: error => {
            console.log("There was an error")
        }
    })
}
getDogBreeds();

viewDog.addEventListener('click', e=>{
    const breedName = selectBreed.value;
    // console.log(breedName);
    $.ajax({
        url: `${dog_api}breed/${breedName}/images/random`,
        dataType: 'json',
        success: (data => {
            // console.log(data);
            breedImage.setAttribute("src", data.message);
        }),
        error: error => {
            console.log("There was an error")
        }
    })
})
