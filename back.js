function NewGame(arr) {
    for (let i of arr)
        for (let val of i)
            val = '*';
    // Oчищение ячеек
    let cells = document.querySelectorAll("#container div");
    cells.innerHTML = "";
}

function Start() {
    NewGame(logic_field);
}

function InsertElement(elem, i, j) {
    let check = elem.firstElementChild;
    if (!check) {
        const imgX = "<img src='image/x120px.png'>";
        elem.innerHTML = imgX;
        logic_field[i][j] = "x";
        if (CheckWinX(logic_field)) {
            alert("You won!");
            NewGame(logic_field);
        } else if (CheckDraw(logic_field)) {
            alert("Draw!");
            NewGame(logic_field);
        }
        // bot turn
    } else {
        alert("This cell already occupied, try another one");
        return null;
    }
}

function Insert11(elem) {
    InsertElement(elem, 0, 0)
}
function Insert12(elem) {
    InsertElement(elem, 0, 1)
}
function Insert13(elem) {
    InsertElement(elem, 0, 2)
}
function Insert21(elem) {
    InsertElement(elem, 1, 0)
}
function Insert22(elem) {
    InsertElement(elem, 1, 1)
}
function Insert23(elem) {
    InsertElement(elem, 1, 2)
}
function Insert31(elem) {
    InsertElement(elem, 2, 0)
}
function Insert32(elem) {
    InsertElement(elem, 2, 1)
}
function Insert33(elem) {
    InsertElement(elem, 2, 2)
}
function CheckWinX(arr) {
    if (arr[0][0] == 'x' && arr[0][1] == 'x' && arr[0][2] == 'x')
        return true;
    else if (arr[1][0] == 'x' && arr[1][1] == 'x' && arr[1][2] == 'x')
        return true;
    else if (arr[2][0] == 'x' && arr[2][1] == 'x' && arr[2][2] == 'x')
        return true;
    else if (arr[0][0] == 'x' && arr[1][0] == 'x' && arr[2][0] == 'x')
        return true;
    else if (arr[0][1] == 'x' && arr[1][1] == 'x' && arr[2][1] == 'x')
        return true;
    else if (arr[0][2] == 'x' && arr[1][2] == 'x' && arr[2][2] == 'x')
        return true;
    else if (arr[0][0] == 'x' && arr[1][1] == 'x' && arr[2][2] == 'x')
        return true;
    else if (arr[0][2] == 'x' && arr[1][1] == 'x' && arr[2][0] == 'x')
        return true;
    else return false;
}

function CheckWinO(arr) {
    if (arr[0][0] == 'o' && arr[0][1] == 'o' && arr[0][2] == 'o')
        return true;
    else if (arr[1][0] == 'o' && arr[1][1] == 'o' && arr[1][2] == 'o')
        return true;
    else if (arr[2][0] == 'o' && arr[2][1] == 'o' && arr[2][2] == 'o')
        return true;
    else if (arr[0][0] == 'o' && arr[1][0] == 'o' && arr[2][0] == 'o')
        return true;
    else if (arr[0][1] == 'o' && arr[1][1] == 'o' && arr[2][1] == 'o')
        return true;
    else if (arr[0][2] == 'o' && arr[1][2] == 'o' && arr[2][2] == 'o')
        return true;
    else if (arr[0][0] == 'o' && arr[1][1] == 'o' && arr[2][2] == 'o')
        return true;
    else if (arr[0][2] == 'o' && arr[1][1] == 'o' && arr[2][0] == 'o')
        return true;
    else return false;
}

function CheckDraw(arr) {
    for (const val of object)
        if (val == '*') return false;
    return true;
}
// MAIN -----------------------------------------

let logic_field = [
    ['*', '*', '*'],
    ['*', '*', '*'],
    ['*', '*', '*']
];

//-----------------------------------------------