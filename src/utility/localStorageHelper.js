export class localStorageHelper {
    static getObjectByKey = (key) => {
        let obj = localStorage.getItem(key);
        return JSON.parse(obj);
    }
    static setObjectByKey = (key, obj) => {
        let jsonObj = JSON.stringify(obj);
        localStorage.setItem(key, jsonObj);
    }
}