const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet%2Cid&order=date&maxResults=15';
const container = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90fb278746mshfb22b31fdf3f026p11aa45jsn54fb76d5dd3c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
}

//Función autoejecutable, para que no se tenga que depender de una invocación a la lógica, sino que automaticamente ejecuta la función

(async () => {
	try {
		const videos = await fetchData(API);
		let view = 
		videos.items.map(video => 
			`<div class="group relative">
			<div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
				<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${video.snippet.title}
				</h3>
			</div>
		</div>`
		).slice(0,12).join('');

		content.innerHTML = view;
	}
	catch (error) {
		console.log(error);
	}
})();