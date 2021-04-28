console.log("vtop15+ extension active");
const initialTime = Date.now();
const menuToggle = document.querySelector("#menu-toggle");
if (menuToggle !== null) {
    const doSomething = () => {
        var winImage = document.querySelector("#winImage")?.value;
        var authorizedID = document.querySelector("#authorizedID")?.value;
        fetch(
            "https://vtop.vit.ac.in/vtop/studentsRecord/StudentProfileAllView",
            {
                headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type":
                        "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "sec-gpc": "1",
                    "x-requested-with": "XMLHttpRequest",
                },
                referrer: "https://vtop.vit.ac.in/vtop/initialProcess",
                referrerPolicy: "strict-origin-when-cross-origin",
                body: `verifyMenu=true&winImage=${winImage}&authorizedID=${authorizedID}&nocache=@(new Date().getTime())`,
                method: "POST",
                mode: "cors",
                credentials: "include",
            }
        ).then((res) =>
            console.log((Date.now() - initialTime) / 1000, res.status, res)
        );
    };
    doSomething();
    setInterval(() => {
        doSomething();
    }, 2 * 60 * 1000);
}
