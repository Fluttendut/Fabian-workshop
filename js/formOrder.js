document.addEventListener('DOMContentLoaded', createFormEventListener);

let formOrder;

function createFormEventListener() {
    console.log("create form listener")
}
    if (document.getElementById("formAddOrder") != null) {
        formOrder = document.getElementById("formAddOrder");
        formOrder.addEventListener("submit", handleAddFormSubmit);
}

async function handleAddFormSubmit(event) {
    console.log("nu er vi i add submit")
    event.preventDefault();
    const URL = formOrder.action;
    let name = document.getElementById("inpName").value;
    let email = document.getElementById("inpEmail").value;
    let woodType = document.getElementById("inpWoodType").value;
    let leatherType = document.getElementById("inpLeatherType").value;
    let inlay = document.getElementById("inpInlay").value;
    let priceEstimate = document.getElementById("inpPriceEstimate").value;

    const order = {
        name: name.trim(),
        email: email.trim(),
        woodType: woodType.trim(),
        leatherType: leatherType.trim(),
        inlay: inlay.trim(),
        priceEstimate: priceEstimate.trim(),
    };

    const options = {
        method: "post",
        headers: {
            //'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            "Content-Type": "application/json"},
        mode: 'cors',
        body: JSON.stringify(order)
    };
    await fetch(URL, options)
        .then((res) => {
            if (res.status === 200) {
                console.log(res)
                window.location.href = '../HTML/ConfirmationPage.html';
                return res.json()
            } else {
                console.log("something went wrong")
                throw Error(res.statusText)
            }
        })
        .catch(console.error);
}