window.addEventListener("load", function() {
  setTimeout(() => {

        // 1.Поменяйте приветствие с "Привет Всем!" на "Привет Виталий Валентинович!".
        let divGreeting = document.querySelector("#greeting");
        divGreeting.textContent = "Привет Виталий Валентинович!";

        // 2.Установите фоновый цвет для каждого <li> на yellow.
        let setLiBgcolor = document.querySelectorAll("li");
        for (let i = 0; i < setLiBgcolor.length; i++) {
            setLiBgcolor[i].style.backgroundColor = 'yellow';
        }

        // 3.Создайте тег изображения, установите его атрибут src наhttp://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, и вложите в div с идентификатором #greeting.
        let newImg = document.createElement(`img`);
        divGreeting.appendChild(newImg);
        newImg.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
        newImg.setAttribute("alt", "Hi!");
        newImg.className = "imgfirst";

        // 4.Создайте и добавьте ul элемент в конец body с классом "todo-items"
        let newUl = document.createElement(`ul`);
        let bodyElement = document.querySelector("body");
        bodyElement.appendChild(newUl);
        newUl.className = "todo-items";

        // 5.Пройдитесь по массиву ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'] и создайте тег li для каждого элемента, например: <li>приготовить кофе</li>
        // 6.Добавьте каждый созданный ранее тег li в вашу конструкцию ul с классом "todo-items".
        let arr1 = ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'];

        for (let i=0; i < arr1.length; i++) {
            let newLi = document.createElement(`li`);
            newLi.textContent = arr1[i];
            newUl.appendChild(newLi);
        }

        // 7.Добавьте класс selected к <li> при щелчке по нём. Удалите его из любых других li.
        let ulSelected = document.querySelector("#essentials");
        ulSelected.addEventListener("click",clickSelected, false);
        function clickSelected(e) {
            let childs = e.target.parentNode.childNodes;
            for (let i=0; i < childs.length; i++) {
                if (childs[i].className === 'selected')
                    childs[i].classList.remove('selected')
            }
            e.target.classList.add('selected');
              // 8.Измените изображение, чтобы оно было последним выбранным продуктом питания.
            let changeImg = document.querySelectorAll("img");
            if (changeImg[1].className !== 'imgfirst') {
                if (e.target.innerText === 'молоко') {
                    changeImg[1].setAttribute("src", "./images/milk.jpg");
                    changeImg[1].setAttribute("title", "молоко");
                    changeImg[1].setAttribute("alt", "молоко");
                } else if (e.target.innerText === 'мёд') {
                          changeImg[1].setAttribute("src", "./images/honey.jpg");
                          changeImg[1].setAttribute("title", "мёд");
                          changeImg[1].setAttribute("alt", "мёд");
                        } else if (e.target.innerText === 'вода') {
                                  changeImg[1].setAttribute("src", "./images/water.jpg");
                                  changeImg[1].setAttribute("title", "вода");
                                  changeImg[1].setAttribute("alt", "вода");
                                } else if (e.target.innerText === 'вино') {
                                          changeImg[1].setAttribute("src", "./images/wine.jpg");
                                          changeImg[1].setAttribute("title", "вино");
                                          changeImg[1].setAttribute("alt", "вино");
                                        } else if (e.target.innerText === 'пиво') {
                                                  changeImg[1].setAttribute("src", "./images/beer.jpg");
                                                  changeImg[1].setAttribute("title", "пиво");
                                                  changeImg[1].setAttribute("alt", "пиво");
                                                }
            }
        }

        // 9.Когда на серый div наводится указатель мыши, он удаляется из DOM.
        let delDiv = document.querySelector("#ghosting");
        delDiv.addEventListener("mouseover",del, false);
        function del() {
            document.querySelector("body").removeChild(delDiv);
        }

        // 10.Когда на оранжевый div наводится указатель мыши, его ширина удваивается. Когда мы уходим за пределы div, ширина возвращается к своему первоначальному размеру.
        let resize = document.querySelector("#resize");
        resize.addEventListener("mouseover",() => {resize.style.width = "400px"}, false);
        resize.addEventListener("mouseout",() => {resize.style.width = "200px"}, false);

        // 11.Когда кнопка Reset нажата - удалите класс selected из каждого <li> и измените изображение на panic.jpg.
        let reset = document.querySelector("#reset")
        reset.addEventListener("click",resetgo, false);
        function resetgo () {
            let selected = document.querySelectorAll(".selected");
            selected.forEach(sel => sel.classList.remove('selected'))
            let changeImg = document.querySelectorAll('img');
            changeImg[1].setAttribute("src", './images/panic.jpg');
        }

        // 12.При нажатии клавиши 1, 2, 3, 4, 5, 6, 7, 8, 9 или 0 на странице появляется сообщение «Я НЕНАВИЖУ ЧИСЛААААА!»
        window.addEventListener("keydown", pressKey, false);
        function pressKey(e) {
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) 
                alert("Я НЕНАВИЖУ ЧИСЛААААА!");  
        }

}, 3000);
})