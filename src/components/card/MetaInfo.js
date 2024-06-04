import dayjs from "dayjs";
import advanceFormat from "dayjs/plugin/advancedFormat";

import classes from "./MetaInfo.module.css";

function MetaInfo({ metaInfo }) {
	dayjs.extend(advanceFormat);
	const { author, publishedAt, readTime } = metaInfo;
	const authorName = `${author.firstName} ${author.lastName}`;
	const publishedDate = dayjs(publishedAt).format("MMM Do YYYY");

	return (
		<div className={classes.container}>
			 {/* profile section*/}
			<div className={classes.profileContainer}>
				<a href="#top">
					<div className={classes.profilePicture}>{author.profilePicture}</div>
				</a>
				<div className={classes.authorInfo}>
					<div>{authorName}</div>
					<a href="#top">
						<div>@{author.username}</div>
					</a>
				</div>
			</div>
			 {/*time section*/}
			<div className={classes.timeContainer}>
				<time>{publishedDate}</time>
				<time>{readTime} min read</time>
			</div>
		</div>
	);
}

export default MetaInfo;
