import axom from './axom-eval-web/Cargo.toml'
export function axom_run() {
    let out_dom = document.getElementById("axom_output");

    (new Function("print", axom.compile(document.getElementById("axom_input")?.value)))((...l) => {
        //console.log("Recieved ", l)

        let new_elm = document.createElement("p");
        new_elm.innerHTML = l.join(" ")

        out_dom?.appendChild(new_elm);
    })
}

window.axom_run = axom_run;