function show(sec) {

	document.querySelectorAll(`section:not(#${sec})`)
		.forEach(sec => sec.classList.add('hidden'));
	document.getElementById(sec).classList.remove('hidden');
	document.querySelectorAll(`ul.nav.menu>li:not(#nav-${sec})`)
		.forEach(sec => sec.classList.remove('selected'));
	// document.getElementsByTagName('li').classList.remove('selected');
	document.getElementById(`nav-${sec}`).classList.add('selected');
}

function updateFooterYear() {
	const footer = document.getElementById('footer');
	const currentYear = new Date().getFullYear();
	footer.innerHTML += ` ${currentYear}`
}

function loadBio(details) {
	const { headline, bioArr } = details;
	const headlineSpace = document.getElementById('headline');
	const bioSpace = document.getElementById('bio');
	headlineSpace.innerHTML = `<h2>${headline}</h2>`;
	bioArr.forEach(p => bioSpace.innerHTML += `<p>${p}</p>`);
}

function loadProjects(projects) {
	const projectSpace = document.getElementById('projects');
	projects.forEach(proj => projectSpace.innerHTML += (
		`<div class='project'>
			<h2>${proj.title}</h2>
			<div class='cover' style='background-image:url(${proj.image})'>
				<h3>${proj.subtitle}</h4>
				<p>${proj.description}</p>
				<p>${proj.technology}</p>
			</div>
			<a href=${proj.liveapp}>LiveApp</a>
			<a href=${proj.repo}>Repo</a>
		</div>`
	));
}

function fetchBio(url) {
	return fetch(url)
		.then(res => res.text())
		.then(text => {
			const string = text.split('x(')[1].split(')').slice(0,-1).join('');
			return JSON.parse(string)
		})
		.then(json => {
			console.log(json);
			const headline = json.feed.entry[0].gsx$headline.$t;
			const bioArr = json.feed.entry.map(el => el.gsx$bio.$t);
			loadBio({ headline, bioArr });
		});
}

function fetchProjects(url) {
	return fetch(url)
		.then(res => res.text())
		.then(text => {
			const string = text.split('x(')[1].split(')')[0];
			return JSON.parse(string)
		})
		.then(json => {
			const projects = json.feed.entry.map(proj => ({
				title: proj.gsx$title.$t,
				subtitle: proj.gsx$subtitle.$t,
				description: proj.gsx$description.$t,
				image: proj.gsx$image.$t,
				liveapp: proj.gsx$liveapp.$t,
				repo: proj.gsx$repo.$t,
				technology: proj.gsx$technology.$t,
			}));
			loadProjects(projects);
		});	
}

window.onload = function () {
	const sheetKey = '1jttJd_2sGstx4YsNA_d6JT-87dAxtXVpStpPaHzJw74';
	const callback = 'x';
	const projectUrl = `https://spreadsheets.google.com/feeds/list/${sheetKey}/1/public/values?alt=json-in-script&callback=${callback}`;
	const bioUrl = `https://spreadsheets.google.com/feeds/list/${sheetKey}/2/public/values?alt=json-in-script&callback=${callback}`;
	fetchProjects(projectUrl);
	fetchBio(bioUrl);
	updateFooterYear();
}