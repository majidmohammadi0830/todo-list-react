export class listHelper {
    static findParents = (item, parents, wholeList) => {
        let parent = wholeList.filter((x) => x.id == item.parentId)[0];
        if (parent && parent.parentId) {
            parents.push(parent);
            this.findParents(parent, parents, wholeList);
        }
        else {
            parents.push(parent)
        }
    }
}
