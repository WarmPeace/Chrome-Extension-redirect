const observer = new MutationObserver(function (mutations, mutationInstance) {
    const otherDiv = document.querySelectorAll('.Polaris-Text--root_yj4ah a');
    if (otherDiv.length > 0) {
        for (let i = 0; i < otherDiv.length; i++) {
            let div = document.createElement("div");
            div.className = "extensionCheckboxDiv";
            div.style.marginTop = "-39px";
            div.style.marginLeft = "50%";
            console.log(generateUrl(otherDiv[i].textContent));
            let htmlString = '<div><img style="width: 30px; height: 25px;" value="' + generateUrl(otherDiv[i].textContent) + '" class="redirect-btn" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTE5LjY0MyA1MTkuNjQzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxOS42NDMgNTE5LjY0MyIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNTkuODIzIiBjeT0iMjU5Ljg2NiIgcj0iODAiLz48cGF0aCBkPSJtNTExLjY3MyAyMzcuNzA2Yy02MS40OTQtNzQuMzEtMTU0LjU3OS0xNDUuODQtMjUxLjg1LTE0NS44NC05Ny4yOSAwLTE5MC4zOTcgNzEuNTgtMjUxLjg1IDE0NS44NC0xMC42MyAxMi44NC0xMC42MyAzMS40OCAwIDQ0LjMyIDE1LjQ1IDE4LjY3IDQ3Ljg0IDU0LjcxIDkxLjEgODYuMiAxMDguOTQ5IDc5LjMxMiAyMTIuMzExIDc5LjQ4NyAzMjEuNSAwIDQzLjI2LTMxLjQ5IDc1LjY1LTY3LjUzIDkxLjEtODYuMiAxMC41OTktMTIuODE1IDEwLjY1NC0zMS40MzggMC00NC4zMnptLTI1MS44NS04OS44NGM2MS43NiAwIDExMiA1MC4yNCAxMTIgMTEycy01MC4yNCAxMTItMTEyIDExMi0xMTItNTAuMjQtMTEyLTExMiA1MC4yNC0xMTIgMTEyLTExMnoiLz48L3N2Zz4="/></div>';
            div.innerHTML = htmlString.trim();
            otherDiv[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(div);;
        }
        mutationInstance.disconnect();
    }
    var popupElement = document.createElement('div');

    popupElement.innerHTML = `<div id="popup" style="display: none;">
                                <div style="height: 100vh;
                                            width: 100%;
                                            display: flex;
                                            flex-wrap: wrap;
                                            justify-content: center;
                                            align-items: center;
                                            background-color: rgb(96 95 127 / 70%);
                                            position: absolute;
                                            top: 0;
                                            left: 0;">
                                    <img style="width: 30px; height: 25px;" value="' + generateUrl(otherDiv[i].textContent) + '" class="redirect-btn" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTE5LjY0MyA1MTkuNjQzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxOS42NDMgNTE5LjY0MyIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNTkuODIzIiBjeT0iMjU5Ljg2NiIgcj0iODAiLz48cGF0aCBkPSJtNTExLjY3MyAyMzcuNzA2Yy02MS40OTQtNzQuMzEtMTU0LjU3OS0xNDUuODQtMjUxLjg1LTE0NS44NC05Ny4yOSAwLTE5MC4zOTcgNzEuNTgtMjUxLjg1IDE0NS44NC0xMC42MyAxMi44NC0xMC42MyAzMS40OCAwIDQ0LjMyIDE1LjQ1IDE4LjY3IDQ3Ljg0IDU0LjcxIDkxLjEgODYuMiAxMDguOTQ5IDc5LjMxMiAyMTIuMzExIDc5LjQ4NyAzMjEuNSAwIDQzLjI2LTMxLjQ5IDc1LjY1LTY3LjUzIDkxLjEtODYuMiAxMC41OTktMTIuODE1IDEwLjY1NC0zMS40MzggMC00NC4zMnptLTI1MS44NS04OS44NGM2MS43NiAwIDExMiA1MC4yNCAxMTIgMTEycy01MC4yNCAxMTItMTEyIDExMi0xMTItNTAuMjQtMTEyLTExMiA1MC4yNC0xMTIgMTEyLTExMnoiLz48L3N2Zz4="/>
                                </div>
                            </div>`;
    // if (document.querySelector('.JkO6J')) {
    //     document
    //         .querySelector('.JkO6J')
    //         .appendChild(popupElement);
    // }
});

function addElement() {
    const otherDiv = document.querySelectorAll('.Polaris-Text--root_yj4ah a');
    if (otherDiv.length > 0) {
        for (let i = 0; i < otherDiv.length; i++) {
            let div = document.createElement("div");
            div.className = "extensionCheckboxDiv";
            div.style.marginTop = "-39px";
            div.style.marginLeft = "50%";
            let htmlString = '<div><img style="width: 30px; height: 25px;" value="' + generateUrl(otherDiv[i].textContent) + '" class="redirect-btn" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTE5LjY0MyA1MTkuNjQzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxOS42NDMgNTE5LjY0MyIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNTkuODIzIiBjeT0iMjU5Ljg2NiIgcj0iODAiLz48cGF0aCBkPSJtNTExLjY3MyAyMzcuNzA2Yy02MS40OTQtNzQuMzEtMTU0LjU3OS0xNDUuODQtMjUxLjg1LTE0NS44NC05Ny4yOSAwLTE5MC4zOTcgNzEuNTgtMjUxLjg1IDE0NS44NC0xMC42MyAxMi44NC0xMC42MyAzMS40OCAwIDQ0LjMyIDE1LjQ1IDE4LjY3IDQ3Ljg0IDU0LjcxIDkxLjEgODYuMiAxMDguOTQ5IDc5LjMxMiAyMTIuMzExIDc5LjQ4NyAzMjEuNSAwIDQzLjI2LTMxLjQ5IDc1LjY1LTY3LjUzIDkxLjEtODYuMiAxMC41OTktMTIuODE1IDEwLjY1NC0zMS40MzggMC00NC4zMnptLTI1MS44NS04OS44NGM2MS43NiAwIDExMiA1MC4yNCAxMTIgMTEycy01MC4yNCAxMTItMTEyIDExMi0xMTItNTAuMjQtMTEyLTExMiA1MC4yNC0xMTIgMTEyLTExMnoiLz48L3N2Zz4="/></div>';
            div.innerHTML = htmlString.trim();
            otherDiv[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(div);;
        }
        mutationInstance.disconnect();
    }
    var popupElement = document.createElement('div');

    popupElement.innerHTML = `<div id="popup" style="display: none;">
                                <div style="height: 100vh;
                                            width: 100%;
                                            display: flex;
                                            flex-wrap: wrap;
                                            justify-content: center;
                                            align-items: center;
                                            background-color: rgb(96 95 127 / 70%);
                                            position: absolute;
                                            top: 0;
                                            left: 0;">
                                        <img style="width: 30px; height: 25px;" value="' + generateUrl(otherDiv[i].textContent) + '" class="redirect-btn" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTE5LjY0MyA1MTkuNjQzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxOS42NDMgNTE5LjY0MyIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNTkuODIzIiBjeT0iMjU5Ljg2NiIgcj0iODAiLz48cGF0aCBkPSJtNTExLjY3MyAyMzcuNzA2Yy02MS40OTQtNzQuMzEtMTU0LjU3OS0xNDUuODQtMjUxLjg1LTE0NS44NC05Ny4yOSAwLTE5MC4zOTcgNzEuNTgtMjUxLjg1IDE0NS44NC0xMC42MyAxMi44NC0xMC42MyAzMS40OCAwIDQ0LjMyIDE1LjQ1IDE4LjY3IDQ3Ljg0IDU0LjcxIDkxLjEgODYuMiAxMDguOTQ5IDc5LjMxMiAyMTIuMzExIDc5LjQ4NyAzMjEuNSAwIDQzLjI2LTMxLjQ5IDc1LjY1LTY3LjUzIDkxLjEtODYuMiAxMC41OTktMTIuODE1IDEwLjY1NC0zMS40MzggMC00NC4zMnptLTI1MS44NS04OS44NGM2MS43NiAwIDExMiA1MC4yNCAxMTIgMTEycy01MC4yNCAxMTItMTEyIDExMi0xMTItNTAuMjQtMTEyLTExMiA1MC4yNC0xMTIgMTEyLTExMnoiLz48L3N2Zz4="/>
                                </div>
                            </div>`;
    // if (document.querySelector('.JkO6J')) {
    //     document
    //         .querySelector('.JkO6J')
    //         .appendChild(popupElement);
    // }
}

observer.observe(document, {
    childList: true,
    subtree:   true
});

window.addEventListener('mousemove',function(e){
    const AlreadyAddElement = document.getElementsByClassName('extensionCheckboxDiv');
    if (AlreadyAddElement.length == 0 && window.location.href.includes('order')) {
        addElement();
    }
});

window.addEventListener('click', function(event) {
    // Check if the clicked element has the class 'redirect-btn'
    if (event.target.classList.contains('redirect-btn')) {
        // Get the value attribute of the clicked element
        var url = event.target.getAttribute('value');
        console.log(url);
        console.log(event.target.classList);
        let win = window.open(url, "_blank");
    }
});


function generateUrl(productName) {
    // Remove punctuation from the product name
    let processedName = productName.replace(/['"”“]/g, "");

    // Replace spaces with dashes
    processedName = processedName.replace(/\s+/g, "-");

    // Prefix the domain and return the result
    return "https://addictonline.co.il/products/" + processedName;
}

function redirect() {
    let win = window.open("https://delivery-cargo.fly.dev/print_label.html", "_blank");
}

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

if (popup) {
    closeBtn.addEventListener('click', ()=>{
        popup.style.display = 'none';
    });
    
    popup.addEventListener('click', ()=>{
        popup.style.display = 'none';
    });
}
