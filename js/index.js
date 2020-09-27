function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

updateInnerHTML('h1', 'Out of the night that covers me');
updateInnerHTML('h2.intro', 'Black as the pit from pole to pole');

function strong(value) {
 return '<strong>' + value + '</strong>';
}

var important = strong(document.querySelector('p.important').innerHTML);
updateInnerHTML('p.important', important);