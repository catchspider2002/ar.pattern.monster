// // Ordinarily, you'd generate this data from markdown files in your
// // repo, or fetch them from a database of some kind. But in order to
// // avoid unnecessary dependencies in the starter template, and in the
// // service of obviousness, we're just going to leave it here.

// // This file is called `_posts.js` rather than `posts.js`, because
// // we don't want to create an `/blog/posts` route — the leading
// // underscore tells Sapper not to do that.

// const posts = [
// 	{
// 		title: 'What is Sapper?',
// 		slug: 'what-is-sapper',
// 		html: `
// 			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

// 			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

// 			<ul>
// 				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
// 				<li>Server-side rendering (SSR) with client-side hydration</li>
// 				<li>Service worker for offline support, and all the PWA bells and whistles</li>
// 				<li>The nicest development experience you've ever had, or your money back</li>
// 			</ul>

// 			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
// 		`
// 	},

// 	{
// 		title: 'How to use Sapper',
// 		slug: 'how-to-use-sapper',
// 		html: `
// 			<h2>Step one</h2>
// 			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

// 			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
// 			cd my-app
// 			npm install # or yarn!
// 			npm run dev
// 			</code></pre>

// 			<h2>Step two</h2>
// 			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

// 			<h2>Step three</h2>
// 			<p>...</p>

// 			<h2>Step four</h2>
// 			<p>Resist overdone joke formats.</p>
// 		`
// 	},

// 	{
// 		title: 'Why the name?',
// 		slug: 'why-the-name',
// 		html: `
// 			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

// 			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
// 		`
// 	},

// 	{
// 		title: 'How is Sapper different from Next.js?',
// 		slug: 'how-is-sapper-different-from-next',
// 		html: `
// 			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

// 			<ul>
// 				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
// 				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
// 				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
// 				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
// 			</ul>
// 		`
// 	},

// 	{
// 		title: 'How can I get involved?',
// 		slug: 'how-can-i-get-involved',
// 		html: `
// 			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
// 		`
// 	}
// ];

// posts.forEach(post => {
// 	post.html = post.html.replace(/^\t{3}/gm, '');
// });

const pattern1 = {
	title: "Inverted triangles",
	slug: "inverted-triangles",
	colors: 2,
	maxStroke: 7,
	maxScale: 16,
	width: 40,
	height: 40,
	viewBoxWidth: 40,
	viewBoxHeight: 40,
	path:
	  "<path d='M-7.5 33.505h15L0 46.495zM-7.5-6.495h15L0 6.495zM7.5 26.495h-15L0 13.505zM27.5 6.495h-15L20-6.495zM12.5 13.505h15L20 26.495zM27.5 46.495h-15l7.5-12.99zM32.5 33.505h15L40 46.495zM32.5-6.495h15L40 6.495zM47.5 26.495h-15l7.5-12.99z'/>"
  };

const pattern2 = {
  title: "Chevron",
  slug: "chevron",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 10.583,
  viewBoxHeight: 10.583,
  path:
    "<path d='M0 13.276l5.292-5.292 5.291 5.292'/><path d='M-2.646 10.63l7.938-7.937 7.937 7.937'/><path d='M-2.646 5.338l7.938-7.937 7.937 7.937'/>"
};

const pattern3 = {
  title: "Honeycomb",
  slug: "honeycomb",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 56,
  height: 100,
  viewBoxWidth: 56,
  viewBoxHeight: 100,
  path: "<path d='M28 26L0 10v-34l28-16 28 16v34L28 26v34M28 126L0 110V76l28-16 28 16v34l-28 16v34'/>"
};

const pattern4 = {
  title: "Vertical Chevron",
  slug: "vertical-chevron",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 10.583,
  viewBoxHeight: 10.583,
  path:
    "<path d='M-2.693 0L2.6 5.292l-5.292 5.291'/><path d='M-.047-2.646l7.938 7.938-7.938 7.937'/><path d='M5.245-2.646l7.937 7.938-7.937 7.937'/>"
};

