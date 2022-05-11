let inpFile = document.getElementById("fileinput")
let area = document.getElementById("area");
let filecontainer = document.getElementById("filecontainer");



area.addEventListener('drop', function (e) {
    e.preventDefault();
    [...e.dataTransfer.files].forEach(file => {
        if (file.size / 1024 / 1024 > 3) {
            alert("too big")
            return;
        }
        if (this.style.color == "white") this.style.color = "black"
        else this.style.color = "white"
        let reader = new FileReader();

        let data = document.createElement('div')
        let span = document.createElement('span')

        span.innerText = "X";
        span.classList.add("pr");
        span.onclick = function () {
            this.parentElement.remove();
        }

        data.classList.add("data");

        reader.onload = function () {
            data.innerHTML = ` <img  src="${this.result}"  />  `;
            data.append(span)
        }

        reader.readAsDataURL(file);
        filecontainer.appendChild(data);
    })
})

area.addEventListener('dragover', function (e) {
    e.preventDefault()
})
area.addEventListener("click", function () {
    inpFile.click();
})


inpFile.addEventListener("change", function () {
    [...this.files].forEach(file => {
        if (file.size / 1024 / 1024 > 3) {
            alert("too big")
            return;
        }
        if (this.style.color == "white") this.style.color = "black"
        else this.style.color = "white"
        let reader = new FileReader();

        let data = document.createElement('div')
        let span = document.createElement('span')

        span.innerText = "X";
        span.classList.add("pr");
        span.onclick = function () {
            this.parentElement.remove();
        }

        data.classList.add("data");

        reader.onload = function () {
            data.innerHTML = ` <img  src="${this.result}"  />  `;
            data.append(span)
        }

        reader.readAsDataURL(file);
        filecontainer.appendChild(data);
    })
})

btn.addEventListener('click', function () {
    this.style.color = "white";

})

