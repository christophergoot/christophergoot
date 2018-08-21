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
	headlineSpace.innerHTML = `<span class='headline'>${headline}</span>`;
	bioArr.forEach(p => bioSpace.innerHTML += `<p>${p}</p>`);
}

function generateTechIcons(strList) {
	let markup = '';
	const fillColor = 'rgb(217, 219, 135)';
	strList.split(',').forEach(str => {
		switch(str.trim()) {
			case 'JavaScript':
				markup +=
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
						<path fill="${fillColor}" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
					</svg>
				</div>`;
				break;
			case 'HTML':
				markup += 
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
						<path fill="${fillColor}" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
					</svg>
				</div>`;
				break;
			case 'Node':
				markup +=
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
						<path fill="${fillColor}" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
					</svg>
				</div>`;
				break;
			case 'AWS S3':
				markup += 
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
						<path fill="${fillColor}" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345v-22.876l-16.297-6.503zm34.276 0l-15.073 5.739v21.575l15.073-6.121v-21.193zM73.206 15.035l-11.476 4.896 10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224l-13.466 5.738v21.652l13.466-6.121v-21.269zM19.306 46.047l-11.399 4.897 10.558 4.514 12.241-4.514-11.4-4.897zm-17.138 6.121l-.382 22.034 16.679 7.345v-22.876l-16.297-6.503zm34.275 0l-15.071 5.738v21.574l15.071-6.12v-21.192zM56.03 45.231l-11.4 4.897 10.558 4.514 12.241-4.514-11.399-4.897zm-17.137 6.121l-.383 22.035 16.679 7.345v-22.877l-16.296-6.503zm34.275 0l-15.072 5.738v21.576l15.072-6.121v-21.193zM109.076 15.035l-11.399 4.896 10.559 4.515 12.241-4.515-11.401-4.896zm-17.137 6.121l-.382 22.034 16.679 7.344v-22.876l-16.297-6.502zm34.275 0l-15.071 5.738v21.575l15.071-6.12v-21.193z"></path>
					</svg>
				</div>`;
				break;
			case 'mongoDB':
				markup += 
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
						<path fill-rule="evenodd" clip-rule="evenodd" fill="${fillColor}" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618-1.968 2.588-3.935 5.176-5.901 7.763-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383 2.427-2.917 4.515-6.101 6.191-9.516 1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"></path>
					</svg>					
				</div>`;
				break;
			case 'CSS':
				markup += 
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
					<path fill="${fillColor}" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
					</svg>
				</div>`;
				break;
				case 'JQuery':
				markup +=
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
						<path fill="${fillColor}" d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"></path>
					</svg>
				</div>`;
				break;
				case 'React':
				markup +=
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
						<path fill="${fillColor}" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
					</svg>
				</div>`;
				break;
				case 'JSON Web Tokens':
				markup +=
				`<div title='${str.trim()}' class='tech-stack-icon'>
					<svg viewBox="0 0 128 128">
					<path d="M57.5,26.9 L57.5,2.84217094e-14 L42.5,2.84217094e-14 L42.5,26.9 L50,37.2 L57.5,26.9 Z" fill="${fillColor}"></path>
					<path d="M42.5,73.1 L42.5,100 L57.5,100 L57.5,73.1 L50,62.8 L42.5,73.1 Z" fill="${fillColor}"></path>
					<path d="M57.5,73.1 L73.3,94.9 L85.5,86 L69.6,64.3 L57.5,60.3 L57.5,73.1 Z" fill="${fillColor}"></path>
					<path d="M42.5,26.9 L26.7,5.1 L14.5,14 L30.4,35.7 L42.5,39.7 L42.5,26.9 Z" fill="${fillColor}"></path>
					<path d="M30.4,35.7 L4.8,27.4 L0.1,41.7 L25.7,50 L37.9,46.1 L30.4,35.7 Z" fill="${fillColor}"></path>
					<path d="M62.1,53.9 L69.6,64.3 L95.2,72.6 L99.9,58.3 L74.3,50 L62.1,53.9 Z" fill="${fillColor}"></path>
					<path d="M74.3,50 L99.9,41.7 L95.2,27.4 L69.6,35.7 L62.1,46.1 L74.3,50 Z" fill="${fillColor}"></path>
					<path d="M25.7,50 L0.1,58.3 L4.8,72.6 L30.4,64.3 L37.9,53.9 L25.7,50 Z" fill="${fillColor}"></path>
					<path d="M30.4,64.3 L14.5,86 L26.7,94.9 L42.5,73.1 L42.5,60.3 L30.4,64.3 Z" fill="${fillColor}"></path>
					<path d="M69.6,35.7 L85.5,14 L73.3,5.1 L57.5,26.9 L57.5,39.7 L69.6,35.7 Z" fill="${fillColor}"></path>
				</svg>
				</div>`;
				break;

				default:
				markup += 
					`<div title='${str.trim()}' class='tech-stack-icon'>
						${str.trim()}
					</div>`;
		}
	});
	return '<p class="tech-stack">'+markup+'</p>';
}

