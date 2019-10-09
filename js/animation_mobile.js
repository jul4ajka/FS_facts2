let prevDropOpened1 = null;

function toggleBar1(id) {
    let dropdown = $(`#${id}`);
    let dropdownImg = $(`#${id}1i`);
    console.log(dropdown.attr('id'));
    console.log(dropdownImg.attr('id'));
    console.log(dropdown.css("display"));
    if (dropdown.css("display") == "none") {
        dropdown.css({"display": "flex"});
        console.log(dropdown.css("display"));
        if (dropdownImg) {
            dropdownImg.css({"display": "none"});
        }
        if (prevDropOpened1 && prevDropOpened1.attr('id') != dropdown.attr('id')) {
            prevDropOpened1.css({"display": "none"});

            let prevImg = $(`#${prevDropOpened1.attr('id')}1i`);
            if (prevImg) {
                prevImg.css({"display": "block"});
            }
        }
        prevDropOpened1 = dropdown;
    } else {
        dropdown.css({"display": "none"});
        if (dropdownImg) {
            dropdownImg.css({"display": "block"});
        }
    }
}

let ids1 = ['1d1i', '2d1i', '3d1i'];//values of attribute 'dropid'
let currentId1 = 0;

function autoToggler1() {
    toggleBar1(ids1[currentId1++]);
    if (currentId1 >= ids1.length) {
        currentId1 = 0
    }
}

function getInterval1() {
    return setInterval(autoToggler1, 2500);//time in ms
}

let dropInterval1 = getInterval1();