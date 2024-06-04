import classes from "./Card.module.css";
import MetaInfo from "./MetaInfo";

function Card({ content }) {
	const { headline, text, imageSrc, metaInfo, contentUrl } = content;

	return (
		<article className={classes.cardContainer}>
			<a href={contentUrl} target="_blank" rel="noreferrer" className={classes.imageWrapper}>
				<img className={classes.image} alt="thumbnail" src={imageSrc} />
			</a>
			<div className={classes.heading}>
				<a href={contentUrl}>{headline}</a>
			</div>
			<div className={classes.text}>
				<p>{text}</p>
			</div>
			<>{<MetaInfo metaInfo={metaInfo} />}</>
		</article>
	);
}

export default Card;
