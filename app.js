// call the fetch API to give the var its value...we give fetch() the 'path to the resource'
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// remember fetch returns a promise! logging it right after will also tell us what 'state' its in
console.log(fetchPromise);

// suppose we get success...then fetch is gonna take our response [object] (from the server) and do the function within
fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
