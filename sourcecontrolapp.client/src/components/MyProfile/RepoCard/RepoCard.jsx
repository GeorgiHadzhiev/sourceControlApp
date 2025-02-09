/* eslint-disable react/prop-types */
import classes from '../MyProfile.module.css'

export default function RepoCard({repo}) {

    return (

        <li className={`${classes.profileItem}`}>
            <article className={`${classes.profileItemArticle}`}>
                <div className={`${classes.profileItemArticleTop}`}>
                    <h3>{repo.RepoName}</h3>
                    <span id={`${classes.visSpanContainer}`}>
                        <span id={`${classes.visSpan}`}>{repo.Visibility}</span>
                    </span>
                </div>
                <p>{repo.Description}</p>
                <p>To be Added</p>
            </article>
        </li>
        
    )
}