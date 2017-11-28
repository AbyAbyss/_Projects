(function() {
    var inputNow = document.getElementById('inputNow');
    var btnNow = document.getElementById('btnNow');
    var listsNow = {
        todoNow: document.getElementById('todoNow'),
        doneNow: document.getElementById('doneNow')
    };

    var makeTaskHtml = function(str) {
        var el = document.createElement(li);
        el.textContent = str;
        var el = '<li>' + str;
        listsNow.doneNow.innerHTML = el;
        return el;
    };



    //listsNow.todoNow.appendChild(makeTaskHtml('Test Task'));
}());