// Sets important variables to be used in the rest of the code
const container = document.getElementById('container');
let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');
const resetButton = document.getElementById('reset');

// Function to set up the grid based on the user input for grid size
function setupGrid(gridSize){
    container.innerHTML = ''; // Clear the container before creating a new grid
    makeRows(gridSize);
    makeColumns(gridSize);
}

// Function to reset the grid, prompts the user for a new grid size and sets up the grid accordingly
function resetGrid(){
    let userInput = prompt("Enter the number of rows and columns for the grid (max 100):");
    let gridSize = parseInt(userInput);
    if(gridSize <= 100 && gridSize > 0){
        setupGrid(gridSize);
    } else{
        alert("Please enter a number less than or equal to 100.");  
    
        
    }
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
    if(e.target.classList.contains('column')){ // Check if the target element is a column   
        let currentOpacity = parseFloat(e.target.style.opacity) || 0; // Get current opacity, default to 0 if not set
        if(!currentOpacity){
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // If opacity is not set, initialize it to 0

            e.target.style.opacity = 0.1; // Set initial opacity to 0.1
        }
        else if(currentOpacity < 1){
            e.target.style.opacity = (currentOpacity + 0.1).toString(); // Increase opacity by 0.1 on each mouseover until it reaches 1
        }
    }
});

    
    

setupGrid(16); // Initial grid setup with 16 rows and columns
resetButton.addEventListener('click', resetGrid); // Event listener for the reset button to create a new grid based on user input
