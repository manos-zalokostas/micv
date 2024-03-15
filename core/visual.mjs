function opacity(elem) {

    if (elem) {
        elem.style.display = 'block';
        elem.style.opacity = '0';

        const duration = 1000; // Set your desired duration in milliseconds
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;

            elem.style.opacity = progress < 1 ? progress : 1;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }
}


function set(...pack) {

    const newspaperSpinning = [
        {transform: "rotate(0) scale(1)"},
        {transform: "rotate(360deg) scale(0)"},
    ];

    const sets = {
        // easing: "steps(4, end)",
        duration: 1000,
        fill: "forwards",

    };

    const SAM = [
        {elem: 'a', attra: 1, attrb: 2, attrc: 3},
        {elem: 'b', attra: 11, attrb: 21, attrc: 31},
        {elem: 'c', attra: 21, attrb: 22, attrc: 23},
    ]

    pack.forEach(
        entry => {
            let [target, ...attrs] = Object.entries(entry),
                param = Object.fromEntries(attrs),
                $elem = target.pop();

            // // console.log({$elem, param})
            $elem.animate(param, sets)
        }
    )

}


export default {
    set,
    opacity
}