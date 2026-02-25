// Sets important variables to be used in the rest of the code
const container = document.getElementById('container');
let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');

// Creates a grid of divs with the specified number of rows and columns
function createGrid(){
    makeRows(16);
    makeColumns(16);
}

// Takes a number and creates that many rows in the container
function makeRows(Rownum){
    // create rows
    for(let i = 0; i < Rownum; i++){
        let row = document.createElement('div');
        container.appendChild(row).className='row';
    }
}

    // create columns
function makeColumns(Rownum){
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < Rownum; j++){
            let newcolumn = document.createElement('div');
            rows[i].appendChild(newcolumn).className='column';
        }
    }
}

// event listener for mouseover on the container, changes the background color of the target element to black
container.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'black';
})

createGrid();
