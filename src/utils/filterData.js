export default function filterData(arr, query) {
    return arr.filter(item => {
        const name = item.title.toLowerCase();

        return name.split(' ').some(word => word.startsWith(query.trim().toLowerCase()));
    })
}