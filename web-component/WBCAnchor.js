export class WBCAnchor extends HTMLAnchorElement {

    connectedCallback() {
        this.addEventListener('click', evt => {
            !confirm('LIKE REAAAALLYYYY ?? ') && evt.preventDefault();
        })
    }

}