const pattern5 = {
  title: "Horizontal Lines",
  slug: "horizontal-lines",
  colors: 2,
  maxStroke: 5,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 10.583,
  viewBoxHeight: 10.583,
  path:
    "<path d='M-1.323 2.117h13.23M-1.323 4.763h13.23M-1.323 7.408h13.23M-1.323 10.054h13.23M-1.323-.53h13.23'/>"
};

const pattern6 = {
  title: "Vertical Lines",
  slug: "vertical-lines",
  colors: 2,
  maxStroke: 5,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 10.583,
  viewBoxHeight: 10.583,
  path:
    "<path d='M6.88-1.852v13.23M4.233-1.852v13.23M1.587-1.852v13.23M-1.058-1.852v13.23M9.525-1.852v13.23'/>"
};

const pattern7 = {
  title: "Square Lines",
  slug: "square-lines",
  colors: 2,
  maxStroke: 4,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 10.583,
  viewBoxHeight: 10.583,
  path:
    "<path d='M-1.323-.53h13.23zm0 2.647h13.23zm0 2.646h13.23zm0 2.645h13.23zm0 2.646h13.23zm.265-11.906v13.23zm2.646 0v13.23zm2.645 0v13.23zm2.646 0v13.23zm2.646 0v13.23z'/>"
};

const pattern8 = {
  title: "Diagonal Lines",
  slug: "diagonal-lines",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 10.583,
  viewBoxHeight: 10.583,
  path:
    "<path d='M5.292 13.23l-7.938-7.938 7.938-7.938m5.291 15.875L2.646 5.292l7.937-7.938m2.646 13.23L7.938 5.291 13.229 0M5.292-2.646l7.937 7.938-7.937 7.937M0-2.646l7.938 7.938L0 13.229M-2.646 0l5.292 5.292-5.292 5.291'/>"
};

const pattern9 = {
  title: "Herringbone",
  slug: "herringbone",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 10.583,
  viewBoxHeight: 10.583,
  path:
    "<path d='M13.182 5.245l-7.937 7.937-7.938-7.937M13.182-.047L5.245 7.891-2.693-.047m13.23-2.646L5.245 2.6-.047-2.693m5.292 0l7.937 7.938-7.937 7.937M-.047-2.693l7.938 7.938-7.938 7.937M-2.693-.047L2.6 5.245l-5.292 5.292'/>"
};

const pattern10 = {
  title: "Brick Wall",
  slug: "brick-wall",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 40,
  height: 40,
  viewBoxWidth: 21.819,
  viewBoxHeight: 21.819,
  path:
    "M-5.455 5.455h21.819v10.909H-5.455zM16.364 5.455h21.819v10.909H16.364zM-16.364-5.455H5.455V5.454h-21.819zM5.455-5.455h21.819V5.454H5.455zM-16.364 16.364H5.455v10.909h-21.819zM5.455 16.364h21.819v10.909H5.455z'"
};

const pattern11 = {
  title: "Funny design",
  slug: "funny-design",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 68,
  height: 68,
  viewBoxWidth: 37.092,
  viewBoxHeight: 37.092,
  path:
    "<path d='M37.091 30.546l-12-12 12-12 12 12zm0 4.364L20.727 18.546 37.091 2.182l16.364 16.364zM18.546 12l-12-12 12-12 12 12zm0 4.364L2.182 0l16.364-16.364L34.91 0zm0 32.728l-12-12 12-12 12 12zm0 4.364L2.182 37.092l16.364-16.364L34.91 37.092zM0 30.546l-12-12 12-12 12 12zm0 4.363l-16.364-16.363L0 2.182l16.364 16.364z'/>"
};

const pattern12 = {
  title: "Jigsaw",
  slug: "jigsaw",
  colors: 2,
  maxStroke: 7,
  maxScale: 2,
  width: 192,
  height: 192,
  viewBoxWidth: 192,
  viewBoxHeight: 192,
  path:
    "M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z"
};

const pattern13 = {
  title: "Hexagons",
  slug: "hexagons",
  colors: 2,
  maxStroke: 7,
  maxScale: 16,
  width: 28,
  height: 49,
  viewBoxWidth: 28,
  viewBoxHeight: 49,
  path:
    "M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z"
};

const patterns = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6, pattern7, pattern8, pattern9, pattern10, pattern11, pattern12, pattern13];

export default patterns;
