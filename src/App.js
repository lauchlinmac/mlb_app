import React from 'react';
import './App.css';

import ScoreList from './components/ScoreList';

function App() {
  return (
   <div className="App">
      <h2>React JSON</h2>
<ScoreList />
	
    </div>
  );
}

export default App;

/*import "./styles.css";
import { AiOutlineCode, AiOutlineSmile } from "react-icons/ai";
import { FaMagic } from "react-icons/fa";
import Grid from "./components/grid/Grid";
import Card from "./components/card/Card";

export default function App() {
	const dummyData = {
		headline: "Sed ut perspiciatis unde omnis iste natus error sit voluptatems",
		text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
		imageSrc: "images/cardImage.jpg",
		btn: "btn",
		contentUrl: "https://recodebrain.com/",
		metaInfo: {
			author: {
				firstName: "John",
				lastName: "Doe",
				username: "johndoe123",
				profilePicture: <AiOutlineSmile size="40" />,
			},
			publishedAt: "2023-02-01T08:34:05.360Z",
			readTime: 6,
		},
	};

	return (
		<div className="App">
			<div className="Heading">
				<h1>Create reusable card</h1>
				<h2>
					Feel free to edit <AiOutlineCode size="20" /> and see the magic happen{" "}
					<FaMagic size="20" style={{ verticalAlign: "center" }} />
				</h2>
			</div>
      <Grid>
      <Card content={dummyData} />
		<Card content={dummyData} />
		<Card content={dummyData} /></Grid>;
		</div>
	);
}
*/