function generateUseCases(strList) {
	if (strList === '') return '';
	let useCases = '';
	strList.split('%').forEach(el => useCases += `<li>${el.trim()}</li>`);
	return `<ul class='use-cases'>${useCases}</ul>`;
}

function toggleStory(event) {
	event.preventDefault();
	// const storyBox = event.target.parentElement.childNodes[1];
	const storyWrapper = event.target.parentElement;
	// storyBox.classList.toggle('open');
	storyWrapper.classList.toggle('open');
	storyWrapper.childNodes[1].classList.toggle('open');
}

function loadProjects(projects) {
	const projectSpace = document.getElementById('projects');
	projects.forEach((proj, i) => {
		const container = document.getElementById(`trigger-${i}`);
		const cover = document.getElementById(`cover-${i}`);
		container.insertAdjacentHTML('afterbegin', `
			<h2 style='font-family:${proj.titleFont}'>${proj.title}</h2>		
		`);
		cover.style = `background:url(http://christophergoot.com/${proj.image}) no-repeat center center`;
		cover.innerHTML = `
			<div id='project-text-${i}' class='project-text'>
				<h3>${proj.subtitle}</h4>
				<div class='details'>
					<p>${proj.description}</p>
					${generateTechIcons(proj.technology)}
				</div>	
			</div>
		`;
		container.insertAdjacentHTML('beforeend', `
			<div 
			onClick='toggleStory(event)'
			class='story-wrapper'>
			<div class='story box'>
				<p>${proj.story}</p>
				<p>${proj.market}</p>
				<p>${generateUseCases(proj.useCases)}</p>
				<p>${proj.lessons}</p>
			</div>
			<div class='story tab'>
				The Story
			</div>
			<a href=${proj.liveapp} target='_blank'>LiveApp</a>
			<a href=${proj.repo} target='_blank'>Repo</a>
			
		`);


		// document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
		// <script>
		// 	// build scene
		// 	var coverElem${i} = document.getElementById("cover-${i}");
		// 	var detailElem${i} = document.getElementById("project-text-${i}");
		// 	var scene = new ScrollMagic.Scene({triggerElement: "#trigger-${i}", duration: 600})
		// 					.on("enter", function () {
		// 						// trigger animation by changing inline style.
		// 						coverElem${i}.classList.toggle('cover-scroll');
		// 						detailElem${i}.classList.toggle('project-text-scroll');
		// 						coverElem${i}.style.border = '3px solid green';
		// 					})
		// 					.on("leave", function () {
		// 						// reset style
		// 						coverElem${i}.classList.toggle('cover-scroll');
		// 						coverElem${i}.style.border = "";
		// 					})
		// 					.addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
		// 					.addTo(controller);
		// </script>			
		// `);
	});
	const projectEls = document.getElementsByClassName('project');
	for (let project in projectEls) {
		var myScene = new ScrollMagic.Scene({triggerElement: this, duration: 600})
			// .on("enter", function () {
			// 	// trigger animation by changing inline style.
			// 	coverElem${i}.classList.toggle('cover-scroll');
			// 	detailElem${i}.classList.toggle('project-text-scroll');
			// 	coverElem${i}.style.border = '3px solid green';
			// })
			// .on("leave", function () {
			// 	// reset style
			// 	coverElem${i}.classList.toggle('cover-scroll');
			// 	coverElem${i}.style.border = "";
			// })
			.setClassToggle(this, 'project-scroll')
			.addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
			.addTo(controller);	
	};


	
}

function fetchBio(url) {
	return fetch(url)
		.then(res => res.text())
		.then(text => {
			const string = text.split('x(')[1].split(')').slice(0,-1).join('');
			return JSON.parse(string)
		})
		.then(json => {
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
			return JSON.parse(string);
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
				titleFont: proj.gsx$titlefont.$t,
				story: proj.gsx$story.$t,
				market: proj.gsx$market.$t,
				lessons: proj.gsx$lessons.$t,
				useCases: proj.gsx$usecases.$t,

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