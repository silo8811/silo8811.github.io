// (insert me using a GPT to covert lua to html since im busy)
function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount);
    }

    visitCount++;

    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCounter').innerText = visitCount;
}

window.onload = updateVisitCount;
