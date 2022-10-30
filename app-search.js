var inputSearch = document.getElementById("visual-search");
inputSearch.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (inputSearch.value !== '') {
            localStorage.setItem('keyWord', inputSearch.value)
            console.log(inputSearch.value);
        }
        // document.getElementById("myBtn").click();
    }
});

