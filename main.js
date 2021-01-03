const inputs = document.querySelectorAll('.imput')

function FocusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function FocusFunc() {
    let parent = this.parentNode.parentNode;
    if (this.vaule == "") {
        parent.classList.remove('focus');
    }

}


inputs.forEach(input => {
    input.addEventListener('focus', FocusFunc);
    input.addEventListener('blur', blurFunc);
})