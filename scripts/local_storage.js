if (localStorage.getItem('sites') == null) {
    localStorage.setItem('sites', JSON.stringify(def_sites))
}

let sites = [];

const getList = (type) => {
    return JSON.parse(localStorage.getItem(type));
}

const updSites = () => {
    sites = getList('sites');
}

updSites();