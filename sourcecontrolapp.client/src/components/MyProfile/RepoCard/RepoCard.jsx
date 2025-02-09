import classes from '../MyProfile.module.css'

export default function RepoCard() {

    return (

        <li className={`${classes.profileItem}`}>
            <article className={`${classes.profileItemArticle}`}>
                <div className={`${classes.profileItemArticleTop}`}>
                    <h3>Album Repo</h3>
                    <span id={`${classes.visSpanContainer}`}>
                        <span id={`${classes.visSpan}`}>Public</span>
                    </span>
                </div>
                <p>For my Final ReactJS exam</p>
                <p>Language: JavaScript </p>
            </article>
        </li>
        
    )
}